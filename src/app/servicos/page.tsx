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
            "/servicos/kv.png",
            "/servicos/rede.png",
            "/servicos/roteiro.png",
            "/servicos/performance.png",
            "/servicos/producao.png",
            "/servicos/infoprod.png",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              width={722}
              height={297}
              alt="Bmouse Productions"
              className="w-full h-auto"
            />
          ))}
        </div>

        {/* Imagem final */}
        <div className="pt-5">
          <Image
            src="/servicos/estrategia.png"
            width={1464}
            height={297}
            alt="Bmouse Productions"
            className="w-full h-auto"
          />
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
