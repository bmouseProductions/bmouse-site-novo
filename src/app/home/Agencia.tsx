import React from "react";

const Agencia = () => {
  return (
    <section className="relative mx-auto  container md:h-[90vh] h-[500px]  overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/diamonds.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo em HTML5.
      </video>

      <div className="absolute inset-0 bg-black opacity-70" />

      <div className="relative z-10 md:h-full w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-white">
        <div className="text-left md:w-1/2 mt-20 md:mt-0">
          <span className="inline-block border border-white px-4 py-1 text-xs tracking-widest rounded-full mb-4">
            SOBRE NÓS
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold md:leading-tight">
            FAÇA JÁ O SEU <br /> ORÇAMENTO
          </h1>
        </div>

        <div className="md:text-right text-center md:w-1/2 mt-10 md:mt-0 space-y-6">
          <p className="text-sm md:text-base max-w-sm ml-auto">
            Está pronto para crescer com estratégia e verdade?
            <br />
            Clique abaixo e receba sua proposta personalizada.
          </p>
          <a
            href="https://wa.me/5534999869888?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20quero%20saber%20mais%20sobre%20o%20trabalho%20do%20Grupo%20BMouse"
            target="_blank"
            className="md:inline-block bg-white text-black text-sm px-6 py-3 font-semibold hover:opacity-90 transition rounded"
          >
            QUERO MEU PLANEJAMENTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Agencia;
