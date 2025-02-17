
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
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZWQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiM5Yjg3ZjUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="animate-fade-up">
            <span className="bg-gradient-to-r from-primary-light/20 to-primary-light/10 text-primary-light px-6 py-2 rounded-full text-sm font-medium inline-block shadow-sm">
              Intelligent Automation Solutions
            </span>
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-primary animate-fade-up leading-tight" style={{ animationDelay: "0.2s" }}>
            Transform Your Business
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary">Through Automation</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.4s" }}>
            Empower your business with cutting-edge automation solutions that drive efficiency and growth
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up border border-gray-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary-light/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Process Section */}
      <section id="process" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="bg-white p-8 rounded-2xl shadow-lg animate-fade-up border border-gray-100 hover:transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary-light/70 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-light/5 to-transparent opacity-50"></div>
        <div className="max-w-3xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Get Started with Automation</h2>
          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
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
                className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-12 py-4 rounded-xl font-medium hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
          {formSubmitted && (
            <div className="mt-6 p-6 bg-green-50 text-green-700 rounded-xl text-center animate-fade-up shadow-lg border border-green-100">
              Thank you for your inquiry! We'll get back to you soon.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary to-primary-light/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to Automate?</h2>
          <p className="text-xl mb-12 text-white/90">
            Let's discuss how automation can transform your business operations
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary px-12 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
