// app/api/referral/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, jobTitle, email, tel, council, county, numberOfCases, dateRequired, specialNotes } = body;

  try {
    await resend.emails.send({
      from: "Nurturing Nests <no-reply@nurturingnests.co.uk>",
      to: ["referrals@nurturingnests.co.uk"],
      replyTo: email,
      subject: `New referral from ${council} — ${numberOfCases} case(s)`,
      html: `
        <h2>New Referral</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Job title:</b> ${jobTitle}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${tel}</p>
        <p><b>Council:</b> ${council}</p>
        <p><b>County:</b> ${county}</p>
        <p><b>Number of cases:</b> ${numberOfCases}</p>
        <p><b>Date required:</b> ${dateRequired}</p>
        <p><b>Special notes:</b> ${specialNotes || "None"}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
