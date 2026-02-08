import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendClient = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (body.website) {
      return NextResponse.json({ ok: true });
    }
    const {
      name,
      email,
      phone,
      moveDate,
      fromZip,
      toZip,
      floorFrom,
      floorTo,
      elevatorFrom,
      elevatorTo,
      apartmentSize,
      assemblyItems,
      message,
      gdpr,
    } = body;
    if (!name || !email || !phone || !gdpr) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const recipient = process.env.QUOTE_EMAIL_TO || "quote@example.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Move date: ${moveDate}`,
      `From ZIP: ${fromZip}`,
      `To ZIP: ${toZip}`,
      `Floor from: ${floorFrom ?? "-"}`,
      `Floor to: ${floorTo ?? "-"}`,
      `Elevator from: ${elevatorFrom ?? "-"}`,
      `Elevator to: ${elevatorTo ?? "-"}`,
      `Apartment size: ${apartmentSize ?? "-"}`,
      `Assembly items: ${assemblyItems ?? "-"}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    if (resendClient) {
      const { error } = await resendClient.emails.send({
        from: fromEmail,
        to: recipient,
        subject: `Quote request from ${name}`,
        text,
      });
      if (error) {
        console.error("[Quote API] Resend error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    } else {
      console.log("[Quote request]", { recipient, name, email, phone, moveDate, fromZip, toZip });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[Quote API]", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
