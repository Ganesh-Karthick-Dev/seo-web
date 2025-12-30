import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, phone, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1. Internal Team Notification Email Template
        const internalMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to yourself
            subject: `New Lead: ${name} - ${company || 'No Company'}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
              .header { background: linear-gradient(to right, #ea580c, #f59e0b); padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
              .header h1 { color: white; margin: 0; font-size: 24px; }
              .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; }
              .field { margin-bottom: 20px; }
              .label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; font-weight: bold; }
              .value { font-size: 16px; color: #111827; margin-top: 5px; font-weight: 500; }
              .message-box { background-color: #fff7ed; border-left: 4px solid #f97316; padding: 15px; margin-top: 10px; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #9ca3af; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Lead Received 🚀</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #ea580c; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value">${phone || 'Not provided'}</div>
                </div>
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${company || 'Not provided'}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value message-box">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>Sent from your website contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
        };

        // 2. User Acknowledgement Email Template
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We received your message! - SEOPro',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 0; }
              .header { background-color: #000000; padding: 40px 20px; text-align: center; background-image: radial-gradient(circle at top right, #431407 0%, #000000 100%); }
              .logo { font-size: 24px; font-weight: bold; color: white; text-decoration: none; }
              .content { padding: 40px 20px; background-color: #ffffff; }
              .greeting { font-size: 20px; color: #111827; margin-bottom: 20px; }
              .text { color: #4b5563; margin-bottom: 20px; }
              .button { display: inline-block; background: linear-gradient(to right, #ea580c, #f59e0b); color: white; padding: 12px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; margin-top: 20px; }
              .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">SEOPro</div>
              </div>
              <div class="content">
                <h2 class="greeting">Hi ${name},</h2>
                <p class="text">Thanks for reaching out! We've received your message and our team is already reviewing it.</p>
                <p class="text">We specialize in helping businesses like yours scale through engineering-driven digital solutions. One of our experts will get back to you within 24 hours to discuss how we can help you achieve your goals.</p>
                <p class="text">In the meantime, feel free to check out our latest case studies.</p>
                <center>
                  <a href="https://yourwebsite.com/resources" class="button">View Resources</a>
                </center>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} SEOPro. All rights reserved.</p>
                <p>123 Business Ave, NY 10001</p>
              </div>
            </div>
          </body>
        </html>
      `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(internalMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return NextResponse.json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
