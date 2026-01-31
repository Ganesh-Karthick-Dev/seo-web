# Home Page Performance Analysis (Low-End Devices)

This document analyzes the home page section-by-section for causes of lag on low-end devices (weak CPU/GPU, limited memory, mobile).

---

## Summary: Main Culprits

| Area | Severity | Cause |
|------|----------|--------|
| Hero particle canvas | **Critical** | O(n²) collision detection, per-frame React setState, hundreds of particles |
| Lenis smooth scroll | **High** | Extra RAF + scroll interpolation on every frame |
| Testimonial section | **High** | Word-by-word Motion animations + infinite ticker RAF |
| CTA section | **High** | Cursor-follow requestAnimationFrame loop always running |
| Backdrop blur | **High** | `backdrop-blur-md` / `backdrop-blur-xl` on many cards (expensive on GPU) |
| GSAP ScrollTrigger | **Medium** | Many instances; recalculations on scroll/resize |
| ServicesStackSection images | **Medium** | 8 external images, no lazy loading, hover scale on all |
| WhyChooseSection | **Medium** | 3D transforms, parallax scrub, broken image path |

---

## 1. Page Shell (`app/page.tsx`)

- **Client-only**: Entire page is `"use client"` — no static pre-render benefit.
- **GSAP + ScrollTrigger**: Loaded and registered once; multiple `ScrollTrigger.refresh()` (100ms timeout + `window` load).
- **Global background animation**: GSAP animates `backgroundColor` of a fixed div based on scroll (toggleActions play/reverse) — runs on every scroll through the How We Work section.

**Low-end impact**: Moderate. ScrollTrigger refresh and scroll-linked color changes add work during scroll.

---

## 2. Layout (`app/layout.tsx`)

- **Fonts**: Outfit (100–900) and Bebas Neue — multiple weights increase font payload.
- **LenisProvider**: Wraps entire app; see “Lenis” below.
- **FloatingHeader**: Scroll listener (passive), `backdrop-blur-lg`, Motion for nav labels.
- **Footer**: GSAP ScrollTrigger for background text and content fade-in.
- **GTM**: Third-party script (afterInteractive).

**Low-end impact**: Lenis and header blur are the main costs here.

---

## 3. Hero — ParticleEffectHero (`components/ui/particle-effect-for-hero.tsx`)

**Critical for low-end.**

- **Canvas animation loop** (runs every frame):
  - **Particle count**: `PARTICLE_DENSITY = 0.00015` × viewport area → e.g. 1920×1080 ≈ **311 foreground particles** plus background “stars” (`BG_PARTICLE_DENSITY = 0.00005` → ~104). Total ~400+ entities.
  - **O(n²) collision detection** (lines 203–259): every frame, every pair of foreground particles is checked and resolved (velocity/position updates). With 311 particles that’s ~48k pair checks per frame.
  - **Per-frame work**: Radial gradient creation and fill, background particle twinkle (sin per particle), mouse repulsion, spring forces, damping, draw calls for every particle.
- **React setState in animation loop**: `setDebugInfo(..., fps: Math.round(1000/delta))` is called **every frame** (line 117). That triggers a React re-render ~60 times per second.
- **Debug overlay**: FPS and entity count are always rendered (useful for dev, unnecessary in production).
- **No reduced-motion or low-power path**: No `prefers-reduced-motion` or device/memory check; full physics run on all devices.

**Low-end impact**: Very high. Heavy CPU (physics + collision) plus 60 re-renders/sec makes this the #1 lag source on weak devices.

---

## 4. ChallengesSection (`components/sections/ChallengesSection.tsx`)

- **GSAP**: Title animation + timeline for 4 grid items (from top/right/bottom/left).
- **Visuals**:
  - **WaveVisual**: SVG with `filter="url(#glow)"` (feGaussianBlur), `blur-3xl` on a radial gradient.
  - **ChartVisual**: 10 bar divs, each with `animate-pulse` and inline height — 10 continuously animating elements.
  - **NetworkVisual**: 8 lines with `animate-ping` on a central dot.
- **Cards**: 4 large cards with `backdrop-blur-md` and multiple gradient overlays.

**Low-end impact**: High. Backdrop blur on 4 cards + SVG filters + multiple CSS animations (pulse, ping) stress GPU and main thread.

---

## 5. ServicesStackSection (`components/sections/ServicesStackSection.tsx`)

- **ScrollTrigger**: One scrub trigger per card (8 cards); all created on mount.
- **Images**: 8 Unsplash images (external), each with `fill` and `object-cover`; hover `scale-110` and opacity transition. No `priority`/`loading="lazy"` or `sizes` tuned for the stacking layout — all load eagerly.
- **Cards**: Every card uses `backdrop-blur-xl` — the heaviest blur level, 8 times.
- **Layout**: Sticky stacking with scale/transform per card; scroll causes continuous recalculations.

**Low-end impact**: High. Eight `backdrop-blur-xl` layers are very expensive on integrated GPUs; 8 images and hover transforms add more work.

---

## 6. HowWeWorkSection (`components/sections/HowWeWorkSection.tsx`)

- **GSAP**: Many ScrollTrigger-driven tweens:
  - Title h2 and span (color).
  - For each of 4 cards: background, border, `.card-title`, `.card-desc`, `.icon-box`, `.icon-svg` (color/background/border).
  - Title and steps stagger, CTA, CTA button and text color.
  - All use `toggleActions: "play reverse play reverse"` — animations re-run when scrolling back, so constant tween updates.
- **Cards**: `backdrop-blur-sm` on 4 cards; radial gradient backgrounds.

**Low-end impact**: Medium–high. Many ScrollTrigger instances and reverse play on scroll back keep GSAP and the DOM busy; blur adds GPU cost.

---

## 7. BlogSection (`components/sections/BlogSection.tsx`)

- **GSAP**: Title + cards stagger (3 cards).
- **PointerHighlight**: Used 3 times (one per card). Each instance:
  - ResizeObserver on the highlight container.
  - Motion animations (rectangle size, pointer position) with `whileInView`.
- **Images**: 3 local blog images; reasonable.
- **Cards**: `backdrop-blur-sm` on 3 cards.

**Low-end impact**: Medium. Three PointerHighlight components with ResizeObserver + Motion and blur on cards.

---

## 8. WhyChooseSection (`components/sections/WhyChooseSection.tsx`)

- **Image**: **Broken path** — `src="/C:/Users/ganes/.gemini/..."` (local Windows path); will not work in production and can cause 404/loading issues.
- **GSAP**: Title clipPath, description, image overlay (scaleY), image scale, 4 cards with stagger and `rotateY`, 4 icon animations (scale/rotate), plus floating parallax on image (scrub: 1) for the full section height.
- **3D**: `perspective: 1000px` and `transformStyle: preserve-3d` on the cards container and cards — 3D compositing can be costly on weak GPUs.
- **Background**: 50px grid pattern (repeated gradient) + radial gradient.
- **Cards**: `backdrop-blur-sm` on 4 feature cards.

**Low-end impact**: Medium–high. Many GSAP tweens, 3D transforms, long scrub, and blur; broken image can also cause layout/network noise.

---

## 9. Testimonial (`components/ui/design-testimonial.tsx`)

**High impact on low-end.**

- **Word-by-word animation**: Quote is split by spaces; each word is a `<motion.span>` with:
  - `initial`: opacity 0, y 20, rotateX 90.
  - `animate`: opacity 1, y 0, rotateX 0 with **stagger delay `i * 0.05`** (e.g. 50 words → 2.5s of staggered animations).
  - `exit`: opacity 0, y -10 with delay `i * 0.02`.
  - So every quote change triggers dozens of layout/paint steps and Motion work.
- **Giant index number**: Huge “01”/“02” text with `useSpring` + `useTransform` from mouse position — parallax on every mouse move.
- **Infinite ticker**: Bottom strip has `animate={{ x: [0, -1000] }}` with `repeat: Infinity`, duration 20s, ease linear — **never stops**, so continuous RAF from Motion.
- **AnimatePresence**: Used for index number, company badge, quote block, author block — multiple exit/enter animations per slide change.
- **Auto-advance**: `setInterval(goNext, 12000)` — periodic re-trigger of all quote animations.

**Low-end impact**: High. Per-word 3D and stagger, plus infinite ticker and mouse-driven spring, keep the main thread and compositor busy.

---

## 10. CTASection (`components/sections/CTASection.tsx`)

**High impact on low-end.**

- **Cursor-follow loop**: A `requestAnimationFrame` loop runs for the entire time the section is mounted (lines 155–181). Each frame it:
  - Lerps current position toward target (mouse) and calls `gsap.set(buttonWrapper, { x, y })`.
  - So even when the user is not moving the mouse, rAF keeps running.
- **GSAP**: Section clipPath reveal, background parallax (scrub 0), timeline for headline, description, button.
- **Background**: Raw `<img>` for CTA background (no Next/Image optimization); `willChange: "transform"` on wrapper.

**Low-end impact**: High. Permanent rAF for cursor-follow plus scroll-linked parallax and GSAP updates.

---

## 11. Lenis (`components/providers/lenis-provider.tsx`)

- **Smooth scrolling**: Lenis runs its own scroll interpolation. It’s driven by `gsap.ticker.add()` so Lenis.raf runs in sync with GSAP every frame.
- **ScrollTrigger**: Document is used as scroller proxy (scrollTop, getBoundingClientRect); `lenis.on("scroll", ScrollTrigger.update)` so every Lenis frame triggers a full ScrollTrigger update.
- **Result**: Every frame, the page does: Lenis interpolation → ScrollTrigger.update → all ScrollTrigger instances (dozens across sections) recalculate. On low-end devices this amplifies cost of every other scroll-linked animation.

**Low-end impact**: High. Doubles down with GSAP ticker and global ScrollTrigger updates on every frame.

---

## 12. FloatingHeader (`components/ui/floating-header.tsx`)

- **Scroll listener**: `window.addEventListener('scroll', handleScroll, { passive: true })` — updates visibility state; passive is good.
- **Header**: `backdrop-blur-lg` on the fixed bar; Motion for dropdown label width/opacity (spring).
- **Logo**: Next/Image with reasonable sizes.

**Low-end impact**: Medium. Backdrop blur and Motion are the main cost; scroll listener is cheap (passive).

---

## 13. Footer (`components/sections/Footer.tsx`)

- **GSAP**: Two ScrollTrigger tweens (background “ZYLEX” text, content fade).
- **Background text**: Very large `text-[20vw]` / `text-[25vw]` with mask — can be heavy to render.
- **Status**: Small `animate-pulse` on green dot.

**Low-end impact**: Low–medium. Limited to two triggers and one pulse; large text + mask can matter on very weak GPUs.

---

## Recommended Fixes (Priority Order)

1. **Hero particle**
   - Remove or throttle `setDebugInfo` in the animation loop (e.g. max once per second, or only in dev).
   - Add `prefers-reduced-motion: reduce` (and optionally device memory) to disable or drastically reduce particles (e.g. no collision, fewer particles, or static gradient).
   - Cap particle count (e.g. max 150 foreground, 50 background) or disable collision on small viewports / low DPR.
   - Hide or remove debug overlay in production.

2. **Testimonial**
   - Replace per-word animation with a single block fade/slide (or animate by sentence/line) to cut DOM and Motion work.
   - Pause or remove the infinite ticker when section is not in view (IntersectionObserver) or when `prefers-reduced-motion: reduce`.
   - Optionally reduce or remove mouse parallax on the big number on touch devices.

3. **CTA**
   - Run the cursor-follow rAF only when the section is in view and optionally when `prefers-reduced-motion` is not set; or replace with a simple CSS hover effect.

4. **Lenis**
   - Disable Lenis (native scroll) when `prefers-reduced-motion: reduce` or when `navigator.deviceMemory` is low (e.g. &lt; 4), or offer a “Reduce motion” toggle that turns off Lenis.

5. **Backdrop blur**
   - Replace `backdrop-blur-xl` / `backdrop-blur-md` with a solid or low-blur fallback on viewports &lt; 1024px or when `prefers-reduced-motion: reduce`; or use a single blurred layer behind the section instead of per-card blur.

6. **WhyChooseSection**
   - Fix image `src` to a proper public path (e.g. under `/public` or CDN).
   - Consider simplifying or disabling 3D card rotation and long scrub parallax on small screens or reduced motion.

7. **ServicesStackSection**
   - Lazy load below-fold images; set `sizes` to match the stacking layout; consider reducing or removing `backdrop-blur-xl` (or one shared blur layer).

8. **General**
   - Lazy register GSAP ScrollTrigger only when sections enter viewport (e.g. IntersectionObserver) if you can; reduce `ScrollTrigger.refresh()` calls to one after load and on resize.
   - Use Next/Image for CTA background and ensure `priority` only on above-the-fold assets.

Implementing the highest-impact items (hero, testimonial, CTA, Lenis, blur, and WhyChoose image) will significantly improve low-end device performance.
