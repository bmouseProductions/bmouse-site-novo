"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

const depoimentos = [
  {
    nome: "Dra. Nara Vieira",
    especialidade: "Dermatologista",
    imagem: "/nara.webp",
    texto:
      "A BMouse me ajuda a levar informação de qualidade para as pessoas por meio das minhas redes sociais.",
  },
  {
    nome: "Jayme Monjardim",
    especialidade: "Diretor de televisão e cinema",
    imagem: "/jayme.webp",
    texto:
      "A parceria com a BMouse é essencial, porque me ajuda a definir meus objetivos com clareza e a alcançá-los com estratégia.",
  },
  {
    nome: "Dra. Elisângela Menezes",
    especialidade: "Alergista e Imunologista / Pediatra",
    imagem: "/elisangela.svg",
    texto:
      "A BMouse me ajudou a conquistar independência dos convênios e a preencher minha agenda com pacientes particulares.",
  },
  {
    nome: "Arlete",
    especialidade: "Neuropsicóloga",
    imagem: "/arlete.webp",
    texto:
      "A BMouse conseguiu traduzir, na identidade visual que criou para mim, toda a essência da minha história e do meu trabalho.",
  },
  {
    nome: "Dra. Renata Caldeira",
    especialidade: "Geriatra",
    imagem: "/renata.webp",
    texto:
      "A BMouse me ajudou a atrair muito mais pacientes, com um trabalho incrível que apresentou minha especialidade de forma leve, eficiente e estratégica.",
  },
];

const Projetos = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center md:text-left">
        <span className="border rounded-full border-[#14163A] py-2 px-4 text-sm uppercase inline-block franie">
          DEPOIMENTOS
        </span>
      </div>

      {/* Título e Descrição */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase leading-tight max-w-2xl text-black franie">
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
        {depoimentos.map((dep, i) => (
          <SwiperSlide key={i}>
            <div className="w-full rounded-xl border border-gray-300 p-6 md:p-8 bg-white shadow-sm mx-auto max-w-xl">
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                {dep.texto}
              </p>

              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <div className="w-16 h-16 relative overflow-hidden rounded-full shrink-0">
                  <Image
                    src={dep.imagem}
                    alt={dep.nome}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{dep.nome}</p>
                  <p className="text-gray-500 text-sm">{dep.especialidade}</p>
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
