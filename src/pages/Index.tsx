
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Package, Truck, Ship, Home, MessageCircle, ArrowRight } from 'lucide-react';

const serviceData = [
  {
    id: "packaging",
    title: "Professional Packaging",
    description: "Our professional team ensures your items are securely packed using industry-standard materials and techniques.",
    icon: Package,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: "moving",
    title: "Efficient Moving",
    description: "We handle the transportation of your packages with care, using modern vehicles and equipment for safe transit.",
    icon: Truck,
    color: "bg-green-100 text-green-600"
  },
  {
    id: "shipping",
    title: "Global Shipping",
    description: "Ship your packages worldwide with our international network of shipping partners by air and sea.",
    icon: Ship,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: "delivery",
    title: "Doorstep Delivery",
    description: "We ensure your packages reach their final destination safely and on time, delivering right to the doorstep.",
    icon: Home,
    color: "bg-orange-100 text-orange-600"
  }
];

// Define the keyframes for the globe rotation animation
const rotateKeyframes = `
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Globe Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-900/90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(63, 94, 251, 0.1) 0%, rgba(252, 70, 107, 0.05) 100%), url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(25, 118, 210, 0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E\")",
          opacity: 0.5,
          animation: "rotate 60s linear infinite"
        }}></div>
      </div>

      {/* Header */}
      <header className="py-6 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">PackMove</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
            <Button asChild size="sm">
              <a href="#contact">Get Started</a>
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                End-to-End <span className="text-primary">Packaging</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                We handle every step of your logistics journey, ensuring your items are safely packed, moved, shipped, and delivered.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg">
                  <a href="#services">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From packaging to final delivery, we provide a complete solution for all your shipping needs.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
                >
                  <div className={`inline-flex items-center px-3 py-1 rounded-full mb-4 ${service.color}`}>
                    <service.icon className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Step {index + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="h-48 bg-slate-100 dark:bg-slate-700/50 rounded-lg overflow-hidden mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="h-full w-full flex items-center justify-center"
                    >
                      <service.icon className="h-24 w-24 text-slate-400 dark:text-slate-600" />
                    </motion.div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">Express Your Interest</h2>
                    <p className="text-muted-foreground mb-6">
                      Ready to get started with our end-to-end logistics solution? Reach out to us directly through WhatsApp for a quick response.
                    </p>
                    <div className="flex items-center gap-2 mb-8">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">WhatsApp Contact</p>
                        <p className="text-muted-foreground text-sm">+46733115830</p>
                      </div>
                    </div>
                    
                    <Button asChild size="lg" className="w-full md:w-auto bg-green-500 hover:bg-green-600">
                      <a 
                        href="https://wa.me/46733115830?text=I'm%20interested%20in%20your%20packaging%20and%20delivery%20services!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex-1 p-4">
                    <motion.div 
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className="bg-gray-100 dark:bg-slate-700 rounded-xl p-4 md:p-6 shadow-md transform rotate-2">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-3 mb-3 max-w-[80%]">
                          <p className="text-sm">Hello! I'm interested in your logistics services.</p>
                        </div>
                        
                        <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 mb-3 ml-auto max-w-[80%]">
                          <p className="text-sm">Thanks for reaching out! How can we assist you today?</p>
                        </div>
                        
                        <div className="flex items-center mt-4 gap-2">
                          <div className="flex-1">
                            <div className="h-10 bg-white dark:bg-slate-700 rounded-full px-4 flex items-center text-sm text-muted-foreground">
                              Type a message...
                            </div>
                          </div>
                          <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="20" 
                              height="20" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="text-white"
                            >
                              <line x1="22" y1="2" x2="11" y2="13"></line>
                              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute -bottom-2 -right-2 h-full w-full bg-gray-200 dark:bg-slate-600 rounded-xl -z-10 transform -rotate-2"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 py-8 border-t">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Package className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">PackMove</span>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} PackMove. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Add the CSS for globe animation */}
      <style dangerouslySetInnerHTML={{ __html: rotateKeyframes }} />
    </div>
  );
};

export default Index;
