import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop"; // <-- Import do componente
import Index from "./pages/Index";
import Unidades from "./pages/Unidades";
import QuemSomos from "./pages/QuemSomos";
import TrabalheConosco from "./pages/TrabalheConosco";
import WebMail from "./pages/WebMail";
import PaginaConstrucao from "./pages/PaginaConstrucao";
import UnidadesDetalhes from "./pages/UnidadesDetalhes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* <-- Aqui é onde ele entra */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/webmail" element={<WebMail />} />
          <Route path="*" element={<PaginaConstrucao />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/unidades/:id" element={<UnidadesDetalhes />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
