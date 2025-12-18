import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations'
import { SITE_CONFIG } from '@/lib/constants'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  if (!resend) {
    console.error('Resend API key not configured')
    return Response.json(
      { error: 'Email service not configured' },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return Response.json(
        { error: 'Invalid data', details: result.error },
        { status: 400 }
      )
    }

    const { name, email, phone, location, interest, message } = result.data

    // Send email to Enercam
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New ${interest} inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Interest:</strong> ${interest}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #0ea5e9;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from the Enercam website contact form.
          </p>
        </div>
      `,
    })

    // Send auto-reply to customer
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: 'Thank you for contacting Enercam Solar Roofs',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank You for Contacting Us</h2>
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to Enercam Solar Roofs. We've received your message and one of our specialists will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to explore our products and case studies on our website.</p>
          </div>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${SITE_CONFIG.url}/products"
               style="background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Explore Our Products
            </a>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <div style="color: #666; font-size: 14px;">
            <p><strong>Enercam Solar Roofs</strong></p>
            <p>Phone: ${SITE_CONFIG.phone}</p>
            <p>Email: ${SITE_CONFIG.email.info}</p>
            <p>Serving: Cameroon • Chad • Gabon • Congo • Equatorial Guinea • CAR</p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
