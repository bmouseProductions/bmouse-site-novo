"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

const Projetos = () => {
  const imagens: string[] = [
    "/carousel/cardeal.svg",
    "/carousel/clenio.svg",
    "/carousel/elis.svg",
    "/carousel/bomd.svg",
    "/carousel/zoomies.svg",
    "/carousel/sorridents.svg",
    "/carousel/whg.svg",
    "/carousel/urt.svg",
    "/carousel/transtriangulo.svg",
    "/carousel/petsmellon.svg",
    "/carousel/patense-agro.svg",
    "/carousel/neo-genetics.svg",
    "/carousel/mira.svg",
    "/carousel/medic-imagem.svg",
    "/carousel/grupo-patense.svg",
  ];

  return (
    <section className="py-20 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-32">
        <div>
          <h1 className="text-5xl md:text-5xl font-serif uppercase leading-tight max-w-2xl text-[#14163A] text-center md:text-left franieTitle">
            Nossos <br /> grandes projetos
          </h1>
        </div>
        <div className="max-w-2xl ">
          <p className="text-[#14163A] max-w-5/6 mx-auto md:max-w-none md:mx-0 franie">
            Ao longo de nossa trajetória, acumulamos uma vasta experiência na
            produção de conteúdos para o setor de saúde. Nossas campanhas
            comerciais estratégicas e materiais de alta qualidade já alcançaram
            milhões de visualizações nas redes sociais, conectando efetivamente
            o público com este importante segmento. Informamos, impactamos e
            emocionamos, sempre com excelência e profissionalismo.
          </p>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {imagens.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-[320px]">
              <Image
                src={src}
                alt={`Projeto ${index + 1}`}
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-16 flex justify-center">
        <button className="bg-[#14163A] text-white px-6 py-3 rounded-full hover:bg-[#1f225a] transition franie">
          SAIBA MAIS
        </button>
      </div>
    </section>
  );
};

export default Projetos;
