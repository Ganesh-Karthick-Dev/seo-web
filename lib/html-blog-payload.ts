const HTML_BLOG_FIELDS = [
    "title",
    "slug",
    "excerpt",
    "date",
    "readTime",
    "category",
    "image",
    "authorName",
    "authorRole",
    "authorAvatar",
    "htmlContent",
    "cssContent",
] as const;

type HtmlBlogField = (typeof HTML_BLOG_FIELDS)[number];

export type HtmlBlogPayload = Record<HtmlBlogField, string>;
export type HtmlBlogCreateData = {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    authorName: string;
    authorRole: string;
    authorAvatar: string;
    htmlContent: string;
    cssContent: string;
    metaTitle: string | null;
    metaDescription: string | null;
    canonicalUrl: string | null;
};

const REQUIRED_CREATE_FIELDS: HtmlBlogField[] = [
    "title",
    "slug",
    "excerpt",
    "date",
    "readTime",
    "category",
    "image",
    "authorName",
    "authorRole",
    "authorAvatar",
    "htmlContent",
];

const OPTIONAL_SEO_FIELDS = ["metaTitle", "metaDescription", "canonicalUrl"] as const;
type OptionalSeoField = (typeof OPTIONAL_SEO_FIELDS)[number];

function toRecord(input: unknown): Record<string, unknown> {
    return typeof input === "object" && input !== null
        ? (input as Record<string, unknown>)
        : {};
}

function normalizeString(field: HtmlBlogField | OptionalSeoField, value: unknown): string | undefined {
    if (typeof value !== "string") {
        return undefined;
    }

    if (field === "htmlContent" || field === "cssContent") {
        return value;
    }

    return value.trim();
}

function normalizeOptionalSeoValue(value: unknown): string | null {
    if (typeof value !== "string") {
        return null;
    }

    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}

export function buildHtmlBlogCreateData(input: unknown): HtmlBlogCreateData {
    const body = toRecord(input);

    return {
        title: normalizeString("title", body.title) ?? "",
        slug: normalizeString("slug", body.slug) ?? "",
        excerpt: normalizeString("excerpt", body.excerpt) ?? "",
        date: normalizeString("date", body.date) ?? "",
        readTime: normalizeString("readTime", body.readTime) ?? "",
        category: normalizeString("category", body.category) ?? "",
        image: normalizeString("image", body.image) ?? "",
        authorName: normalizeString("authorName", body.authorName) ?? "",
        authorRole: normalizeString("authorRole", body.authorRole) ?? "",
        authorAvatar: normalizeString("authorAvatar", body.authorAvatar) ?? "",
        htmlContent: normalizeString("htmlContent", body.htmlContent) ?? "",
        cssContent: normalizeString("cssContent", body.cssContent) ?? "",
        metaTitle: normalizeOptionalSeoValue(body.metaTitle),
        metaDescription: normalizeOptionalSeoValue(body.metaDescription),
        canonicalUrl: normalizeOptionalSeoValue(body.canonicalUrl),
    };
}

export function buildHtmlBlogUpdateData(input: unknown): Partial<HtmlBlogCreateData> {
    const body = toRecord(input);
    const data: Partial<HtmlBlogCreateData> = {};

    for (const field of HTML_BLOG_FIELDS) {
        const value = normalizeString(field, body[field]);
        if (value !== undefined) {
            data[field] = value;
        }
    }

    for (const field of OPTIONAL_SEO_FIELDS) {
        if (field in body) {
            data[field] = normalizeOptionalSeoValue(body[field]);
        }
    }

    return data;
}

export function getMissingHtmlBlogFields(data: HtmlBlogCreateData): HtmlBlogField[] {
    return REQUIRED_CREATE_FIELDS.filter((field) => {
        const value = data[field];
        return typeof value !== "string" || value.trim().length === 0;
    });
}
