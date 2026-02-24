import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Users, Award } from "lucide-react";

const QuemSomos = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fornecer medicamentos de qualidade com os melhores preços, democratizando o acesso à saúde.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Ética, compromisso, qualidade e respeito são os pilares que guiam nossas ações diárias.",
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Profissionais qualificados e comprometidos em oferecer o melhor atendimento aos nossos clientes.",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Produtos certificados pela ANVISA, garantindo segurança e eficácia em todos os tratamentos.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />

      {/* Hero Section */}
      <section className="bg-gradient-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Quem Somos
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Há anos levando saúde e bem-estar com preços acessíveis para toda a Bahia
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A <strong className="text-primary">Farmácia Preço Popular</strong> nasceu com o propósito 
                de democratizar o acesso a medicamentos de qualidade, oferecendo os melhores preços do mercado 
                sem comprometer a excelência no atendimento.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Com <strong className="text-accent">24 unidades</strong> estrategicamente localizadas em 
                diversas cidades da Bahia, nos tornamos referência em farmácias populares, atendendo milhares 
                de famílias que confiam em nossos serviços e produtos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa equipe de farmacêuticos altamente qualificados está sempre pronta para orientar e 
                esclarecer dúvidas, garantindo que cada cliente receba não apenas medicamentos, mas também 
                informação e cuidado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-medium transition-all bg-card"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-6xl font-bold text-primary mb-2">24</p>
              <p className="text-lg text-muted-foreground">Unidades</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-bold text-primary mb-2">11</p>
              <p className="text-lg text-muted-foreground">Cidades</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-bold text-primary mb-2">90%</p>
              <p className="text-lg text-muted-foreground">Economia</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-bold text-primary mb-2">100%</p>
              <p className="text-lg text-muted-foreground">Qualidade</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
