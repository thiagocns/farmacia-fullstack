import { useParams, Link } from "react-router-dom";
import { stores } from "@/data/stores";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import {
  MapPin, Phone, Clock, Navigation,
  CheckCircle2, ShoppingBag, ArrowLeft,
  Car, Accessibility, Snowflake
} from "lucide-react";
import { Button } from "@/components/ui/button";

const UnidadesDetalhes = () => {
  const { id } = useParams();
  const store = stores.find((s) => s.id === Number(id));

  // Função para verificar se está aberto agora
  const isCurrentlyOpen = (hoursRange: string) => {
    const now = new Date();
    const [start, end] = hoursRange.split("-");
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

      <main className="container mx-auto px-4 py-8">
        {/* Botão Voltar */}
        <Link to="/unidades" className="flex items-center text-blue-600 hover:underline mb-6 font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a lista de unidades
        </Link>

        {/* Título e Status */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{store.name}</h1>
            <p className="text-slate-500 flex items-center gap-2 mt-1">
              <MapPin className="h-4 w-4 text-red-500" /> {store.address}
            </p>
          </div>
          <div className={`px-4 py-2 rounded-full font-bold flex items-center gap-2 ${openStatus ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            <span className={`h-3 w-3 rounded-full ${openStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
            {openStatus ? "Aberto agora" : "Fechado no momento"}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LADO ESQUERDO: Fotos e Mapa */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galeria de Fotos (Placeholder para você substituir pelas suas) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-200 h-64 rounded-xl flex items-center justify-center text-slate-400 font-medium">Foto da Fachada</div>
              <div className="grid grid-rows-2 gap-4">
                <div className="bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 font-medium">Interior</div>
                <div className="bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 font-medium">Atendimento</div>
              </div>
            </div>

            {/* Mapa Interativo */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-800">
                <Navigation className="h-5 w-5" /> Localização e Rotas
              </h3>
              <div className="rounded-xl overflow-hidden h-80 bg-slate-100">
                <iframe
                  src={store.mapEmbed}
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                ></iframe>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button className="bg-[#4285F4] hover:bg-blue-700 py-6" asChild>
                  <a href={store.googleMapsLink} target="_blank" rel="noreferrer">Google Maps</a>
                </Button>
                <Button className="bg-[#33d4ff] text-black hover:bg-[#2bc4eb] py-6" asChild>
                  <a href={`https://waze.com/ul?q=${encodeURIComponent(store.address)}`} target="_blank" rel="noreferrer">Abrir no Waze</a>
                </Button>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Infos e Serviços */}
          <div className="space-y-6">

            {/* NOVO BLOCO DE HORÁRIOS QUE VOCÊ VAI COLAR AQUI */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-slate-800">
                <Clock className="text-blue-600 h-5 w-5" /> Horários de Funcionamento
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">Segunda a Sexta</span>
                  <span className="text-slate-900 font-bold bg-slate-50 px-3 py-1 rounded-lg">
                    {store.hours.split('|')[0] || "07:15 – 20:00"}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                  <span className="text-slate-500 font-medium">Sábado</span>
                  <span className="text-slate-900 font-bold bg-slate-50 px-3 py-1 rounded-lg">
                    {store.hours.split('|')[1] || "07:00 – 20:00"}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3">
                  <span className="text-slate-500 font-medium">Domingo</span>
                  <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-lg">
                    {store.hours.split('|')[2] || "08:00 – 13:00"}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-red-50 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                <p className="text-[11px] text-red-600 font-semibold uppercase tracking-wider">
                  Horários em feriados sob consulta
                </p>
              </div>
            </div>

            {/* Bloco de Serviços */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4 text-blue-900 border-b pb-2">Serviços Disponíveis</h3>
              <ul className="space-y-3">
                {store.services.map((svc, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 text-green-500" /> {svc}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
                <ShoppingBag className="mr-2 h-4 w-4" /> VER OFERTAS DA UNIDADE
              </Button>
            </div>

            {/* Bloco de Infraestrutura */}
            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-4">Informações Extras</h3>
              <div className="space-y-4">
                <div className={`flex items-center gap-3 ${store.amenities.parking ? 'opacity-100' : 'opacity-30 line-through'}`}>
                  <Car className="h-5 w-5" /> Estacionamento
                </div>
                <div className={`flex items-center gap-3 ${store.amenities.accessibility ? 'opacity-100' : 'opacity-30 line-through'}`}>
                  <Accessibility className="h-5 w-5" /> Acessibilidade
                </div>
                <div className={`flex items-center gap-3 ${store.amenities.airConditioning ? 'opacity-100' : 'opacity-30 line-through'}`}>
                  <Snowflake className="h-5 w-5" /> Ar-condicionado
                </div>
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