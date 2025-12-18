import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ServiceArea } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency: string = 'XAF',
  locale: string = 'en-US'
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(
  date: string | Date,
  format: 'short' | 'long' | 'full' = 'long'
) {
  const options: Record<string, Intl.DateTimeFormatOptions> = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
  };

  return new Intl.DateTimeFormat('en-US', options[format]).format(
    new Date(date)
  );
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function truncate(text: string, length: number = 100): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function calculateEnergySavings(
  systemSize: number, // in kW
  averageSunHours: number = 5.5, // daily for Central Africa
  electricityRate: number = 85 // XAF per kWh (average)
): {
  dailyProduction: number;
  monthlyProduction: number;
  annualProduction: number;
  monthlySavings: number;
  annualSavings: number;
} {
  const dailyProduction = systemSize * averageSunHours;
  const monthlyProduction = dailyProduction * 30;
  const annualProduction = dailyProduction * 365;
  const monthlySavings = monthlyProduction * electricityRate;
  const annualSavings = annualProduction * electricityRate;

  return {
    dailyProduction: Math.round(dailyProduction),
    monthlyProduction: Math.round(monthlyProduction),
    annualProduction: Math.round(annualProduction),
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
  };
}

export function getServiceAreaCountries(): ServiceArea[] {
  return [
    { country: 'Cameroon', countryCode: 'CM', coverage: 'full' },
    { country: 'Chad', countryCode: 'TD', coverage: 'full' },
    { country: 'Gabon', countryCode: 'GA', coverage: 'full' },
    { country: 'Congo', countryCode: 'CG', coverage: 'full' },
    { country: 'Equatorial Guinea', countryCode: 'GQ', coverage: 'full' },
    { country: 'Central African Republic', countryCode: 'CF', coverage: 'full' },
  ];
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  // Basic phone validation for international formats
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}
