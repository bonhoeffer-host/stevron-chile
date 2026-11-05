
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, email, company, subject, message } =
      await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Completa todos los campos obligatorios.",
        },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASSWORD,
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
      console.error("SMTP configuration missing");

      return NextResponse.json(
        { success: false, message: "Email configuration missing." },
        { status: 500 }
      );
    }

    const port = Number(SMTP_PORT || 465);

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD.replace(/\s/g, ""),
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    // Verify SMTP connection
    await transporter.verify();

    console.log("SMTP connection verified");

    const info = await transporter.sendMail({
      from: {
        name: "Mechnova",
        address: SMTP_USER,
      },

      // Receiver email
      to: "contacto@stevron.cl",

      // Reply directly to customer
      replyTo: email,

      subject: `Nueva consulta web: ${subject}`,

      text: `
Nueva consulta desde el sitio web de Mechnova

Nombre: ${name}
Correo electrónico: ${email}
Empresa: ${company || "No especificada"}
Motivo: ${subject}

Mensaje:
${message}
      `,

      html: `
        <div style="font-family:Arial,sans-serif;color:#222;max-width:600px;">
          <h2 style="color:#969b27;">Nueva consulta - Stevron</h2>

          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
          <p><strong>Empresa:</strong> ${escapeHtml(company || "No especificada")}</p>
          <p><strong>Motivo:</strong> ${escapeHtml(subject)}</p>

          <h3>Mensaje:</h3>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    // SMTP delivery diagnostics
    console.log("EMAIL RESULT:", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    if (!info.accepted || info.accepted.length === 0) {
      throw new Error("SMTP did not accept the recipient.");
    }

    return NextResponse.json({
      success: true,
      message: "Tu consulta ha sido enviada correctamente.",
    });

  } catch (error) {
    console.error("SMTP EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No se pudo enviar tu consulta. Inténtalo nuevamente.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[char];
  });
}
