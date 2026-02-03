import nodemailer from "nodemailer";

// Create transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: "ganeshkarthik18697@gmail.com",
        pass: "stamaorqomrfcdlh",
    },
});

// Email addresses
const FROM_EMAIL = "official@zylex.io";
const INTERNAL_TEAM_EMAIL = "ganeshkarthik18697@gmail.com";

interface EstimatorEmailData {
    userEmail: string;
    selections: Record<string, {
        phaseId: string;
        selectedOptions: string[];
        ourCost: number;
        competitorCost: number;
        days: number;
    }>;
    totals: {
        ourCost: number;
        competitorCost: number;
        ourDays: string;
        competitorDays: string;
        savings: number;
        savingsPercent: string;
    };
    completedPhases: number;
}

// Phase labels for email
const PHASE_LABELS: Record<string, string> = {
    discovery: "Project Discovery",
    frontend: "Frontend Development",
    backend: "Backend Architecture",
    auth: "Authentication & Security",
    design: "UI/UX Design",
    testing: "Testing & QA",
    payments: "Payment Integration",
    deployment: "Deployment & DevOps",
    analytics: "Analytics & Monitoring",
    support: "Maintenance & Support",
};

// Helper to format selections for email
function formatSelectionsForEmail(selections: EstimatorEmailData["selections"]): string {
    let html = "";

    Object.entries(selections).forEach(([phaseId, selection]) => {
        const phaseName = PHASE_LABELS[phaseId] || phaseId;
        html += `
        <tr style="border-bottom: 1px solid #374151;">
            <td style="padding: 12px; font-weight: 600; color: #3B82F6;">${phaseName}</td>
            <td style="padding: 12px; color: #D1D5DB;">${selection.selectedOptions.join(", ")}</td>
            <td style="padding: 12px; color: #10B981;">$${selection.ourCost.toLocaleString()}</td>
            <td style="padding: 12px; color: #6B7280; text-decoration: line-through;">$${selection.competitorCost.toLocaleString()}</td>
            <td style="padding: 12px; color: #9CA3AF;">${selection.days} days</td>
        </tr>`;
    });

    return html;
}

// Send thank-you email to user
export async function sendUserThankYouEmail(data: EstimatorEmailData) {
    const mailOptions = {
        from: `"Zylex Engineering" <${FROM_EMAIL}>`,
        to: data.userEmail,
        subject: "🚀 Your MVP Estimate is Ready - Zylex Engineering",
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #111827;">
                <!-- Header -->
                <tr>
                    <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);">
                        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Thank You for Your Interest!</h1>
                        <p style="color: #93C5FD; margin: 10px 0 0 0; font-size: 16px;">Your MVP estimate has been received</p>
                    </td>
                </tr>

                <!-- Body -->
                <tr>
                    <td style="padding: 40px 30px;">
                        <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                            Hi there,
                        </p>
                        <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                            Thank you for using the Zylex Engineering estimator tool! We've received your project requirements and our team is already reviewing them.
                        </p>

                        <!-- Summary Card -->
                        <div style="background-color: #1F2937; border-radius: 12px; padding: 25px; margin: 25px 0;">
                            <h2 style="color: #ffffff; font-size: 18px; margin: 0 0 20px 0;">📊 Your Estimate Summary</h2>
                            
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <span style="color: #9CA3AF;">Zylex Price:</span>
                                        <span style="color: #3B82F6; font-weight: 700; font-size: 24px; float: right;">$${data.totals.ourCost.toLocaleString()}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0;">
                                        <span style="color: #9CA3AF;">Delivery Time:</span>
                                        <span style="color: #ffffff; font-weight: 600; float: right;">${data.totals.ourDays} Days</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-top: 1px solid #374151; margin-top: 10px;">
                                        <span style="color: #10B981;">You Save:</span>
                                        <span style="color: #10B981; font-weight: 700; font-size: 20px; float: right;">$${data.totals.savings.toLocaleString()} (${data.totals.savingsPercent}%)</span>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <p style="color: #D1D5DB; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                            <strong>What happens next?</strong><br>
                            Our team will review your requirements and reach out within 24 hours with a detailed Technical Roadmap including:
                        </p>

                        <ul style="color: #D1D5DB; font-size: 15px; line-height: 1.8; padding-left: 20px;">
                            <li>Detailed project timeline with milestones</li>
                            <li>Technology stack recommendations</li>
                            <li>Sprint breakdown with deliverables</li>
                            <li>Risk assessment and mitigation strategies</li>
                        </ul>

                        <!-- CTA Button -->
                        <div style="text-align: center; margin: 35px 0;">
                            <a href="https://zylex.io/partnership" style="display: inline-block; padding: 14px 35px; background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                                View Our Services
                            </a>
                        </div>

                        <p style="color: #9CA3AF; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                            If you have any questions, feel free to reply to this email. We're here to help!
                        </p>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td style="padding: 30px; background-color: #0F172A; text-align: center; border-top: 1px solid #1F2937;">
                        <p style="color: #6B7280; font-size: 14px; margin: 0;">
                            © ${new Date().getFullYear()} Zylex Engineering. All rights reserved.
                        </p>
                        <p style="color: #4B5563; font-size: 12px; margin: 10px 0 0 0;">
                            You received this email because you used our MVP estimator tool.
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `,
    };

    return transporter.sendMail(mailOptions);
}

// Send detailed email to internal team
export async function sendInternalTeamEmail(data: EstimatorEmailData) {
    const selectionsHtml = formatSelectionsForEmail(data.selections);

    const mailOptions = {
        from: `"Zylex Estimator" <${FROM_EMAIL}>`,
        to: INTERNAL_TEAM_EMAIL,
        subject: `🎯 New Estimator Lead: $${data.totals.ourCost.toLocaleString()} - ${data.userEmail}`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 800px; margin: 0 auto; background-color: #111827;">
                <!-- Header -->
                <tr>
                    <td style="padding: 30px; background: linear-gradient(135deg, #047857 0%, #10B981 100%);">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">🎯 New Estimator Lead</h1>
                        <p style="color: #A7F3D0; margin: 10px 0 0 0; font-size: 14px;">Received at ${new Date().toLocaleString()}</p>
                    </td>
                </tr>

                <!-- Lead Info -->
                <tr>
                    <td style="padding: 25px 30px; background-color: #1F2937;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <td width="50%" style="padding: 10px 0;">
                                    <span style="color: #9CA3AF; font-size: 14px;">Email:</span><br>
                                    <a href="mailto:${data.userEmail}" style="color: #3B82F6; font-size: 16px; font-weight: 600; text-decoration: none;">${data.userEmail}</a>
                                </td>
                                <td width="50%" style="padding: 10px 0; text-align: right;">
                                    <span style="color: #9CA3AF; font-size: 14px;">Phases Completed:</span><br>
                                    <span style="color: #ffffff; font-size: 16px; font-weight: 600;">${data.completedPhases}/10</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Financial Summary -->
                <tr>
                    <td style="padding: 25px 30px;">
                        <h2 style="color: #ffffff; font-size: 18px; margin: 0 0 20px 0;">💰 Financial Summary</h2>
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1F2937; border-radius: 12px;">
                            <tr>
                                <td width="33%" style="padding: 20px; text-align: center; border-right: 1px solid #374151;">
                                    <div style="color: #9CA3AF; font-size: 12px; text-transform: uppercase; margin-bottom: 5px;">Our Price</div>
                                    <div style="color: #3B82F6; font-size: 28px; font-weight: 700;">$${data.totals.ourCost.toLocaleString()}</div>
                                    <div style="color: #6B7280; font-size: 12px;">${data.totals.ourDays} days</div>
                                </td>
                                <td width="33%" style="padding: 20px; text-align: center; border-right: 1px solid #374151;">
                                    <div style="color: #9CA3AF; font-size: 12px; text-transform: uppercase; margin-bottom: 5px;">Competitor Price</div>
                                    <div style="color: #6B7280; font-size: 24px; font-weight: 700; text-decoration: line-through;">$${data.totals.competitorCost.toLocaleString()}</div>
                                    <div style="color: #6B7280; font-size: 12px;">${data.totals.competitorDays}+ days</div>
                                </td>
                                <td width="33%" style="padding: 20px; text-align: center;">
                                    <div style="color: #9CA3AF; font-size: 12px; text-transform: uppercase; margin-bottom: 5px;">Client Savings</div>
                                    <div style="color: #10B981; font-size: 28px; font-weight: 700;">$${data.totals.savings.toLocaleString()}</div>
                                    <div style="color: #10B981; font-size: 12px;">${data.totals.savingsPercent}% savings</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Detailed Selections -->
                <tr>
                    <td style="padding: 25px 30px;">
                        <h2 style="color: #ffffff; font-size: 18px; margin: 0 0 20px 0;">📋 Detailed Selections</h2>
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1F2937; border-radius: 12px; overflow: hidden;">
                            <thead>
                                <tr style="background-color: #0F172A;">
                                    <th style="padding: 12px; text-align: left; color: #9CA3AF; font-weight: 600; font-size: 12px; text-transform: uppercase;">Phase</th>
                                    <th style="padding: 12px; text-align: left; color: #9CA3AF; font-weight: 600; font-size: 12px; text-transform: uppercase;">Selected Options</th>
                                    <th style="padding: 12px; text-align: left; color: #9CA3AF; font-weight: 600; font-size: 12px; text-transform: uppercase;">Our Cost</th>
                                    <th style="padding: 12px; text-align: left; color: #9CA3AF; font-weight: 600; font-size: 12px; text-transform: uppercase;">Competitor</th>
                                    <th style="padding: 12px; text-align: left; color: #9CA3AF; font-weight: 600; font-size: 12px; text-transform: uppercase;">Days</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${selectionsHtml}
                            </tbody>
                        </table>
                    </td>
                </tr>

                <!-- Action Items -->
                <tr>
                    <td style="padding: 25px 30px; background-color: #1F2937;">
                        <h2 style="color: #ffffff; font-size: 16px; margin: 0 0 15px 0;">⚡ Action Required</h2>
                        <ul style="color: #D1D5DB; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0;">
                            <li>Review the project requirements</li>
                            <li>Prepare detailed Technical Roadmap</li>
                            <li>Schedule follow-up call with client</li>
                            <li>Respond within 24 hours</li>
                        </ul>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td style="padding: 20px 30px; background-color: #0F172A; text-align: center;">
                        <p style="color: #4B5563; font-size: 12px; margin: 0;">
                            This is an automated email from the Zylex Estimator Tool
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `,
    };

    return transporter.sendMail(mailOptions);
}

// Send both emails
export async function sendEstimatorEmails(data: EstimatorEmailData) {
    try {
        await Promise.all([
            sendUserThankYouEmail(data),
            sendInternalTeamEmail(data),
        ]);
        return { success: true };
    } catch (error) {
        console.error("Failed to send estimator emails:", error);
        throw error;
    }
}
