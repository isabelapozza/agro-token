import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    volume: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Simulação solicitada!",
      description: "Nossa equipe entrará em contato em até 24 horas.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      product: "",
      volume: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="cta" className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            🌟 Pronto para tokenizar seu agro?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Fale com a gente e simule agora sua primeira operação.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-medium">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-white font-medium">
                  Produto
                </Label>
                <Select value={formData.product} onValueChange={(value) => handleInputChange("product", value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Selecione o produto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="milho">Milho</SelectItem>
                    <SelectItem value="gado">Gado</SelectItem>
                    <SelectItem value="madeira">Madeira tratada</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="volume" className="text-white font-medium">
                  Volume aproximado
                </Label>
                <Input
                  id="volume"
                  type="text"
                  placeholder="Ex: 1000 sacas, 100 cabeças, 500m³"
                  value={formData.volume}
                  onChange={(e) => handleInputChange("volume", e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  required
                />
              </div>
            </div>

            <div className="text-center pt-6">
              <Button 
                type="submit"
                variant="gold" 
                size="xl"
                className="px-12"
              >
                Solicitar simulação
              </Button>
              
              <p className="text-white/80 text-sm mt-4">
                Resposta em até 24 horas • Sem compromisso
              </p>
            </div>
          </form>
        </div>

        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div className="text-white/90">
            <div className="text-2xl font-bold mb-2">Gratuito</div>
            <div className="text-sm">Simulação sem custos</div>
          </div>
          <div className="text-white/90">
            <div className="text-2xl font-bold mb-2">24h</div>
            <div className="text-sm">Resposta rápida</div>
          </div>
          <div className="text-white/90">
            <div className="text-2xl font-bold mb-2">Seguro</div>
            <div className="text-sm">Dados protegidos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;