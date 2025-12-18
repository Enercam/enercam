export const SITE_CONFIG = {
  name: 'Enercam Solar Roofs',
  description: 'Premium integrated solar roofing solutions for Central Africa',
  url: 'https://enercam.com',
  email: {
    info: 'info@enercam.com',
    support: 'support@enercam.com',
    careers: 'careers@enercam.com',
  },
  phone: '+237-622-672-1748',
  social: {
    facebook: 'https://facebook.com/enercam',
    instagram: 'https://instagram.com/enercam',
    linkedin: 'https://linkedin.com/company/enercam',
  },
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  {
    name: 'Products',
    href: '/products',
    children: [
      { name: 'Solar Roofs', href: '/products/solar-roofs' },
      { name: 'Battery Storage', href: '/products/battery-storage' },
      { name: 'Solar Modules', href: '/products/solar-modules' },
      { name: 'Air Conditioners', href: '/products/air-conditioners' },
      { name: 'Solar Lighting', href: '/products/lighting' },
    ],
  },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Projects', href: '/projects' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'Our Company', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Values & Mission', href: '/about/values' },
    ],
  },
  { name: 'Financing', href: '/financing' },
  { name: 'Contact', href: '/contact' },
] as const;

export const PRODUCT_CATEGORIES = [
  { id: 'solar-roof', name: 'Solar Roofs', slug: 'solar-roofs' },
  { id: 'battery', name: 'Battery Storage', slug: 'battery-storage' },
  { id: 'module', name: 'Solar Modules', slug: 'solar-modules' },
  { id: 'ac', name: 'Air Conditioners', slug: 'air-conditioners' },
  { id: 'lighting', name: 'Solar Lighting', slug: 'lighting' },
] as const;

export const SERVICE_AREAS = [
  'Cameroon',
  'Chad',
  'Gabon',
  'Congo',
  'Equatorial Guinea',
  'Central African Republic',
] as const;

export const INTEREST_TYPES = [
  { value: 'quote', label: 'Request a Quote' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'careers', label: 'Career Opportunity' },
  { value: 'support', label: 'Technical Support' },
] as const;

export const FEATURES = [
  {
    title: 'Lower Energy Bills',
    description: 'Generate your own clean electricity and reduce monthly costs from day one',
    icon: 'TrendingDown',
  },
  {
    title: 'Integrated Design',
    description: 'Beautiful solar tiles that blend seamlessly into your roof without bulky panels',
    icon: 'Layout',
  },
  {
    title: '35-Year Warranty',
    description: 'Industry-leading warranty coverage on both roofing and energy components',
    icon: 'Shield',
  },
  {
    title: 'Expert Installation',
    description: 'Certified professionals with 20+ years of experience in solar roofing',
    icon: 'Users',
  },
] as const;

export const WARRANTY_YEARS = 35;
export const COMPANY_ESTABLISHED = 2015;
export const EMPLOYEE_COUNT = '30+';
export const EXPERIENCE_YEARS = '10+';

export const META_DEFAULTS = {
  title: 'Enercam Solar Roofs - Integrated Solar Roofing Solutions for Central Africa',
  description:
    'Premium solar roofing systems that generate clean energy while protecting your home. Serving Cameroon, Chad, Gabon, Congo, Equatorial Guinea, and CAR with 35-year warranty.',
  keywords: [
    'solar roofing',
    'solar tiles',
    'integrated solar',
    'solar power Cameroon',
    'clean energy Central Africa',
    'solar installation',
    'renewable energy',
    'solar roof tiles',
    'battery storage',
    'solar panels Africa',
  ],
} as const;
