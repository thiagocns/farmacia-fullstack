import HeaderNav from "@/components/HeaderNav";
import HeroCarousel from "@/components/HeroCarousel";
import SessaoLojas from "@/components/SessaoLojas";
import InstaCarrossel from "@/components/InstaCarrossel";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection"; // Importamos o novo componente
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contato") {
      setTimeout(() => {
        const el = document.getElementById("contato");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* News Carousel */}
      <HeroCarousel />

      {/* Seção "Na Preço Popular Você Encontra!" */}
      <FeaturesSection />

      {/* Cities Section */}
      <SessaoLojas />

      {/* Instagram Section */}
      <InstaCarrossel />

      {/* Contato */}
      <Contato />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;