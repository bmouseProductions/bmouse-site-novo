import Image from "next/image";
import React from "react";

const Agencia = () => {
  return (
    <section>
      <div className="container mx-auto justify-items-center items-center max-w-3xl pb-32">
        <h1 className="text-5xl md:text-6xl font-serif uppercase leading-tight max-w-2xl text-[#14163A] text-center franieTitle">
          a bmouse é a agência ideal para te gerar valor.
        </h1>
      </div>

      {/* Imagem para desktop */}
      <div className="hidden md:block mx-auto w-full max-w-[1464px]">
        <Image
          src="/logo-vido.svg"
          alt="logo video"
          width={1464}
          height={813}
          className="w-full h-auto"
        />
      </div>

      {/* Imagem para mobile */}
      <div className="block md:hidden container">
        <Image
          src="/mobile/logo-video.png"
          alt="logo video mobile"
          width={425}
          height={842} // ou a altura da sua imagem mobile
          className="mx-auto h-auto w-5/6"
        />
      </div>
    </section>
  );
};

export default Agencia;
