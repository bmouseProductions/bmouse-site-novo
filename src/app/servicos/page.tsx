import React from "react";
import Image from "next/image";
import Agencia from "../home/Agencia";

const Servicos = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Título e subtítulo */}
        <div className="mb-10 text-center md:text-left">
          <span className="border rounded-full border-[#14163A] py-2 px-4 text-sm uppercase inline-block franie">
            Sobre nós
          </span>
        </div>

        <div className="gap-4 mb-16">
          <h1 className="text-4xl sm:text-5xl uppercase leading-tight max-w-6xl mb-10 text-center md:text-left franie">
            Posicionamento estratégico, autoridade e legado{" "}
          </h1>

          <Image
            src="/servicos/bmouse.png"
            width={1464}
            height={297}
            alt="Bmouse Productions"
            className="w-full h-auto"
          />
        </div>

        {/* Grade de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              src: "/servicos/kv.png",
              text: "CRIAÇÃO DE IDENTIDADE VISUAL E KV",
            },
            { src: "/servicos/rede.png", text: "GESTÃO DE REDES SOCIAIS" },
            {
              src: "/servicos/roteiro.png",
              text: "Roteirização e produção de Reels virais",
            },
            {
              src: "/servicos/performance.png",
              text: "Performance e impulsionamento",
            },
            {
              src: "/servicos/producao.png",
              text: "Produção de vídeos documentais e institucionais",
            },
            {
              src: "/servicos/infoprod.png",
              text: "Lançamentos digitais e infoprodutos",
            },
          ].map(({ src, text }, i) => (
            <div key={i} className="relative w-full h-auto">
              <Image
                src={src}
                width={722}
                height={297}
                alt={text}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <p className="text-white text-lg sm:text-xl md:text-2xl font-light leading-snug franie uppercase">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagem final */}
        <div className="pt-5 relative">
          <Image
            src="/servicos/estrategia.png"
            width={1464}
            height={297}
            alt="Bmouse Productions"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <p className="text-white text-lg sm:text-xl md:text-2xl font-light leading-snug franie uppercase">
              Estratégias completas de branding e reputação
            </p>
          </div>
        </div>

        {/* Botão */}
        <div className="mt-16 flex justify-center">
          <button className="bg-black text-white px-6 py-3 transition franie">
            Ver pacotes e planos
          </button>
        </div>
      </div>

      {/* Componente Agência */}
      <div className="pt-32">
        <Agencia />
      </div>
    </section>
  );
};

export default Servicos;
