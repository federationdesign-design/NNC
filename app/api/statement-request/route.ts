import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, organisation, role, reason, homeName } = await req.json();
  try {
    await resend.emails.send({
      from: "Nurturing Nests <no-reply@nurturingnests.co.uk>",
      to: ["info@nurturingnests.co.uk"],
      replyTo: email,
      subject: `Statement of Purpose request — ${homeName} — ${name}`,
      html: `
        <h2>Statement of Purpose Request</h2>
        <p><b>Home:</b> ${homeName}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Organisation:</b> ${organisation}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Reason:</b> ${reason || "Not provided"}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
