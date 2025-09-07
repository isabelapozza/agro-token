import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import cornImage from "@/assets/corn-product.jpg";
import cattleImage from "@/assets/cattle-product.jpg";
import timberImage from "@/assets/timber-product.jpg";

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: "Milho tokenizado",
      symbol: "CORN",
      image: cornImage,
      description: "Liquidez garantida • Estoque custodiado",
      price: "R$ 45,50",
      unit: "por token",
      features: ["Alta liquidez", "Estoque custodiado", "Rastreabilidade total"]
    },
    {
      id: 2,
      name: "Gado tokenizado",
      symbol: "CATTLE",
      image: cattleImage,
      description: "Procedência verificada • Bem-estar animal",
      price: "R$ 1.250,00",
      unit: "por token",
      features: ["Procedência verificada", "Bem-estar animal", "Certificação sanitária"]
    },
    {
      id: 3,
      name: "Madeira tratada",
      symbol: "TIMBER",
      image: timberImage,
      description: "Tratamento certificado • Sustentabilidade comprovada",
      price: "R$ 320,75",
      unit: "por token",
      features: ["Tratamento certificado", "Sustentabilidade", "Origem controlada"]
    }
  ];

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-agro-dark mb-6">
            🛒 Nosso marketplace tokenizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Produtos agrícolas tokenizados com total transparência e segurança
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="default" className="text-base py-2 px-6 cursor-pointer hover:scale-105 transition-transform">
              Todos
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-6 cursor-pointer hover:scale-105 transition-transform">
              Milho
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-6 cursor-pointer hover:scale-105 transition-transform">
              Gado
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-6 cursor-pointer hover:scale-105 transition-transform">
              Madeira
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-smooth transform hover:-translate-y-2 border border-gray-100">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-agro-success text-white">
                    Lastreado
                  </Badge>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-agro-dark">
                    {product.name}
                  </h3>
                  <span className="text-sm font-mono bg-gray-100 px-3 py-1 rounded-full text-agro-dark">
                    {product.symbol}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-agro-success rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-agro-dark">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.unit}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-agro-success font-medium">
                      ↗ +2.3%
                    </div>
                    <div className="text-xs text-gray-400">
                      últimas 24h
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="premium" 
                  size="lg" 
                  className="w-full"
                >
                  Negociar agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Todos os produtos são lastreados em ativos físicos custodiados
          </p>
          <Button variant="outline" size="lg">
            Ver todos os produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;