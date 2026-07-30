export default function OneSection() {
  return (
    <section className="px-[clamp(24px,6vw,100px)] py-[80px] grid grid-cols-[0.8fr_1.2fr] items-center min-h-[650px] bg-[#060806]" id="sistema-1ne" style={{
      backgroundImage: 'radial-gradient(circle at 68% 45%, rgba(164, 168, 43, 0.13), transparent 35%)'
    }}>
      <div className="one-copy">
        <p className="m-0 mb-5 text-[11px] font-black tracking-[0.17em] uppercase text-[#c3c82e]">Sistema 1ne</p>
        <h2 className="m-[10px_0] font-['Bebas_Neue'] text-[86px] leading-[0.88] uppercase">
          Una batería.<br />
          Todo el sistema.
        </h2>
        <p className="max-w-[490px] text-[#c2c5bf] leading-[1.7]">
          Menos complicaciones. Más herramientas. Más libertad. Una plataforma
          de 20V diseñada para crecer con el profesional.
        </p>
        <div className="flex gap-[10px] flex-wrap mt-[25px]">
          <b className="px-[15px] py-[11px] border border-white/22 text-[11px] uppercase">20V</b>
          <b className="px-[15px] py-[11px] border border-white/22 text-[11px] uppercase">Brushless</b>
          <b className="px-[15px] py-[11px] border border-white/22 text-[11px] uppercase">2Ah · 4Ah · 5Ah</b>
        </div>
      </div>
      <div className="relative h-[560px] flex items-center justify-center">
        <img
          src="/lifestyle/1ne-system-hero.png.png"
          alt="Sistema de batería Stevron 1ne 20V"
          className="w-full h-full object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.55)]"
        />
      </div>
    </section>
  );
}
