// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, organisation, message } = await req.json();
  try {
    await resend.emails.send({
      from: "Nurturing Nests <no-reply@nurturingnests.co.uk>",
      to: ["info@nurturingnests.co.uk"],
      replyTo: email,
      subject: `New message from ${name}${organisation ? ` — ${organisation}` : ""}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Organisation:</b> ${organisation || "Not provided"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
