
import { CircuitBoard, Cpu, Workflow } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="bg-primary-light/10 text-primary-light px-4 py-1 rounded-full text-sm font-medium">
              Intelligent Automation Solutions
            </span>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-primary animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transform Your Business
            <br />
            Through Automation
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Empower your business with cutting-edge automation solutions that drive efficiency and growth
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-primary-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how automation can transform your business operations
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline your workflows and eliminate repetitive tasks with intelligent process automation.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Leverage artificial intelligence to make smarter business decisions and optimize operations.",
  },
  {
    icon: CircuitBoard,
    title: "Custom Solutions",
    description: "Tailored automation solutions designed specifically for your business needs and goals.",
  },
];

export default Index;
