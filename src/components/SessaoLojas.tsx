import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const cities = [
  "Eunápolis",
  "Guanambi",
  "Ilhéus",
  "Ipiaú",
  "Itabuna",
  "Itapetinga",
  "Jaguaquara",
  "Jequié",
  "Salvador",
  "Simões Filho",
  "Vitória da Conquista",
];

const SessaoLojas = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Procure a nossa farmácia em sua cidade!
          </h2>
          <p className="text-xl md:text-2xl text-accent font-semibold">
            24 unidades com uma linha completa de medicamentos e o melhor preço!
          </p>
        </div>

        {/* Lista de cidades */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {cities.map((city) => {
            const slug = city
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // remove acentos
              .replace(/\s+/g, "-"); // substitui espaços por hífen

            return (
              <Link key={city} to={`/unidades/${slug}`}>
                <Card className="p-6 text-center hover:shadow-medium transition-all hover:scale-105 cursor-pointer bg-card">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">{city}</h3>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Botão de ver todas */}
        <div className="te'xt-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-medium"
          >
            <Link to="/unidades">Ver Todas as Unidades</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SessaoLojas;
