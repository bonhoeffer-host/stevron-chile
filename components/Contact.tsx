'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      'Gracias. Tu consulta ha sido preparada. Conecta este formulario a tu CRM o correo antes del lanzamiento.'
    );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="px-[clamp(24px,6vw,100px)] py-[85px] grid grid-cols-[0.9fr_1.1fr] gap-[75px] text-[#111] bg-[#f1f1ec]" id="contacto">
      <div>
        <p className="m-0 mb-5 text-[11px] font-black tracking-[0.17em] uppercase text-[#a4a82b]">Contacto</p>
        <h2 className="m-[10px_0] font-['Bebas_Neue'] text-[72px] leading-[0.9] uppercase">
          Hablemos de herramientas.<br />
          Y de crecimiento.
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-[12px]">
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
        <select name="subject" required className="px-4 py-4 border border-[#bfc1bb] bg-white outline-0">
          <option value="">Motivo de contacto</option>
          <option value="Distribución">Distribución</option>
          <option value="Producto">Producto</option>
          <option value="Soporte">Soporte</option>
        </select>
        <textarea
          required
          placeholder="Cuéntanos cómo podemos ayudarte"
          name="message"
          className="col-span-2 px-4 py-4 border border-[#bfc1bb] bg-white outline-0 min-h-[130px] resize-vertical"
        ></textarea>
        <button className="col-span-2 justify-self-start min-h-[52px] px-6 inline-flex items-center justify-center border border-transparent uppercase text-[11px] font-black tracking-[0.035em] transition-transform hover:translate-y-[-3px] text-[#070907] bg-gradient-to-br from-[#c5ca2e] to-[#969b27]" type="submit">
          Enviar consulta →
        </button>
      </form>
    </section>
  );
}
