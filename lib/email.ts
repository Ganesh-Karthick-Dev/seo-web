import nodemailer from "nodemailer";

interface EstimatorSelectionEntry {
    phaseId: string;
    selectedOptions: string[];
    ourCost: number;
    competitorCost: number;
    days: number;
}

interface EstimatorEmailData {
    userEmail: string;
    clientName?: string;
    companyName?: string;
    designation?: string;
    timeline?: string;
    selections: Record<string, EstimatorSelectionEntry>;
    totals: {
        ourCost: number;
        competitorCost: number;
        ourDays: string;
        competitorDays: string;
        savings: number;
        savingsPercent: string;
        isSprintReady?: boolean;
    };
    completedPhases: number;
}

interface EstimatorOptionMeta {
    label: string;
    description: string;
}

interface EstimatorPhaseMeta {
    title: string;
    description: string;
    options: Record<string, EstimatorOptionMeta>;
}

const ESTIMATOR_PHASES: Record<string, EstimatorPhaseMeta> = {
    discovery: {
        title: "Project Discovery",
        description: "Formal requirements and planning that reduce ambiguity before engineering begins.",
        options: {
            frd: {
                label: "FRD (Functional Requirements)",
                description: "Complete functional documentation to prevent scope drift and speed up delivery alignment.",
            },
            brd: {
                label: "BRD (Business Requirements)",
                description: "A clear business requirements layer that keeps the build connected to stakeholder outcomes.",
            },
            prd: {
                label: "PRD (Product Requirements)",
                description: "A product-led specification that sharpens flows, priorities, and delivery sequencing.",
            },
            techSpec: {
                label: "Technical Specification",
                description: "Detailed technical planning that removes ambiguity for architecture and implementation.",
            },
            wireframes: {
                label: "Wireframes / Mockups",
                description: "Visual wireframes that align stakeholders before design and engineering execution.",
            },
        },
    },
    appType: {
        title: "Application Type",
        description: "The core product shape and delivery model chosen for this build.",
        options: {
            b2b_saas: {
                label: "B2B SaaS Platform",
                description: "Multi-tenant workflows and account structures tailored for business users and internal teams.",
            },
            b2c_saas: {
                label: "B2C SaaS Platform",
                description: "Consumer-facing onboarding, engagement, and retention flows built for scale.",
            },
            mobile_app: {
                label: "Mobile Application",
                description: "Mobile-first product delivery designed around native-feeling app experiences.",
            },
            ecommerce: {
                label: "E-Commerce Platform",
                description: "Conversion-focused storefront, checkout, and operational flows for digital commerce.",
            },
            internal_tool: {
                label: "Internal Tool / Dashboard",
                description: "Operational dashboards and workflow automation for internal business teams.",
            },
            ai_agent: {
                label: "AI Agent / Automation",
                description: "Agentic workflows and automation logic built around repetitive high-value tasks.",
            },
        },
    },
    architecture: {
        title: "System Architecture",
        description: "The foundational delivery architecture selected for performance, scale, and maintainability.",
        options: {
            serverless: {
                label: "Serverless Architecture",
                description: "A low-maintenance, highly scalable architecture that avoids traditional infrastructure overhead.",
            },
            microservices: {
                label: "Microservices Architecture",
                description: "Service-oriented architecture designed for modular scaling across product domains.",
            },
            monolithic: {
                label: "Monolithic Architecture",
                description: "A focused single-codebase architecture that is efficient for tightly scoped MVP delivery.",
            },
            api_first: {
                label: "API-First Architecture",
                description: "An API-led foundation that supports multiple client experiences and integration pathways.",
            },
        },
    },
    database: {
        title: "Database & Data",
        description: "The data layer selected to support product logic, performance, and long-term extensibility.",
        options: {
            postgres: {
                label: "PostgreSQL Setup & Schema",
                description: "A relational data model suited for structured product logic and reliable transactional data.",
            },
            mongodb: {
                label: "MongoDB Setup & Schema",
                description: "A document-based data model built for flexible content and high-velocity product iteration.",
            },
            redis: {
                label: "Redis Cache Layer",
                description: "A caching layer that improves response times for frequently accessed application data.",
            },
            multi_db: {
                label: "Multi-DB Architecture",
                description: "A hybrid persistence strategy optimized for mixed workloads and future scale.",
            },
            data_modelling: {
                label: "Data Modelling Consultation",
                description: "Upfront modelling that keeps future growth clean, predictable, and implementation-ready.",
            },
        },
    },
    auth: {
        title: "Authentication & Security",
        description: "Identity, access, and security controls chosen to protect users and product operations.",
        options: {
            oauth_mfa: {
                label: "OAuth + MFA",
                description: "Strong identity management with multi-factor protection for higher-trust product access.",
            },
            sso: {
                label: "SSO Integration",
                description: "Enterprise-ready authentication for centralized user access and account management.",
            },
            jwt: {
                label: "JWT + Refresh Tokens",
                description: "Token-based authentication for efficient session handling across modern applications.",
            },
            rbac: {
                label: "Role-Based Access Control",
                description: "Granular permission controls for internal teams, client roles, and feature visibility.",
            },
        },
    },
    features: {
        title: "Core Features",
        description: "The high-value workflows and product modules selected as part of the MVP scope.",
        options: {
            business_logic: {
                label: "Business Logic & APIs",
                description: "The custom engine of the product, including domain logic, workflows, and core APIs.",
            },
            user_dash: {
                label: "User Dashboard",
                description: "A user-facing application hub for insights, navigation, and workflow execution.",
            },
            admin_panel: {
                label: "Admin Panel",
                description: "Operational tooling for internal teams to manage users, states, and data.",
            },
            notification: {
                label: "Notification System",
                description: "Email, in-app, or event-based notifications that keep users informed in real time.",
            },
            onboarding: {
                label: "User Onboarding Flow",
                description: "A guided setup and activation path that helps new users reach value faster.",
            },
        },
    },
    design: {
        title: "UI / UX Design",
        description: "The user experience layer selected to shape perception, usability, and product clarity.",
        options: {
            premium_ui: {
                label: "Premium Custom UI",
                description: "A bespoke interface crafted for conversion, clarity, and a high-trust product presence.",
            },
            design_system: {
                label: "Design System / Component Library",
                description: "Reusable component standards that keep the interface scalable and consistent.",
            },
            responsive: {
                label: "Mobile-First Responsive",
                description: "Responsive layouts designed to perform cleanly across mobile, tablet, and desktop.",
            },
        },
    },
    testing: {
        title: "Testing & QA",
        description: "Quality assurance layers chosen to reduce defects and improve release confidence.",
        options: {
            unit_testing: {
                label: "Automated Unit Testing",
                description: "Automated test coverage around core logic to catch regressions before release.",
            },
            e2e_testing: {
                label: "End-to-End Testing",
                description: "Full workflow testing that validates user journeys across the complete application.",
            },
            load_testing: {
                label: "Performance & Load Testing",
                description: "Stress and performance testing that validates how the product behaves under scale.",
            },
            security_audit: {
                label: "Security Audit",
                description: "A focused review of product security controls, access points, and implementation risks.",
            },
        },
    },
    payments: {
        title: "Payments",
        description: "Monetization and billing infrastructure selected for revenue operations and commercial readiness.",
        options: {
            stripe_sub: {
                label: "Stripe Subscriptions",
                description: "Recurring billing, invoices, and subscription lifecycle management through Stripe.",
            },
            stripe_one: {
                label: "Stripe One-Time Payments",
                description: "Single-charge payment flows for purchases, deposits, or transactional billing.",
            },
            multi_currency: {
                label: "Multi-Currency Support",
                description: "Pricing and billing support for customers operating across multiple markets.",
            },
            invoice: {
                label: "Invoice Generation",
                description: "Automated invoice creation for billing operations and customer finance workflows.",
            },
        },
    },
    deployment: {
        title: "Deployment & CI/CD",
        description: "Release infrastructure selected to keep delivery fast, repeatable, and production-safe.",
        options: {
            cicd: {
                label: "CI/CD Pipeline",
                description: "Automated build, test, and deployment workflows for consistent production releases.",
            },
            aws_infra: {
                label: "AWS Infrastructure Setup",
                description: "Cloud environment provisioning aligned to reliability, scalability, and future growth.",
            },
            docker: {
                label: "Docker + Containerisation",
                description: "Containerized environments that keep development, staging, and production aligned.",
            },
            monitoring: {
                label: "Monitoring + Alerting",
                description: "Operational visibility and alerts that help catch issues before they impact users.",
            },
        },
    },
};

const ESTIMATOR_PHASE_ORDER = [
    "discovery",
    "appType",
    "architecture",
    "database",
    "auth",
    "features",
    "design",
    "testing",
    "payments",
    "deployment",
] as const;

function getTransporter() {
    const host = process.env.SMTP_HOST || process.env.EMAIL_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT || 465);
    const secure = (process.env.SMTP_SECURE || process.env.EMAIL_SECURE || "true").toLowerCase() === "true";
    const user = process.env.EMAIL_USER || process.env.SMTP_USER;
    const pass = process.env.EMAIL_PASS || process.env.SMTP_PASSWORD;

    if (!user || !pass) {
        throw new Error("Estimator email SMTP credentials are not configured.");
    }

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
            user,
            pass,
        },
    });
}

function getFromEmail() {
    return process.env.SMTP_FROM_EMAIL || process.env.EMAIL_USER || "connect@zylex.io";
}

function getInternalTeamEmail() {
    return process.env.INTERNAL_TEAM_EMAIL || process.env.EMAIL_TO || process.env.EMAIL_USER || "connect@zylex.io";
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function formatCurrency(value: number) {
    return `$${value.toLocaleString()}`;
}

function formatLongDate(value: Date) {
    return value.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

function getSelectedOptionMeta(phaseId: string, selectedOptions: string[]) {
    const phase = ESTIMATOR_PHASES[phaseId];
    if (!phase) {
        return selectedOptions.map((optionId) => ({
            label: optionId,
            description: "Selected during the estimator process.",
        }));
    }

    return selectedOptions.map((optionId) => phase.options[optionId] || {
        label: optionId,
        description: phase.description,
    });
}

function getProjectProfile(data: EstimatorEmailData) {
    const appTypeSelection = data.selections.appType;
    if (!appTypeSelection) {
        return "Custom Digital Product";
    }

    const labels = getSelectedOptionMeta("appType", appTypeSelection.selectedOptions).map((option) => option.label);
    if (labels.length === 0) {
        return "Custom Digital Product";
    }

    return `${labels.join(" + ")} MVP`;
}

function getPreparedForLine(data: EstimatorEmailData) {
    const clientName = data.clientName?.trim() || "Prospective Client";
    const companyName = data.companyName?.trim() || "Company Not Provided";

    return `${escapeHtml(clientName)}, ${escapeHtml(companyName)}`;
}

function getScopeGridHtml(data: EstimatorEmailData) {
    return ESTIMATOR_PHASE_ORDER.map((phaseId, index) => {
        const selection = data.selections[phaseId];
        const phase = ESTIMATOR_PHASES[phaseId];

        if (!selection || !phase) {
            return "";
        }

        const optionMeta = getSelectedOptionMeta(phaseId, selection.selectedOptions);
        const selectedLabels = optionMeta.map((option) => option.label).join(" + ");
        const description = optionMeta.map((option) => option.description).join(" ");

        return `
            <div class="scope-item">
                <h4>${index + 1}. ${escapeHtml(phase.title)}</h4>
                <p><strong>${escapeHtml(selectedLabels)}</strong><br>${escapeHtml(description)}</p>
            </div>
        `;
    }).join("");
}

function getInfrastructureNarrative(data: EstimatorEmailData) {
    const architectureSelection = data.selections.architecture;
    const chosenArchitecture = architectureSelection
        ? getSelectedOptionMeta("architecture", architectureSelection.selectedOptions)[0]
        : null;

    if (architectureSelection?.selectedOptions.includes("serverless")) {
        return `
            <div class="method-box" style="margin-top: 30pt;">
                <h3 style="margin-top: 0;">Infrastructure Cost Savings</h3>
                <p>Traditional agencies often build products on fixed infrastructure that can cost hundreds every month to host and maintain.</p>
                <p>Because your scope utilizes a modern <strong>${escapeHtml(chosenArchitecture?.label || "Serverless Architecture")}</strong>, your launch infrastructure stays lean, scales on demand, and avoids unnecessary operational overhead during the MVP phase.</p>
            </div>
        `;
    }

    return `
        <div class="method-box" style="margin-top: 30pt;">
            <h3 style="margin-top: 0;">Infrastructure Strategy</h3>
            <p>Your selected <strong>${escapeHtml(chosenArchitecture?.label || "delivery architecture")}</strong> is designed to match the current product scope without over-engineering the MVP.</p>
            <p>This keeps launch costs practical today while leaving room to evolve the platform architecture as usage, integrations, and traffic grow.</p>
        </div>
    `;
}

function buildSelectionsTableHtml(selections: EstimatorEmailData["selections"]) {
    return ESTIMATOR_PHASE_ORDER.map((phaseId) => {
        const selection = selections[phaseId];
        const phase = ESTIMATOR_PHASES[phaseId];

        if (!selection || !phase) {
            return "";
        }

        const selectedLabels = getSelectedOptionMeta(phaseId, selection.selectedOptions)
            .map((option) => option.label)
            .join(", ");

        return `
            <tr style="border-bottom: 1px solid #374151;">
                <td style="padding: 12px; font-weight: 600; color: #1d4ed8;">${escapeHtml(phase.title)}</td>
                <td style="padding: 12px; color: #1f2937;">${escapeHtml(selectedLabels)}</td>
                <td style="padding: 12px; color: #0f766e;">${formatCurrency(selection.ourCost)}</td>
                <td style="padding: 12px; color: #6b7280; text-decoration: line-through;">${formatCurrency(selection.competitorCost)}</td>
                <td style="padding: 12px; color: #4b5563;">${escapeHtml(String(selection.days))} days</td>
            </tr>
        `;
    }).join("");
}

function buildUserBlueprintEmail(data: EstimatorEmailData) {
    const date = formatLongDate(new Date());
    const preparedForLine = getPreparedForLine(data);
    const projectProfile = escapeHtml(getProjectProfile(data));
    const totalInvestment = formatCurrency(data.totals.ourCost);
    const traditionalEstimate = formatCurrency(data.totals.competitorCost);
    const totalSavings = formatCurrency(data.totals.savings);
    const savingsPercent = escapeHtml(data.totals.savingsPercent);
    const scopeGridHtml = getScopeGridHtml(data);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zylex Project Estimation Blueprint</title>
    <style>
        @page {
            size: A4;
            margin: 0;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: #1a1f36;
            background-color: #f7fafc;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        .page {
            width: 210mm;
            min-height: 297mm;
            padding: 20mm;
            margin: 10mm auto;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            box-sizing: border-box;
            page-break-after: always;
            display: flex;
            flex-direction: column;
        }

        .page:last-child {
            page-break-after: auto;
        }

        h1 {
            font-size: 28pt;
            font-weight: 800;
            color: #0a2540;
            margin-bottom: 2pt;
            letter-spacing: -0.5px;
        }

        h2 {
            font-size: 22pt;
            font-weight: 700;
            color: #0a2540;
            margin-top: 10pt;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 8pt;
        }

        h3 {
            font-size: 16pt;
            font-weight: 600;
            color: #0055FF;
            margin-top: 16pt;
            margin-bottom: 8pt;
        }

        p {
            font-size: 11pt;
            color: #425466;
            line-height: 1.6;
            margin-bottom: 12pt;
        }

        ul {
            margin-top: 0;
            padding-left: 20px;
        }

        li {
            font-size: 11pt;
            color: #425466;
            line-height: 1.6;
            margin-bottom: 8pt;
        }

        .brand-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid #0055FF;
            padding-bottom: 12pt;
            margin-bottom: 25pt;
        }

        .brand-logo {
            font-size: 22pt;
            font-weight: 900;
            color: #0055FF;
            letter-spacing: -1px;
        }

        .doc-meta {
            text-align: right;
            font-size: 10pt;
            color: #8792a2;
            line-height: 1.4;
        }

        .footer {
            margin-top: auto;
            border-top: 1px solid #e2e8f0;
            padding-top: 10pt;
            font-size: 9pt;
            color: #8792a2;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .hero-block {
            background: linear-gradient(135deg, #0a2540 0%, #1a1f36 100%);
            color: white;
            border-radius: 12pt;
            padding: 30pt;
            margin-top: 30pt;
            box-shadow: 0 10px 25px rgba(10, 37, 64, 0.15);
            text-align: center;
        }

        .hero-title {
            color: #8792a2;
            font-size: 14pt;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10pt;
        }

        .hero-price {
            font-size: 56pt;
            font-weight: 800;
            color: white;
            line-height: 1;
            margin: 10pt 0;
        }

        .hero-time {
            font-size: 18pt;
            font-weight: 500;
            color: #34d399;
            margin-top: 10pt;
        }

        .roi-compare {
            display: flex;
            justify-content: space-between;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8pt;
            padding: 20pt;
            margin-top: 30pt;
        }

        .roi-col {
            width: 45%;
        }

        .roi-label {
            font-size: 11pt;
            color: #64748b;
            margin-bottom: 6pt;
            text-transform: uppercase;
            font-weight: 600;
        }

        .roi-bad {
            font-size: 18pt;
            color: #f87171;
            text-decoration: line-through;
        }

        .roi-good {
            font-size: 20pt;
            font-weight: 700;
            color: #10b981;
        }

        .scope-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20pt;
            margin-top: 20pt;
        }

        .scope-item {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 4px solid #0055FF;
            padding: 16pt;
            border-radius: 6pt;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        }

        .scope-item h4 {
            margin: 0 0 6pt 0;
            font-size: 12pt;
            color: #0a2540;
        }

        .scope-item p {
            margin: 0;
            font-size: 10pt;
            color: #64748b;
        }

        .method-box {
            background: #f8fafc;
            padding: 20pt;
            border-radius: 8pt;
            margin-bottom: 20pt;
            border: 1px solid #e2e8f0;
        }

        .pie-chart-container {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 20pt;
            background: #0f172a;
            border-radius: 12pt;
            color: white;
            margin: 30pt 0;
        }

        .pie-legend {
            width: 60%;
        }

        .pie-stat {
            margin-bottom: 16pt;
        }

        .pie-stat h4 {
            margin: 0 0 4pt 0;
            font-size: 14pt;
            color: #34d399;
        }

        .pie-stat p {
            margin: 0;
            font-size: 10pt;
            color: #cbd5e1;
        }

        .gantt-container {
            margin-top: 30pt;
        }

        .gantt-row {
            display: flex;
            margin-bottom: 16pt;
            align-items: stretch;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8pt;
            overflow: hidden;
        }

        .gantt-days {
            background: #0055FF;
            color: white;
            width: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 15pt;
            font-weight: bold;
        }

        .gantt-days span {
            font-size: 10pt;
            font-weight: normal;
            opacity: 0.9;
        }

        .gantt-content {
            padding: 15pt 20pt;
            flex: 1;
        }

        .gantt-content h4 {
            margin: 0 0 6pt 0;
            color: #0a2540;
            font-size: 14pt;
        }

        .gantt-content p {
            margin: 0;
            font-size: 10.5pt;
        }

        .cta-page {
            text-align: center;
            padding-top: 40pt;
        }

        .cta-btn {
            display: inline-block;
            background: #0055FF;
            color: white;
            padding: 16pt 32pt;
            font-size: 16pt;
            font-weight: 600;
            text-decoration: none;
            border-radius: 8pt;
            margin-top: 30pt;
        }

        @media print {
            body {
                background: white;
            }

            .page {
                margin: 0;
                box-shadow: none;
                padding: 15mm;
            }
        }
    </style>
</head>
<body>
    <div class="page">
        <div class="brand-header">
            <div class="brand-logo">ZYLEX</div>
            <div class="doc-meta">
                <strong>Project Estimation Blueprint</strong><br>
                Date: ${escapeHtml(date)}
            </div>
        </div>

        <p style="font-size: 14pt;">Prepared For: <strong>${preparedForLine}</strong><br>
            Project Profile: <strong>${projectProfile}</strong></p>

        <div class="hero-block">
            <div class="hero-title">The Bottom Line</div>
            <div style="font-size: 14pt; color: #cbd5e1; margin-bottom: 5pt;">Total Investment</div>
            <div class="hero-price">${totalInvestment}</div>
            <div class="hero-time">${escapeHtml(data.totals.ourDays)}-day delivery target</div>
        </div>

        <div class="roi-compare">
            <div class="roi-col">
                <div class="roi-label">Traditional Agency Estimate</div>
                <div class="roi-bad">${traditionalEstimate}</div>
                <div style="font-size: 11pt; color: #64748b; margin-top: 4pt;">Timeline: ${escapeHtml(data.totals.competitorDays)}+ Days</div>
            </div>
            <div class="roi-col" style="border-left: 2px solid #e2e8f0; padding-left: 20pt;">
                <div class="roi-label" style="color: #0055FF;">Your Zylex Savings</div>
                <div class="roi-good">Save ${totalSavings} (${savingsPercent}%)</div>
                <div style="font-size: 11pt; font-weight: 600; color: #0a2540; margin-top: 4pt;">Delivered significantly faster than the traditional route</div>
            </div>
        </div>

        <div class="footer">
            <div>Zylex Engineering • Contact: connect@zylex.io</div>
            <div>Page 1 of 6</div>
        </div>
    </div>

    <div class="page">
        <div class="brand-header">
            <div class="brand-logo" style="font-size: 16pt;">ZYLEX</div>
            <div class="doc-meta" style="font-size: 9pt;">Scope Blueprint</div>
        </div>

        <h2>Technical Scope & Architecture</h2>
        <p>This page acts as the detailed receipt of the architectural and engineering phases selected for your specific build.</p>

        <div class="scope-grid">
            ${scopeGridHtml}
        </div>

        <div class="footer">
            <div>Zylex Engineering • Confidential</div>
            <div>Page 2 of 6</div>
        </div>
    </div>

    <div class="page">
        <div class="brand-header">
            <div class="brand-logo" style="font-size: 16pt;">ZYLEX</div>
        </div>

        <h2>How We Build 6x Faster</h2>
        <p>A common question from technical and financial stakeholders is: <em>"How is it possible to build enterprise software this fast, at this price?"</em> The answer lies in our proprietary engineering model.</p>

        <div class="pie-chart-container">
            <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#0055FF 0% 60%, #34d399 60% 100%);"></div>
            <div class="pie-legend">
                <div class="pie-stat">
                    <h4><span style="display:inline-block; width:12px; height:12px; background:#0055FF; margin-right:8px; border-radius:2px;"></span>60% Zylex Core Modules</h4>
                    <p>We utilize our proprietary library of battle-tested code for repetitive functions like authentication, databases, and delivery pipelines so that you are not paying to rebuild solved problems.</p>
                </div>
                <div class="pie-stat">
                    <h4><span style="display:inline-block; width:12px; height:12px; background:#34d399; margin-right:8px; border-radius:2px;"></span>40% Custom Engineering</h4>
                    <p>By removing boilerplate, our engineering time goes directly into the custom workflows, interfaces, and business logic that make your product valuable to your market.</p>
                </div>
            </div>
        </div>

        <div class="method-box">
            <h3 style="margin-top: 0;">AI-Augmented Development</h3>
            <p style="margin-bottom: 0;">Our senior engineers use advanced AI workflows inside the development process to accelerate scaffolding, testing, security review, and implementation quality. That lets us ship complex production work faster without relying on bloated traditional agency layers.</p>
        </div>

        <div class="footer">
            <div>Zylex Engineering • Confidential</div>
            <div>Page 3 of 6</div>
        </div>
    </div>

    <div class="page">
        <div class="brand-header">
            <div class="brand-logo" style="font-size: 16pt;">ZYLEX</div>
        </div>

        <h2>Your Sprint Plan</h2>
        <p>Stakeholders require predictability. Because we execute through a focused engineering sprint, the delivery structure stays clear, aggressive, and transparent.</p>

        <div class="gantt-container">
            <div class="gantt-row">
                <div class="gantt-days"><span>Phase</span><br>1</div>
                <div class="gantt-content">
                    <h4>Architecture & Foundation</h4>
                    <p>Finalizing documentation, provisioning infrastructure, shaping the data layer, and wiring up the foundational authentication patterns.</p>
                </div>
            </div>
            <div class="gantt-row">
                <div class="gantt-days" style="background: #2563eb;"><span>Phase</span><br>2</div>
                <div class="gantt-content">
                    <h4>Core Engineering</h4>
                    <p>Building the interface system, implementing the core application structure, and connecting the key product modules.</p>
                </div>
            </div>
            <div class="gantt-row">
                <div class="gantt-days" style="background: #3b82f6;"><span>Phase</span><br>3</div>
                <div class="gantt-content">
                    <h4>Business Logic & Integrations</h4>
                    <p>Shipping custom workflows, dynamic data connections, and the third-party integrations selected during the estimator flow.</p>
                </div>
            </div>
            <div class="gantt-row">
                <div class="gantt-days" style="background: #10b981;"><span>Phase</span><br>4</div>
                <div class="gantt-content">
                    <h4>QA, Polish, & Handover</h4>
                    <p>Executing QA, testing the critical paths, polishing the release, and deploying the production-ready build with handover support.</p>
                </div>
            </div>
        </div>

        <div class="footer">
            <div>Zylex Engineering • Confidential</div>
            <div>Page 4 of 6</div>
        </div>
    </div>

    <div class="page">
        <div class="brand-header">
            <div class="brand-logo" style="font-size: 16pt;">ZYLEX</div>
        </div>

        <h2>Beyond the Launch</h2>
        <p>Execution does not end on launch day. The technical choices made during the estimator flow create long-term value for the lifecycle of your product.</p>
        ${getInfrastructureNarrative(data)}
        <div class="method-box">
            <h3 style="margin-top: 0;">100% Code Ownership</h3>
            <p>Unlike locked-down low-code tools, Zylex ships scalable production code. Upon final payment, you own the custom IP and codebase and can hand it off to any future engineering team without platform lock-in.</p>
        </div>
        <div class="method-box">
            <h3 style="margin-top: 0;">Support & Maintenance (Optional)</h3>
            <p>After launch, we can continue as your engineering partner for critical updates, dependency maintenance, and phase-two product expansion through a focused monthly retainer.</p>
        </div>

        <div class="footer">
            <div>Zylex Engineering • Confidential</div>
            <div>Page 5 of 6</div>
        </div>
    </div>

    <div class="page" style="justify-content: center; align-items: center; background: #0a2540; color: white;">
        <div class="cta-page">
            <h2 style="color: white; border-bottom: none; font-size: 32pt; margin-bottom: 20pt;">Let's Validate Your Scope.</h2>
            <p style="color: #cbd5e1; font-size: 14pt; max-width: 600px; margin: 0 auto; line-height: 1.6;">
                This estimate provides a highly accurate baseline for your MVP.
                <br><br>
                The next step is a focused Technical Discovery Call with our engineering team to map your business logic, answer stakeholder questions, and validate the execution plan.
            </p>
            <a href="https://calendly.com/zylex" class="cta-btn">Book Technical Discovery Call</a>
        </div>

        <div class="footer" style="border-top: 1px solid rgba(255,255,255,0.1); width: 100%; border-bottom: 0;">
            <div style="color: #94a3b8; text-align: center; width: 100%; font-size: 11pt;">
                Zylex Engineering • connect@zylex.io • zylex.io
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

function buildInternalLeadEmail(data: EstimatorEmailData) {
    const clientName = escapeHtml(data.clientName?.trim() || "Not provided");
    const companyName = escapeHtml(data.companyName?.trim() || "Not provided");
    const designation = escapeHtml(data.designation?.trim() || "Not provided");
    const timeline = escapeHtml(data.timeline?.trim() || "Not provided");
    const projectProfile = escapeHtml(getProjectProfile(data));
    const selectionsTableHtml = buildSelectionsTableHtml(data.selections);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 24px; background: #f8fafc; font-family: Arial, sans-serif; color: #0f172a;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 860px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
        <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #0a2540 0%, #0055FF 100%); color: #ffffff;">
                <div style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">New Estimator Blueprint Lead</div>
                <div style="font-size: 14px; color: rgba(255,255,255,0.82);">A completed estimator lead opened the final blueprint modal.</div>
            </td>
        </tr>
        <tr>
            <td style="padding: 28px 32px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                    <tr>
                        <td width="50%" style="padding: 0 0 16px;">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Client</div>
                            <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${clientName}</div>
                        </td>
                        <td width="50%" style="padding: 0 0 16px;">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Company</div>
                            <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${companyName}</div>
                        </td>
                    </tr>
                    <tr>
                        <td width="50%" style="padding: 0 0 16px;">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Email</div>
                            <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${escapeHtml(data.userEmail)}</div>
                        </td>
                        <td width="50%" style="padding: 0 0 16px;">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Designation</div>
                            <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${designation}</div>
                        </td>
                    </tr>
                    <tr>
                        <td width="50%">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Requested Timeline</div>
                            <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${timeline}</div>
                        </td>
                        <td width="50%">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Project Profile</div>
                            <div style="font-size: 16px; font-weight: 600; color: #0f172a;">${projectProfile}</div>
                        </td>
                    </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px;">
                    <tr>
                        <td width="25%" style="padding: 20px; border-right: 1px solid #bfdbfe; text-align: center;">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Our Quote</div>
                            <div style="font-size: 26px; font-weight: 700; color: #0055FF;">${formatCurrency(data.totals.ourCost)}</div>
                            <div style="font-size: 12px; color: #475569;">${escapeHtml(data.totals.ourDays)} days</div>
                        </td>
                        <td width="25%" style="padding: 20px; border-right: 1px solid #bfdbfe; text-align: center;">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Competitor</div>
                            <div style="font-size: 22px; font-weight: 700; color: #94a3b8; text-decoration: line-through;">${formatCurrency(data.totals.competitorCost)}</div>
                            <div style="font-size: 12px; color: #475569;">${escapeHtml(data.totals.competitorDays)}+ days</div>
                        </td>
                        <td width="25%" style="padding: 20px; border-right: 1px solid #bfdbfe; text-align: center;">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Savings</div>
                            <div style="font-size: 26px; font-weight: 700; color: #059669;">${formatCurrency(data.totals.savings)}</div>
                            <div style="font-size: 12px; color: #475569;">${escapeHtml(data.totals.savingsPercent)}% saved</div>
                        </td>
                        <td width="25%" style="padding: 20px; text-align: center;">
                            <div style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Progress</div>
                            <div style="font-size: 26px; font-weight: 700; color: #0f172a;">${escapeHtml(String(data.completedPhases))}/10</div>
                            <div style="font-size: 12px; color: #475569;">Estimator phases completed</div>
                        </td>
                    </tr>
                </table>

                <h2 style="font-size: 18px; margin: 0 0 16px; color: #0f172a;">Selected Scope</h2>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                    <thead>
                        <tr style="background: #f8fafc;">
                            <th style="padding: 12px; text-align: left; color: #475569; font-size: 12px; text-transform: uppercase;">Phase</th>
                            <th style="padding: 12px; text-align: left; color: #475569; font-size: 12px; text-transform: uppercase;">Selection</th>
                            <th style="padding: 12px; text-align: left; color: #475569; font-size: 12px; text-transform: uppercase;">Our Cost</th>
                            <th style="padding: 12px; text-align: left; color: #475569; font-size: 12px; text-transform: uppercase;">Competitor</th>
                            <th style="padding: 12px; text-align: left; color: #475569; font-size: 12px; text-transform: uppercase;">Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${selectionsTableHtml}
                    </tbody>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
}

export async function sendEstimatorEmails(data: EstimatorEmailData) {
    const transporter = getTransporter();
    const fromEmail = getFromEmail();
    const internalTeamEmail = getInternalTeamEmail();

    const userMailOptions = {
        from: `Zylex Engineering <${fromEmail}>`,
        to: data.userEmail,
        replyTo: internalTeamEmail,
        subject: "Your Zylex Project Estimation Blueprint",
        html: buildUserBlueprintEmail(data),
    };

    const internalMailOptions = {
        from: `Zylex Estimator <${fromEmail}>`,
        to: internalTeamEmail,
        replyTo: data.userEmail,
        subject: `New estimator blueprint lead - ${formatCurrency(data.totals.ourCost)}`,
        html: buildInternalLeadEmail(data),
    };

    try {
        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(internalMailOptions),
        ]);
        return { success: true };
    } catch (error) {
        console.error("Failed to send estimator emails:", error);
        throw error;
    }
}
