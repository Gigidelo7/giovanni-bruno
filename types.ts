import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface Location {
  city: string;
  clinicName: string;
  address?: string;
  coordinates?: { lat: number; lng: number }; 
}

export interface Review {
  id: string;
  patientName: string;
  text: string;
  rating: number;
  tag: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}