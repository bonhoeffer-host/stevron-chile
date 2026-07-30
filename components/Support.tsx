export default function Support() {
  return (
    <section className="px-[clamp(24px,6vw,100px)] py-[80px] text-[#111] bg-[#f3f3ef]" id="soporte">
      <div className="flex items-end justify-between gap-[30px] mb-[45px]">
        <p className="m-0 text-[11px] font-black tracking-[0.17em] uppercase text-[#a4a82b]">Soporte Stevron</p>
        <h2 className="m-0 font-['Bebas_Neue'] text-[70px] leading-[0.9] uppercase">
          La herramienta sigue.<br />
          El respaldo también.
        </h2>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[12px]">
        <article className="p-[32px] border border-[#d1d2cd] bg-white">
          <b className="text-[#a4a82b] font-['Oswald'] text-[30px] block">01</b>
          <h3 className="font-['Oswald'] uppercase">Garantía</h3>
          <p className="text-[#676b65] text-[12px] leading-[1.65]">
            Procesos claros para registrar, validar y gestionar cada producto.
          </p>
        </article>
        <article className="p-[32px] border border-[#d1d2cd] bg-white">
          <b className="text-[#a4a82b] font-['Oswald'] text-[30px] block">02</b>
          <h3 className="font-['Oswald'] uppercase">Manuales y fichas</h3>
          <p className="text-[#676b65] text-[12px] leading-[1.65]">
            Información técnica y documentación para el uso correcto.
          </p>
        </article>
        <article className="p-[32px] border border-[#d1d2cd] bg-white">
          <b className="text-[#a4a82b] font-['Oswald'] text-[30px] block">03</b>
          <h3 className="font-['Oswald'] uppercase">Repuestos</h3>
          <p className="text-[#676b65] text-[12px] leading-[1.65]">
            Disponibilidad de piezas y consumibles para mayor continuidad.
          </p>
        </article>
        <article className="p-[32px] border border-[#d1d2cd] bg-white">
          <b className="text-[#a4a82b] font-['Oswald'] text-[30px] block">04</b>
          <h3 className="font-['Oswald'] uppercase">Asistencia comercial</h3>
          <p className="text-[#676b65] text-[12px] leading-[1.65]">
            Material, capacitación y apoyo para distribuidores y puntos de
            venta.
          </p>
        </article>
      </div>
    </section>
  );
}
