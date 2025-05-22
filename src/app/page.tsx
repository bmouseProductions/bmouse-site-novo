"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import Sobre from "./home/Sobre";
import Projetos from "./home/Projetos";
import Agencia from "./home/Agencia";

export default function Home() {
  return (
    <section className="">
      <Swiper
        spaceBetween={50}
        className="custom-swiper"
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <Image
            src="/video-header.png"
            className="mx-auto md:flex hidden text-center"
            alt="header"
            width={1380}
            height={880}
          />
          <div className="block md:hidden container">
            <Image
              src="/mobile/fundo-azul.png"
              alt="logo video mobile"
              width={425}
              height={842} // ou a altura da sua imagem mobile
              className="mx-auto h-auto w-5/6"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/logo-vido.svg"
            alt="header"
            className="mx-auto md:flex hidden text-center"
            width={1380}
            height={880}
          />
          <div className="block md:hidden container">
            <Image
              src="/mobile/logo-video.png"
              alt="logo video mobile"
              width={425}
              height={842} // ou a altura da sua imagem mobile
              className="mx-auto h-auto w-5/6"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <Sobre />
      <Projetos />
      <Agencia />
    </section>
  );
}
