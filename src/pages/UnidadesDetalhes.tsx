import { useParams, Link } from "react-router-dom";
import { stores } from "@/data/stores";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import {
  MapPin, Clock, Navigation,
  CheckCircle2, ShoppingBag, ArrowLeft,
  Car, Accessibility, Snowflake
} from "lucide-react";
import { Button } from "@/components/ui/button";

const UnidadesDetalhes = () => {
  const { id } = useParams();
  const store = stores.find((s) => s.id === Number(id));

  const isCurrentlyOpen = (hoursRange: string) => {
    // Sua lógica de verificação de horário (mantida)
    const now = new Date();
    const dayHours = hoursRange.split('|')[0] || "07:00-19:00";
    const [start, end] = dayHours.split("-");
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);
    const startTime = startH * 60 + startM;
    const endTime = endH * 60 + endM;
    const currentTime = now.getHours() * 60 + now.getMinutes();
    return currentTime >= startTime && currentTime <= endTime;
  };

  if (!store) {
    return <div className="text-center py-20">Unidade não encontrada.</div>;
  }

  const openStatus = isCurrentlyOpen(store.hours);

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderNav />

      {/* AJUSTE: pt-32 para mobile e pt-40 para desktop para o conteúdo aparecer abaixo do Header */}
      <main className="container mx-auto px-4 pt-32 pb-16 md:pt-40">

        {/* Botão Voltar - Agora visível e com estilo melhorado */}
        <Link
          to="/unidades"
          className="inline-flex items-center text-[#004bb4] hover:text-[#e31d1a] mb-8 font-bold transition-colors group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          VOLTAR PARA A LISTA DE UNIDADES
        </Link>

        {/* Título e Status */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              {store.name}
            </h1>
            <p className="text-slate-500 flex items-center gap-2 mt-3 text-lg font-medium">
              <MapPin className="h-5 w-5 text-[#e31d1a]" /> {store.address}
            </p>
          </div>
          <div className={`px-6 py-3 rounded-full font-black flex items-center gap-3 text-sm uppercase tracking-wider ${openStatus ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
            <span className={`h-3 w-3 rounded-full ${openStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
            {openStatus ? "Aberto agora" : "Fechado no momento"}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Galeria de Fotos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-200 h-80 rounded-3xl flex items-center justify-center text-slate-400 font-bold border-2 border-dashed border-slate-300">
                Foto da Fachada
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="bg-slate-200 rounded-3xl flex items-center justify-center text-slate-400 font-bold border-2 border-dashed border-slate-300">
                  Interior
                </div>
                <div className="bg-slate-200 rounded-3xl flex items-center justify-center text-slate-400 font-bold border-2 border-dashed border-slate-300">
                  Atendimento
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-[#004bb4]">
                <Navigation className="h-6 w-6" /> LOCALIZAÇÃO E ROTAS
              </h3>
              <div className="rounded-2xl overflow-hidden h-96 bg-slate-100 mb-6 shadow-inner">
                <iframe
                  src={store.mapEmbed}
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                ></iframe>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="bg-[#4285F4] hover:bg-blue-700 h-14 font-black text-lg rounded-xl" asChild>
                  <a href={store.googleMapsLink} target="_blank" rel="noreferrer">ABRIR NO GOOGLE MAPS</a>
                </Button>
                <Button className="bg-[#33d4ff] text-black hover:bg-[#2bc4eb] h-14 font-black text-lg rounded-xl" asChild>
                  <a href={`https://waze.com/ul?q=${encodeURIComponent(store.address)}`} target="_blank" rel="noreferrer">ABRIR NO WAZE</a>
                </Button>
              </div>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="space-y-8">
            {/* Horários */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-black text-2xl mb-8 flex items-center gap-3 text-slate-900">
                <Clock className="text-[#004bb4] h-6 w-6" /> HORÁRIOS
              </h3>

              <div className="space-y-6">
                {[
                  { label: "Segunda a Sexta", time: store.hours.split('|')[0] },
                  { label: "Sábado", time: store.hours.split('|')[1] },
                  { label: "Domingo", time: store.hours.split('|')[2] }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-100 last:border-0">
                    <span className="text-slate-500 font-bold text-lg">{item.label}</span>
                    <span className={`font-black text-lg px-4 py-1.5 rounded-xl ${item.label === "Domingo" ? "bg-blue-50 text-[#004bb4]" : "bg-slate-50 text-slate-900"}`}>
                      {item.time || "--:--"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-2xl flex items-center gap-3 border border-red-100">
                <span className="w-2 h-2 bg-[#e31d1a] rounded-full animate-pulse"></span>
                <p className="text-xs text-[#e31d1a] font-black uppercase tracking-widest">
                  Feriados sob consulta
                </p>
              </div>
            </div>

            {/* Serviços */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-black text-2xl mb-6 text-[#004bb4] border-b border-slate-100 pb-4">SERVIÇOS</h3>
              <ul className="grid grid-cols-1 gap-4">
                {store.services.map((svc, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" /> {svc}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-[#004bb4] font-black h-14 text-lg rounded-xl shadow-md">
                <ShoppingBag className="mr-2 h-5 w-5" /> VER OFERTAS
              </Button>
            </div>

            {/* Info Extra */}
            <div className="bg-[#004bb4] text-white p-8 rounded-3xl shadow-lg">
              <h3 className="font-black text-xl mb-6 uppercase tracking-wider">Infraestrutura</h3>
              <div className="space-y-5">
                {[
                  { icon: Car, label: "Estacionamento", val: store.amenities.parking },
                  { icon: Accessibility, label: "Acessibilidade", val: store.amenities.accessibility },
                  { icon: Snowflake, label: "Ar-condicionado", val: store.amenities.airConditioning }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 font-bold text-lg ${item.val ? 'opacity-100' : 'opacity-30 line-through'}`}>
                    <item.icon className="h-6 w-6" /> {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnidadesDetalhes;