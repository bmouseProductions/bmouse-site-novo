import React from "react";
import Image from "next/image";
import Agencia from "../home/Agencia";

const Contato = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="mb-10 text-center md:text-left">
          <span className="border rounded-full border-[#14163A] py-2 px-4 text-sm uppercase inline-block franie">
            Sobre nós
          </span>
        </div>

        {/* Título e descrição */}
        <div className="gap-4 mb-16 mx-auto">
          <div className="flex flex-col md:flex-row gap-y-6 gap-x-32 justify-between">
            <p className="text-4xl md:text-5xl uppercase leading-tight text-center md:text-left franie">
              vamos conversar ?
            </p>
            <div className="text-center md:text-right">
              <span className="franie text-[#000]">
                Aqui, você encontra tudo o que <br /> precisa para se tornar
                referência.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-around container mx-auto px-4 py-16 gap-12 md:gap-0">
        {/* Imagem */}
        <div className="relative w-full md:w-[400px] h-[400px] md:h-[500px]">
          <Image
            src="/form.png"
            alt="Aceita um café?"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Formulário */}
        <form className="w-full max-w-xl space-y-6">
          {/* Campos duplos */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <label className="block text-xs uppercase mb-1">Nome</label>
              <input
                type="text"
                className="w-full border-b outline-none bg-transparent"
              />
            </div>

            <div>
              <label className="block text-xs uppercase mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b outline-none bg-transparent"
              />
            </div>
            <div>
              <label className="block text-xs uppercase mb-1">Telefone</label>
              <input
                type="text"
                placeholder="+01 2345-6789"
                className="w-full border-b outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Nicho */}
          {/* <div>
            <p className="text-xs uppercase mb-2">Qual seu nicho?</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                "Nicho tal 01",
                "Nicho tal 02",
                "Nicho tal 03",
                "Nicho tal 04",
              ].map((nicho, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="radio" name="nicho" className="accent-black" />
                  {nicho}
                </label>
              ))}
            </div>
          </div> */}

          {/* Texto livre */}
          <div>
            <label className="block text-xs uppercase mb-1">
              Fale um pouco sobre
            </label>
            <textarea
              rows={3}
              placeholder="Escreva sua mensagem"
              className="w-full border-b outline-none bg-transparent resize-none"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="bg-black text-white px-10 py-3 rounded shadow hover:opacity-90 transition"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* Agência */}
      <Agencia />
    </section>
  );
};

export default Contato;
