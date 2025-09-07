import { Eye, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Advantages = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const advantages = [
    {
      icon: Eye,
      title: "Transparência",
      description: "Histórico imutável no blockchain.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Custódia e auditorias garantem lastro real.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Pague com tokens, até via cartão parceiro.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Users,
      title: "Acesso",
      description: "Negociações sem barreiras, inclusive em frações.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="vantagens" className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            🚀 Por que tokenizar sua produção?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transforme a forma como você gerencia e negocia seus ativos agrícolas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-smooth transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {advantage.title}
                </h3>
                
                <p className="text-white/80 text-center leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="gold" 
            size="xl"
            onClick={() => scrollToSection('cta')}
          >
            Quero tokenizar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;