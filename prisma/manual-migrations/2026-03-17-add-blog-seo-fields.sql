ALTER TABLE "blog_posts"
    ADD COLUMN IF NOT EXISTS "metaTitle" TEXT,
    ADD COLUMN IF NOT EXISTS "metaDescription" TEXT,
    ADD COLUMN IF NOT EXISTS "canonicalUrl" TEXT;

ALTER TABLE "html_blog_posts"
    ADD COLUMN IF NOT EXISTS "metaTitle" TEXT,
    ADD COLUMN IF NOT EXISTS "metaDescription" TEXT,
    ADD COLUMN IF NOT EXISTS "canonicalUrl" TEXT;
