import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Importamos useLocation

import { stores } from "@/data/stores";
import imgPopular from "@/assets/popular.png";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Unidades = () => {
  const [showPopularOnly, setShowPopularOnly] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Todas");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { hash } = useLocation(); // Pegamos a âncora da URL

  // Ajuste para scroll automático caso venha de um link com hash
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortedCitiesList = Array.from(new Set(stores.map(s => s.city))).sort();
  const uniqueCities = ["Todas", ...sortedCitiesList];

  const filteredStores = stores.filter((store) => {
    if (showPopularOnly) return store.hasPopularProgram;
    return selectedCity === "Todas" ? true : store.city === selectedCity;
  });

  const storesByCity = filteredStores.reduce((acc, store) => {
    if (!acc[store.city]) acc[store.city] = [];
    acc[store.city].push(store);
    return acc;
  }, {} as Record<string, any[]>);

  const sortedStoresByCity = Object.entries(storesByCity).sort(
    (a, b) => b[1].length - a[1].length
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderNav />

      <section className="bg-[#004bb4] pt-32 pb-16 md:pt-48 md:pb-24 text-center relative overflow-visible">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Nossas Unidades
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            {showPopularOnly
              ? "Lojas vinculadas ao Programa Farmácia Popular"
              : "Sempre perto de você com os melhores preços."}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className={`relative min-w-[240px] ${showPopularOnly ? 'opacity-50 pointer-events-none' : ''}`} ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 text-white font-bold hover:bg-white/20 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Filter className="h-5 w-5" />
                  <span>{selectedCity}</span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-full bg-white rounded-2xl shadow-2xl border border-slate-100 z-[60] overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="max-h-60 overflow-y-auto">
                    {uniqueCities.map((city) => (
                      <button
                        key={city}
                        onClick={() => { setSelectedCity(city); setIsDropdownOpen(false); }}
                        className="w-full text-left px-6 py-4 text-sm font-black transition-all text-slate-700 hover:bg-[#004bb4] hover:text-white uppercase"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowPopularOnly(!showPopularOnly)}
              className={`rounded-full px-8 py-4 font-black text-sm transition-all border-2 flex items-center gap-3 shadow-lg uppercase tracking-wider ${showPopularOnly
                ? 'bg-[#e31d1a] text-white border-[#e31d1a]'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${showPopularOnly ? 'bg-white animate-pulse' : 'bg-white/40'}`}></div>
              Programa Popular
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {sortedStoresByCity.length > 0 ? (
            sortedStoresByCity.map(([city, cityStores]) => {
              /* AJUSTE: Criamos o slug para o ID da div */
              const citySlug = city
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-");

              return (
                /* AJUSTE: Adicionado o id dinâmico e scroll-mt-32 */
                <div key={city} id={citySlug} className="mb-20 last:mb-0 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-10 border-b border-slate-200 pb-6">
                    <MapPin className="h-8 w-8 text-[#e31d1a]" />
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
                      {city}
                    </h2>
                    <span className="ml-auto bg-[#004bb4] text-white px-5 py-2 rounded-xl text-xs md:text-sm font-black shadow-sm">
                      {cityStores.length} {cityStores.length === 1 ? 'UNIDADE' : 'UNIDADES'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cityStores.map((store) => (
                      <Card key={store.id} className="p-8 hover:shadow-2xl transition-all bg-white relative flex flex-col justify-between overflow-hidden border-none shadow-md group rounded-3xl">
                        {store.hasPopularProgram && (
                          <div className="absolute -top-1 -right-1 w-20 h-20 transition-transform group-hover:scale-110">
                            <img src={imgPopular} alt="Farmácia Popular" className="w-full h-full object-contain p-2" />
                          </div>
                        )}

                        <div>
                          <h3 className="text-2xl font-black text-slate-800 mb-6 pr-12 leading-tight group-hover:text-[#004bb4] transition-colors uppercase">
                            {store.name}
                          </h3>
                          <div className="space-y-4 text-slate-600 mb-8 font-bold">
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-[#e31d1a] mt-1 flex-shrink-0" />
                              <p className="text-base leading-snug">{store.address}</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <Clock className="h-5 w-5 text-[#e31d1a] mt-1 flex-shrink-0" />
                              <p className="text-base">{store.displayHours}</p>
                            </div>
                          </div>
                        </div>

                        <Button
                          className="w-full h-14 bg-white border-2 border-[#004bb4] text-[#004bb4] hover:bg-[#004bb4] hover:text-white font-black text-lg rounded-2xl transition-all shadow-sm"
                          asChild
                        >
                          <Link to={`/unidades/${store.id}`}>VER DETALHES</Link>
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-32">
              <p className="text-3xl text-slate-300 font-black uppercase tracking-widest">Nenhuma unidade encontrada.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Unidades;