import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MailgunTransport } from "mailgun-nodemailer-transport";
import { generateEnquiryEmailHtml } from "./emailTemplate";

export async function POST(request: NextRequest) {
  const { name, email, phone, reason, message } = await request.json();

  if (!name || !email || !reason || !message) {
    return NextResponse.json(
      { error: "Required fields are missing" },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport(
    new MailgunTransport({
      auth: {
        apiKey: process.env.EMAIL_API_KEY ?? "",
        domain: process.env.EMAIL_DOMAIN ?? "",
      },
    }),
  );

  try {
    await transporter.sendMail({
      from: "KSC Consultants <noreply@mail.findjobs.com.sg>",
      to: "it@findjobs.com.sg",
      replyTo: email,
      subject: `[New Enquiry] ${reason} - ${name}`,
      html: generateEnquiryEmailHtml({ name, email, phone, reason, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry" },
      { status: 500 },
    );
  }
}
