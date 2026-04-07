---
name: zylex-html-blog-theme
description: Match the actual Zylex website styling for raw HTML posts created in admin-html-blog. Use when teammates write or review self-contained HTML and CSS that render inside Shadow DOM and must visually align with Zylex resources/blog pages, cards, spacing, typography, buttons, and section rhythm.
---

# Zylex HTML Blog Theme

## Source Of Truth

Read these files before generating or reviewing any HTML blog article:

- `app/resources/blog/[slug]/page.tsx`
- `app/resources/resources-client.tsx`
- `app/admin-html-blog/page.tsx`
- `components/ui/shadow-container.tsx`
- `components/sections/BlogSection.tsx`
- `components/sections/HowWeWorkSection.tsx`
- `components/ui/button.tsx`
- `app/layout.tsx`
- `app/globals.css`

Use those files as the visual reference. Do not invent a new design language.

## Core Constraint

- Raw HTML blog posts are rendered inside `ShadowContainer`.
- Global Tailwind classes and global website CSS do not style the article body.
- Every article must carry its own namespaced CSS.
- The page shell already provides the blog hero, page background, metadata row, and outer `max-w-7xl` wrapper.
- The custom article begins below the hero. Do not recreate the hero, navbar, breadcrumbs, page title banner, footer, or any full-page background effect.

## Zylex Visual Rules

### Typography

- Use `Outfit` style typography for everything in the article body.
- Do not use serif headline accents.
- Do not use italic headline fragments.
- Do not use cursive, editorial, luxury, or magazine styling.
- Headings should feel like the Zylex resources/blog pages: bold, tight, white, modern, sans-serif.
- Body copy should feel technical, calm, and easy to scan.

### Color

Blue is the primary brand color for this workflow.

Use this palette:

- Background shell: already handled by page
- Article text: `rgba(255,255,255,0.78)`
- Muted text: `rgba(255,255,255,0.58)`
- Heading text: `#ffffff`
- Card background: `#171717`
- Inner panel background: `#111111`
- Border: `rgba(255,255,255,0.10)`
- Primary blue: `#2563eb`
- Bright blue: `#3b82f6`
- Light blue: `#60a5fa`
- Cyan support accent: `#22d3ee`

Rules:

- Blue is the main accent for badges, links, active borders, CTAs, and emphasis.
- Cyan may be used lightly as a supporting cool accent.
- Do not use orange as a main article accent.
- Do not use purple, pink, amber, or rainbow gradients.
- Use green or red only for true success/error meaning, not decoration.

### Spacing

- Match the generous spacing from resources/blog and Zylex content sections.
- Keep article width around `840px` to `880px`.
- Use `72px` to `96px` vertical spacing between major sections.
- Use `24px` to `32px` gaps inside grids and panels.
- Use `20px` to `24px` padding inside cards.

### Radius And Surfaces

- Major panels: `24px` radius
- Inner metric cards: `20px` radius
- Pills and buttons: `999px` radius
- Surface style should match resources/blog cards:
  - dark neutral fill
  - subtle white border
  - clean, premium, not glass-heavy

### Component Language To Match

- Category pills from `app/resources/blog/[slug]/page.tsx`
- Article and resource cards from `app/resources/resources-client.tsx`
- Large white section headings from `components/sections/HowWeWorkSection.tsx`
- Clean blue action buttons from `components/ui/button.tsx`

## Non-Negotiables

- Wrap the content in exactly one root article: `<article class="zylex-blog">`.
- Namespace every selector under `.zylex-blog`.
- Put all CSS in a top `<style>` tag inside the HTML body you paste into admin-html-blog.
- Use only semantic HTML: `section`, `h2`, `h3`, `p`, `ul`, `ol`, `blockquote`, `figure`, `table`.
- Make the article look native to Zylex even when viewed alone inside Shadow DOM.
- Use blue-first styling throughout.
- Keep the design crisp and restrained.

## Never Do This

- Do not add a second hero.
- Do not add a giant title banner inside the article body.
- Do not use serif accents or italic highlight words.
- Do not use orange as the primary design language.
- Do not import Bootstrap, Tailwind CDN, Google Fonts, external resets, or JS libraries.
- Do not use white cards on dark pages.
- Do not use small cramped text blocks.
- Do not use 4px to 8px corner radii.
- Do not use random AI-blog styling with gradients on every element.
- Do not use emoji bullets or decorative icons unless the content explicitly requires an icon.

## Preferred Article Structure

1. Intro section with one small blue pill, one strong `h2`, and one lead paragraph.
2. One summary or key-takeaway panel.
3. One 2-column grid of insights, risks, comparisons, or recommendations.
4. One supporting section using list, quote, framework, checklist, or table.
5. One closing CTA card linking to `/contact`.

## Copy-Paste Starter

```html
<style>
  .zylex-blog {
    --z-card: #171717;
    --z-card-2: #111111;
    --z-border: rgba(255, 255, 255, 0.10);
    --z-text: rgba(255, 255, 255, 0.78);
    --z-muted: rgba(255, 255, 255, 0.58);
    --z-heading: #ffffff;
    --z-blue: #2563eb;
    --z-blue-bright: #3b82f6;
    --z-blue-light: #60a5fa;
    --z-cyan: #22d3ee;
    max-width: 880px;
    margin: 0 auto;
    color: var(--z-text);
    font-family: var(--font-outfit, "Outfit"), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .zylex-blog *,
  .zylex-blog *::before,
  .zylex-blog *::after {
    box-sizing: border-box;
  }

  .zylex-blog .section {
    padding: 4.5rem 0;
    border-top: 1px solid var(--z-border);
  }

  .zylex-blog .section:first-child {
    padding-top: 0;
    border-top: 0;
  }

  .zylex-blog .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 1rem;
    border-radius: 999px;
    background: var(--z-blue);
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .zylex-blog h2,
  .zylex-blog h3,
  .zylex-blog h4 {
    margin: 0 0 1rem;
    color: var(--z-heading);
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .zylex-blog h2 {
    font-size: clamp(2.5rem, 5vw, 3.75rem);
    line-height: 1.05;
  }

  .zylex-blog h3 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    line-height: 1.15;
  }

  .zylex-blog p,
  .zylex-blog li {
    margin: 0 0 1.125rem;
    font-size: 1.0625rem;
    line-height: 1.78;
    color: var(--z-text);
  }

  .zylex-blog .lead {
    max-width: 52rem;
    font-size: clamp(1.12rem, 2vw, 1.32rem);
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.88);
  }

  .zylex-blog .subdued {
    color: var(--z-muted);
  }

  .zylex-blog a {
    color: var(--z-blue-light);
    text-decoration: none;
  }

  .zylex-blog a:hover {
    color: #93c5fd;
  }

  .zylex-blog .panel {
    padding: 2rem;
    border-radius: 24px;
    border: 1px solid var(--z-border);
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)), var(--z-card-2);
  }

  .zylex-blog .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .zylex-blog .card {
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid var(--z-border);
    background: var(--z-card);
    transition: border-color 220ms ease, transform 220ms ease;
  }

  .zylex-blog .card:hover {
    border-color: rgba(59, 130, 246, 0.45);
    transform: translateY(-2px);
  }

  .zylex-blog .card strong {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--z-heading);
    font-size: 1.2rem;
    letter-spacing: -0.03em;
  }

  .zylex-blog ul {
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
  }

  .zylex-blog li {
    position: relative;
    padding-left: 1.25rem;
  }

  .zylex-blog li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72rem;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 999px;
    background: var(--z-blue-bright);
  }

  .zylex-blog blockquote {
    margin: 0;
    padding: 2rem;
    border-radius: 24px;
    border: 1px solid rgba(59, 130, 246, 0.25);
    background: linear-gradient(180deg, rgba(37,99,235,0.12), rgba(255,255,255,0.02));
    color: rgba(255,255,255,0.90);
  }

  .zylex-blog .cta {
    padding: 2rem;
    border-radius: 28px;
    border: 1px solid rgba(59, 130, 246, 0.25);
    background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(34,211,238,0.12));
  }

  .zylex-blog .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-top: 0.5rem;
    padding: 0.95rem 1.4rem;
    border-radius: 999px;
    background: var(--z-blue);
    color: #ffffff;
    font-weight: 700;
    transition: transform 220ms ease, background-color 220ms ease, box-shadow 220ms ease;
  }

  .zylex-blog .cta-button:hover {
    background: var(--z-blue-bright);
    transform: translateY(-1px);
    box-shadow: 0 18px 40px -24px rgba(59, 130, 246, 0.7);
  }

  .zylex-blog img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 24px;
  }

  @media (max-width: 860px) {
    .zylex-blog {
      max-width: 100%;
    }

    .zylex-blog .section {
      padding: 3.5rem 0;
    }

    .zylex-blog .grid {
      grid-template-columns: 1fr;
    }

    .zylex-blog .panel,
    .zylex-blog .cta {
      padding: 1.5rem;
      border-radius: 20px;
    }
  }
</style>

<article class="zylex-blog">
  <section class="section">
    <span class="pill">Technical Insight</span>
    <h2>Open with a direct, modern headline that feels native to the Zylex resources pages.</h2>
    <p class="lead">Start with a confident summary in clean sans-serif type. Keep it sharp, technical, and high-trust. Do not use decorative styling.</p>
  </section>

  <section class="section">
    <div class="panel">
      <h3>Key takeaway</h3>
      <p>Match Zylex with bold white headings, neutral-900 surfaces, subtle borders, large spacing, and blue-first emphasis.</p>
    </div>
  </section>

  <section class="section">
    <div class="grid">
      <div class="card">
        <strong>Clear hierarchy</strong>
        <p>Use one idea per block and keep the layout calm, structured, and easy to scan.</p>
      </div>
      <div class="card">
        <strong>Native styling</strong>
        <p>Use the same card language seen in resources/blog: dark surfaces, rounded corners, white text, blue accents.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <blockquote>
      The goal is not to make the article look stylish in isolation. The goal is to make it look like it already belonged on zylex.io.
    </blockquote>
  </section>

  <section class="section">
    <div class="cta">
      <h3>Need help building the right product system?</h3>
      <p class="subdued">Close with one clear blue CTA that matches the rest of the Zylex interface language.</p>
      <a class="cta-button" href="/contact">Let's Talk</a>
    </div>
  </section>
</article>
```

## Review Checklist

- Check that the article body uses only sans-serif styling.
- Check that there are no italic headline fragments.
- Check that blue is the dominant accent.
- Check that cards feel like `resources-client.tsx` cards.
- Check that section headings feel like Zylex section headings, not editorial blog headings.
- Check that the article begins below the existing hero and does not duplicate it.
- Check that all CSS is namespaced under `.zylex-blog`.
- Check that the layout works on mobile with single-column collapse.
- Check that the content block looks native to the website even without any global CSS.
