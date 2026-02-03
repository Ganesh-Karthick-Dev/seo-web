import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEstimatorEmails } from "@/lib/email";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            email,
            selections,
            totals,
            completedPhases,
        } = body;

        // Validate required fields
        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Valid email is required" },
                { status: 400 }
            );
        }

        // Format selections for database storage
        const selectionsJson = JSON.stringify(selections);

        // Store lead in database
        const lead = await prisma.estimatorLead.create({
            data: {
                email,
                platform: "",
                aiFeatures: "",
                payments: "",
                designReady: "",
                totalDays: parseInt(totals?.ourDays) || 0,
                totalCost: totals?.ourCost || 0,
                resultState: completedPhases >= 10 ? "complete" : "partial",
                // Store detailed selections in a JSON field if available
            },
        });

        // Send emails
        try {
            await sendEstimatorEmails({
                userEmail: email,
                selections,
                totals: {
                    ourCost: totals?.ourCost || 0,
                    competitorCost: totals?.competitorCost || 0,
                    ourDays: totals?.ourDays || "0",
                    competitorDays: totals?.competitorDays || "0",
                    savings: totals?.savings || 0,
                    savingsPercent: totals?.savingsPercent || "0",
                },
                completedPhases: completedPhases || 0,
            });
        } catch (emailError) {
            // Log email error but don't fail the request
            console.error("Failed to send emails:", emailError);
        }

        return NextResponse.json({
            success: true,
            leadId: lead.id,
            message: "Your roadmap is on its way!",
        });
    } catch (error) {
        console.error("Estimator submission error:", error);
        return NextResponse.json(
            { error: "Failed to process submission" },
            { status: 500 }
        );
    }
}
