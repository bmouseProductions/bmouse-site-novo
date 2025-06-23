"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

const Projetos = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center md:text-left">
        <span className="border rounded-full border-[#14163A] py-2 px-4 text-sm uppercase inline-block franie">
          Sobre nós
        </span>
      </div>

      {/* Título e Descrição */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase leading-tight max-w-2xl text-black franieTitle">
            Nossos <br /> Parceiros
          </h1>
        </div>
        <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <p className="text-black text-base sm:text-lg franie leading-relaxed">
            Transformações reais. Resultados comprovados. <br /> <br />
            Explore nossos projetos e descubra como ajudamos médicos e empresas
            a alcançarem protagonismo digital.
          </p>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        breakpoints={{
          1024: { slidesPerView: 2 },
        }}
      >
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i}>
            <div className="w-full rounded-xl border border-gray-300 p-6 md:p-8 bg-white shadow-sm mx-auto max-w-xl">
              <p className="italic text-black text-lg mb-2">
                Lorem ipsum dolor
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ultricies, felis iaculis ornare malesuada, lectus
                tellus egestas elit, vel pretium quam sem ut sem.
              </p>

              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <div className="w-16 h-16 relative overflow-hidden rounded-full shrink-0">
                  <Image
                    src="/elisangela.svg"
                    alt="Dra. Elisangela"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Dra. Elisangela</p>
                  <p className="text-gray-500 text-sm">Alergista e Pediatra</p>
                </div>
                <a
                  href="#"
                  className="bg-black text-white text-sm px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
                >
                  Saber Mais
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projetos;
