import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import CompraProgramadaImg from "@/assets/Compra-Programada.png"; // <-- ajuste o caminho conforme necessário

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Farmácia Preço Popular</h3>
            <p className="text-primary-foreground/80 mb-4">
              Remédio a baixo custo para toda a família. 24 unidades espalhadas
              pela Bahia, sempre com os melhores preços.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/farmácia-preço-popular-fpp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/farmaciaprecopopular.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/unidades" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Nossas Unidades
                </Link>
              </li>
              <li>
                <Link to="/trabalhe-conosco" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
                >Compra Programada
                </button>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Teste de Glicemia
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Aferição da Pressão
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Aplicação de Injetáveis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Farmácia Preço Popular. Todos os
            direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/thiagocns/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline font-medium"
            >
              Thiago Cordeiro | Devevolper
            </a>
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 bg-white rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 z-10 text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center transition-all"
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Imagem Responsiva */}
            <img
              src={CompraProgramadaImg}
              alt="Compra Programada"
              className="w-full h-auto object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}

    </footer>
  );
};

export default Footer;
