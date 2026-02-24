import { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Instagram posts - In production, these would come from Instagram API
const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    caption: "Promoção de hoje! #FarmaciaPrecoPopular",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400",
    caption: "Nova linha de dermocosméticos",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    caption: "Equipe sempre pronta para atender você!",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1550572017-4814c5d814c2?w=400",
    caption: "Medicamentos com os melhores preços",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    caption: "Saúde e bem-estar para toda família",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400",
    caption: "Consulte nossas ofertas especiais",
  },
];

const InstaCarrossel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 3;

  const goToPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setStartIndex((prev) =>
      Math.min(instagramPosts.length - itemsPerView, prev + 1)
    );
  };

  const visiblePosts = instagramPosts.slice(
    startIndex,
    startIndex + itemsPerView
  );

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-12 w-12 text-accent mr-3" />
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Siga-nos no Instagram
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Fique por dentro das novidades e promoções
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <a
              href="https://www.instagram.com/farmaciaprecopopular.oficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @farmaciaprecopopular.oficial
            </a>
          </Button>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              disabled={startIndex === 0}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex space-x-4">
              {visiblePosts.map((post) => (
                <a
                  key={post.id}
                  href="https://www.instagram.com/farmaciaprecopopular.oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-64 h-64 overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-all hover:scale-105"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              disabled={startIndex >= instagramPosts.length - itemsPerView}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile View - Grid */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {instagramPosts.slice(0, 4).map((post) => (
              <a
                key={post.id}
                href="https://www.instagram.com/farmaciaprecopopular.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-all"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaCarrossel;
