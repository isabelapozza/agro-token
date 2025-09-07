import { Coins, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: Coins,
      title: "Tokenize",
      description: "Cadastramos seu milho, gado ou madeira e criamos o token correspondente no blockchain.",
      color: "text-blue-500"
    },
    {
      icon: CreditCard,
      title: "Use",
      description: "Use seus tokens como moeda: pague insumos, maquinário ou negocie em segundos.",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Confie",
      description: "Cada token é auditado, custodiado e registrado em blockchain, garantindo confiança total.",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-agro-dark mb-6">
            ⚙️ Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme seus ativos agrícolas em tokens digitais em apenas 3 passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-agro-gold to-transparent transform translate-x-4 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-card hover:shadow-premium transition-smooth transform hover:-translate-y-2">
                  <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-agro-dark mb-4 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="gold" 
            size="lg"
            onClick={() => scrollToSection('confianca')}
          >
            Entenda o passo a passo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;