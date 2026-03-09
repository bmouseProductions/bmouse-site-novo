import React from "react";
import Image from "next/image";
import Agencia from "@/app/home/Agencia";

const blocks = [
  {
    direction: "left",
    images: [
      { src: "/ecossistema/bmouse-agencia/quadrada.png", width: 722, height: 555, alt: "Bmouse" },
      { src: "/ecossistema/bmouse-agencia/retangular1.png", width: 277, height: 555, alt: "Celular bmouse" },
      { src: "/ecossistema/bmouse-agencia/retangular2.png", width: 277, height: 555, alt: "Cardápio bmouse" },
    ],
    title: "Agência BMouse - Marketing Estratégico.",
    text: "Posicionamento, autoridade e conteúdo que gera resultado.",
  },
  {
    direction: "right",
    images: [
      { src: "/ecossistema/bmouse-studio/quadrada.png", width: 722, height: 555, alt: "Camera" },
      { src: "/ecossistema/bmouse-studio/retangular1.png", width: 277, height: 555, alt: "Camera 2" },
      { src: "/ecossistema/bmouse-studio/retangular2.png", width: 277, height: 555, alt: "Studio" },
    ],
    title: "Studios Bmouse - Audiovisual de alto padrão e estética memorável.",
    text: "Transformamos histórias, marcas e profissionais em narrativas visuais que encantam, engajam e elevam sua autoridade.",
  },
  {
    direction: "left",
    images: [
      { src: "/ecossistema/doctalk/quadrada.png", width: 722, height: 555, alt: "Doctalk" },
      { src: "/ecossistema/doctalk/retangular1.png", width: 277, height: 555, alt: "Camera Doctalk" },
      { src: "/ecossistema/doctalk/retangular2.png", width: 277, height: 555, alt: "Phone Doctalk" },
    ],
    title: "DocTalk - Onde o extraordinário ganha voz.",
    text: "O podcast que revela as histórias de quem constrói legado e impacto real.",
  },
  {
    direction: "right",
    images: [
      { src: "/ecossistema/protagonistas/quadrada.png", width: 722, height: 555, alt: "Bmouse" },
      { src: "/ecossistema/protagonistas/retangular1.png", width: 277, height: 555, alt: "Celular bmouse" },
      { src: "/ecossistema/protagonistas/retangular2.png", width: 277, height: 555, alt: "Cardápio bmouse" },
    ],
    title: "Protagonistas.",
    text: "O podcast que dá voz a mulheres reais que se destacam em diferentes áreas da vida.",
  },
  {
    direction: "left",
    images: [
      { src: "/ecossistema/saude-empreende/quadrada.png", width: 722, height: 555, alt: "Camera" },
      { src: "/ecossistema/saude-empreende/retangular1.png", width: 277, height: 555, alt: "Camera 2" },
      { src: "/ecossistema/saude-empreende/retangular2.png", width: 277, height: 555, alt: "Studio" },
    ],
    title: "SaudeEmpreende.com - Portal de conteúdo e conexão para profissionais",
    text: "Conteúdos estratégicos, notícias relevantes e conexões valiosas para profissionais que querem liderar o futuro da saúde com visão empreendedora.",
  },
  {
    direction: "right",
    images: [
      { src: "/ecossistema/atlas/quadrada.png", width: 722, height: 555, alt: "Camera" },
      { src: "/ecossistema/atlas/retangular1.png", width: 277, height: 555, alt: "Camera 2" },
      { src: "/ecossistema/atlas/retangular2.png", width: 277, height: 555, alt: "Studio" },
    ],
    title: "Círculo ATLAS.",
    text: "Infoprodutos, comunidades e eventos dedicados a mentes extraordinárias e profissionais de alta performance.",
  },
  {
    direction: "left",
    images: [
      { src: "/ecossistema/saude-empreende-exp/quadrada.png", width: 722, height: 555, alt: "Camera" },
      { src: "/ecossistema/saude-empreende-exp/retangular1.png", width: 277, height: 555, alt: "Camera 2" },
      { src: "/ecossistema/saude-empreende-exp/retangular2.png", width: 277, height: 555, alt: "Studio" },
    ],
    title: "Saúde Empreende Experience - O maior evento de empreendedorismo da saúde no Brasil.",
    text: "Eventos que reúnem os nomes mais relevantes do setor em encontros presenciais que inspiram, provocam e aceleram a transformação da saúde no Brasil.",
  },
];

const GalleryBlock = ({
  images,
  title,
  text,
  direction,
}: (typeof blocks)[0]) => {
  const bigImage = images.find((img) => img.width === 722);
  const smallImages = images.filter((img) => img.width !== 722);

  return (
    <div className="py-20 px-4 lg:px-0">
      {/* MOBILE */}
      <div className="md:hidden max-w-3xl mx-auto space-y-4">
        {/* Imagem grande */}
        {bigImage && (
          <Image
            src={bigImage.src}
            width={bigImage.width}
            height={bigImage.height}
            alt={bigImage.alt}
            className="w-full h-auto object-contain"
          />
        )}

        {/* Duas imagens lado a lado */}
        <div className="grid grid-cols-2 gap-4">
          {smallImages.map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              width={img.width}
              height={img.height}
              alt={img.alt}
              className="w-full h-auto object-contain"
            />
          ))}
        </div>

        {/* Texto centralizado */}
        <div className="text-center pt-6">
          <p>
            <span className="font-bold block mb-2 text-lg">{title}</span>
            <span className="text-sm text-gray-700">{text}</span>
          </p>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className={`hidden md:flex gap-6 max-w-7xl mx-auto pt-10 ${direction === "left" ? "md:ml-40" : "md:mr-40"}`}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
            className=""
          />
        ))}
      </div>

      {/* Texto desktop */}
      <div className="hidden md:block">
        <p
          className={`max-w-7xl mx-auto pt-10 ${direction === "left" ? "md:ml-40" : "md:mr-40"}`}
        >
          <span className="font-bold block mb-4 text-lg md:text-xl">
            {title}
          </span>
          <span className="text-sm md:text-base text-gray-700">{text}</span>
        </p>
      </div>
    </div>
  );
};

const Galeria = () => {
  return (
    <>
      <section>
        {blocks.map((block, i) => (
          <GalleryBlock key={i} {...block} />
        ))}
      </section>
      <div className="mt-40">
        <Agencia />
      </div>
    </>
  );
};

export default Galeria;
