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

function toRecord(input: unknown): Record<string, unknown> {
    return typeof input === "object" && input !== null
        ? (input as Record<string, unknown>)
        : {};
}

function normalizeString(field: HtmlBlogField, value: unknown): string | undefined {
    if (typeof value !== "string") {
        return undefined;
    }

    if (field === "htmlContent" || field === "cssContent") {
        return value;
    }

    return value.trim();
}

export function buildHtmlBlogCreateData(input: unknown): HtmlBlogPayload {
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
    };
}

export function buildHtmlBlogUpdateData(input: unknown): Partial<HtmlBlogPayload> {
    const body = toRecord(input);
    const data: Partial<HtmlBlogPayload> = {};

    for (const field of HTML_BLOG_FIELDS) {
        const value = normalizeString(field, body[field]);
        if (value !== undefined) {
            data[field] = value;
        }
    }

    return data;
}

export function getMissingHtmlBlogFields(data: HtmlBlogPayload): HtmlBlogField[] {
    return REQUIRED_CREATE_FIELDS.filter((field) => {
        const value = data[field];
        return typeof value !== "string" || value.trim().length === 0;
    });
}
