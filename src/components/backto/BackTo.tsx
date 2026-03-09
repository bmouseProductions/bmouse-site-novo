import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackTo = () => {
  return (
    <div>
      {/* Botões flutuantes */}
      <div>
        {/* WhatsApp - canto inferior esquerdo */}
        <a
          href="https://wa.me/5534999869888?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20quero%20saber%20mais%20sobre%20o%20trabalho%20do%20Grupo%20BMouse"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          title="Fale conosco no WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        {/* Back to Top - canto inferior direito */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          title="Voltar ao topo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BackTo;
