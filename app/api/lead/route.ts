import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, pages, description, estimate } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.SMTP_TO || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"Ranquel Tech Lab" <${process.env.SMTP_USER}>`,
      to,
      subject: `Nuevo lead web/app - ${name}`,
      text: `
Nuevo lead desde el chatbot de Ranquel Tech Lab:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}

Tipo de proyecto: ${projectType}
Páginas aproximadas: ${pages}

Descripción:
${description}

Presupuesto aproximado mostrado al cliente:
${estimate?.min} - ${estimate?.max} ${estimate?.currency}

Notas:
- Datos aproximados y orientativos. Cada proyecto se cotiza aparte.
- Se puede cobrar en cuotas por Mercado Pago.
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

