
import { LucideIcon } from "lucide-react";

export interface ServiceType {
  id: "packaging" | "moving" | "shipping" | "delivery";
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}
