'use client';

export default function LaunchFocus() {
  const handleProductClick = (group: string) => {
    const event = new CustomEvent('setProductGroup', { detail: group });
    window.dispatchEvent(event);
    const catalogueElement = document.getElementById('catalogo');
    if (catalogueElement) {
      catalogueElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      <article className="relative min-h-[420px] md:min-h-[460px] overflow-hidden md:border-r border-b md:border-b-0 border-white/25 cursor-pointer group">
        <img
          src="/lifestyle/hand-tools.jpg"
          alt="Herramientas manuales Stevron"
          className="absolute w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/96 to-black/12"></div>
        <div className="absolute z-20 left-[24px] md:left-[30px] bottom-[24px] md:bottom-[30px] max-w-[75%]">
          <span className="inline-flex px-[10px] py-[7px] text-[#080a08] bg-[#c3c82e] text-[9px] font-black uppercase">Disponible en Chile</span>
          <h2 className="m-[13px_0_7px] font-['Bebas_Neue'] text-[clamp(36px,7vw,52px)] leading-[0.94] uppercase">Herramientas manuales</h2>
          <p className="text-[#c8cbc5] text-[12px] leading-[1.55]">Diseñadas para durar. Construidas para vender.</p>
          <a onClick={() => handleProductClick('Herramientas manuales')} className="text-[#c3c82e] text-[11px] font-black uppercase cursor-pointer hover:underline">Explorar →</a>
        </div>
      </article>

      <article className="relative min-h-[420px] md:min-h-[460px] overflow-hidden md:border-r border-b md:border-b-0 border-white/25 cursor-pointer group">
        <img
          src="/lifestyle/impact-bits.jpg"
          alt="Accesorios Stevron"
          className="absolute w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/96 to-black/12"></div>
        <div className="absolute z-20 left-[24px] md:left-[30px] bottom-[24px] md:bottom-[30px] max-w-[75%]">
          <span className="inline-flex px-[10px] py-[7px] text-[#080a08] bg-[#c3c82e] text-[9px] font-black uppercase">Disponible en Chile</span>
          <h2 className="m-[13px_0_7px] font-['Bebas_Neue'] text-[clamp(36px,7vw,52px)] leading-[0.94] uppercase">Accesorios</h2>
          <p className="text-[#c8cbc5] text-[12px] leading-[1.55]">Precisión y rendimiento en cada detalle.</p>
          <a onClick={() => handleProductClick('Accesorios')} className="text-[#c3c82e] text-[11px] font-black uppercase cursor-pointer hover:underline">Explorar →</a>
        </div>
      </article>

      <article className="relative min-h-[420px] md:min-h-[460px] overflow-hidden cursor-pointer group">
        <img
          src="/lifestyle/impact-wrench.png"
          alt="Herramientas inalámbricas Stevron"
          className="absolute w-full h-full object-cover object-center bg-[#080a08] transition-transform duration-600 group-hover:scale-105 brightness-[0.58]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/96 to-black/12"></div>
        <div className="absolute z-20 left-[24px] md:left-[30px] bottom-[24px] md:bottom-[30px] max-w-[75%]">
          <span className="inline-flex px-[10px] py-[7px] text-white bg-[#626662] text-[9px] font-black uppercase">Próximamente</span>
          <h2 className="m-[13px_0_7px] font-['Bebas_Neue'] text-[clamp(36px,7vw,52px)] leading-[0.94] uppercase">Herramientas a batería</h2>
          <p className="text-[#c8cbc5] text-[12px] leading-[1.55]">Potencia profesional sobre la plataforma 1ne.</p>
          <a href="#sistema-1ne" className="text-[#c3c82e] text-[11px] font-black uppercase hover:underline">Conocer 1ne →</a>
        </div>
      </article>
    </section>
  );
}
