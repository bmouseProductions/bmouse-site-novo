import React from "react";
import Image from "next/image";
import Agencia from "../home/Agencia";

const projetos = [
  {
    src: "/projetos/sorriso.jpg",
    alt: "Força de um sorriso",
    slug: "filme-a-forca-de-um-sorriso-grupo-salus",
    cols: "md:col-span-2 md:row-span-2 row-span-1 col-span-3",
  },
  {
    src: "/projetos/sorridents-mobile.webp",
    srcMobile: "/projetos/sorridents-mobile.webp",
    alt: "Sorridents",
    cols: "col-span-3",
    slug: "Sorridents",
  },
  {
    src: "/projetos/jayme.webp",
    alt: "Jayme monjardim",
    cols: "col-span-3",
    slug: "jayme-monjardim",
  },
  {
    src: "/projetos/sele.webp",
    srcMobile: "/mobile/sele.webp",
    alt: "Seleção Brasileira",
    cols: "md:col-span-2 md:row-span-3 col-span-3 row-span-1",
    slug: "selecao-brasileira",
  },
  {
    src: "/projetos/bomde.webp",
    srcMobile: "/projetos/bomde.webp",
    alt: "Bomd+",
    cols: "col-span-3 md:row-span-3 row-span-1",
    slug: "bomd",
  },
  {
    src: "/projetos/gio.webp",
    alt: "GioLaser",
    cols: "col-span-3 md:row-span-2 row-span-1",
    slug: "giolaser",
  },
  {
    src: "/projetos/naso.webp",
    alt: "Naso",
    cols: "md:col-span-2 col-span-3 row-span-1",
    slug: "clinica-naso",
  },
  {
    src: "/projetos/renata.webp",
    alt: "Renata",
    cols: "md:col-span-2 col-span-3 row-span-1",
    slug: "dra-renata-caldeira",
  },
  {
    src: "/projetos/dra-elis.webp",
    srcMobile: "/mobile/dra-elis.webp",
    alt: "Disângela Menezes",
    slug: "dra-elisangela",
    cols: "md:col-span-2 md:row-span-2 row-span-1 col-span-3",
  },
  {
    src: "/projetos/junio.webp",
    alt: "Junio moreto",
    slug: "dr-junio",
    cols: "col-span-3",
  },
  {
    src: "/projetos/nara.webp",
    alt: "Dra Nara",
    slug: "dra-nara",
    cols: "col-span-3",
  },
  {
    src: "/projetos/anna.webp",
    srcMobile: "/projetos/anna.webp",
    alt: "Anna Claudia",
    slug: "anna-claudia",
    cols: "md:col-span-2 md:row-span-3 col-span-3 row-span-1",
  },
  {
    src: "/projetos/arlete.webp",
    alt: "Arlete",
    slug: "arlete-lima",
    cols: "col-span-3 md:row-span-3 row-span-1",
  },
  {
    src: "/projetos/clivi.webp",
    alt: "clivi",
    cols: "col-span-3 md:row-span-2 row-span-1",
    slug: "clinica-da-visao",
  },
  {
    src: "/projetos/gabriel-vilela.webp",
    alt: "Gabriel vilela",
    cols: "md:col-span-2 col-span-3 row-span-1",
    slug: "gabriel-vilela",
  },
  {
    src: "/projetos/olhar.webp",
    alt: "Olhar",
    slug: "olhar-centro-oftalmologico",
    cols: "md:col-span-2 col-span-3 row-span-1",
  },
  {
    src: "/projetos/olhar-certo.webp",
    srcMobile: "/projetos/olhar-certo.webp",
    alt: "olhar-certo",
    slug: "olhar-certo",
    cols: "md:col-span-5 md:row-span-3 col-span-3 row-span-1",
  },
  {
    src: "/projetos/mira.webp",
    alt: "MIRA",
    slug: "mira",
    cols: "md:col-span-2 md:row-span-2 row-span-1 col-span-3",
  },
  {
    src: "/projetos/WHG.webp",
    alt: "whg",
    slug: "WHG",
    cols: "md:col-span-3 md:row-span-2 row-span-1 col-span-3",
  },
  {
    src: "/projetos/one.webp",
    alt: "One odontologia",
    slug: "one-odontologia",
    cols: "md:col-span-3 md:row-span-2 row-span-1 col-span-3",
  },
  {
    src: "/projetos/mid.webp",
    alt: "Medic Imagem",
    slug: "mid",
    cols: "md:col-span-2 md:row-span-2 row-span-1 col-span-3",
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
          <span className="text-sm mt-4 md:mt-2 max-w-md  md:block franie">
            Transformações reais. Resultados comprovados. <br />
            <br />
            Explore nossos projetos e descubra como ajudamos médicos e empresas
            a alcançarem protagonismo digital.
          </span>
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
      </div>
      <div className="pt-10 md:pt-32">
        <Agencia />
      </div>
    </section>
  );
};

export default Cases;
