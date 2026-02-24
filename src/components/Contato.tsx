import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Contato = () => {
  <section id="contato">
  <Contato />
</section>
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    // Success
    toast({
      title: "Mensagem enviada!",
      description: "Em breve nosso farmacêutico entrará em contato.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
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
    <section id="contato" className="py-16 md:py-24 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-white/90">
              Escolha a melhor forma de falar conosco
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Formulário Farmacêutico */}
            <Card className="p-6 md:p-8 shadow-strong">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Fale com o Farmacêutico</CardTitle>
                <CardDescription>
                  Tire suas dúvidas sobre serviços farmacêuticos
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
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
                      className="border-input focus:ring-primary"
                    />
                  </div>

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
                      className="border-input focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-input focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Sua Dúvida *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva sua dúvida ou questionamento..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-input focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-medium"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="p-6 md:p-8 shadow-strong flex flex-col">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Fale com o Rogerinho</CardTitle>
                <CardDescription>
                  Para dúvidas gerais e atendimento rápido
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-6 text-center">
                    <MessageCircle className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground mb-4">
                      Atendimento via WhatsApp para dúvidas gerais, informações sobre produtos,
                      horários de funcionamento e outras questões <b>não</b> relacionadas a serviços farmacêuticos.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <MessageCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Resposta Rápida</h4>
                        <p className="text-sm text-muted-foreground">
                          Atendimento ágil para suas dúvidas gerais
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <MessageCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                        <p className="text-sm text-muted-foreground">
                          Segunda a Sexta: 8h às 18h<br />
                          Sábado: 8h às 12h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br /><br />
                <Button
                  size="lg"
                  className="w-full mt-6 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-medium"
                  onClick={() => window.open('https://wa.me/557398132909', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Clique no botão acima para iniciar uma conversa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
