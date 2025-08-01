"use client";
import { useState, useEffect, useCallback } from "react";
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
    videoUrl:
      "https://player.vimeo.com/video/1094378627?h=c82b020341&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    nome: "Jayme Monjardim",
    especialidade: "Diretor de televisão e cinema",
    imagem: "/jayme.webp",
    texto:
      "A parceria com a BMouse é essencial, porque me ajuda a definir meus objetivos com clareza e a alcançá-los com estratégia.",
    videoUrl:
      "https://player.vimeo.com/video/1094112952?h=aa03064fb0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    nome: "Dra. Elisângela Menezes",
    especialidade: "Alergista e Imunologista / Pediatra",
    imagem: "/elisangela.svg",
    texto:
      "A BMouse me ajudou a conquistar independência dos convênios e a preencher minha agenda com pacientes particulares.",
    videoUrl:
      "https://player.vimeo.com/video/1094392910?h=0bb57d238f&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    nome: "Arlete",
    especialidade: "Neuropsicóloga",
    imagem: "/arlete.webp",
    texto:
      "A BMouse conseguiu traduzir, na identidade visual que criou para mim, toda a essência da minha história e do meu trabalho.",
    videoUrl:
      "https://player.vimeo.com/video/1094379992?h=b7083fe86a&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    nome: "Dra. Renata Caldeira",
    especialidade: "Geriatra",
    imagem: "/renata.webp",
    texto:
      "A BMouse me ajudou a atrair muito mais pacientes, com um trabalho incrível que apresentou minha especialidade de forma leve, eficiente e estratégica.",
    videoUrl:
      "https://player.vimeo.com/video/1094402086?h=921fa2c5c5&badge=0&autopause=0&player_id=0&app_id=58479",
  },
];

const Modal: React.FC<{
  videoUrl: string | null;
  onClose: () => void;
  isOpen: boolean;
}> = ({ videoUrl, onClose, isOpen }) => {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, handleKey]);

  if (!isOpen || !videoUrl) return null;

  const separator = videoUrl.includes("?") ? "&" : "?";
  const src = `${videoUrl}${separator}autoplay=1&title=0&byline=0&portrait=0`;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/80 px-1"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`
          relative 
          w-full 
          overflow-hidden 
          flex 
          flex-col 
          bg-transparent 
          sm:rounded-2xl 
          sm:bg-white 
          sm:max-w-3xl
        `}
        style={{ maxHeight: "100vh" }}
      >
        <button
          aria-label="Fechar"
          className="absolute top-3 right-3 z-30 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Vídeo: mobile ocupa quase toda a viewport */}
        <div className="w-full flex-1 flex items-center justify-center">
          <div className="relative w-full h-[calc(100vh-1.5rem)] sm:aspect-video sm:h-auto">
            <iframe
              src={src}
              title="Depoimento"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
const Projetos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (videoUrl: string) => {
    setActiveVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setActiveVideo(null), 200);
  };

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
                <button
                  onClick={() => openModal(dep.videoUrl)}
                  className="bg-black text-white text-sm px-4 py-2 rounded hover:opacity-90 whitespace-nowrap"
                  aria-label={`Ver vídeo de depoimento de ${dep.nome}`}
                >
                  Saber Mais
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal videoUrl={activeVideo} isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default Projetos;
