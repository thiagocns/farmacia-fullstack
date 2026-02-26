import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Imports de imagens mantidos
import promoBanner from "@/assets/promo-banner.png";
import inaugurationBanner from "@/assets/inauguration-banner.png";
import raffleBanner from "@/assets/raffle-banner.jpg";
import heroImage from "@/assets/heroImage.png";

const slides = [
  {
    id: 1,
    image: heroImage,
    title: "Promoção Imperdível",
    subtitle: "Até 90% de desconto em medicamentos selecionados!",
    highlight: "90% OFF",
  },
  {
    id: 2,
    image: heroImage,
    title: "Nova Unidade",
    subtitle: "Inauguração da nossa nova loja em Salvador!",
    highlight: "Inauguração",
  },
  {
    id: 3,
    image: heroImage,
    title: "Sorteio do Mês",
    subtitle: "Concorra a prêmios incríveis! Participe agora!",
    highlight: "Sorteio",
  },
];

const Carrossel1 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section id="home" className="relative w-full h-[95vh] min-h-[500px] overflow-hidden bg-[#0056b3]">
      {/* Imagem de Fundo com Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            <img
              src={slides[current].image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#004bb4]/90 via-[#004bb4]/60 to-[#004bb4]/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#e31d1a] text-white font-bold text-xs uppercase tracking-wider mb-6 shadow-lg">
              {slides[current].highlight}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight drop-shadow-xl">
              {slides[current].title}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-xl font-medium drop-shadow-md">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botões de navegação laterais */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-xl"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-xl"
      >
        <ChevronRight size={28} />
      </button>

      {/* INDICADORES (DOTS) - O AJUSTE SOLICITADO ESTÁ AQUI */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current
                ? "bg-white w-12 h-4 border-[3px] border-[#e31d1a] shadow-lg"
                : "bg-white/50 w-3 h-3 hover:bg-white/80"
              }`}
          />
        ))}
      </div>

      {/* Curva do rodapé */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 52 1440 55V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Carrossel1;