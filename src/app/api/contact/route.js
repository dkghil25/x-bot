import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

// Add CORS headers configuration
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, captcha } = body;

    // Enhanced validation for all required fields
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!message) missingFields.push("message");
    if (!captcha) missingFields.push("captcha");

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          missingFields,
          receivedData: body,
        },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Enhanced reCAPTCHA verification
    const captchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const captchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${captcha}`;

    const captchaRes = await fetch(captchaVerifyUrl, { method: "POST" });
    const captchaJson = await captchaRes.json();

    console.log("reCAPTCHA Verification Result:", {
      success: captchaJson.success,
      hostname: captchaJson.hostname,
      errors: captchaJson["error-codes"],
    });

    if (!captchaJson.success) {
      return NextResponse.json(
        {
          error: "Captcha verification failed",
          errorCodes: captchaJson["error-codes"],
          hostname: captchaJson.hostname,
        },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Google OAuth configuration
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

      // Configure transporter with better error handling
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

      // Verify transporter connection
      await transporter.verify((error) => {
        if (error) {
          console.error("SMTP Connection Error:", error);
          throw new Error("SMTP connection failed");
        }
      });

      // Send email
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL}>`,
        to: process.env.RECEIVER_EMAIL,
        replyTo: email,
        subject: `Contact Form Submission from ${name}`,
        text: message,
        html: `<p>${message}</p>`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);

      return NextResponse.json(
        { success: true, message: "Email sent successfully!" },
        {
          status: 200,
          headers: corsHeaders,
        }
      );
    } catch (error) {
      console.error("Email Send Error:", {
        message: error.message,
        stack: error.stack,
        code: error.code,
      });

      return NextResponse.json(
        {
          error: "Failed to send email",
          details:
            process.env.NODE_ENV === "development" ? error.message : null,
        },
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Invalid request format" },
      {
        status: 400,
        headers: corsHeaders,
      }
    );
  }
}
