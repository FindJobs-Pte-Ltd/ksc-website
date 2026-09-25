import { NextRequest, NextResponse } from "next/server";
import { generateEnquiryEmailHtml } from "./emailTemplate";

export async function POST(request: NextRequest) {
  const { name, email, phone, reason, message } = await request.json();

  if (!name || !email || !reason || !message) {
    return NextResponse.json(
      { error: "Required fields are missing" },
      { status: 400 },
    );
  }

  const domain = process.env.EMAIL_DOMAIN ?? "";
  const apiKey = process.env.EMAIL_API_KEY ?? "";

  const form = new FormData();
  form.append("from", "KSC Consultants <noreply@mail.findjobs.com.sg>");
  form.append("to", "it@findjobs.com.sg");
  form.append("h:Reply-To", email);
  form.append("subject", `[New Enquiry] ${reason} - ${name}`);
  form.append(
    "html",
    generateEnquiryEmailHtml({ name, email, phone, reason, message }),
  );

  try {
    const res = await fetch(
      `https://api.mailgun.net/v3/${domain}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
        },
        body: form,
      },
    );

    if (!res.ok) {
      console.error("Failed to send enquiry email:", await res.text());
      return NextResponse.json(
        { error: "Failed to send enquiry" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry" },
      { status: 500 },
    );
  }
}
