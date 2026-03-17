-- CreateTable
CREATE TABLE "blog_posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "readTime" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "canonicalUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorRole" TEXT NOT NULL,
    "authorAvatar" TEXT NOT NULL,
    "painPointTitle" TEXT NOT NULL,
    "painPointDescription" TEXT NOT NULL,
    "painPointPoints" TEXT[],
    "solutionTitle" TEXT NOT NULL,
    "solutionDescription" TEXT NOT NULL,
    "solutionFeatures" JSONB NOT NULL,
    "beforeTitle" TEXT NOT NULL,
    "beforePoints" TEXT[],
    "afterTitle" TEXT NOT NULL,
    "afterPoints" TEXT[],
    "businessValueTitle" TEXT NOT NULL,
    "businessValuePoints" JSONB NOT NULL,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estimator_leads" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "aiFeatures" TEXT NOT NULL,
    "payments" TEXT NOT NULL,
    "designReady" TEXT NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "resultState" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estimator_leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "html_blog_posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "readTime" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "canonicalUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorRole" TEXT NOT NULL,
    "authorAvatar" TEXT NOT NULL,
    "htmlContent" TEXT NOT NULL,
    "cssContent" TEXT NOT NULL,

    CONSTRAINT "html_blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "blog_posts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "html_blog_posts_slug_key" ON "html_blog_posts"("slug");
