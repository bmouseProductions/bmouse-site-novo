import React from "react";
import Image from "next/image";
import Agencia from "../home/Agencia";

const projetos = [
  {
    src: "/cases-black/tom-black.svg",
    alt: "Palestra",
    cols: "md:col-span-2 md:row-span-2 row-span-1 col-span-3",
  },
  {
    src: "/cases-black/renata-black.svg",
    alt: "Renata Caldeira",
    cols: "col-span-3",
  },
  { src: "/cases-black/jm-black.svg", alt: "JM", cols: "col-span-3" },
  {
    src: "/cases-black/elis-black.svg",
    srcMobile: "/cases-black/elis-black.svg",
    alt: "Disângela Menezes",
    cols: "md:col-span-2 md:row-span-3 col-span-3 row-span-1",
  },
  {
    src: "/cases-black/bomd-black.svg",
    alt: "Bomd+",
    cols: "col-span-3 md:row-span-3 row-span-1",
  },
  {
    src: "/cases-black/nara-black.svg",
    alt: "Nara",
    cols: "col-span-3 md:row-span-2 row-span-1",
  },
  {
    src: "/cases-black/sorridents-black.svg",
    alt: "Sorridents",
    cols: "md:col-span-2 col-span-3 row-span-1",
  },
  {
    src: "/cases-black/giolaser-black.svg",
    alt: "GioLaser",
    cols: "md:col-span-2 col-span-3 row-span-1",
  },
  //
  {
    src: "/cases-black/saude-black.svg",
    alt: "Saude Empreende",
    cols: "md:col-span-2 md:row-span-2 row-span-1 col-span-3",
  },
  {
    src: "/cases-black/abrace-black.svg",
    alt: "Abrace",
    cols: "col-span-3",
  },
  {
    src: "/cases-black/sorriden-black.svg",
    alt: "Sorriden",
    cols: "col-span-3",
  },
  {
    src: "/cases-black/sea-black.svg",
    srcMobile: "/mobile/elis-mobile.png",
    alt: "Sea",
    cols: "md:col-span-2 md:row-span-3 col-span-3 row-span-1",
  },
  {
    src: "/cases-black/jayme-black.svg",
    alt: "Jayme",
    cols: "col-span-3 md:row-span-3 row-span-1",
  },
  {
    src: "/cases-black/sorridents2-black.svg",
    alt: "sorridents",
    cols: "col-span-3 md:row-span-2 row-span-1",
  },
  {
    src: "/cases-black/bomd2-black.svg",
    alt: "Bomd+",
    cols: "md:col-span-2 col-span-3 row-span-1",
  },
  {
    src: "/cases-black/doctalk-black.svg",
    alt: "Outdoor Roxo",
    cols: "md:col-span-2 col-span-3 row-span-1",
  },
];

const Cases = () => {
  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center md:text-left">
          <span className="border rounded-full border-[#14163A] py-2 px-4 text-sm uppercase inline-block franie">
            PORTFÓLIO
          </span>
        </div>

        <div className="flex justify-between md:items-start flex-wrap gap-4 mb-16">
          <h1 className="text-5xl md:text-5xl font-serif uppercase leading-tight max-w-2xl  md:text-left franie">
            Cases de Sucesso
          </h1>
          <span className="text-sm mt-4 md:mt-2 max-w-md hidden md:block franie">
            Transformações reais. Resultados comprovados. <br />
            <br />
            Explore nossos projetos e descubra como ajudamos médicos e empresas
            a alcançarem protagonismo digital.
          </span>
          <p className="md:hidden text-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium eu magna in ornare. Mauris a posuere lacus. Morbi a sodales
            turpis, vitae varius nibh. Suspendisse ex metus, sollicitudin vel
            risus eu......
          </p>
        </div>

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
      </div>
      <div className="pt-10 md:pt-32">
        <Agencia />
      </div>
    </section>
  );
};

export default Cases;
