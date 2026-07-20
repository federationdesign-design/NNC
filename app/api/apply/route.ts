import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phone, address, rightToWork, currentRole, yearsExperience, qualifications, dbsStatus, whyNurturingNests, jobTitle } = body;
  try {
    await resend.emails.send({
      from: "Nurturing Nests <no-reply@nurturingnests.co.uk>",
      to: ["info@nurturingnests.co.uk"],
      replyTo: email,
      subject: `New application: ${jobTitle} — ${firstName} ${lastName}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Role:</b> ${jobTitle}</p>
        <h3>Personal details</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Location:</b> ${address}</p>
        <p><b>Right to work:</b> ${rightToWork}</p>
        <h3>Experience</h3>
        <p><b>Current role:</b> ${currentRole || "Not stated"}</p>
        <p><b>Years experience:</b> ${yearsExperience || "Not stated"}</p>
        <p><b>Qualifications:</b> ${qualifications || "Not stated"}</p>
        <p><b>DBS:</b> ${dbsStatus || "Not stated"}</p>
        <p><b>Why Nurturing Nests:</b> ${whyNurturingNests}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
