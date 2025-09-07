import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-agro-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">AgroTokens</span>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
              Tokenização simples, segura e rastreável para o agronegócio.
            </p>
            
            <p className="text-white/70 mb-6">
              Transformamos a forma como produtores e investidores se relacionam com ativos agrícolas, 
              oferecendo transparência, segurança e liquidez através da tecnologia blockchain.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-white/80 hover:text-white transition-smooth">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#marketplace" className="text-white/80 hover:text-white transition-smooth">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#vantagens" className="text-white/80 hover:text-white transition-smooth">
                  Vantagens
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition-smooth">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-smooth">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-white/60" />
                <div>
                  <div className="text-white/80">contato@agrotokens.com</div>
                  <div className="text-white/60 text-sm">Suporte geral</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-white/60" />
                <div>
                  <div className="text-white/80">+55 (11) 9999-9999</div>
                  <div className="text-white/60 text-sm">Atendimento comercial</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-white/60" />
                <div>
                  <div className="text-white/80">São Paulo, SP</div>
                  <div className="text-white/60 text-sm">Brasil</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 AgroTokens. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/40">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-sm">SSL Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-sm">Blockchain Verificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-sm">Auditoria Independente</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;