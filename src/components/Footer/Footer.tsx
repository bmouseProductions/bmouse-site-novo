import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9]  mt-30">
      <div className="text-black rounded-t-2xl px-6 md:px-16 py-12  justify-between gap-12 flex flex-col md:flex-row gap-y-12 md:gap-y-0 gap-x-12 container mx-auto">
        {/* Coluna 1 - Logo e texto */}
        <div className="flex-1 text-center md:text-left">
          <Image
            src="/bmouse-logo.svg"
            alt="Logo"
            width={127.77}
            height={27.85}
            className="h-8 mb-4 mx-auto md:mx-0"
          />
          <p className="text-sm text-zinc-600 max-w-xs franie">
            Criamos posicionamento, presença e reputação.
          </p>
        </div>

        {/* Coluna 2 - Links */}
        <div className="flex-1 text-center md:text-left hidden md:block">
          <h3 className="font-extralight mb-4 franie">Explore</h3>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li>
              <a href="/ecossistema">Ecossistema</a>
            </li>
            <li>
              <a href="/servicos">Serviços</a>
            </li>
            <li>
              <a href="/cases-de-sucesso">Cases de sucesso</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div className="flex-1 text-center md:text-left mx-auto space-y-3 text-sm text-black franie">
          <p>📍 Rua Doutor José Olímpio Borges, 134, Centro, Patos de Minas</p>
          <p>
            ✉️{" "}
            <a
              href="mailto:contato@bmouse.com.br"
              className="underline hover:text-blue-700"
            >
              contato@bmouse.com.br
            </a>
          </p>
          <p>
            📞{" "}
            <a
              href="https://wa.me/5534999869888?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20quero%20saber%20mais%20sobre%20o%20trabalho%20do%20Grupo%20BMouse"
              target="_blank"
              className="underline hover:text-blue-700"
            >
              (34) 99986-9888
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
