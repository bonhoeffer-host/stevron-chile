
"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Error al enviar el mensaje.");
      }

      setStatus("¡Gracias! Tu consulta ha sido enviada correctamente.");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "No se pudo enviar tu consulta. Inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="px-[clamp(18px,6vw,100px)] py-[65px] md:py-[85px] flex flex-col md:grid md:grid-cols-[0.9fr_1.1fr] gap-[40px] md:gap-[75px] text-[#111] bg-[#f1f1ec]"
      id="contacto"
    >
      <div>
        <p className="m-0 mb-5 text-[11px] font-black tracking-[0.17em] uppercase text-[#a4a82b]">
          Contacto
        </p>

        <h2 className="m-[10px_0] font-['Bebas_Neue'] text-[clamp(42px,8vw,72px)] leading-[0.9] uppercase">
          Hablemos de herramientas.
          <br />
          Y de crecimiento.
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]"
      >
        <input
          required
          type="text"
          placeholder="Nombre y apellido"
          name="name"
          className="px-4 py-4 border border-[#bfc1bb] bg-white outline-0"
        />

        <input
          required
          type="email"
          placeholder="Correo electrónico"
          name="email"
          className="px-4 py-4 border border-[#bfc1bb] bg-white outline-0"
        />

        <input
          type="text"
          placeholder="Empresa"
          name="company"
          className="px-4 py-4 border border-[#bfc1bb] bg-white outline-0"
        />

        <select
          name="subject"
          required
          className="px-4 py-4 border border-[#bfc1bb] bg-white outline-0"
        >
          <option value="">Motivo de contacto</option>
          <option value="Distribución">Distribución</option>
          <option value="Producto">Producto</option>
          <option value="Soporte">Soporte</option>
        </select>

        <textarea
          required
          placeholder="Cuéntanos cómo podemos ayudarte"
          name="message"
          className="sm:col-span-2 px-4 py-4 border border-[#bfc1bb] bg-white outline-0 min-h-[130px] resize-vertical"
        />

        {status && (
          <p
            role="status"
            className="sm:col-span-2 text-sm font-semibold text-[#555]"
          >
            {status}
          </p>
        )}

        <button
          className="sm:col-span-2 justify-self-start min-h-[52px] px-6 inline-flex items-center justify-center border border-transparent uppercase text-[11px] font-black tracking-[0.035em] transition-transform hover:translate-y-[-3px] disabled:opacity-60 disabled:cursor-not-allowed text-[#070907] bg-gradient-to-br from-[#c5ca2e] to-[#969b27]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar consulta →"}
        </button>
      </form>
    </section>
  );
}
