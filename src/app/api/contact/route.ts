import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const smtpHost = process.env.SMTP_HOST
const smtpPort = Number(process.env.SMTP_PORT ?? '587')
const smtpUser = process.env.SMTP_USER
const smtpPassword = process.env.SMTP_PASSWORD
const emailRecipient = process.env.CONTACT_EMAIL ?? 'contact@groupkoinonos.com'
const emailFromName = process.env.EMAIL_FROM_NAME ?? 'KOINONOS'

function requireSmtp() {
  if (!smtpHost || !smtpUser || !smtpPassword) {
    throw new Error('SMTP_HOST, SMTP_USER and SMTP_PASSWORD must be defined in environment variables.')
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ message: 'Payload invalide' }, { status: 400 })
  }

  const { name, company, phone, email, service, description } = body as {
    name: string
    company?: string
    phone?: string
    email: string
    service?: string
    description: string
  }

  if (!name || !email || !description) {
    return NextResponse.json(
      { message: 'Veuillez fournir le nom, l’email et le message.' },
      { status: 400 },
    )
  }

  requireSmtp()

  const safeName = escapeHtml(name)
  const safeCompany = escapeHtml(company ?? '-')
  const safePhone = escapeHtml(phone ?? '-')
  const safeEmail = escapeHtml(email)
  const safeService = escapeHtml(service ?? '-')
  const safeDescription = escapeHtml(description).replace(/\n/g, '<br/>')

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  })

  const mailOptions = {
    from: `${emailFromName} <${smtpUser}>`,
    replyTo: `${name} <${email}>`,
    to: emailRecipient,
    subject: `Nouveau message du formulaire KOINONOS : ${service || 'Demande de contact'}`,
    text: `Nom: ${name}
Entreprise: ${company ?? '-'}
Téléphone: ${phone ?? '-'}
Email: ${email}
Service: ${service ?? '-'}

Message:
${description}`,
    html: `<p><strong>Nom:</strong> ${safeName}</p>
<p><strong>Entreprise:</strong> ${safeCompany}</p>
<p><strong>Téléphone:</strong> ${safePhone}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Service:</strong> ${safeService}</p>
<p><strong>Message:</strong><br/>${safeDescription}</p>`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Message envoyé avec succès.' })
  } catch (error) {
    console.error('SMTP send error:', error)
    return NextResponse.json(
      { message: 'Erreur lors de l’envoi du message.' },
      { status: 500 },
    )
  }
}
