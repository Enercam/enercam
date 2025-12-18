import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  location: z.string().min(1, 'Please select your location'),
  interest: z.enum(['quote', 'general', 'partnership', 'careers']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const quoteSchema = contactSchema.extend({
  propertyType: z.enum(['residential', 'commercial', 'industrial']),
  roofSize: z.string().optional(),
  currentEnergyBill: z.string().optional(),
  preferredProduct: z.string().optional(),
  installationTimeframe: z.string().optional(),
});

export const careerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().min(1, 'Please select your experience level'),
  resume: z.any().optional(), // File upload
  coverLetter: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type QuoteFormData = z.infer<typeof quoteSchema>;
export type CareerFormData = z.infer<typeof careerSchema>;
