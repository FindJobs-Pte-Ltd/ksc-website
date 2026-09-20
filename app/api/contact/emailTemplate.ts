interface EnquiryFields {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  message: string;
}

export function generateEnquiryEmailHtml({
  name,
  email,
  phone,
  reason,
  message,
}: EnquiryFields) {
  const fields = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Phone", value: phone || "-" },
    { label: "Contacting KSC about", value: reason },
  ];

  return `
    <div style="max-width: 560px; margin: 0 auto; font-family: Arial, sans-serif; color: #0f1c1f;">
      <div style="border-bottom: 2px solid #50afb5; padding-bottom: 16px; margin-bottom: 24px;">
        <p style="margin: 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #50afb5; font-weight: bold;">
          KSC Consultants
        </p>
        <h1 style="margin: 8px 0 0; font-size: 20px; color: #0f1c1f;">New Enquiry</h1>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        ${fields
          .map(
            (field) => `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #c0d8dc; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: #4a6a6e; width: 160px; vertical-align: top;">
              ${field.label}
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #c0d8dc; font-size: 14px; color: #0f1c1f;">
              ${field.value}
            </td>
          </tr>
        `,
          )
          .join("")}
      </table>

      <div>
        <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: #4a6a6e;">
          Message
        </p>
        <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  `;
}
