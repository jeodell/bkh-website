import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    // Get the form data from the request body
    const body = await req.json()
    const { name, email, message } = body

    // Get the email provider credentials from environment variables
    const username = process.env.EMAIL_USERNAME
    const password = process.env.EMAIL_PASSWORD
    const emailTo = process.env.EMAIL_TO

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: username,
        pass: password,
      },
    })

    // Create the email message
    const mailOptions = {
      from: email,
      to: emailTo,
      subject: 'New contact form submission',
      text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    // Return an error response if the email fails to send
    console.error(error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}
