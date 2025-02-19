import { CircuitBoard, Cpu, Workflow, Video, FileCheck, UserCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const createDataStream = () => {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.left = Math.random() * 100 + 'vw';
      stream.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.getElementById('hero-section')?.appendChild(stream);
      
      setTimeout(() => {
        stream.remove();
      }, 5000);
    };

    const interval = setInterval(createDataStream, 200);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const mailtoLink = `mailto:automaata@gmail.com?subject=Automation Inquiry - ${formData.get('businessName')}&body=Business Name: ${formData.get('businessName')}%0D%0A%0D%0AContact Person: ${formData.get('contactName')}%0D%0A%0D%0AEmail: ${formData.get('email')}%0D%0A%0D%0APhone: ${formData.get('phone')}%0D%0A%0D%0ABusiness Type: ${formData.get('businessType')}%0D%0A%0D%0AAutomation Needs:%0D%0A${formData.get('needs')}`;
    
    window.location.href = mailtoLink;
    setFormSubmitted(true);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navigation />
      
      <section id="hero-section" className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="liquid-shape absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-light/10 to-transparent blur-3xl"></div>
          <div className="liquid-shape absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-light/10 to-transparent blur-3xl" style={{ animationDelay: "-4s" }}></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="animate-float">
            <span className="bg-white/5 text-primary-light px-6 py-2 rounded-full text-sm font-medium inline-block shadow-sm backdrop-blur-sm animate-pulse-glow">
              Intelligent Automation Solutions
            </span>
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white animate-fade-up leading-tight" style={{ animationDelay: "0.2s" }}>
            <span className="text-white">Auto</span>
            <span className="gradient-shift bg-clip-text text-transparent">maata</span>
            <br />
            <span className="gradient-shift bg-clip-text text-transparent">Through Automation</span>
          </h1>
          <div className="relative h-40 mt-12">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="isometric-box w-32 h-32 bg-gradient-to-tr from-primary-light/20 to-primary-light/10 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="isometric-gear absolute -top-8 -right-8 w-16 h-16 border-4 border-primary-light rounded-full"></div>
                <div className="isometric-gear absolute -bottom-8 -left-8 w-12 h-12 border-4 border-primary-light rounded-full"></div>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="automation-line"
                    style={{
                      top: `${20 + i * 15}%`,
                      animationDelay: `${i * 0.5}s`,
                      width: '80%',
                      left: '10%'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.4s" }}>
            Empower your business with cutting-edge automation solutions that drive efficiency and growth
          </p>
        </div>
      </section>

      <section id="services" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="liquid-shape absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-light/5 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group glass-card p-8 rounded-2xl transition-all duration-500 animate-fade-up hover:bg-white/10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary-light/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 animate-pulse-glow">
                  <service.icon className="text-white transform group-hover:rotate-12 transition-transform duration-500" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary-light transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light/5 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">About Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8 animate-fade-up leading-relaxed">
              At Automaata, we're passionate about helping businesses harness the power of automation to transform their operations. We understand that many businesses are overwhelmed by manual processes, repetitive tasks, and inefficient workflows that drain resources and limit growth.
            </p>
            <p className="text-xl text-gray-600 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Our mission is to eliminate these operational headaches through intelligent automation solutions. We believe that every business, regardless of size, deserves access to cutting-edge automation tools that can streamline operations, reduce errors, and free up valuable time for strategic growth.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="liquid-shape absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary-light/5 to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center gradient-shift bg-clip-text text-transparent mb-16">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="group glass-card p-8 rounded-2xl neo-brutalism"
                style={{ 
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary-light/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <step.icon className="text-white transform group-hover:rotate-12 transition-transform duration-500" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary-light transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-shift opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(155,135,245,0.1),transparent_50%)]"></div>
        <div className="max-w-3xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center gradient-shift bg-clip-text text-transparent mb-16">Get Started with Automation</h2>
          <form onSubmit={handleSubmit} className="space-y-8 bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                Business Type
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-2">
                What would you like to automate?
              </label>
              <textarea
                id="needs"
                name="needs"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all duration-200"
                placeholder="Please describe the processes or tasks you'd like to automate..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-primary px-12 py-4 rounded-xl font-medium text-white transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fade-up hover:bg-primary-light"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
          {formSubmitted && (
            <div className="mt-6 p-6 bg-green-50 text-green-700 rounded-xl text-center animate-fade-up">
              Thank you for your inquiry! We'll get back to you soon.
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4 gradient-shift relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="liquid-shape absolute inset-0 bg-white/5 blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl font-bold mb-8 text-white animate-float">Ready to Automate?</h2>
          <p className="text-xl mb-12 text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Let's discuss how automation can transform your business operations
          </p>
          <a
            href="#contact"
            className="inline-block glass-card text-white px-12 py-4 rounded-xl font-medium neo-brutalism"
            style={{ animationDelay: "0.4s" }}
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

const process = [
  {
    icon: Video,
    title: "Discovery Call",
    description: "We start with a detailed online consultation to understand your business processes, pain points, and automation goals.",
  },
  {
    icon: FileCheck,
    title: "Custom Solution Design",
    description: "Based on your needs, we design tailored automation solutions that align perfectly with your business workflow.",
  },
  {
    icon: UserCheck,
    title: "Implementation & Support",
    description: "We implement the solutions seamlessly and provide ongoing support to ensure smooth operations.",
  },
];

export default Index;
