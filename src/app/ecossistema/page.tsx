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
  "/carousel-home/circulo-atlas.svg",
  "/carousel-home/doctalk.svg",
  "/carousel-home/grupo-bmouse.svg",
  "/carousel-home/protagonistas.svg",
  "/carousel-home/saude-empreende-experience-pocket.svg",
  "/carousel-home/saude-empreende-experience.svg",
  "/carousel-home/saude-empreende.svg",
];

const Ecossistema = () => {
  return (
    <>
      <section className="pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto">
            <h1 className="text-3xl md:text-5xl uppercase leading-tight max-w-6xl px-4 md:text-left franie">
              O maior ecossistema para {" "}
              <span className="font-bold">pessoas extraordinárias.</span>
            </h1>
          </div>
          <div className="-mt-20 md:mt-0 -mb-24 md:mb-0">
            <Swiper
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 2.7,
                  spaceBetween: 30, // mobile
                },
                1024: {
                  slidesPerView: 4.2,
                  spaceBetween: 0, // desktop (sem espaço entre os slides)
                },
              }}
            >
              {imagens.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-[320px]">
                    <Image
                      src={src}
                      alt={`Projeto ${index + 1}`}
                      width={src === "/carousel2/see-logo.png" ? 100 : 180}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <Galeria />
    </>
  );
};

export default Ecossistema;
