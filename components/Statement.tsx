export default function Statement() {
  return (
    <section className="px-[clamp(24px,6vw,100px)] py-[75px] grid grid-cols-[1.4fr_0.75fr] gap-[70px] items-center text-[#111] bg-[#f3f3ef]" id="nosotros" style={{
      backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 8px, rgba(0, 0, 0, 0.018) 8px 9px)'
    }}>
      <h2 className="m-0 font-['Oswald'] text-[clamp(38px,4vw,67px)] leading-[1.05] uppercase">
        La potencia no necesita hacer ruido.
        <br />
        <span className="text-[#a4a82b]">Necesita responder.</span>
      </h2>
      <p className="pl-[35px] border-l border-[#aaa] text-[#565a55] leading-[1.75]">
        Stevron desarrolla herramientas pensadas para el trabajo real, donde la
        durabilidad, la precisión y el rendimiento marcan la diferencia.
      </p>
    </section>
  );
}
