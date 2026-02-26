import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Verifica se o usuário está na Página Inicial
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Página Inicial", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "Unidades", path: "/unidades" },
    { name: "Trabalhe Conosco", path: "/trabalhe-conosco" },
    { name: "Fale Conosco", path: "/#contato" },
    { name: "WebMail", path: "/WebMail" },
  ];

  // Lógica de Estilo do Header
  // Se não for a home, fica sempre branco. Se for a home, depende do scroll.
  const headerBackground = !isHomePage || isScrolled
    ? "bg-white shadow-md py-2 border-b border-slate-200"
    : "bg-transparent py-4 border-b border-transparent";

  const textColor = !isHomePage || isScrolled
    ? "text-slate-900"
    : "text-white";

  const logoTitleColor = !isHomePage || isScrolled
    ? "text-[#004bb4]"
    : "text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBackground}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo e Títulos */}
          <Link to="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <h1 className={`text-xl font-bold transition-colors ${logoTitleColor}`}>
                Farmácia Preço Popular
              </h1>
              <p className={`text-xs font-semibold opacity-90 ${!isHomePage || isScrolled ? "text-red-600" : "text-white"}`}>
                Remédio a Baixo Custo
              </p>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 ${active
                      ? (isHomePage && !isScrolled
                        ? "bg-white text-[#004bb4] border-white" // Na home transparente
                        : "bg-[#004bb4] text-white border-[#004bb4]") // Nas outras abas (seu print)
                      : `${textColor} border-transparent hover:bg-black/5`
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Redes Sociais */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild className={textColor}>
              <a href="#"><Linkedin size={20} /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className={textColor}>
              <a href="#"><Instagram size={20} /></a>
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t p-4 flex flex-col space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-bold ${isActive(link.path) ? "bg-[#004bb4] text-white" : "text-slate-900"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default HeaderNav;