import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import promoBanner from "@/assets/promo-banner.png";
import inaugurationBanner from "@/assets/inauguration-banner.png";
import raffleBanner from "@/assets/raffle-banner.jpg";

const newsItems = [
  {
    id: 1,
    image: promoBanner,
    title: "Promoção Imperdível",
    description: "Até 90% de desconto em medicamentos selecionados!",
  },
  {
    id: 2,
    image: inaugurationBanner,
    title: "Nova Unidade",
    description: "Inauguração da nossa nova loja em Salvador!",
  },
  {
    id: 3,
    image: raffleBanner,
    title: "Sorteio do Mês",
    description: "Concorra a prêmios incríveis! Participe agora!",
  },
];

const Carrossel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden bg-gradient-hero">
      {/* Slides */}
      <div className="relative w-full h-full">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 animate-fade-in">
                  {item.title}
                </h2>
                <p className="text-lg md:text-2xl animate-fade-in">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
        onClick={goToPrevious}
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
        onClick={goToNext}
        aria-label="Próximo"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carrossel1;
