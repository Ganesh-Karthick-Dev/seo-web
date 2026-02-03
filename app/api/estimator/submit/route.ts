import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            email,
            platform,
            aiFeatures,
            payments,
            designReady,
            totalDays,
            totalCost,
            resultState,
        } = body;

        // Validate required fields
        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Valid email is required" },
                { status: 400 }
            );
        }

        // Store lead in database
        const lead = await prisma.estimatorLead.create({
            data: {
                email,
                platform: platform || "",
                aiFeatures: aiFeatures || "",
                payments: payments || "",
                designReady: designReady || "",
                totalDays: totalDays || 0,
                totalCost: totalCost || 0,
                resultState: resultState || "unknown",
            },
        });

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
