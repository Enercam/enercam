# Enercam Solar Roofs - Technical Specification Document

## Project Overview

**Domain:** enercam.com  
**Tech Stack:** Next.js 16+ (App Router), TypeScript, Tailwind CSS  
**Deployment:** Vercel  
**Project Type:** Corporate Marketing Website with Lead Generation

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Technical Architecture](#technical-architecture)
3. [Design System](#design-system)
4. [Page Structure & Routes](#page-structure--routes)
5. [Component Library](#component-library)
6. [Content Management](#content-management)
7. [Performance Requirements](#performance-requirements)
8. [SEO & Analytics](#seo--analytics)
9. [Deployment Pipeline](#deployment-pipeline)
10. [Development Standards](#development-standards)
11. [Testing Strategy](#testing-strategy)
12. [Security Considerations](#security-considerations)

---

## 1. Executive Summary

### 1.1 Business Context
Enercam Solar Roofs is a Central African clean energy company offering integrated solar roofing solutions. The website serves as the primary digital touchpoint for lead generation, brand awareness, and customer education across Cameroon, Chad, Gabon, Congo, Equatorial Guinea, and Central African Republic.

### 1.2 Key Objectives
- Generate qualified leads through contact forms and quote requests
- Educate prospects on integrated solar roofing technology
- Establish brand authority in the Central African solar market
- Provide clear product information and case studies
- Support multiple languages (English, French priority)

### 1.3 Target Metrics
- Core Web Vitals: All green scores
- Lighthouse Score: 95+ across all categories
- Page Load Time: < 2s on 3G connections
- Conversion Rate: 3%+ on quote requests
- Mobile Traffic: 70%+ (optimize accordingly)

---

## 2. Technical Architecture

### 2.1 Tech Stack

```
Frontend Framework: Next.js 16+
Language: TypeScript 5.3+
Styling: Tailwind CSS 3.4+
UI Components: Radix UI primitives + custom components
Forms: React Hook Form + Zod validation
Animations: Framer Motion
Email Service: Resend or SendGrid
Analytics: Vercel Analytics + Google Analytics 4
Monitoring: Vercel Speed Insights
```

### 2.2 Project Structure

```

```

### 2.3 Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "@radix-ui/react-*": "latest",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.51.0",
    "zod": "^3.22.0",
    "resend": "^3.2.0",
    "lucide-react": "^0.344.0",
    "sharp": "^0.33.0",
    "next-intl": "^3.11.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## 3. Design System

### 3.1 Color Palette

```typescript
// config/site.ts
export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',  // Brand blue - solar/sky
    600: '#0284c7',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#fef3c7',
    500: '#f59e0b',  // Solar orange/amber
    600: '#d97706',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    800: '#262626',
    900: '#171717',
  },
  success: '#10b981',
  error: '#ef4444',
}
```

### 3.2 Typography

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.75rem', { lineHeight: '1.15', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['2.25rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
      },
    },
  },
}
```

### 3.3 Spacing & Layout

```typescript
// Container widths
const containerSizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
}

// Section padding
const sectionPadding = {
  mobile: 'py-12 md:py-16',
  desktop: 'py-16 md:py-24 lg:py-32',
}
```

### 3.4 Component Variants

```typescript
// Button variants
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

// Card variants
type CardVariant = 'elevated' | 'outlined' | 'filled';
```

---

## 4. Page Structure & Routes

### 4.1 Homepage (`/`)

**Purpose:** Primary landing page, lead generation, brand introduction

**Sections:**
1. **Hero Section**
   - Headline: "Smarter Roofing. Solar Power Built In."
   - Subheadline: "Beautiful, durable roofing that generates clean energy for your home."
   - CTAs: "Get a Free Quote" (primary), "See How It Works" (secondary)
   - Background: High-quality image/video of installed solar roof
   - Trust indicators: "10+ Years", "30+ Employees", "6 Countries"

2. **The Future of Roofing**
   - Value proposition
   - Key differentiator: No double-roofing needed
   - Visual comparison: Traditional solar panels vs. Enercam integrated roof

3. **Why Choose Enercam**
   - 4-column feature grid:
     - Lower Energy Bills (icon: trending down)
     - Integrated Design (icon: layout)
     - 35-Year Warranty (icon: shield)
     - Expert Installation (icon: users)

4. **Technology Overview**
   - Brief explanation of solar tiles
   - Battery storage mention
   - CTA: "Learn More About Our Products"

5. **Featured Products**
   - 3-card layout: Heliu, Roofit, Battery Storage
   - Each card: Image, title, brief description, "Explore" link

6. **Customer Success**
   - Single testimonial with customer photo
   - Quote: "Switching to Enercam was the best decision we made for our home."
   - CTA: "Read More Success Stories"

7. **Service Areas**
   - Map or grid showing: Cameroon, Chad, Gabon, Congo, Equatorial Guinea, CAR
   - Availability message

8. **Final CTA**
   - Centered, prominent section
   - Headline: "Ready to Power Your Future?"
   - Primary CTA: "Get Your Free Quote"
   - Secondary info: "24-hour response time"

**Technical Implementation:**
```typescript
// app/(marketing)/page.tsx
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Products from '@/components/sections/Products';
// ... other imports

export default function HomePage() {
  return (
    <>
      <Hero />
      <FutureOfRoofing />
      <Features />
      <Technology />
      <FeaturedProducts />
      <Testimonials />
      <ServiceAreas />
      <FinalCTA />
    </>
  );
}

export const metadata = {
  title: 'Enercam Solar Roofs - Integrated Solar Roofing Solutions',
  description: 'Beautiful, durable solar roofing systems for Central Africa...',
};
```

### 4.2 About Pages (`/about/*`)

#### `/about`
**Sections:**
- Company introduction
- Mission statement
- Timeline (2015 - Present)
- Team preview with link to full team page
- Core values grid

#### `/about/team`
**Layout:** Grid of team member cards
**Card Content:**
- Photo (or placeholder)
- Name
- Position
- Brief bio (optional)

#### `/about/values`
**Content:**
- Detailed explanation of each value:
  - Integrity
  - Innovation
  - Sustainability
  - Customer Focus
- Supporting stories or examples

### 4.3 Products Section (`/products/*`)

#### `/products` (Overview)
**Layout:** Category grid with hero images
- Solar Roofs
- Battery Storage
- Solar Modules
- Air Conditioners
- Solar Lighting

#### `/products/solar-roofs/heliu`
**Structure:**
1. Product hero with specifications table
2. Key features (numbered list with icons)
3. Problems solved
4. Safety features
5. Application gallery
6. Technical specifications expandable
7. CTA: "Request a Quote for Heliu Tiles"

**Data Structure:**
```typescript
interface ProductSpec {
  name: string;
  model: string;
  size: string;
  weight: string;
  powerOutput: string;
  temperatureRange: string;
  fireRating: string;
  lifespan: string;
  warranty: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'solar-roof' | 'battery' | 'module' | 'ac' | 'lighting';
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  specifications: ProductSpec;
  features: string[];
  applications: string[];
  documents?: { name: string; url: string }[];
}
```

#### `/products/solar-roofs/roofit`
**Unique Sections:**
- "100% Weatherproof" callout
- 2-in-1 benefit explanation
- Maintenance-free benefits
- 360° protection graphic

#### `/products/battery-storage/minicube`
**Content:**
- Residential focus
- Capacity options
- Integration with solar roofs
- Backup power scenarios
- Pricing tiers

#### `/products/battery-storage/megacube`
**Content:**
- Commercial/industrial focus
- Scalability
- ROI calculator (optional advanced feature)

### 4.4 How It Works (`/how-it-works`)

**Structure:**
1. Overview section
2. 5-step process (visual timeline):
   - Step 1: Roof Assessment & Design
   - Step 2: Old Roof Removal (if needed)
   - Step 3: Solar Roof Tile Installation
   - Step 4: Electrical Integration
   - Step 5: System Activation & Training
3. Each step: Icon, title, description, estimated duration
4. Smart monitoring explanation
5. Video walkthrough (embedded)
6. CTA: "Schedule Your Assessment"

### 4.5 Projects/Case Studies (`/projects`)

**Listing Page:**
- Grid of project cards
- Each card: Location, system size, savings %, featured image
- Filters: Location, system size, project type

**Individual Project (`/projects/[slug]`):**
```typescript
interface Project {
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
  testimonial: {
    quote: string;
    author: string;
    role: string;
    photo?: string;
  };
}
```

**Layout:**
1. Project hero with key stats
2. Challenge section
3. Solution implemented
4. Photo gallery
5. Results (with metrics)
6. Customer testimonial
7. Related projects

### 4.6 Financing (`/financing`)

**Sections:**
1. Financing options overview
2. Zero-down financing details
3. Ownership vs. leasing comparison table
4. Payment calculator (interactive)
5. Application process
6. FAQs related to financing
7. CTA: "Apply Now" or "Get a Custom Quote"

### 4.7 Partners (`/partners`)

**Content:**
1. Partnership program introduction
2. Benefits of partnering with Enercam
3. Partner types:
   - Manufacturing Partners
   - Distribution Partners
   - Installation Partners
4. How to become a partner
5. Current partner showcase (logos)
6. CTA: "Become a Partner" form

### 4.8 Careers (`/careers`)

**Sections:**
1. Why work at Enercam
2. Company culture
3. Benefits list
4. Current openings (dynamic list)
5. Application form

**Job Posting Structure:**
```typescript
interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
}
```

### 4.9 Contact (`/contact`)

**Layout:**
1. Contact form (primary focus)
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Service Area/Location (dropdown)
   - Interest (dropdown: Quote, General Inquiry, Partnership, etc.)
   - Message (required)
   - Captcha (Turnstile or reCAPTCHA)
2. Contact information sidebar:
   - Phone: 622-672-1748
   - Email: info@enercam.com, support@enercam.com
   - Office locations (if applicable)
3. Map embed (optional)
4. Expected response time: "We respond within 24 hours"

### 4.10 FAQ (`/faq`)

**Structure:**
- Searchable FAQ list
- Categorized sections:
  - General
  - Products & Technology
  - Installation
  - Maintenance
  - Financing
  - Regional/Climate-Specific
- Accordion component for Q&A pairs
- "Still have questions?" CTA linking to contact

---

## 5. Component Library

### 5.1 Layout Components

#### Header Component
```typescript
// components/layout/Header.tsx
interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all",
      transparent ? "bg-transparent" : "bg-white shadow-sm"
    )}>
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Logo />
          <DesktopNav />
          <MobileNav />
          <CTAButtons />
        </nav>
      </Container>
    </header>
  );
}
```

**Desktop Navigation:**
- Products (dropdown mega menu)
- How It Works
- Projects
- About (dropdown)
- Financing
- Contact

**Mobile Navigation:**
- Hamburger menu
- Full-screen overlay
- Accordion for dropdowns
- Prominent CTAs

#### Footer Component
```typescript
// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <FooterBrand />
          <FooterLinks title="Products" links={productLinks} />
          <FooterLinks title="Company" links={companyLinks} />
          <FooterContact />
        </div>
        <Divider />
        <FooterBottom />
      </Container>
    </footer>
  );
}
```

**Footer Content:**
- Logo & tagline
- Product categories
- Company links (About, Careers, Partners)
- Contact information
- Social media icons (if applicable)
- Copyright & legal links
- Service countries flag icons

### 5.2 Form Components

#### Contact Form
```typescript
// components/forms/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/validations';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      // Show success message
      // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input label="Full Name" {...register('name')} error={errors.name} />
      <Input label="Email" type="email" {...register('email')} error={errors.email} />
      <Input label="Phone" {...register('phone')} error={errors.phone} />
      <Select label="Location" {...register('location')} options={locations} />
      <Textarea label="Message" {...register('message')} error={errors.message} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
```

**Validation Schema:**
```typescript
// lib/validations.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  location: z.string().min(1, 'Please select your location'),
  interest: z.enum(['quote', 'general', 'partnership', 'careers']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

### 5.3 Card Components

#### Product Card
```typescript
// components/cards/ProductCard.tsx
interface ProductCardProps {
  product: {
    name: string;
    category: string;
    image: string;
    description: string;
    href: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={product.href} className="group">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <CardContent className="p-6">
          <Badge>{product.category}</Badge>
          <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
          <p className="text-neutral-600 mt-2">{product.description}</p>
          <Button variant="ghost" className="mt-4">
            Learn More →
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
```

### 5.4 Section Components

#### Hero Component
```typescript
// components/sections/Hero.tsx
interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  video?: string;
  cta: {
    primary: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
}

export default function Hero({ title, subtitle, image, video, cta }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background media */}
      <div className="absolute inset-0 z-0">
        {video ? (
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <Image src={image!} alt="" fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-1 font-display"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl mt-6"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 mt-8"
          >
            <Button size="lg" asChild>
              <Link href={cta.primary.href}>{cta.primary.text}</Link>
            </Button>
            {cta.secondary && (
              <Button size="lg" variant="outline" asChild>
                <Link href={cta.secondary.href}>{cta.secondary.text}</Link>
              </Button>
            )}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="animate-bounce" />
      </div>
    </section>
  );
}
```

#### Features Grid
```typescript
// components/sections/Features.tsx
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export default function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h2 font-display">{title}</h2>
          {subtitle && <p className="text-body-lg mt-4">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center p-8 h-full">
                <div className="inline-flex p-4 bg-primary-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-h4 mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## 6. Content Management

### 6.1 Data Structure

All content should be managed in TypeScript files for type safety and easy updates:

```typescript
// data/products.ts
export const products: Product[] = [
  {
    id: 'heliu-tile',
    name: 'Heliu Solar Roof Tile',
    slug: 'heliu',
    category: 'solar-roof',
    brand: 'Sango',
    shortDescription: 'Integrated solar tiles that replace conventional roofing',
    fullDescription: `Heliu Solar Roof Tiles are an integrated solar roofing system...`,
    heroImage: '/images/products/heliu-hero.jpg',
    gallery: [
      '/images/products/heliu-1.jpg',
      '/images/products/heliu-2.jpg',
    ],
    specifications: {
      model: 'Stone Coated Solar Roof Tile',
      size: '1340×420mm',
      weight: '6.5kg',
      powerOutput: '80W',
      temperatureRange: '-40°C to +85°C',
      fireRating: 'Class A',
      lifespan: '>30 years',
      warranty: '35 years',
    },
    features: [
      'Lightweight design reduces roof load',
      'Triple waterproof protection',
      'Class A fireproof rating',
      'Noise reduction properties',
      '50% faster installation time',
    ],
    problemsSolved: [
      'Eliminates need for separate solar panels',
      'Reduces long-term energy costs',
      'Addresses roof aesthetics concerns',
      'Simplifies roofing & solar planning',
    ],
    safetyFeatures: [
      'Fire-resistant materials',
      'Waterproof sealing',
      'Wind & impact tested',
      'Advanced electrical safety',
    ],
    applications: ['Residential', 'Commercial', 'New builds', 'Reroofing'],
    documents: [
      { name: 'Technical Datasheet', url: '/docs/heliu-datasheet.pdf' },
      { name: 'Installation Guide', url: '/docs/heliu-install.pdf' },
    ],
  },
  // ... more products
];
```

```typescript
// data/projects.ts
export const projects: Project[] = [
  {
    id: 'douala-2kw',
    slug: 'douala-2kw-installation',
    title: '2 kW Solar Roof Installation',
    location: 'Douala, Cameroon',
    date: '2024',
    systemSize: '2 kW',
    savingsPercent: 54,
    heroImage: '/images/projects/douala-hero.jpg',
    gallery: [
      '/images/projects/douala-1.jpg',
      '/images/projects/douala-2.jpg',
    ],
    challenge: 'Provide reliable clean energy to support household needs in area with frequent power interruptions',
    solution: 'Designed 2kW rooftop system optimized for humid tropical climate with battery backup',
    results: [
      '54% reduction in annual energy costs',
      'Eliminated dependence on unreliable grid power',
      'Completed on schedule with zero safety incidents',
      'Seamless integration with existing infrastructure',
    ],
    testimonial: {
      quote: 'Energy savings were immediate, and the roof looks incredible.',
      author: 'C. Nguyen',
      role: 'Homeowner',
    },
  },
];
```

```typescript
// data/faq.ts
export const faqs: FAQ[] = [
  {
    id: 'suitable-climate',
    category: 'General',
    question: 'Are your solar roofs suitable for African climates?',
    answer: 'Yes, they are. Africa has some of the highest solar irradiation levels in the world. Our solar roofs perform exceptionally well in hot, sunny climates and are designed to withstand heat, humidity, and strong winds.',
  },
  // ... more FAQs
];
```

### 6.2 Content Updates Process

For frequent content updates without developer intervention:

**Option 1: JSON-based CMS (Simple)**
```typescript
// lib/content.ts
export async function getContent(type: string) {
  const content = await import(`@/data/${type}.json`);
  return content.default;
}
```

**Option 2: Markdown + Front Matter (Blog/Projects)**
```markdown
---
title: "2 kW Solar Roof Installation, Douala"
location: "Douala, Cameroon"
date: "2024-03-15"
systemSize: "2 kW"
savingsPercent: 54
image: "/images/projects/douala.jpg"
---

Project content goes here...
```

**Option 3: Future CMS Integration**
- Sanity.io
- Contentful
- Strapi

---

## 7. Performance Requirements

### 7.1 Core Web Vitals Targets

```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

### 7.2 Image Optimization

**Implementation:**
```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['enercam.com'],
  },
}
```

**Usage Guidelines:**
- Use Next.js Image component exclusively
- Provide width/height or fill prop
- Use appropriate priority prop for above-fold images
- Lazy load below-fold images (default behavior)

```typescript
<Image
  src="/hero-image.jpg"
  alt="Enercam solar roof"
  width={1920}
  height={1080}
  priority // For above-fold images
  className="object-cover"
/>
```

### 7.3 Code Splitting & Lazy Loading

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  loading: () => <Skeleton className="aspect-video" />,
  ssr: false,
});

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
});
```

### 7.4 Font Optimization

```typescript
// app/layout.tsx
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### 7.5 Caching Strategy

```typescript
// next.config.js
module.exports = {
  headers: async () => [
    {
      source: '/:all*(svg|jpg|png|webp|avif)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
```

---

## 8. SEO & Analytics

### 8.1 Metadata Configuration

```typescript
// config/site.ts
export const siteConfig = {
  name: 'Enercam Solar Roofs',
  description: 'Premium integrated solar roofing solutions for Central Africa. Beautiful, durable roofing that generates clean energy.',
  url: 'https://enercam.com',
  ogImage: 'https://enercam.com/og-image.jpg',
  links: {
    facebook: 'https://facebook.com/enercam',
    instagram: 'https://instagram.com/enercam',
  },
  keywords: [
    'solar roofing',
    'solar tiles',
    'integrated solar',
    'solar power Cameroon',
    'clean energy Central Africa',
    'solar installation',
  ],
  locale: 'en',
  type: 'website',
};
```

```typescript
// app/layout.tsx
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Enercam Solar Roofs' }],
  creator: 'Enercam Solar Roofs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### 8.2 Structured Data

```typescript
// lib/structured-data.ts
export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.heroImage,
    brand: {
      '@type': 'Brand',
      name: 'Enercam',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'XAF',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Enercam Solar Roofs',
    url: 'https://enercam.com',
    logo: 'https://enercam.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+237-622-672-1748',
      contactType: 'Customer Service',
      areaServed: ['CM', 'TD', 'GA', 'CG', 'GQ', 'CF'],
      availableLanguage: ['English', 'French'],
    },
    sameAs: [
      'https://facebook.com/enercam',
      'https://instagram.com/enercam',
    ],
  };
}
```

**Usage in pages:**
```typescript
// app/products/[slug]/page.tsx
export default function ProductPage({ product }) {
  const schema = generateProductSchema(product);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Page content */}
    </>
  );
}
```

### 8.3 Sitemap Generation

```typescript
// app/sitemap.ts
import { products } from '@/data/products';
import { projects } from '@/data/projects';

export default function sitemap() {
  const baseUrl = 'https://enercam.com';
  
  const routes = ['', '/about', '/products', '/how-it-works', '/projects', '/financing', '/partners', '/careers', '/contact', '/faq'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const productUrls = products.map(product => ({
    url: `${baseUrl}/products/${product.category}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectUrls = projects.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...productUrls, ...projectUrls];
}
```

### 8.4 Analytics Setup

```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

**Event Tracking:**
```typescript
// lib/analytics.ts
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
}

// Usage
trackEvent('quote_request', {
  product: 'heliu-tile',
  location: 'Cameroon',
});
```

---

## 9. Deployment Pipeline

### 9.1 Environment Variables

```bash
# .env.local (development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email service
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=noreply@enercam.com
EMAIL_TO=info@enercam.com

# Forms
NEXT_PUBLIC_TURNSTILE_SITE_KEY=xxxxx
TURNSTILE_SECRET_KEY=xxxxx
```

```bash
# .env.production (Vercel)
NEXT_PUBLIC_SITE_URL=https://enercam.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=noreply@enercam.com
EMAIL_TO=info@enercam.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=xxxxx
TURNSTILE_SECRET_KEY=xxxxx
```

### 9.2 Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "pnpm run build",
  "devCommand": "pnpm run dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["fra1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

### 9.3 Build Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    domains: ['enercam.com'],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### 9.4 Deployment Workflow

**Automatic Deployments:**
- `main` branch → Production (enercam.com)
- `develop` branch → Preview (develop.enercam.vercel.app)
- Pull requests → Preview URLs

**Pre-deployment Checklist:**
```bash
# Run locally before pushing
pnpm run lint          # ESLint check
pnpm run type-check    # TypeScript check
pnpm run build         # Production build test
pnpm run test          # Run tests (if applicable)
```

### 9.5 CI/CD Pipeline (Optional GitHub Actions)

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint-and-type-check:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm ci
      
      - name: Run linter
        run: pnpm run lint
      
      - name: Run type check
        run: pnpm run type-check
      
      - name: Build
        run: pnpm run build
```

---

## 10. Development Standards

### 10.1 Code Style

**ESLint Configuration:**
```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/no-unescaped-entities": "off",
    "prefer-const": "error"
  }
}
```

**Prettier Configuration:**
```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 10.2 File Naming Conventions

```
Components: PascalCase (Header.tsx, ProductCard.tsx)
Utilities: camelCase (utils.ts, formatCurrency.ts)
Constants: SCREAMING_SNAKE_CASE (API_ENDPOINTS.ts)
Types: PascalCase (types/index.ts: ProductType)
```

### 10.3 Component Structure

```typescript
// components/example/ExampleComponent.tsx

// 1. Imports
import { useState } from 'react';
import { cn } from '@/lib/utils';

// 2. Types/Interfaces
interface ExampleComponentProps {
  title: string;
  optional?: boolean;
}

// 3. Component
export default function ExampleComponent({ 
  title, 
  optional = false 
}: ExampleComponentProps) {
  // 4. Hooks
  const [state, setState] = useState(false);

  // 5. Handlers
  const handleClick = () => {
    setState(!state);
  };

  // 6. Effects
  // useEffect(() => {}, []);

  // 7. Render
  return (
    <div className={cn('base-classes', optional && 'conditional-classes')}>
      <h2>{title}</h2>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}
```

### 10.4 Git Workflow

**Branch Naming:**
```
feature/product-page
fix/contact-form-validation
hotfix/header-mobile-menu
chore/update-dependencies
```

**Commit Messages:**
```
feat: add Heliu product page
fix: resolve mobile navigation overflow
chore: update dependencies
docs: add API documentation
refactor: restructure product data
```

### 10.5 TypeScript Guidelines

```typescript
// Prefer interfaces for objects
interface User {
  name: string;
  email: string;
}

// Use types for unions/primitives
type Status = 'active' | 'inactive';

// Avoid 'any', use 'unknown' if needed
function process(data: unknown) {
  if (typeof data === 'string') {
    return data.toUpperCase();
  }
}

// Use generics when appropriate
function getItems<T>(items: T[]): T[] {
  return items.filter(Boolean);
}
```

---

## 11. Testing Strategy

### 11.1 Unit Testing (Optional for MVP)

```typescript
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-primary-600');
  });
});
```

### 11.2 E2E Testing (Optional)

```typescript
// e2e/contact-form.spec.ts (Playwright)
import { test, expect } from '@playwright/test';

test('submit contact form successfully', async ({ page }) => {
  await page.goto('/contact');
  
  await page.fill('[name="name"]', 'John Doe');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="message"]', 'Test message');
  await page.selectOption('[name="location"]', 'Cameroon');
  
  await page.click('button[type="submit"]');
  
  await expect(page.getByText('Thank you')).toBeVisible();
});
```

### 11.3 Manual Testing Checklist

**Pre-launch Checklist:**
- [ ] All forms submit correctly
- [ ] Email notifications received
- [ ] Mobile responsive (test on real devices)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] All links work (no 404s)
- [ ] Images load properly
- [ ] Lighthouse scores meet targets
- [ ] Analytics tracking verified
- [ ] Contact information accurate
- [ ] SEO metadata correct

---

## 12. Security Considerations

### 12.1 Form Security

```typescript
// API route with rate limiting
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
});

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new Response('Too many requests', { status: 429 });
  }

  // Process form
}
```

### 12.2 Input Validation

```typescript
// Always validate on server
export async function POST(request: Request) {
  const body = await request.json();
  
  const result = contactSchema.safeParse(body);
  
  if (!result.success) {
    return Response.json(
      { error: 'Invalid input', details: result.error },
      { status: 400 }
    );
  }

  // Process validated data
  const data = result.data;
}
```

### 12.3 Environment Variables

- Never commit `.env.local`
- Use Vercel environment variables UI
- Prefix public variables with `NEXT_PUBLIC_`
- Rotate API keys regularly

### 12.4 CORS & CSP

```typescript
// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const response = NextResponse.next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}
```

---

## 13. API Routes

### 13.1 Contact Form Handler

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations';
import { ContactEmailTemplate } from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        { error: 'Invalid data' },
        { status: 400 }
      );
    }

    const { name, email, phone, location, interest, message } = result.data;

    // Send email
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New ${interest} inquiry from ${name}`,
      react: ContactEmailTemplate({
        name,
        email,
        phone,
        location,
        interest,
        message,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

### 13.2 Quote Request Handler

```typescript
// app/api/quote/route.ts
export async function POST(request: Request) {
  // Similar structure to contact form
  // Additional fields: property type, roof size, current energy bill, etc.
}
```

### 13.3 Email Templates

```typescript
// emails/ContactEmail.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  location: string;
  interest: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  phone,
  location,
  interest,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f6f9fc', padding: '20px' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '40px' }}>
          <Heading>New Contact Form Submission</Heading>
          <Text><strong>Name:</strong> {name}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          {phone && <Text><strong>Phone:</strong> {phone}</Text>}
          <Text><strong>Location:</strong> {location}</Text>
          <Text><strong>Interest:</strong> {interest}</Text>
          <Text><strong>Message:</strong></Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
```

---

## 14. Internationalization (Future)

### 14.1 Setup for French Support

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

```typescript
// messages/en.json
{
  "Navigation": {
    "home": "Home",
    "products": "Products",
    "about": "About Us"
  },
  "HomePage": {
    "hero": {
      "title": "Smarter Roofing. Solar Power Built In.",
      "subtitle": "Beautiful, durable roofing that generates clean energy for your home."
    }
  }
}
```

---

## 15. Launch Checklist

### 15.1 Pre-Launch Tasks

**Content:**
- [ ] All pages reviewed for accuracy
- [ ] Images optimized and uploaded
- [ ] Contact information verified
- [ ] Legal pages (Privacy, Terms) added

**Technical:**
- [ ] All environment variables set in Vercel
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics installed and tested
- [ ] Forms tested in production
- [ ] Email notifications working
- [ ] 404 page styled
- [ ] Sitemap generated
- [ ] robots.txt configured

**SEO:**
- [ ] Meta titles and descriptions set
- [ ] Open Graph images created
- [ ] Structured data implemented
- [ ] Google Search Console setup
- [ ] Google Analytics setup

**Performance:**
- [ ] Lighthouse audit passed
- [ ] Core Web Vitals green
- [ ] Mobile performance optimized
- [ ] Images lazy loaded

**Testing:**
- [ ] Cross-browser testing complete
- [ ] Mobile device testing complete
- [ ] Form submissions tested
- [ ] All links verified

### 15.2 Post-Launch Tasks

**Week 1:**
- Monitor analytics daily
- Check form submissions
- Monitor error logs
- Respond to inquiries promptly

**Week 2-4:**
- Analyze user behavior
- A/B test CTAs (if applicable)
- Gather customer feedback
- Optimize based on data

---

## 16. Maintenance & Updates

### 16.1 Regular Maintenance

**Weekly:**
- Review form submissions
- Check analytics
- Monitor uptime

**Monthly:**
- Update dependencies
- Review security advisories
- Backup content
- Performance audit

**Quarterly:**
- Content audit
- SEO review
- Competitor analysis
- Feature prioritization

### 16.2 Content Updates

**Product Updates:**
```bash
# Update product data
1. Edit /data/products.ts
2. Add new images to /public/images/products/
3. Commit and push to trigger deployment
```

**Case Study Additions:**
```bash
1. Add project to /data/projects.ts
2. Upload project images
3. Test locally
4. Deploy
```

---

## 17. Support & Documentation

### 17.1 Developer Onboarding

**Setup Instructions:**
```bash
# Clone repository
git clone https://github.com/enercam/website.git
cd website

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Add your API keys

# Run development server
pnpm run dev

# Open browser
http://localhost:3000
```

### 17.2 Common Commands

```bash
pnpm run dev          # Start development server
pnpm run build        # Production build
pnpm run start        # Start production server
pnpm run lint         # Run ESLint
pnpm run lint:fix     # Fix linting errors
pnpm run type-check   # TypeScript check
```

### 17.3 Troubleshooting

**Build Failures:**
- Check for TypeScript errors
- Verify all environment variables
- Clear `.next` cache: `rm -rf .next`

**Image Issues:**
- Ensure images are in `/public`
- Check file extensions match imports
- Verify image optimization config

**Form Not Submitting:**
- Check API route logs
- Verify environment variables
- Test email service API key

---

## 18. Team Roles & Responsibilities

### 18.1 Development Team

**Frontend Engineer:**
- Implement UI components
- Ensure responsive design
- Optimize performance
- Accessibility compliance

**Full Stack Engineer:**
- API routes implementation
- Email service integration
- Database setup (if needed)
- Deployment configuration

**CTO/Tech Lead:**
- Architecture decisions
- Code reviews
- Security oversight
- Performance monitoring

### 18.2 Content Team

- Product descriptions
- Case study writing
- Image selection/creation
- FAQ maintenance

### 18.3 Marketing Team

- SEO strategy
- Analytics review
- A/B testing
- Content calendar

---

## 19. Future Enhancements

### 19.1 Phase 2 Features

**Technical:**
- Customer portal (login system)
- Real-time chat support
- Advanced quote calculator
- Payment integration
- CRM integration

**Content:**
- Blog/news section
- Video testimonials
- Interactive 3D roof visualizer
- Energy savings calculator
- Installation timeline tracker

**Marketing:**
- Email newsletter system
- Referral program
- Partner dashboard
- Career application portal

### 19.2 Scalability Considerations

**Database Integration:**
```typescript
// Future: Prisma + PostgreSQL for dynamic content
// prisma/schema.prisma
model Product {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  category    String
  description String
  specs       Json
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Inquiry {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  location  String
  message   String
  status    String   @default("new")
  createdAt DateTime @default(now())
}
```

**Authentication (for Partner Portal):**
```typescript
// Future: NextAuth.js implementation
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // Email provider for partners
  ],
});
```

---

## 20. Design Specifications

### 20.1 Homepage Hero Variants

**Desktop Hero (1920x1080px minimum):**
```
Background: High-quality image of Enercam solar roof installation
Overlay: Dark gradient (rgba(0,0,0,0.4))
Content: Left-aligned, max-width 700px
CTA Buttons: Primary (solid) + Secondary (outline)
Scroll Indicator: Animated chevron at bottom center
```

**Mobile Hero (375px width):**
```
Background: Same image, optimized mobile crop
Overlay: Stronger gradient (rgba(0,0,0,0.5))
Content: Centered, padding 24px
Font sizes: Reduced by 30-40%
CTA Buttons: Stacked vertically, full-width
```

### 20.2 Interactive Elements

**Hover States:**
```css
/* Product Cards */
.product-card {
  transition: all 0.3s ease;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Buttons */
.btn-primary:hover {
  background: primary-700;
  transform: scale(1.02);
}

/* Links */
.nav-link:hover {
  color: primary-600;
}
```

**Loading States:**
```typescript
// Form submission
<Button disabled={isSubmitting}>
  {isSubmitting ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Sending...
    </>
  ) : (
    'Send Message'
  )}
</Button>
```

**Error States:**
```typescript
// Form validation errors
<Input
  {...register('email')}
  error={errors.email?.message}
  className={errors.email ? 'border-red-500' : ''}
/>
```

### 20.3 Animation Guidelines

**Page Transitions:**
```typescript
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Page() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

**Scroll Animations:**
```typescript
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
};

<motion.div {...fadeInUp}>
  <FeatureCard />
</motion.div>
```

**Micro-interactions:**
```typescript
// Button press feedback
<motion.button
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.02 }}
>
  Click me
</motion.button>

// Card hover effect
<motion.div
  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  <ProductCard />
</motion.div>
```

---

## 21. Accessibility (A11y) Requirements

### 21.1 WCAG 2.1 AA Compliance

**Color Contrast:**
```
Text on backgrounds: Minimum 4.5:1 ratio
Large text (18pt+): Minimum 3:1 ratio
Interactive elements: Minimum 3:1 ratio
```

**Keyboard Navigation:**
```typescript
// All interactive elements must be keyboard accessible
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
>
  Click me
</button>

// Skip to main content link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

**Screen Reader Support:**
```typescript
// Descriptive alt text
<Image
  src="/product.jpg"
  alt="Heliu solar roof tiles installed on modern home in Douala"
/>

// ARIA labels for icons-only buttons
<button aria-label="Close menu">
  <X className="h-6 w-6" />
</button>

// Form labels
<label htmlFor="email" className="block text-sm font-medium">
  Email Address
</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={!!errors.email}
  aria-describedby={errors.email ? 'email-error' : undefined}
/>
{errors.email && (
  <p id="email-error" className="text-red-500 text-sm" role="alert">
    {errors.email.message}
  </p>
)}
```

**Focus Indicators:**
```css
/* Visible focus states */
*:focus-visible {
  outline: 2px solid #0ea5e9;
  outline-offset: 2px;
}

button:focus-visible {
  ring: 2px;
  ring-color: primary-600;
}
```

### 21.2 Semantic HTML

```typescript
// Use semantic elements
<header>
<nav>
<main id="main-content">
<article>
<section>
<aside>
<footer>

// Heading hierarchy
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection</h3>
```

### 21.3 Accessibility Testing Checklist

- [ ] All images have descriptive alt text
- [ ] Forms have proper labels and error messages
- [ ] Color is not the only means of conveying information
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Heading hierarchy is logical
- [ ] ARIA attributes used correctly
- [ ] Automated testing with axe DevTools
- [ ] Screen reader testing (NVDA/JAWS)
- [ ] Keyboard-only navigation test

---

## 22. Performance Optimization Strategies

### 22.1 Bundle Size Optimization

```typescript
// next.config.js
module.exports = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-*'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
        },
      };
    }
    return config;
  },
};
```

### 22.2 Image Optimization Best Practices

```typescript
// Responsive images with multiple sizes
<Image
  src="/hero.jpg"
  alt="Solar roof"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
  priority // For above-fold images
  quality={85} // Balance between quality and file size
/>

// Blur placeholder for better perceived performance
<Image
  src="/product.jpg"
  alt="Product"
  width={600}
  height={400}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
/>
```

### 22.3 Route Prefetching

```typescript
// Prefetch important routes on hover
import Link from 'next/link';

<Link href="/products" prefetch={true}>
  Products
</Link>

// Programmatic prefetch
import { useRouter } from 'next/navigation';

const router = useRouter();

// Prefetch on component mount
useEffect(() => {
  router.prefetch('/products');
}, []);
```

### 22.4 Third-Party Script Optimization

```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        
        {/* Load non-critical scripts with appropriate strategy */}
        <Script
          src="https://www.googletagmanager.com/gtag/js"
          strategy="afterInteractive"
        />
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
```

### 22.5 Database Query Optimization (Future)

```typescript
// Use database indexes
model Product {
  id       String @id @default(cuid())
  slug     String @unique // Indexed automatically
  category String
  
  @@index([category]) // Add index for frequent queries
}

// Implement caching
import { unstable_cache } from 'next/cache';

export const getProducts = unstable_cache(
  async () => {
    const products = await prisma.product.findMany();
    return products;
  },
  ['products'],
  { revalidate: 3600 } // Cache for 1 hour
);
```

---

## 23. Mobile-First Responsive Design

### 23.1 Breakpoint Strategy

```typescript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
};

// Usage: Mobile-first approach
<div className="
  px-4           /* Mobile: 16px padding */
  md:px-8        /* Tablet: 32px padding */
  lg:px-16       /* Desktop: 64px padding */
  
  text-2xl       /* Mobile: 24px */
  md:text-3xl    /* Tablet: 30px */
  lg:text-4xl    /* Desktop: 36px */
">
```

### 23.2 Mobile Navigation Pattern

```typescript
// components/layout/MobileNav.tsx
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Accordion type="single" collapsible>
            <AccordionItem value="products">
              <AccordionTrigger>Products</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4">
                  <Link href="/products/solar-roofs">Solar Roofs</Link>
                  <Link href="/products/battery-storage">Batteries</Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* More nav items */}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```

### 23.3 Touch-Friendly Design

```css
/* Minimum touch target size: 44x44px */
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}

/* Adequate spacing between interactive elements */
.nav-links {
  gap: 16px; /* Minimum 8px, recommended 16px */
}

/* Prevent text selection on double-tap */
.btn {
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
```

---

## 24. Error Handling & User Feedback

### 24.1 Error Boundaries

```typescript
// components/ErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="btn-primary"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage in layout
<ErrorBoundary>
  {children}
</ErrorBoundary>
```

### 24.2 Toast Notifications

```typescript
// Using sonner for toast notifications
import { Toaster, toast } from 'sonner';

// In layout.tsx
<Toaster position="top-right" richColors />

// Usage
toast.success('Message sent successfully!');
toast.error('Failed to send message. Please try again.');
toast.loading('Sending message...');

// In form submission
const onSubmit = async (data) => {
  const toastId = toast.loading('Sending your message...');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      toast.success('Message sent successfully!', { id: toastId });
      reset();
    } else {
      toast.error('Failed to send message', { id: toastId });
    }
  } catch (error) {
    toast.error('Something went wrong', { id: toastId });
  }
};
```

### 24.3 Loading States

```typescript
// Skeleton loaders for better UX
import { Skeleton } from '@/components/ui/skeleton';

function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}

// Usage with Suspense
<Suspense fallback={<ProductsLoading />}>
  <ProductsList />
</Suspense>
```

---

## 25. Monitoring & Analytics

### 25.1 Error Tracking (Optional)

```typescript
// Sentry integration for production error tracking
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});

// Custom error tracking
Sentry.captureException(error, {
  tags: {
    section: 'contact-form',
  },
  extra: {
    formData: sanitizedData,
  },
});
```

### 25.2 Custom Analytics Events

```typescript
// lib/analytics.ts
export const trackEvent = {
  quoteRequest: (product: string) => {
    gtag('event', 'quote_request', {
      event_category: 'engagement',
      event_label: product,
    });
  },
  
  productView: (productId: string) => {
    gtag('event', 'view_item', {
      event_category: 'ecommerce',
      event_label: productId,
    });
  },
  
  formSubmit: (formType: string) => {
    gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
    });
  },
};

// Usage
import { trackEvent } from '@/lib/analytics';

const handleQuoteClick = () => {
  trackEvent.quoteRequest('heliu-tile');
  router.push('/contact?product=heliu-tile');
};
```

### 25.3 Performance Monitoring

```typescript
// lib/performance.ts
export function measurePerformance() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(entry.startTime),
          });
        }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
}
```

---

## 26. Documentation for Content Team

### 26.1 How to Add a New Product

1. **Add product data:**
```typescript
// data/products.ts
export const products = [
  // ... existing products
  {
    id: 'new-product',
    name: 'New Product Name',
    slug: 'new-product',
    category: 'solar-roof',
    // ... complete all fields
  },
];
```

2. **Add product images:**
- Place in `/public/images/products/new-product/`
- Required: hero.jpg, gallery images
- Recommended size: 1200x800px minimum

3. **Create product page (if custom layout needed):**
```typescript
// app/products/solar-roofs/new-product/page.tsx
import { products } from '@/data/products';

export default function ProductPage() {
  const product = products.find(p => p.slug === 'new-product');
  return <ProductDetailLayout product={product} />;
}
```

### 26.2 How to Add a Case Study

1. **Add to projects data:**
```typescript
// data/projects.ts
{
  id: 'unique-id',
  slug: 'project-name',
  title: 'Project Title',
  location: 'City, Country',
  // ... complete all fields
}
```

2. **Add project images:**
- Place in `/public/images/projects/project-name/`
- Required: hero.jpg, 3-5 gallery images

3. **Images will automatically appear at `/projects/project-name`**

### 26.3 How to Update FAQ

```typescript
// data/faq.ts
export const faqs = [
  {
    id: 'unique-id',
    category: 'General',
    question: 'Your question here?',
    answer: 'Your detailed answer here.',
  },
];
```

---

## 27. Quick Reference Guide

### 27.1 Component Quick Reference

```typescript
// Button
<Button variant="primary|secondary|outline|ghost" size="sm|md|lg">
  Click me
</Button>

// Card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Input
<Input
  label="Label"
  error="Error message"
  placeholder="Placeholder"
/>

// Container
<Container className="additional-classes">
  Content centered with max-width
</Container>
```

### 27.2 Utility Functions

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'XAF',
  }).format(amount);
}

// Format date
export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
```

### 27.3 Environment Variable Reference

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://enercam.com
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=noreply@enercam.com
EMAIL_TO=info@enercam.com

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_TURNSTILE_SITE_KEY=xxxxx
TURNSTILE_SECRET_KEY=xxxxx
SENTRY_DSN=xxxxx
```

---

## 28. Final Notes

### 28.1 Project Timeline Estimate

**Week 1-2: Setup & Core Pages**
- Project setup and configuration
- Design system implementation
- Homepage, About, Contact pages
- Navigation and footer

**Week 3-4: Product Pages**
- Product listing and detail pages
- Image optimization
- Product data structure
- Specifications display

**Week 5: Forms & API**
- Contact form
- Quote request form
- Email integration
- Form validation

**Week 6: Additional Pages**
- How It Works
- Projects/Case Studies
- FAQ
- Partners, Careers

**Week 7: Testing & Optimization**
- Cross-browser testing
- Mobile optimization
- Performance tuning
- Accessibility audit

**Week 8: Launch Preparation**
- Content review
- SEO optimization
- Analytics setup
- Final QA

### 28.2 Success Metrics

**Technical Metrics:**
- Lighthouse Score: 95+ (all categories)
- Core Web Vitals: All green
- Build time: < 2 minutes
- Page load time: < 2s (3G)

**Business Metrics:**
- Quote request conversion: 3%+
- Contact form submissions: Monitor weekly
- Bounce rate: < 50%
- Average session duration: > 2 minutes

### 28.3 Support Contacts

**Development Issues:**
- Email: dev@enercam.com
- GitHub Issues: [repository URL]

**Content Updates:**
- Email: content@enercam.com

**General Inquiries:**
- Email: info@enercam.com
- Phone: 622-672-1748

---

## Appendix A: Complete Package.json

```json
{
  "name": "enercam-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\""
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-tabs": "^1.0.4",
    "@react-email/components": "^0.0.15",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0",
    "next-themes": "^0.2.1",
    "react-hook-form": "^7.51.0",
    "resend": "^3.2.0",
    "sonner": "^1.4.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "postcss": "^8.4.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0"
  }
}
```

---

## Appendix B: Complete Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          50: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.75rem', { lineHeight: '1.15', fontWeight: '700' }],
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        h2: ['2.25rem', { lineHeight: '1.25', fontWeight: '600' }],
        h3: ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        body: ['1rem', { lineHeight: '1.75' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-from-top': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in-from-top 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

---

## Appendix C: TypeScript Type Definitions

```typescript
// types/index.ts

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
```

---

## Appendix D: Email Templates

```typescript
// emails/ContactEmail.tsx
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  location: string;
  interest: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  phone,
  location,
  interest,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          
          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>

            {phone && (
              <>
                <Text style={label}>Phone:</Text>
                <Text style={value}>{phone}</Text>
              </>
            )}

            <Text style={label}>Location:</Text>
            <Text style={value}>{location}</Text>

            <Text style={label}>Interest:</Text>
            <Text style={value}>{interest}</Text>

            <Hr style={hr} />

            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={buttonContainer}>
            <Button style={button} href={`mailto:${email}`}>
              Reply to {name}
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginBottom: '64px',
};

const h1 = {
  color: '#0c4a6e',
  fontSize: '24px',
  fontWeight: '600',
  margin: '0 0 30px',
};

const section = {
  padding: '24px',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  marginBottom: '24px',
};

const label = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  marginBottom: '4px',
  marginTop: '16px',
};

const value = {
  color: '#111827',
  fontSize: '16px',
  margin: '0 0 8px',
};

const messageText = {
  color: '#111827',
  fontSize: '16px',
  lineHeight: '24px',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const buttonContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#0ea5e9',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

// Auto-reply email template
export function AutoReplyEmailTemplate({ name }: { name: string }) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Enercam Solar Roofs</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank You for Contacting Us</Heading>
          
          <Text style={{ fontSize: '16px', lineHeight: '24px' }}>
            Hi {name},
          </Text>

          <Text style={{ fontSize: '16px', lineHeight: '24px' }}>
            Thank you for reaching out to Enercam Solar Roofs. We've received your message 
            and one of our specialists will get back to you within 24 hours.
          </Text>

          <Text style={{ fontSize: '16px', lineHeight: '24px' }}>
            In the meantime, feel free to explore our products and case studies on our website.
          </Text>

          <Section style={buttonContainer}>
            <Button style={button} href="https://enercam.com/products">
              Explore Our Products
            </Button>
          </Section>

          <Hr style={hr} />

          <Text style={{ fontSize: '14px', color: '#6b7280' }}>
            Best regards,<br />
            The Enercam Team<br />
            <a href="tel:+2376226721748" style={{ color: '#0ea5e9' }}>+237 622-672-1748</a><br />
            <a href="mailto:info@enercam.com" style={{ color: '#0ea5e9' }}>info@enercam.com</a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
```

---

## Appendix E: Useful Utility Functions

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
  const options: Intl.DateTimeFormatOptions = {
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
```

---

## Appendix F: Constants and Configuration

```typescript
// lib/constants.ts

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

export const WARRANTY_YEARS = 35;
export const COMPANY_ESTABLISHED = 2015;
export const EMPLOYEE_COUNT = '30+';
export const EXPERIENCE_YEARS = '10+';

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

export const RESPONSE_TIME_HOURS = 24;

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
```

---

## Appendix G: Development Checklist

### Pre-Development Setup
- [ ] Install Node.js 20+ and pnpm/ppnpm
- [ ] Install VS Code with recommended extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript + JavaScript
- [ ] Clone repository and install dependencies
- [ ] Set up environment variables (.env.local)
- [ ] Review technical specification document
- [ ] Set up Vercel account and link project

### Development Phase
- [ ] Implement design system (colors, typography, spacing)
- [ ] Create reusable component library
- [ ] Build responsive navigation
- [ ] Implement all page layouts
- [ ] Set up form handling and validation
- [ ] Configure email service integration
- [ ] Add image optimization
- [ ] Implement SEO metadata
- [ ] Add structured data (Schema.org)
- [ ] Set up analytics tracking
- [ ] Create 404 and error pages
- [ ] Add loading states and skeletons

### Testing Phase
- [ ] Run ESLint and fix all errors
- [ ] Run TypeScript type check
- [ ] Test all forms (contact, quote, careers)
- [ ] Verify email notifications work
- [ ] Test on mobile devices (iOS/Android)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Lighthouse audit (aim for 95+ on all)
- [ ] Accessibility audit with axe DevTools
- [ ] Test with screen reader (NVDA/VoiceOver)
- [ ] Verify all internal links work
- [ ] Check external links open in new tabs
- [ ] Test image loading and lazy loading
- [ ] Verify responsive breakpoints

### Pre-Launch
- [ ] Review all content for accuracy
- [ ] Optimize all images (compress, proper formats)
- [ ] Set up custom domain in Vercel
- [ ] Configure SSL certificate
- [ ] Set production environment variables
- [ ] Enable Vercel Analytics
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact form in production
- [ ] Verify email notifications in production
- [ ] Set up monitoring/alerting
- [ ] Create backup of all content
- [ ] Document any manual processes

### Post-Launch
- [ ] Monitor error logs daily (first week)
- [ ] Check form submissions daily
- [ ] Review analytics weekly
- [ ] Respond to all inquiries within 24 hours
- [ ] Gather user feedback
- [ ] Schedule first maintenance check (1 month)
- [ ] Plan content updates
- [ ] Evaluate performance metrics

---

## Appendix H: Troubleshooting Guide

### Common Issues and Solutions

**Issue: Build fails with "Module not found"**
```bash
# Solution: Clear cache and reinstall
rm -rf .next node_modules package-lock.json
pnpm install
pnpm run build
```

**Issue: Images not loading**
```typescript
// Check:
1. Image path starts with /
2. File exists in /public directory
3. File extension matches (case-sensitive)
4. Domain is configured in next.config.js if external
```

**Issue: Forms not submitting**
```typescript
// Check:
1. API route is properly configured
2. Environment variables are set
3. CORS is configured correctly
4. Validation schema matches form fields
5. Email service API key is valid
```

**Issue: Styles not applying**
```bash
# Tailwind not compiling classes
1. Check tailwind.config.ts content paths
2. Verify class names are not dynamic strings
3. Clear .next cache
pnpm run dev
```

**Issue: Slow page load**
```typescript
// Solutions:
1. Use Next.js Image component for all images
2. Enable priority for above-fold images
3. Lazy load below-fold components
4. Check for large bundle sizes in build output
5. Implement code splitting with dynamic imports
```

**Issue: TypeScript errors**
```bash
# Run type check to see all errors
pnpm run type-check

# Common fixes:
1. Add proper type annotations
2. Install missing @types packages
3. Check tsconfig.json configuration
```

---

## Appendix I: Deployment Commands

```bash
# Local Development
ppnpm run dev              # Start dev server at localhost:3000
ppnpm run build            # Test production build locally
ppnpm run start            # Start production server

# Code Quality
ppnpm run lint             # Check for lint errors
ppnpm run lint:fix         # Auto-fix lint errors
ppnpm run type-check       # Check TypeScript types
ppnpm run format           # Format code with Prettier

# Vercel Deployment
vercel                   # Deploy to preview
vercel --prod            # Deploy to production
vercel env ls            # List environment variables
vercel env add           # Add environment variable
vercel logs              # View deployment logs

# Git Workflow
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
# Create pull request on GitHub
# Merge to main → Auto-deploy to production
```

---

## Conclusion

This technical specification document provides a comprehensive, production-ready blueprint for building the Enercam Solar Roofs website. The architecture is designed for:

✅ **Performance**: Sub-2-second load times, optimized images, efficient code splitting  
✅ **Scalability**: Modular structure ready for future enhancements  
✅ **Maintainability**: Clear code organization, TypeScript safety, comprehensive documentation  
✅ **SEO**: Proper metadata, structured data, sitemap generation  
✅ **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support  
✅ **User Experience**: Responsive design, smooth animations, clear CTAs  

The development team can proceed with confidence, following FAANG-level engineering standards and best practices throughout the implementation.

**Estimated Total Development Time**: 6-8 weeks  
**Recommended Team Size**: 2-3 developers  
**Tech Stack**: Next.js 14+, TypeScript, Tailwind CSS, Vercel

For questions or clarifications, refer to the specific appendices or contact the technical lead.

---

**Document Version**: 1.0  
**Last Updated**: December 2025  
**Prepared By**: CTO & Engineering Team  
**Status**: Ready for Development



# 🚀 Advanced Coding Protocol & Standards

## 📌 Overview

This document establishes the comprehensive coding protocol for the Enercam platform, enforcing **enterprise-grade standards**, **type-safe development**, and **FAANG-level code quality**. It ensures consistent, maintainable, and scalable code across all development activities.

---

## 👥 Assumed Roles

| Role                       | Responsibility                                         |
| -------------------------- | ------------------------------------------------------ |
| 🧠 Lead Principal Engineer | Architecture decisions, code review, and technical standards |
| 🔧 Full-Stack Engineer     | Implementation, testing, and feature development       |
| 🔍 QA Engineer             | Code quality validation, testing, and automation       |
| 🎨 Frontend Engineer       | UI/UX implementation and component architecture        |
| ⚙️ Backend Engineer        | API development, data modeling, and service integration |

---

## 🎯 Objective

> **Deliver production-ready, type-safe, and maintainable code that adheres to enterprise standards while ensuring optimal performance and security.**

- Must be **type-safe** with zero `any` types
- Code must be **self-documenting** and **testable**
- **Performance optimization** is mandatory
- **Security-first** approach required

---

## ✅ TypeScript Coding Guardrails

| Area                 | Rule                                                      |
| -------------------- | --------------------------------------------------------- |
| 🚫 No 'any' Types    | Prohibit `any` type usage; use `unknown` or generics      |
| 🔒 Strict Typing     | All variables, parameters, and returns must be typed      |
| 🧩 Interface Design  | Use interfaces for contracts and domain modeling          |
| 🎯 Generic Usage     | Leverage generics for reusable, type-safe components      |
| 🔍 Type Narrowing    | Use proper type guards and assertion functions            |
| 📝 JSDoc Comments    | Document all public APIs and complex logic                |
| 🧪 Test Coverage     | Minimum 80% coverage for business logic                   |

---

## 🧪 Mandatory Code Quality Checklist

### 🔍 Type Safety Verification

- [ ] `✅` No `any` types used anywhere in codebase
- [ ] `✅` All function parameters explicitly typed
- [ ] `✅` All return types explicitly defined
- [ ] [ ] `✅` Generic constraints properly defined
- [ ] `✅` Type guards implemented where needed

### 📄 Code Structure Analysis

- [ ] `✅` Single responsibility principle followed
- [ ] `✅` DRY principle applied (no code duplication)
- [ ] `✅` SOLID principles implemented
- [ ] `✅` Proper error handling with Result<T, E> pattern
- [ ] `✅` Consistent naming conventions used

### 🚨 Error Handling Standards

- [ ] `✅` All errors use HealthcareError class
- [ ] `✅` Result<T, E> pattern for service layer operations
- [ ] `✅` No generic `throw new Error()` statements
- [ ] `✅` Proper error logging and monitoring
- [ ] `✅` User-friendly error messages

### 🔍 Performance & Security

- [ ] `✅` No hardcoded secrets or credentials
- [ ] `✅` Input validation on all user inputs
- [ ] `✅` Proper authentication and authorization
- [ ] `✅` Database queries optimized
- [ ] `✅` Memory leaks prevented

---

## 🧾 Code Quality Templates

### 🔍 Type Definition Template

```typescript
// ✅ GOOD: Explicit typing with generics
interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

// ❌ BAD: Using any
interface ApiResponse {
  data: any;
  status: any;
  message?: any;
}
```

### 🧠 Error Handling Template

```typescript
// ✅ GOOD: Result pattern with HealthcareError
type Result<T, E = HealthcareError> = 
  | { success: true; data: T }
  | { success: false; error: E };

class HealthcareError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'HealthcareError';
  }
}

// ❌ BAD: Generic error throwing
throw new Error('Something went wrong');
```

### 🔎 Component Architecture Template

```typescript
// ✅ GOOD: Properly typed React component
interface UserProfileProps {
  userId: string;
  onUpdate: (user: User) => Promise<Result<void, HealthcareError>>;
  isEditable?: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  onUpdate,
  isEditable = false
}) => {
  // Component implementation
};
```

---

## 🧪 Quality Assurance Protocol

| Check                     | Status | Requirement |
| ------------------------- | ------ | ----------- |
| TypeScript Compilation    | ✅     | Zero errors, zero warnings |
| Linting Passed            | ✅     | ESLint + Prettier compliance |
| Type Coverage             | ✅     | 100% type coverage |
| Test Coverage             | ✅     | Minimum 80% for business logic |
| Security Scan             | ✅     | No vulnerabilities detected |
| Performance Audit         | ✅     | Lighthouse score > 90 |
| Code Review               | ✅     | Peer review completed |

> ⚠️ Only merge code after achieving **Level 4+ verification**.

---

## 🧠 Implementation Guidelines

### 1. **Type-First Development**
```typescript
// Define types before implementation
interface UserService {
  createUser(userData: CreateUserRequest): Promise<Result<User, HealthcareError>>;
  updateUser(id: string, updates: Partial<User>): Promise<Result<User, HealthcareError>>;
  deleteUser(id: string): Promise<Result<void, HealthcareError>>;
}
```

### 2. **Error Handling Strategy**
```typescript
// Service layer error handling
export class UserService implements UserService {
  async createUser(userData: CreateUserRequest): Promise<Result<User, HealthcareError>> {
    try {
      const validation = validateUserData(userData);
      if (!validation.success) {
        return { success: false, error: validation.error };
      }
      
      const user = await this.userRepository.create(userData);
      return { success: true, data: user };
    } catch (error) {
      return { 
        success: false, 
        error: new HealthcareError('USER_CREATION_FAILED', 'Failed to create user', 500) 
      };
    }
  }
}
```

### 3. **Component Architecture**
```typescript
// React component with proper typing
interface OnboardingStepProps<T = unknown> {
  data: T;
  onNext: (data: T) => void;
  onPrevious: () => void;
  isLoading?: boolean;
  errors?: Record<string, string>;
}

export const OnboardingStep = <T,>({
  data,
  onNext,
  onPrevious,
  isLoading = false,
  errors = {}
}: OnboardingStepProps<T>) => {
  // Component implementation
};
```

### 4. **API Contract Definition**
```typescript
// API route with proper typing
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await params;
  
  const result = await userService.getUser(id);
  
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.message },
      { status: result.error.statusCode }
    );
  }
  
  return NextResponse.json({ data: result.data });
}
```

---

## 📦 Deliverables Checklist

- [ ] `✅` TypeScript compilation successful (zero errors)
- [ ] `✅` All types explicitly defined
- [ ] `✅` Error handling implemented with Result pattern
- [ ] `✅` Unit tests written and passing
- [ ] `✅` Integration tests passing
- [ ] `✅` Code review completed
- [ ] `✅` Security scan passed
- [ ] `✅` Performance benchmarks met
- [ ] `✅` Documentation updated

---

## 🧠 Self-Review Questions

Before submitting code, ask:

- [ ] Did I avoid using `any` types anywhere?
- [ ] Are all my functions properly typed with explicit return types?
- [ ] Did I implement proper error handling with the Result pattern?
- [ ] Are my interfaces clear and well-documented?
- [ ] Did I write tests for all business logic?
- [ ] Is my code following SOLID principles?
- [ ] Would another senior engineer understand this code immediately?
- [ ] Have I considered edge cases and error scenarios?