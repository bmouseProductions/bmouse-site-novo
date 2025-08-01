import React from "react";
import Image from "next/image";
import Agencia from "@/app/home/Agencia";

const blocks = [
  {
    direction: "left",

    images: [
      { src: "/bmouse-eco.png", width: 722, height: 555, alt: "Bmouse" },
      { src: "/cellphone.png", width: 277, height: 555, alt: "Celular bmouse" },
      { src: "/cardapio.png", width: 277, height: 555, alt: "Cardápio bmouse" },
    ],
    title: "Agência Bmouse - Marketing estratégico para a saúde.",
    text: "Posicionamento, autoridade e conteúdo que gera resultado para quem cuida de vidas.",
  },
  {
    direction: "right",

    images: [
      { src: "/camera.png", width: 277, height: 555, alt: "Camera" },
      { src: "/camera2.png", width: 277, height: 555, alt: "Camera 2" },
      { src: "/studio.png", width: 722, height: 555, alt: "Studio" },
    ],
    title: "Studios Bmouse - Audiovisual de alto padrão e estética memorável.",
    text: "Transformamos histórias, marcas e profissionais em narrativas visuais que encantam, engajam e elevam sua autoridade.",
  },
  {
    direction: "left",
    buttonLink: "https://saudeempreende.com.br/doctalk/",
    buttonText: "",
    images: [
      { src: "/doctalk.png", width: 722, height: 555, alt: "Doctalk" },
      {
        src: "/camera-docktalk.png",
        width: 277,
        height: 555,
        alt: "Camera Doctalk",
      },
      {
        src: "/phone-doctalk.png",
        width: 277,
        height: 555,
        alt: "Phone Doctalk",
      },
    ],
    title: "DocTalk - Podcast que dá voz aos protagonistas da saúde.",
    text: "Dicas práticas de empreendedorismo, conversas sobre os temas mais relevantes da saúde e trajetórias inspiradoras de quem está fazendo a diferença no setor.",
  },
  {
    direction: "right",
    buttonLink: "https://saudeempreende.com.br/",
    buttonText: "",
    images: [
      { src: "/ecossistema/saude.png", width: 277, height: 555, alt: "Camera" },
      {
        src: "/ecossistema/saude-phone.png",
        width: 277,
        height: 555,
        alt: "Camera 2",
      },
      {
        src: "/ecossistema/laptop.png",
        width: 722,
        height: 555,
        alt: "Studio",
      },
    ],
    title:
      "SaudeEmpreende.com - Portal de conteúdo e conexão para profissionais",
    text: "Conteúdos estratégicos, notícias relevantes e conexões valiosas para profissionais que querem liderar o futuro da saúde com visão empreendedora.",
  },
  {
    direction: "left",
    buttonLink: "https://bmouse.com",
    buttonText: "",
    images: [
      { src: "/ecossistema/sea.png", width: 722, height: 555, alt: "Camera" },
      {
        src: "/ecossistema/sea-card.png",
        width: 277,
        height: 555,
        alt: "Camera 2",
      },
      {
        src: "/ecossistema/sea-card2.png",
        width: 277,
        height: 555,
        alt: "Studio",
      },
    ],
    title: "SE Academy - Infoprodutos e educação digital para médicos.",
    text: "Plataforma que produz, lança e potencializa cursos de profissionais da saúde, transformando conhecimento técnico em produtos digitais de alto impacto.",
  },
  {
    direction: "right",
    buttonLink: "https://saudeempreende.com.br/experience/",
    buttonText: "",
    images: [
      {
        src: "/ecossistema/woman-exp.png",
        width: 277,
        height: 555,
        alt: "Camera",
      },
      {
        src: "/ecossistema/tannure.png",
        width: 277,
        height: 555,
        alt: "Camera 2",
      },
      {
        src: "/ecossistema/exp.png",
        width: 722,
        height: 555,
        alt: "Studio",
      },
    ],
    title:
      "Saúde Empreende Experience - O maior evento de empreendedorismo da saúde no Brasil.",
    text: "Eventos que reúnem os nomes mais relevantes do setor em encontros presenciais que inspiram, provocam e aceleram a transformação da saúde no Brasil.",
  },
];

const GalleryBlock = ({
  images,
  title,
  text,
  direction,
  buttonLink,
  buttonText,
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
      {buttonLink && (
        <div
          className={`mt-6 flex justify-center md:justify-start ${
            direction === "left" ? "md:ml-40" : "md:ml-[30rem]"
          }`}
        >
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 transition franie"
          >
            {buttonText || "Saiba mais"}
          </a>
        </div>
      )}
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
