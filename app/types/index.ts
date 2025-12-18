export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'solar-roof' | 'battery' | 'module' | 'ac' | 'lighting';
  brand?: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  gallery: string[];
  specifications: ProductSpecifications;
  features: string[];
  problemsSolved?: string[];
  safetyFeatures?: string[];
  applications: string[];
  documents?: Document[];
  warranty?: string;
  price?: {
    currency: string;
    amount: number;
    unit?: string;
  };
}

export interface ProductSpecifications {
  model?: string;
  size?: string;
  weight?: string;
  powerOutput?: string;
  temperatureRange?: string;
  fireRating?: string;
  lifespan?: string;
  warranty?: string;
  [key: string]: string | undefined;
}

export interface Document {
  name: string;
  url: string;
  type?: 'pdf' | 'doc' | 'other';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  date: string;
  systemSize: string;
  savingsPercent: number;
  heroImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial: Testimonial;
  products?: string[]; // Product IDs used
  tags?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  photo?: string;
  company?: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  order?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
  email?: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  location: string;
  interest: 'quote' | 'general' | 'partnership' | 'careers';
  message: string;
}

export interface QuoteFormData extends ContactFormData {
  propertyType: 'residential' | 'commercial' | 'industrial';
  roofSize?: string;
  currentEnergyBill?: string;
  preferredProduct?: string;
  installationTimeframe?: string;
}

export interface Partner {
  id: string;
  name: string;
  type: 'manufacturing' | 'distribution' | 'installation';
  logo: string;
  website?: string;
  location: string;
  description?: string;
}

export interface ServiceArea {
  country: string;
  countryCode: string;
  cities?: string[];
  coverage: 'full' | 'partial';
}
