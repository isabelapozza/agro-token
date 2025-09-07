import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Eye } from "lucide-react";
import heroImage from "@/assets/hero-agro.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Agricultura moderna com milho, gado e madeira tratada"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Rastreável</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Lastreado</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">Seguro</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              🌾 Do campo ao 
              <span className="text-transparent bg-clip-text gradient-gold block">
                digital
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              Transforme sua produção em valor tokenizado
            </h2>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed">
              Tokens lastreados em milho, gado e madeira tratada. 
              <br className="hidden lg:block" />
              Segurança, rastreabilidade e liquidez em um só lugar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('cta')}
                className="group"
              >
                Tokenizar minha produção
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="gold" 
                size="xl"
                onClick={() => scrollToSection('marketplace')}
              >
                Ver marketplace
              </Button>
            </div>
          </div>

          {/* Stats/Info Cards */}
          <div className="hidden lg:block">
            <div className="grid gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-agro-gold mb-2">100%</div>
                <div className="text-white">Rastreabilidade blockchain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-agro-gold mb-2">24/7</div>
                <div className="text-white">Negociação disponível</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-agro-gold mb-2">Seguro</div>
                <div className="text-white">Transações em segundos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;