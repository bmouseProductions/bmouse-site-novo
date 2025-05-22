import React from "react";
import Image from "next/image";

const projetos = [
  {
    src: "/projetos/tom.svg",
    alt: "Palestra",
    cols: "md:col-span-2 md:row-span-2 row-span-1 col-span-3",
  },
  { src: "/projetos/renata.svg", alt: "Renata Caldeira", cols: "col-span-3" },
  { src: "/projetos/junio.svg", alt: "JM", cols: "col-span-3" },
  {
    src: "/projetos/elisangela.svg",
    srcMobile: "/mobile/elis-mobile.png",
    alt: "Disângela Menezes",
    cols: "md:col-span-2 md:row-span-3 col-span-3 row-span-1",
  },
  {
    src: "/projetos/bomd.svg",
    alt: "Bomd+",
    cols: "col-span-3 md:row-span-3 row-span-1",
  },
  {
    src: "/projetos/nara.svg",
    alt: "Nara",
    cols: "col-span-3 md:row-span-2 row-span-1",
  },
  {
    src: "/projetos/sorridents.svg",
    alt: "Sorridents",
    cols: "md:col-span-2 col-span-3 row-span-1",
  },
  {
    src: "/projetos/gio.svg",
    alt: "Outdoor Roxo",
    cols: "md:col-span-2 col-span-3 row-span-1",
  },
];

const Sobre = () => {
  return (
    <section className="py-20 bg-white text-[#14163A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="mb-10 text-center md:text-left">
          <span className="border rounded-full border-[#14163A] py-2 px-4 text-sm uppercase inline-block franie">
            Sobre nós
          </span>
        </div>

        <div className="flex justify-between md:items-start flex-wrap gap-4 mb-16">
          <h1 className="text-5xl md:text-5xl font-serif uppercase leading-tight max-w-2xl text-center md:text-left franieTitle">
            Nossos <br /> Grandes Projetos
          </h1>
          <span className="italic text-sm mt-4 md:mt-2 hidden md:block franie">
            Explore <br /> Mais
          </span>
          <p className="md:hidden text-md text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium eu magna in ornare. Mauris a posuere lacus. Morbi a sodales
            turpis, vitae varius nibh. Suspendisse ex metus, sollicitudin vel
            risus eu......
          </p>
        </div>

        {/* Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {projetos.map((projeto, index) => {
            const isElisangela = projeto.alt === "Disângela Menezes";

            return (
              <div
                key={index}
                className={`relative w-full overflow-hidden rounded-lg ${projeto.cols} ${
                  isElisangela ? " h-auto" : "h-full"
                }`}
              >
                <div className="relative w-full h-auto aspect-video md:aspect-auto md:h-full">
                  {projeto.srcMobile ? (
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcSet={projeto.srcMobile}
                      />
                      <Image
                        src={projeto.src}
                        alt={projeto.alt}
                        fill
                        className={`transition-transform duration-300 ${
                          isElisangela
                            ? "object-cover"
                            : "hover:scale-105 object-cover"
                        }`}
                      />
                    </picture>
                  ) : (
                    <Image
                      src={projeto.src}
                      alt={projeto.alt}
                      fill
                      className={`transition-transform duration-300 ${
                        isElisangela
                          ? "object-cover"
                          : "hover:scale-105 object-cover"
                      }`}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão */}
        <div className="mt-16 flex justify-center">
          <button className="bg-[#14163A] text-white px-6 py-3 rounded-full hover:bg-[#1f225a] transition franie">
            VER MAIS DOS NOSSOS TRABALHOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
