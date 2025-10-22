import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      role: "Produtor de milho",
      location: "Mato Grosso",
      content: "Paguei adubo com tokens do meu próprio milho. Rápido e sem burocracia.",
      rating: 5,
      avatar: "👨‍🌾"
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Proprietária de serraria",
      location: "Pará",
      content: "Com a rastreabilidade, consegui valorizar minha exportação.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "Carlos Mendes",
      role: "Investidor urbano",
      location: "São Paulo",
      content: "Entrei com frações e diversifiquei sem sair do agro.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-agro-dark mb-6">
            💬 O que dizem nossos usuários
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de quem já transformou seus ativos em tokens
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-premium border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-agro-dark rounded-full flex items-center justify-center text-white hover:bg-agro-success transition-smooth"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="text-center flex-1">
                <div className="text-6xl mb-4">
                  {testimonials[currentIndex].avatar}
                </div>
                <h3 className="text-2xl font-bold text-agro-dark mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-agro-gold font-medium mb-1">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-agro-dark rounded-full flex items-center justify-center text-white hover:bg-agro-success transition-smooth"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed italic">
              "{testimonials[currentIndex].content}"
            </blockquote>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex ? 'bg-agro-dark' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;