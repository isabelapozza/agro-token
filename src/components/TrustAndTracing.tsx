import { Leaf, Building, Coins, ClipboardCheck, Link } from "lucide-react";

const TrustAndTracing = () => {
  const steps = [
    {
      icon: Leaf,
      title: "Origem",
      description: "Fazenda ou fornecedor verificado",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Building,
      title: "Custódia",
      description: "Armazém/silo credenciado",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Coins,
      title: "Token",
      description: "Criado 1:1 com o ativo físico",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: ClipboardCheck,
      title: "Auditoria",
      description: "Conferência de quantidade e qualidade",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Link,
      title: "Transação",
      description: "Compra, venda e uso registrados em blockchain",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="confianca" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-agro-dark mb-6">
            🔒 Confiança e rastreabilidade ponta a ponta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada token tem um histórico completo e verificável em blockchain
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-agro-dark via-agro-gold to-agro-success transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-premium transition-smooth transform hover:-translate-y-2 border-2 border-transparent hover:border-agro-gold">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 mx-auto relative z-10`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-agro-dark mb-2 text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-agro-dark text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How to Verify Box */}
        <div className="bg-white rounded-2xl p-8 shadow-card border-l-4 border-agro-gold">
          <h3 className="text-2xl font-bold text-agro-dark mb-6 text-center">
            Como eu confiro?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-agro-dark rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">QR</span>
              </div>
              <p className="text-gray-600">Escaneie o QR do lote</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-agro-dark rounded-xl flex items-center justify-center mx-auto mb-3">
                <Link className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600">Veja o histórico no blockchain</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-agro-dark rounded-xl flex items-center justify-center mx-auto mb-3">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600">Valide certificados e custódia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndTracing;