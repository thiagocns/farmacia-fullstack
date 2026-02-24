import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// 1. IMPORTAMOS A LISTA CENTRALIZADA E A INTERFACE
import { stores } from "@/data/stores"; 

// IMPORTAÇÃO DA IMAGEM DA PASTA ASSETS
import imgPopular from "@/assets/popular.png"; 

import { Card } from "@/components/ui/card";
import { MapPin, Clock, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Unidades = () => {
  const [showPopularOnly, setShowPopularOnly] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Todas");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Agora usamos a lista 'stores' que veio do arquivo central
  const sortedCities = Array.from(new Set(stores.map(s => s.city))).sort();
  const uniqueCities = ["Todas", ...sortedCities];

  const filteredStores = stores.filter((store) => {
    if (showPopularOnly) return store.hasPopularProgram;
    return selectedCity === "Todas" ? true : store.city === selectedCity;
  });

  const storesByCity = filteredStores.reduce((acc, store) => {
    if (!acc[store.city]) acc[store.city] = [];
    acc[store.city].push(store);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative z-[100]">
        <HeaderNav />
      </div>

      {/* Hero Section */}
      <section className="bg-[#0056f7] py-16 md:py-24 text-center relative overflow-visible">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Nossas Unidades</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {showPopularOnly ? "Lojas vinculadas ao Programa Farmácia Popular" : "Sempre perto de você com os melhores preços."}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className={`relative min-w-[220px] ${showPopularOnly ? 'opacity-50 pointer-events-none' : ''}`} ref={dropdownRef}>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full flex items-center justify-between gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white">
                <div className="flex items-center gap-3">
                  <Filter className="h-4 w-4" />
                  <span>{selectedCity}</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl border z-[40] overflow-hidden">
                  <div className="max-h-60 overflow-y-auto">
                    {uniqueCities.map((city) => (
                      <button 
                        key={city} 
                        onClick={() => { setSelectedCity(city); setIsDropdownOpen(false); }} 
                        className="w-full text-left px-6 py-3 text-sm transition-all text-slate-700 hover:bg-blue-600 hover:text-white hover:font-bold"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => setShowPopularOnly(!showPopularOnly)} className={`rounded-full px-6 py-3 font-medium text-sm transition-all border flex items-center gap-3 ${showPopularOnly ? 'bg-yellow-400 text-blue-900 border-yellow-400' : 'bg-white/10 border-white/20 text-white'}`}>
              <div className={`w-2 h-2 rounded-full ${showPopularOnly ? 'bg-blue-900' : 'bg-white/40'}`}></div>
              Programa Popular
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Unidades */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {Object.entries(storesByCity).map(([city, cityStores]) => (
            <div key={city} className="mb-12">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-red-500" /> {city}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityStores.map((store) => (
                  <Card key={store.id} className="p-6 hover:shadow-lg transition-shadow bg-white relative flex flex-col justify-between overflow-hidden">
                    
                    {store.hasPopularProgram && (
                      <div className="absolute top-2 right-2 w-[70px] h-[70px]">
                        <img src={imgPopular} alt="Farmácia Popular" className="w-full h-full object-contain" />
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 pr-16 leading-tight">{store.name}</h3>
                      <div className="space-y-3 text-slate-600 mb-6 font-medium">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                          <p className="text-sm">{store.address}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                          <p className="text-sm">{store.displayHours}</p>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold" asChild>
                      <Link to={`/unidades/${store.id}`}>Ver Detalhes</Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Unidades;