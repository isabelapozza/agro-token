import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "O que garante o lastro?",
      answer: "Custódia em armazéns credenciados + auditoria independente e registro em blockchain. Cada token representa uma quantidade física real do produto, armazenada em depósitos certificados e auditados regularmente."
    },
    {
      id: "item-2",
      question: "Posso pagar insumos e maquinário com tokens?",
      answer: "Sim. Já é possível usar tokens até em cartão de crédito parceiro. Nossa rede de parceiros aceita tokens como forma de pagamento para insumos, maquinários e serviços agropecuários."
    },
    {
      id: "item-3",
      question: "E se eu quiser o produto físico de volta?",
      answer: "Você pode resgatar convertendo o token em entrega do lote correspondente. O processo é simples: solicite o resgate, validamos a autenticidade do token e organizamos a logística de entrega do produto físico."
    },
    {
      id: "item-4",
      question: "É só para grandes produtores?",
      answer: "Não. Os tokens permitem negociar em frações, democratizando o acesso. Pequenos e médios produtores podem tokenizar suas produções e investidores podem comprar frações de produtos agrícolas."
    },
    {
      id: "item-5",
      question: "Como funciona a rastreabilidade?",
      answer: "Cada token possui um registro único no blockchain que rastreia toda a cadeia: origem, transporte, armazenamento, qualidade e auditorias. Você pode verificar todo o histórico através do QR code do produto."
    },
    {
      id: "item-6",
      question: "Quais são as taxas envolvidas?",
      answer: "Temos uma estrutura de taxas transparente: 1% para tokenização, 0,5% por transação e taxas de custódia baseadas no volume armazenado. Sem taxas ocultas ou surpresas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-agro-dark mb-6">
            ❓ Perguntas frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre a tokenização agropecuária
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="text-left hover:text-agro-dark transition-colors py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar.
          </p>
          <a 
            href="#" 
            className="text-agro-dark hover:text-agro-success transition-colors font-medium"
          >
            Ver documentação técnica →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;