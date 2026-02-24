import HeaderNav from "@/components/HeaderNav";
import Carrosel1 from "@/components/Carrossel1";
import SessaoLojas from "@/components/SessaoLojas";
import InstaCarrossel from "@/components/InstaCarrossel";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Pill, CreditCard, Clock, Shield } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contato") {
      // Pequeno delay para garantir que a DOM está montada
      setTimeout(() => {
        const el = document.getElementById("contato");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);
  const features = [
    {
      icon: Pill,
      title: "Medicamentos Completos",
      description: "Referência, genéricos e similares com a maior variedade do Estado",
    },
    {
      icon: CreditCard,
      title: "Melhor Preço",
      description: "Economia de até 90% em produtos selecionados",
    },
    {
      icon: Clock,
      title: "Compra Programada",
      description: "Parcelamento em até 10x sem juros",
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Produtos aprovados pela ANVISA com total segurança",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      
      {/* News Carousel */}
      <Carrosel1 />

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Na Preço Popular Você Encontra!
            </h2>
            <p className="text-lg text-muted-foreground">
              Todos os medicamentos de referência, genéricos e similares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-medium transition-all hover:scale-105 bg-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
