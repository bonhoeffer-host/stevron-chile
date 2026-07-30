export default function Statement() {
  return (
    <section
      className="px-[clamp(18px,6vw,100px)] py-[60px] md:py-[75px] flex flex-col md:grid md:grid-cols-[1.4fr_0.75fr] gap-[30px] md:gap-[70px] items-center text-[#111] bg-[#f3f3ef]"
      id="nosotros"
      style={{
        backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 8px, rgba(0, 0, 0, 0.018) 8px 9px)',
      }}
    >
      <h2 className="m-0 font-['Oswald'] text-[clamp(32px,6vw,67px)] leading-[1.05] uppercase">
        La potencia no necesita hacer ruido.
        <br />
        <span className="text-[#a4a82b]">Necesita responder.</span>
      </h2>
      <p className="pl-0 md:pl-[35px] border-l-0 md:border-l border-[#aaa] text-[#565a55] leading-[1.75]">
        Stevron desarrolla herramientas pensadas para el trabajo real, donde la
        durabilidad, la precisión y el rendimiento marcan la diferencia.
      </p>
    </section>
  );
}
