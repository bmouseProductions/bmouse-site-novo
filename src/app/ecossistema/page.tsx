"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Galeria from "./galeria/Galeria";

const imagens: string[] = [
  "/carousel2/agencia.png",
  "/carousel2/Doctalk.png",
  "/carousel2/saude.png",
  "/carousel2/saudeempreende.png",
  "/carousel2/studio.png",
];

const Ecossistema = () => {
  return (
    <>
      <section className="pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto">
            <h1 className="text-3xl md:text-5xl uppercase leading-tight max-w-6xl px-4 md:text-left franie">
              O MAIOR ECOSSISTEMA PARA PROFISSIONAIS DA{" "}
              <span className="font-bold">SAÚDE DO BRASIL</span>
            </h1>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              1024: { slidesPerView: 2 },
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
        </div>
      </section>
      <Galeria />
    </>
  );
};

export default Ecossistema;
