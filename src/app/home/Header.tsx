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
  "/carousel2/agencia.png",
  "/carousel2/Doctalk.png",
  "/carousel2/saude.png",
  "/carousel2/see-pocket_1.png",
  "/carousel2/see-logo.png",
  "/carousel2/studio.png",
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
            O MAIOR ECOSSISTEMA PARA PROFISSIONAIS DA{" "}
            <span className="font-bold">SAÚDE DO BRASIL</span>
          </h1>
          <div className="md:flex md:gap-32  justify-center">
            <Image
              src="/header-black.png"
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
    </section>
  );
};

export default Header;
