import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { from_name, from_email, message } = await request.json();

    // Validate input
    if (!from_name || !from_email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'hotmail', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Beautiful HTML email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Message</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td align="center" style="padding: 40px 0;">
            <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Header with gradient -->
              <tr>
                <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                    New Contact Message
                  </h1>
                  <div style="width: 60px; height: 4px; background-color: rgba(255, 255, 255, 0.3); margin: 16px auto 0; border-radius: 2px;"></div>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  
                  <!-- Sender Info Card -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 12px; overflow: hidden; margin-bottom: 30px;">
                    <tr>
                      <td style="padding: 24px;">
                        <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 18px; font-weight: 600;">
                          Sender Information
                        </h2>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0;">
                              <table role="presentation" style="border-collapse: collapse;">
                                <tr>
                                  <td style="vertical-align: top; padding-right: 12px;">
                                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <span style="color: #ffffff; font-size: 18px; font-weight: 600;">👤</span>
                                    </div>
                                  </td>
                                  <td style="vertical-align: top;">
                                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                                    <p style="margin: 4px 0 0 0; color: #111827; font-size: 16px; font-weight: 500;">${from_name}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <tr>
                            <td style="padding: 16px 0 8px 0;">
                              <table role="presentation" style="border-collapse: collapse;">
                                <tr>
                                  <td style="vertical-align: top; padding-right: 12px;">
                                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                      <span style="color: #ffffff; font-size: 18px;">📧</span>
                                    </div>
                                  </td>
                                  <td style="vertical-align: top;">
                                    <p style="margin: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                                    <p style="margin: 4px 0 0 0; color: #3b82f6; font-size: 16px; font-weight: 500;">
                                      <a href="mailto:${from_email}" style="color: #3b82f6; text-decoration: none;">${from_email}</a>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Message Card -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                    <tr>
                      <td style="padding: 24px;">
                        <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 600;">
                          Message
                        </h2>
                        <div style="padding: 20px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #3b82f6;">
                          <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Reply Button -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 30px;">
                    <tr>
                      <td align="center">
                        <a href="mailto:${from_email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                          Reply to ${from_name}
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                    This message was sent from your portfolio contact form
                  </p>
                  <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                    Received on ${new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Plain text fallback
    const textTemplate = `
New Contact Message

From: ${from_name}
Email: ${from_email}

Message:
${message}

---
Received on ${new Date().toLocaleString()}
    `;

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your email to receive messages
      replyTo: from_email,
      subject: `New Contact Message from ${from_name}`,
      text: textTemplate,
      html: htmlTemplate,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}