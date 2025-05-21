import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-32 text-center">
      <div className="flex flex-row md:flex-wrap gap-8 text-center justify-items-center justify-center">
        <div>
          <Image
            src="/bmouse-logo.svg"
            width={98}
            height={21}
            alt="Bmouse logo"
          />
        </div>

        <div>
          <ul className="flex flex-row md:flex-wrap gap-6">
            <li>Sobre nós</li>
            <li>Nossos trabalhos</li>
            <li>Serviços</li>
            <li>Nossos diamantes</li>
            <li className="border rounded-3xl py-2 px-2 md:-mt-2 border-[#14163A]">
              Fale conosco
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
