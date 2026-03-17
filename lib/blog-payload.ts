import type { Prisma } from "@prisma/client";

const BLOG_FIELDS = [
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
    "painPointTitle",
    "painPointDescription",
    "painPointPoints",
    "solutionTitle",
    "solutionDescription",
    "solutionFeatures",
    "beforeTitle",
    "beforePoints",
    "afterTitle",
    "afterPoints",
    "businessValueTitle",
    "businessValuePoints",
] as const;

const OPTIONAL_SEO_FIELDS = ["metaTitle", "metaDescription", "canonicalUrl"] as const;

type BlogField = (typeof BLOG_FIELDS)[number];

export type StructuredBlogCreateData = {
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
    painPointTitle: string;
    painPointDescription: string;
    painPointPoints: string[];
    solutionTitle: string;
    solutionDescription: string;
    solutionFeatures: Prisma.InputJsonValue;
    beforeTitle: string;
    beforePoints: string[];
    afterTitle: string;
    afterPoints: string[];
    businessValueTitle: string;
    businessValuePoints: Prisma.InputJsonValue;
    metaTitle: string | null;
    metaDescription: string | null;
    canonicalUrl: string | null;
};

const REQUIRED_CREATE_FIELDS: BlogField[] = [
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
    "painPointTitle",
    "painPointDescription",
    "solutionTitle",
    "solutionDescription",
    "beforeTitle",
    "afterTitle",
    "businessValueTitle",
];

function toRecord(input: unknown): Record<string, unknown> {
    return typeof input === "object" && input !== null
        ? (input as Record<string, unknown>)
        : {};
}

function normalizeRequiredString(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

function normalizeOptionalSeoValue(value: unknown): string | null {
    if (typeof value !== "string") {
        return null;
    }

    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}

function normalizeStringArray(value: unknown): string[] {
    if (!Array.isArray(value)) {
        return [];
    }

    return value.filter((item): item is string => typeof item === "string");
}

function normalizeJsonArray(value: unknown): Prisma.InputJsonValue {
    return Array.isArray(value) ? (value as Prisma.InputJsonValue) : ([] as Prisma.InputJsonValue);
}

export function buildStructuredBlogCreateData(input: unknown): StructuredBlogCreateData {
    const body = toRecord(input);

    return {
        title: normalizeRequiredString(body.title),
        slug: normalizeRequiredString(body.slug),
        excerpt: normalizeRequiredString(body.excerpt),
        date: normalizeRequiredString(body.date),
        readTime: normalizeRequiredString(body.readTime),
        category: normalizeRequiredString(body.category),
        image: normalizeRequiredString(body.image),
        authorName: normalizeRequiredString(body.authorName),
        authorRole: normalizeRequiredString(body.authorRole),
        authorAvatar: normalizeRequiredString(body.authorAvatar),
        painPointTitle: normalizeRequiredString(body.painPointTitle),
        painPointDescription: normalizeRequiredString(body.painPointDescription),
        painPointPoints: normalizeStringArray(body.painPointPoints),
        solutionTitle: normalizeRequiredString(body.solutionTitle),
        solutionDescription: normalizeRequiredString(body.solutionDescription),
        solutionFeatures: normalizeJsonArray(body.solutionFeatures),
        beforeTitle: normalizeRequiredString(body.beforeTitle),
        beforePoints: normalizeStringArray(body.beforePoints),
        afterTitle: normalizeRequiredString(body.afterTitle),
        afterPoints: normalizeStringArray(body.afterPoints),
        businessValueTitle: normalizeRequiredString(body.businessValueTitle),
        businessValuePoints: normalizeJsonArray(body.businessValuePoints),
        metaTitle: normalizeOptionalSeoValue(body.metaTitle),
        metaDescription: normalizeOptionalSeoValue(body.metaDescription),
        canonicalUrl: normalizeOptionalSeoValue(body.canonicalUrl),
    };
}

export function buildStructuredBlogUpdateData(input: unknown): Partial<StructuredBlogCreateData> {
    const body = toRecord(input);
    const data: Partial<StructuredBlogCreateData> = {};

    for (const field of BLOG_FIELDS) {
        const value = body[field];

        if (value === undefined) {
            continue;
        }

        if (
            field === "painPointPoints" ||
            field === "beforePoints" ||
            field === "afterPoints"
        ) {
            data[field] = normalizeStringArray(value);
            continue;
        }

        if (field === "solutionFeatures" || field === "businessValuePoints") {
            data[field] = normalizeJsonArray(value);
            continue;
        }

        data[field] = normalizeRequiredString(value);
    }

    for (const field of OPTIONAL_SEO_FIELDS) {
        if (field in body) {
            data[field] = normalizeOptionalSeoValue(body[field]);
        }
    }

    return data;
}

export function getMissingStructuredBlogFields(data: StructuredBlogCreateData): BlogField[] {
    return REQUIRED_CREATE_FIELDS.filter((field) => {
        const value = data[field];
        return typeof value !== "string" || value.trim().length === 0;
    });
}
