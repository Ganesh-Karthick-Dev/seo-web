export type Option = { score: number; label: string };
export type Question = { id: string; text: string; options: Option[] };
export type Section = { id: string; title: string; questions: Question[] };

export const assessmentData: Section[] = [
    {
        id: "s1",
        title: "Section 1: Data Architecture & Scalability",
        questions: [
            {
                id: "q1",
                text: "Our organization can reliably ingest data from all connected sources (applications, cloud services, third-party systems) without manual intervention or frequent pipeline failures.",
                options: [
                    { score: 1, label: "Manual Only" },
                    { score: 2, label: "Partial Automation" },
                    { score: 3, label: "Operationalized Ingestion" },
                    { score: 4, label: "Highly Automated" },
                    { score: 5, label: "Self-Healing" },
                ],
            },
            {
                id: "q2",
                text: "Data pipelines are standardized and monitored, rather than being custom-built or dependent on individual teams or engineers.",
                options: [
                    { score: 1, label: "Resource Dependent" },
                    { score: 2, label: "Fragile Setup" },
                    { score: 3, label: "Repeatable Builds" },
                    { score: 4, label: "Monitored Pipelines" },
                    { score: 5, label: "Operationally Assured" },
                ],
            },
            {
                id: "q3",
                text: "New data sources can be onboarded quickly without re-engineering downstream analytics or reporting systems.",
                options: [
                    { score: 1, label: "Break-Fix Onboarding" },
                    { score: 2, label: "Costly Integration" },
                    { score: 3, label: "Template Onboarding" },
                    { score: 4, label: "Rapid Integration" },
                    { score: 5, label: "Plug-and-Play" },
                ],
            },
        ],
    },
    {
        id: "s2",
        title: "Section 2: Decision Confidence",
        questions: [
            {
                id: "q4",
                text: "Top Management is assertive that most strategic decisions are based on accurate, timely, and consistent data.",
                options: [
                    { score: 1, label: "Opinion Driven" },
                    { score: 2, label: "Selectively Data-Led" },
                    { score: 3, label: "Regularly Data-Led" },
                    { score: 4, label: "Predominantly Data-Led" },
                    { score: 5, label: "Data Centric" },
                ],
            },
            {
                id: "q5",
                text: "Data inconsistencies or quality issues are exceptions rather than recurring operational challenges.",
                options: [
                    { score: 1, label: "Persistent Errors" },
                    { score: 2, label: "Frequent Exceptions" },
                    { score: 3, label: "Intermittent Issues" },
                    { score: 4, label: "Rare Exceptions" },
                    { score: 5, label: "Practically None" },
                ],
            },
            {
                id: "q6",
                text: "Data is immediately trusted and usable, without requiring teams to spend time cross-checking numbers across systems.",
                options: [
                    { score: 1, label: "Needs Validation" },
                    { score: 2, label: "Cross-Checked" },
                    { score: 3, label: "Generally Trusted" },
                    { score: 4, label: "Trustworthy Source" },
                    { score: 5, label: "Single Source" },
                ],
            },
        ],
    },
    {
        id: "s3",
        title: "Section 3: Operational Awareness",
        questions: [
            {
                id: "q7",
                text: "We have clear visibility into how data moves across the organization—from source to AI model and reporting.",
                options: [
                    { score: 1, label: "Blind Spots" },
                    { score: 2, label: "Partial Tracing" },
                    { score: 3, label: "Pipeline Tracing" },
                    { score: 4, label: "Traceable Flows" },
                    { score: 5, label: "Real-Time Lineage" },
                ],
            },
            {
                id: "q8",
                text: "Data issues are identified and addressed proactively, instead surfaced by business users or failed reports.",
                options: [
                    { score: 1, label: "Issue-Driven" },
                    { score: 2, label: "Notification-Based" },
                    { score: 3, label: "Scheduled Checks" },
                    { score: 4, label: "Automated Alerts" },
                    { score: 5, label: "Autonomous Remediation" },
                ],
            },
            {
                id: "q9",
                text: "Ownership, accountability, and decision making for crucial data domains are clearly established and enforced across the organization.",
                options: [
                    { score: 1, label: "No Custodians" },
                    { score: 2, label: "Informal Supervising" },
                    { score: 3, label: "Assigned Owners" },
                    { score: 4, label: "Enforced Governance" },
                    { score: 5, label: "Domain Accountability" },
                ],
            },
        ],
    },
    {
        id: "s4",
        title: "Section 4: Compliance Readiness",
        questions: [
            {
                id: "q10",
                text: "Our organization can demonstrate authority over data usage, access, and transformations when/if required.",
                options: [
                    { score: 1, label: "Unregulated Access" },
                    { score: 2, label: "Manual Permissions" },
                    { score: 3, label: "Role-Based Controls" },
                    { score: 4, label: "Policy-Enforced" },
                    { score: 5, label: "Zero-Trust" },
                ],
            },
            {
                id: "q11",
                text: "We have end-to-end clarity on who uses data, how it is modified, and where it flows.",
                options: [
                    { score: 1, label: "Unknown Usage" },
                    { score: 2, label: "Fragmented Audit" },
                    { score: 3, label: "Logged Activities" },
                    { score: 4, label: "Mapped Lineage" },
                    { score: 5, label: "Searchable Lineage" },
                ],
            },
            {
                id: "q12",
                text: "Our in-house team can handle regulatory or customer audit requests efficiently without pulling focus away from critical operations.",
                options: [
                    { score: 1, label: "Firefighting Mode" },
                    { score: 2, label: "Manual Effort" },
                    { score: 3, label: "Standardized Setup" },
                    { score: 4, label: "Managed Performance" },
                    { score: 5, label: "Constant Readiness" },
                ],
            },
        ],
    },
    {
        id: "s5",
        title: "Section 5: AI Business Enablement and Analytics",
        questions: [
            {
                id: "q13",
                text: "Data initiatives enable informed decision-making by providing real-time visibility into behavioral and performance trends.",
                options: [
                    { score: 1, label: "Historical Records" },
                    { score: 2, label: "Batch Updates" },
                    { score: 3, label: "Low-Latency Data" },
                    { score: 4, label: "Streaming Analytics" },
                    { score: 5, label: "Adaptive Intelligence" },
                ],
            },
            {
                id: "q14",
                text: "Analytics and AI solutions can be deployed and evolved without excessive rework or operational friction.",
                options: [
                    { score: 1, label: "Built Once" },
                    { score: 2, label: "Takes Time" },
                    { score: 3, label: "Can utilize" },
                    { score: 4, label: "Mostly Automated" },
                    { score: 5, label: "Runs Continuously" },
                ],
            },
            {
                id: "q15",
                text: "Business teams can act on insights quickly, without heavy dependency on technical teams.",
                options: [
                    { score: 1, label: "Guided Support" },
                    { score: 2, label: "Assisted Workflow" },
                    { score: 3, label: "Shared Control" },
                    { score: 4, label: "Self-Directed" },
                    { score: 5, label: "Independent" },
                ],
            },
        ],
    },
];
