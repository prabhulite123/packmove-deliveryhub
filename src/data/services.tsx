
import { Package, Truck, Ship, Home } from 'lucide-react';
import { ServiceType } from '../types/service';

// Stock images for services
const packagingImage = "https://images.unsplash.com/photo-1635439968416-7a35be95f968?q=80&w=1000&auto=format&fit=crop";
const movingImage = "https://images.unsplash.com/photo-1586864089956-13623eac1f42?q=80&w=1000&auto=format&fit=crop";
const shippingImage = "https://images.unsplash.com/photo-1620063652328-6a0a0a639dea?q=80&w=1000&auto=format&fit=crop";
const deliveryImage = "https://images.unsplash.com/photo-1579195140248-3767f858f619?q=80&w=1000&auto=format&fit=crop";

export const services: ServiceType[] = [
  {
    id: "packaging",
    label: "Step 1",
    title: "Professional Packaging",
    description: "Our professional team ensures your items are securely packed using industry-standard materials and techniques.",
    icon: Package,
    image: packagingImage,
    imageType: 'url'
  },
  {
    id: "moving",
    label: "Step 2",
    title: "Efficient Moving",
    description: "We handle the transportation of your packages with care, using modern vehicles and equipment for safe transit.",
    icon: Truck,
    image: movingImage,
    imageType: 'url'
  },
  {
    id: "shipping",
    label: "Step 3",
    title: "Global Shipping",
    description: "Ship your packages worldwide with our international network of shipping partners by air and sea.",
    icon: Ship,
    image: shippingImage,
    imageType: 'url'
  },
  {
    id: "delivery",
    label: "Step 4",
    title: "Doorstep Delivery",
    description: "We ensure your packages reach their final destination safely and on time, delivering right to the doorstep.",
    icon: Home,
    image: deliveryImage,
    imageType: 'url'
  }
];
