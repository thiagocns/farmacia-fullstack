import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebMail = () => {
  useEffect(() => {
    // Abre o portal de vagas em uma nova aba
    window.open("https://farmaciasprecopopular.com.br:2096/webmaillogout.cgi", "_blank");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-background px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        WebMail Aberto em Nova Aba
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Caso não tenha sido redirecionado,{" "}
        <a
          href="https://farmaciasprecopopular.com.br:2096/webmaillogout.cgi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          clique aqui
        </a>.
      </p>

      <Button
        asChild
        size="lg"
        className="bg-gradient-primary text-white hover:opacity-90 transition"
      >
        <Link to="/">Voltar para Pagina Inicial</Link>
      </Button>
    </div>
  );
};

export default WebMail;



/*
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TrabalheConosco = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.position) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Currículo enviado!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      position: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />


      <section className="bg-gradient-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Trabalhe Conosco
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Faça parte da nossa equipe e ajude a levar saúde com preços acessíveis
            para toda a Bahia
          </p>
        </div>
      </section>


      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Por que trabalhar conosco?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center bg-card">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Crescimento Profissional
              </h3>
              <p className="text-muted-foreground">
                Oportunidades de desenvolvimento e crescimento dentro da empresa
              </p>
            </Card>
            <Card className="p-6 text-center bg-card">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Ambiente Colaborativo
              </h3>
              <p className="text-muted-foreground">
                Equipe unida e ambiente de trabalho saudável e motivador
              </p>
            </Card>
            <Card className="p-6 text-center bg-card">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Benefícios
              </h3>
              <p className="text-muted-foreground">
                Pacote completo de benefícios para você e sua família
              </p>
            </Card>
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              Envie seu Currículo
            </h2>

            <Card className="p-6 md:p-8 shadow-medium">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade de Interesse *</Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        setFormData({ ...formData, city: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a cidade" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="eunapolis">Eunapólis</SelectItem>
                        <SelectItem value="guanambi">Guanambi</SelectItem>
                        <SelectItem value="ilheus">Ilhéus</SelectItem>
                        <SelectItem value="ipiau">Ipiaú</SelectItem>
                        <SelectItem value="itabuna">Itabuna</SelectItem>
                        <SelectItem value="itapetinga">Itapetinga</SelectItem>
                        <SelectItem value="jaguaquara">Jaguaquara</SelectItem>
                        <SelectItem value="jequie">Jequié</SelectItem>
                        <SelectItem value="salvador">Salvador</SelectItem>
                        <SelectItem value="simoes-filho">Simões Filho</SelectItem>
                        <SelectItem value="vitoria-conquista">
                          Vitória da Conquista
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Cargo Pretendido *</Label>
                    <Select
                      value={formData.position}
                      onValueChange={(value) =>
                        setFormData({ ...formData, position: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="farmaceutico">Farmacêutico</SelectItem>
                        <SelectItem value="atendente">Atendente</SelectItem>
                        <SelectItem value="caixa">Caixa</SelectItem>
                        <SelectItem value="estoquista">Estoquista</SelectItem>
                        <SelectItem value="gerente">Gerente</SelectItem>
                        <SelectItem value="administrativo">
                          Administrativo
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte um pouco sobre sua experiência..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Anexar Currículo</Label>
                  <div className="border-2 border-dashed border-input rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Clique para anexar ou arraste seu currículo aqui
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC ou DOCX (máx. 5MB)
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                >
                  Enviar Currículo
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrabalheConosco;
*/