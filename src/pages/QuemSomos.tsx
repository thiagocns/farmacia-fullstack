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

      {/* Hero Section - Ajustada com pt-32 para compensar o Header fixo */}
      <section className="bg-[#004bb4] pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6">
            Quem Somos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            Há anos levando saúde e bem-estar com preços acessíveis para toda a Bahia
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                A <strong className="text-[#004bb4]">Farmácia Preço Popular</strong> nasceu com o propósito
                de democratizar o acesso a medicamentos de qualidade, oferecendo os melhores preços do mercado
                sem comprometer a excelência no atendimento.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Com <strong className="text-[#e31d1a]">24 unidades</strong> estrategicamente localizadas em
                divers cidades da Bahia, nos tornamos referência em farmácias populares, atendendo milhares
                de famílias que confiam em nossos serviços e produtos.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                Nossa equipe de farmacêuticos altamente qualificados está sempre pronta para orientar e
                esclarecer dúvidas, garantindo que cada cliente receba não apenas medicamentos, mas também
                informação e cuidado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all border-slate-100 bg-white group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#004bb4]/10 rounded-2xl mb-6 group-hover:bg-[#004bb4] transition-colors">
                    <value.icon className="h-8 w-8 text-[#004bb4] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl md:text-7xl font-black text-[#004bb4] mb-3">24</p>
              <p className="text-lg font-bold text-slate-500 uppercase tracking-wider">Unidades</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-black text-[#004bb4] mb-3">11</p>
              <p className="text-lg font-bold text-slate-500 uppercase tracking-wider">Cidades</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-black text-[#004bb4] mb-3">90%</p>
              <p className="text-lg font-bold text-slate-500 uppercase tracking-wider">Economia</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-black text-[#004bb4] mb-3">100%</p>
              <p className="text-lg font-bold text-slate-500 uppercase tracking-wider">Qualidade</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;