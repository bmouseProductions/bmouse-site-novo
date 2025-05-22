import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faBehance,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            pretium ex, eu ornare leo aliquam vitae.
          </p>
        </div>

        {/* Coluna 2 - Links */}
        <div className="flex-1 text-center md:text-left hidden md:block">
          <h3 className="font-extralight mb-4 franie">Explore</h3>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Trabalhos</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Diamantes</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div className="flex-1 text-center md:text-left mx-auto">
          <h3 className="font-extralight mb-4 franie hidden md:block">
            Fale Conosco
          </h3>
          <form className="flex-col sm:flex-row gap-4 w-full md:mb-5 hidden md:flex">
            <input
              type="email"
              placeholder="Seu Email"
              className="flex-1 px-4 py-2 rounded-md border border-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#0E123B] text-white px-6 py-2 rounded-md w-full sm:w-auto franie"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-[#0E123B] p-2 rounded-full flex items-center justify-center text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#0E123B] p-2 rounded-full flex items-center justify-center text-white"
            >
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#0E123B] p-2 rounded-full flex items-center justify-center text-white"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#0E123B] p-2 rounded-full flex items-center justify-center text-white"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
