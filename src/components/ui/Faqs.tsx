import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is ADswift Connect?",
    a: `Adswift Connect is a platform that allows businesses to purchase and manage branded cryptocurrency wallet addresses for their customers, providing a seamless and secure way to handle crypto transactions.`,
  },
  {
    q: "How much does it cost?",
    a: `We offer flexible pricing models based on your business needs. Pricing starts at competitive rates for small businesses and scales with enterprise requirements. Contact us for a custom quote.`,
  },
  {
    q: "What security measures are in place?",
    a: `We implement bank-level security including multi-signature wallets, cold storage, 2FA, and regular security audits to ensure your and your customers assets are protected.`,
  },
  {
    q: "Which cryptocurrencies are supported?",
    a: `We support major cryptocurrencies including Bitcoin, Ethereum, and various ERC-20 tokens. Our platform is constantly expanding to include more blockchain networks.`,
  },
  {
    q: "How long does integration take?",
    a: `Most businesses can integrate our APIs within 1-2 weeks. We provide comprehensive documentation and dedicated support to ensure a smooth integration process.`,
  },
  {
    q: "Is is compliant with regulations?",
    a: `Yes, we are built with regulatory compliance in mind and work closely with legal experts to ensure we meet all necessary financial regulations and KYC/AML requirements.`,
  },
];

function Faqs() {
  return (
    <section className="w-full py-20 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto">
            Everything you need to know about ADswift Connect
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white border border-slate-200 rounded-xl shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 flex justify-between items-center hover:bg-slate-50 rounded-xl transition">
                <span className="font-medium text-left">{f.q}</span>
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6 pt-0 text-slate-700 text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faqs;
