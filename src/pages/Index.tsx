import { CircuitBoard, Cpu, Workflow, Video, FileCheck, UserCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">About Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6 animate-fade-up">
              At Automaata, we're passionate about helping businesses harness the power of automation to transform their operations. We understand that many businesses are overwhelmed by manual processes, repetitive tasks, and inefficient workflows that drain resources and limit growth.
            </p>
            <p className="text-lg text-gray-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Our mission is to eliminate these operational headaches through intelligent automation solutions. We believe that every business, regardless of size, deserves access to cutting-edge automation tools that can streamline operations, reduce errors, and free up valuable time for strategic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="bg-white p-6 rounded-xl shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary-light/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="text-primary-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Get Started with Automation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                Business Type
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-1">
                What would you like to automate?
              </label>
              <textarea
                id="needs"
                name="needs"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                placeholder="Please describe the processes or tasks you'd like to automate..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
          {formSubmitted && (
            <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg text-center">
              Thank you for your inquiry! We'll get back to you soon.
            </div>
          )}
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
