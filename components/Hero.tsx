'use client';

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDistributors = () => {
    const element = document.getElementById('distribuidores');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[100svh] md:min-h-[890px] px-[clamp(24px,5vw,82px)] pt-[100px] md:pt-[150px] pb-[60px] md:pb-[70px] flex flex-col md:grid md:grid-cols-2 items-center overflow-hidden bg-[#050705]"
      id="inicio"
      style={{
        backgroundImage:
          'radial-gradient(circle at 78% 35%, rgba(164, 168, 43, 0.14), transparent 31%), repeating-linear-gradient(135deg, transparent 0 26px, rgba(255, 255, 255, 0.014) 27px 28px)',
      }}
    >
      {/* Copy */}
      <div className="relative z-40 text-center md:text-left">
        <p className="m-0 mb-5 text-[11px] font-black tracking-[0.17em] uppercase">Power. Simplified.</p>
        <h1 className="m-0 font-['Bebas_Neue'] text-[clamp(58px,12vw,126px)] leading-[0.95] tracking-[-0.015em] uppercase">
          Hecho para<br />
          el trabajo.<br />
          Diseñado para<br />
          <em className="not-italic text-[#c3c82e]">durar.</em>
        </h1>
        <p className="max-w-[520px] text-[clamp(15px,2.5vw,18px)] leading-[1.65] text-[#d2d4cf] mx-auto md:mx-0 mt-4">
          Herramientas profesionales para quienes construyen, reparan y crean todos los días.
        </p>
        <div className="flex gap-[13px] flex-wrap mt-[30px] justify-center md:justify-start">
          <button
            onClick={scrollToProducts}
            className="min-h-[52px] px-6 inline-flex items-center justify-center border border-transparent uppercase text-[11px] font-black tracking-[0.035em] transition-transform hover:translate-y-[-3px] text-[#070907] bg-gradient-to-br from-[#c5ca2e] to-[#969b27]"
          >
            Explorar productos →
          </button>
          <button
            onClick={scrollToDistributors}
            className="min-h-[52px] px-6 inline-flex items-center justify-center border border-white/55 bg-black/18 uppercase text-[11px] font-black tracking-[0.035em] transition-transform hover:translate-y-[-3px]"
          >
            Ser distribuidor
          </button>
        </div>
      </div>

      {/* Tool image */}
      <div className="relative z-30 flex justify-center md:justify-end w-full mt-10 md:mt-0">
        <img
          className="w-[min(360px,80vw)] md:w-[min(680px,53vw)] drop-shadow-[0_35px_40px_rgba(0,0,0,0.6)]"
          src="/lifestyle/drill-75nm.png"
          alt="Taladro Stevron 75 Nm"
        />
        {/* Caption */}
        <div className="absolute bottom-2 right-[5%] pl-4 border-l-2 border-[#a4a82b] hidden sm:block">
          <strong className="block font-['Oswald'] text-[19px]">BNCID75K</strong>
          <span className="text-[10px] text-[#c7cac4]">75 Nm · 20V · Brushless · ATS</span>
        </div>
      </div>

      {/* Decorative background */}
      <div
        className="absolute right-[-4%] bottom-[-8%] w-[62%] h-[34%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(130, 130, 100, 0.22), transparent 65%), repeating-radial-gradient(ellipse, #121511 0 4px, #050605 5px 12px)',
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
        }}
      ></div>
    </section>
  );
}
