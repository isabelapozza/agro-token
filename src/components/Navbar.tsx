import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-agro-dark">AgroTokens</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-700 hover:text-agro-dark transition-smooth font-medium"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection('marketplace')}
              className="text-gray-700 hover:text-agro-dark transition-smooth font-medium"
            >
              Marketplace
            </button>
            <button
              onClick={() => scrollToSection('vantagens')}
              className="text-gray-700 hover:text-agro-dark transition-smooth font-medium"
            >
              Vantagens
            </button>
            <button
              onClick={() => scrollToSection('confianca')}
              className="text-gray-700 hover:text-agro-dark transition-smooth font-medium"
            >
              Confiança & Rastreio
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-agro-dark transition-smooth font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-agro-dark transition-smooth font-medium"
            >
              FAQ
            </button>
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => scrollToSection('cta')}
            >
              Comece agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-agro-dark transition-smooth"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-700 hover:text-agro-dark transition-smooth font-medium text-left"
              >
                Como funciona
              </button>
              <button
                onClick={() => scrollToSection('marketplace')}
                className="text-gray-700 hover:text-agro-dark transition-smooth font-medium text-left"
              >
                Marketplace
              </button>
              <button
                onClick={() => scrollToSection('vantagens')}
                className="text-gray-700 hover:text-agro-dark transition-smooth font-medium text-left"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection('confianca')}
                className="text-gray-700 hover:text-agro-dark transition-smooth font-medium text-left"
              >
                Confiança & Rastreio
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-700 hover:text-agro-dark transition-smooth font-medium text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-agro-dark transition-smooth font-medium text-left"
              >
                FAQ
              </button>
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => scrollToSection('cta')}
                className="w-full"
              >
                Comece agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;