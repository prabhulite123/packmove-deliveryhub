import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceType } from '../types/service';

interface ServiceSectionProps {
  service: ServiceType;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const colorClasses = {
    packaging: 'text-pack-blue bg-pack-blue/10',
    moving: 'text-pack-green bg-pack-green/10',
    shipping: 'text-pack-purple bg-pack-purple/10',
    delivery: 'text-pack-orange bg-pack-orange/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="service-card"
    >
      <div className="p-6 md:p-8">
        <div className={`inline-flex items-center px-3 py-1 rounded-full mb-4 ${colorClasses[service.id as keyof typeof colorClasses]}`}>
          <service.icon className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{service.label}</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        
        <p className="text-muted-foreground mb-6">
          {service.description}
        </p>
        
        <Button variant="ghost" size="sm" className="group">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      
      <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-800/50">
        <motion.div 
          whileHover={{ 
            scale: 1.05,
            rotate: isEven ? 2 : -2 
          }}
          transition={{ duration: 0.3 }}
          className="h-full w-full flex items-center justify-center py-4 px-4"
        >
          <img 
            src={service.image} 
            alt={service.title}
            className="max-h-full max-w-full object-contain service-icon"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceSection;
