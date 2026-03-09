"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const imagens: string[] = [
  "/carousel-home/circulo-atlas.svg",
  "/carousel-home/doctalk.svg",
  "/carousel-home/grupo-bmouse.svg",
  "/carousel-home/protagonistas.svg",
  "/carousel-home/saude-empreende.svg",
  "/carousel-home/saude-empreende-experience.svg",
  "/carousel-home/saude-empreende-experience-pocket.svg",
];

const Header = () => {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 px-3 md:text-left">
          <span className="border rounded-full border-[#14163A] py-2 px-4 text-sm uppercase inline-block franie">
            Sobre nós
          </span>
        </div>
        <div className="gap-4 md:mb-16 mx-auto">
          <h1 className="text-3xl md:text-5xl uppercase leading-tight max-w-6xl px-4 md:text-left franie">
            Construímos autoridade a partir da{" "}
            <span className="font-bold">sua trajetória.</span>
          </h1>
          <div className="md:flex md:gap-32  justify-center">
            <Image
              src="/header-home.png"
              alt="Grupo Bmouse"
              className="px-5 py-10"
              width={720}
              height={261}
            />
            <div className="items-end md:mt-32 md:text-right px-5">
              <span className="franie text-[#000]">
                Marketing. Audiovisual. Estratégia. Educação. Performance.{" "}
                <br /> <br /> Aqui, você encontra tudo o que precisa para se
                tornar referência.
              </span>
            </div>
          </div>
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
                    width={src === "/carousel-home/see-logo.svg" ? 100 : 180}
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
  );
};

export default Header;
