import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, date, time, guests, message } = body;

  if (!name || !email || !date || !time) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp-mail.outlook.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Loki's Pasta Website" <${process.env.SMTP_USER}>`,
      to: "bielefeld@lokispasta.de",
      replyTo: email,
      subject: `🍝 Neue Reservierungsanfrage – ${name} (${date}, ${time})`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #faf7f2; border-radius: 12px;">
          <h1 style="color: #3D5A3E; font-size: 24px; margin-bottom: 8px;">Neue Reservierungsanfrage</h1>
          <p style="color: #C47B5A; font-size: 14px; margin-bottom: 32px; text-transform: uppercase; letter-spacing: 2px;">Loki's Pasta Bielefeld</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ede7db;">
              <td style="padding: 12px 0; color: #888; font-size: 13px; width: 40%;">Name</td>
              <td style="padding: 12px 0; color: #2C1A0E; font-weight: bold;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede7db;">
              <td style="padding: 12px 0; color: #888; font-size: 13px;">E-Mail</td>
              <td style="padding: 12px 0; color: #2C1A0E;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `<tr style="border-bottom: 1px solid #ede7db;">
              <td style="padding: 12px 0; color: #888; font-size: 13px;">Telefon</td>
              <td style="padding: 12px 0; color: #2C1A0E;">${phone}</td>
            </tr>` : ""}
            <tr style="border-bottom: 1px solid #ede7db;">
              <td style="padding: 12px 0; color: #888; font-size: 13px;">Datum</td>
              <td style="padding: 12px 0; color: #2C1A0E; font-weight: bold;">${new Date(date).toLocaleDateString("de-DE", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede7db;">
              <td style="padding: 12px 0; color: #888; font-size: 13px;">Uhrzeit</td>
              <td style="padding: 12px 0; color: #2C1A0E; font-weight: bold;">${time} Uhr</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede7db;">
              <td style="padding: 12px 0; color: #888; font-size: 13px;">Personen</td>
              <td style="padding: 12px 0; color: #2C1A0E;">${guests}</td>
            </tr>
            ${message ? `<tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; vertical-align: top;">Anmerkungen</td>
              <td style="padding: 12px 0; color: #2C1A0E;">${message}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #3D5A3E; border-radius: 8px; text-align: center;">
            <p style="color: #faf7f2; margin: 0; font-size: 14px;">Bitte antworte dem Gast direkt an <a href="mailto:${email}" style="color: #C9A96E;">${email}</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
  }
}
