import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Salesplug Agency work?",
      answer: "Salesplug Agency uses advanced AI combined with Twilio's telephony infrastructure to create real-time phone calls with lifelike voices. Simply upload your scripts or FAQs, and our AI agents learn your business knowledge to handle calls professionally."
    },
    {
      question: "Can it handle both inbound and outbound calls?",
      answer: "Yes, absolutely! Salesplug Agency handles both types of calls seamlessly. For outbound, it can make sales calls, follow-ups, and reminders. For inbound, it manages customer inquiries, support requests, and message taking - all 24/7."
    },
    {
      question: "Is it easy to train the AI agents?",
      answer: "Very easy! Just upload your existing scripts, FAQs, or product information. Salesplug Agency learns your business knowledge in minutes, not weeks. No technical expertise required - if you can upload a file, you can train Salesplug Agency."
    },
    {
      question: "What if I don't like it?",
      answer: "You get a full 30-day money-back guarantee, no questions asked. We're confident Salesplug Agency will transform your business, but if it doesn't meet your expectations, we'll refund 100% of your payment."
    },
    {
      question: "How natural do the AI voices sound?",
      answer: "Our AI voices are incredibly natural and human-like. Most customers can't tell they're speaking with AI. You can choose from multiple voice options to match your brand personality and customer preferences."
    },
    {
      question: "Is Salesplug Agency compliant with calling regulations?",
      answer: "Yes, Salesplug Agency is 100% compliant with cold-calling regulations and Do Not Disturb (DND) lists. We automatically respect opt-out requests and maintain compliance with TCPA, CAN-SPAM, and other applicable regulations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/6 live chat and ticket support, plus technical assistance via Skype and TeamViewer. Our support team is experienced with Salesplug Agency and will help you get set up and optimized for success."
    },
    {
      question: "Can I integrate Salesplug Agency with my existing tools?",
      answer: "Yes! Salesplug Agency integrates seamlessly with Google Calendar for appointment booking, and works with Twilio for call management. We also provide call transcripts, SMS follow-ups, and notifications to keep you informed."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Frequently Asked{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers. Find everything you need to know about Salesplug Agency.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our support team is here to help you succeed with Salesplug Agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-sm text-muted-foreground">
                📞 24/6 Live Chat Support
              </div>
              <div className="text-sm text-muted-foreground">
                📧 Priority Email Support
              </div>
              <div className="text-sm text-muted-foreground">
                🖥️ Screen-Share Assistance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;