import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();
  // const { name, email, message, captcha } = await req.json();

  // ✅ Check if Captcha is Provided
  // if (!captcha) {
  //   return NextResponse.json(
  //     { message: "Captcha is required" },
  //     { status: 400 }
  //   );
  // }

  // ✅ Verify reCAPTCHA with Google
  // const captchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  // const captchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${captcha}`;

  // const captchaRes = await fetch(captchaVerifyUrl, { method: "POST" });
  // const captchaJson = await captchaRes.json();

  // if (!captchaJson.success) {
  //   return NextResponse.json(
  //     { message: "Captcha verification failed" },
  //     { status: 400 }
  //   );
  // }

  // ✅ Google OAuth for Nodemailer
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
