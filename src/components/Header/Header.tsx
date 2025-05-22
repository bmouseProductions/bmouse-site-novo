"use client";

import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 px-4 md:px-16 bg-white md:bg-none md:shadow-none shadow-md">
      <div className="flex justify-between items-center md:justify-center relative">
        {/* Mobile: Hamburguer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Logo central no mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          <Image
            src="/bmouse-logo.svg"
            width={98}
            height={21}
            alt="Bmouse logo"
          />
        </div>

        {/* Botão fale conosco no canto direito (mobile) */}
        <div className="md:hidden">
          <button className="border border-[#14163A] rounded-3xl px-4 py-1 text-sm">
            Fale conosco
          </button>
        </div>

        {/* Navegação (desktop) */}
        <nav className="hidden md:flex gap-8 py-10 items-center text-center justify-items-center justify-center">
          <ul className="flex gap-6 items-center text-sm franie">
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Nossos trabalhos</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Nossos diamantes</a>
            </li>
            <li>
              <a
                href="#"
                className="border border-[#14163A] rounded-3xl px-4 py-1"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-center text-sm">
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Nossos trabalhos</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Nossos diamantes</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
