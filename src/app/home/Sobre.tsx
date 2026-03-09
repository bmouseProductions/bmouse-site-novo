import React from "react";
import Image from "next/image";

const projetos = [
  {
    src: "/projetos/cury/cury-desk.png",
    alt: "The most read psichiatrist in the world",
    slug: "augusto-cury",
    cols: "md:col-span-5 md:row-span-2 row-span-1 col-span-3",
  },
  {
    src: "/projetos/corte/corte-desk.png",
    srcMobile: "/projetos/corte/corte-desk.png",
    alt: "Wanderley Nunes – Entre Cortes e Sabores",
    slug: "wanderley-nunes",
    cols: "col-span-3 md:row-span-2 row-span-1",
  },
  {
    src: "/projetos/matarazzo/matarazzo-desk.png",
    alt: "SÉRIE: RAÍZES DE UM NOME - JAYME MONJARDIM",
    cols: "md:col-span-2 col-span-3 row-span-1",
    slug: "raizes-de-um-nome",
  },
  {
    src: "/projetos/vivi/vivi-desk.png",
    alt: "Vivi Mascaro",
    cols: "md:col-span-2 col-span-3 row-span-1",
    slug: "vivi-mascaro",
  },
  {
    src: "/projetos/nathy/nathy-mobile.png",
    srcMobile: "/projetos/nathy/nathy-desk.png",
    alt: "Nathalia Schneider ",
    cols: "md:col-span-2 col-span-3 md:row-span-2 row-span-1",
    slug: "nathy-schneider",
  },
  {
    src: "/projetos/rodrigo-mangaravite/rodrigo-mangaravite.jpeg",
    alt: "Dr. Rodrigo Mangaravite",
    cols: "col-span-3 md:row-span-2 row-span-1",
    slug: "rodrigo-mangaravite",
  },
  {
    src: "/projetos/rodrigo-moraes/rodrigo-desk.png",
    alt: "Rodrigo Moraes",
    cols: "md:col-span-3 md:row-span-2 row-span-1 col-span-3",
    slug: "rodrigo-moraes",
  },
  {
    src: "/projetos/sorriso.jpg",
    alt: "Força de um sorriso",
    slug: "filme-a-forca-de-um-sorriso-grupo-salus",
    cols: "md:col-span-2 md:row-span-2 row-span-1 col-span-3",
  },
];

const Sobre = () => {
  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:text-left">
          <span className="border rounded-full border-[#14163A] py-2 px-4 text-sm uppercase inline-block franie">
            PORTFÓLIO
          </span>
        </div>

        <div className="flex justify-between md:items-start flex-wrap gap-4 mb-16">
          <h1 className="text-5xl md:text-5xl font-serif uppercase text-black leading-tight max-w-2xl md:text-left franie">
            Cases de Sucesso
          </h1>
          <span className="text-sm mt-4 md:mt-2 max-w-md hidden md:block franie">
            Transformações reais. Resultados comprovados. <br />
            <br />
            Explore nossos projetos e veja como transformamos potencial em autoridade.
          </span>
          <p className="md:hidden text-md franie">
            Transformações reais. Resultados comprovados.
            <br />
            <br />
            Explore nossos projetos e veja como transformamos potencial em autoridade.
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
                      <a
                        href={`https://cases.bmouse.com.br/${projeto.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                      </a>
                    </picture>
                  ) : (
                    <a
                      href={`https://cases.bmouse.com.br/${projeto.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão */}
        <div className="mt-16 flex justify-center">
          <button className="bg-black text-white px-6 py-3 transition franie">
            <a href="/cases-de-sucesso">Ver Todos Os Cases</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
