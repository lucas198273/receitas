import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-xl font-bold mb-4 md:mb-0 drop-shadow-md text-[#E94560]">
        Universo Pixels
        </h2>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/italosoisa1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E94560] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-white/70">
        © {new Date().getFullYear()} <span className="text-[#E94560]">Universo Pixels</span>. Todos os direitos reservados.
      </div>
    </footer>
  );
}
