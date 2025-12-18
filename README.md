# Enercam Solar Roofs Website

A production-ready, multilingual website for Enercam Solar Roofs, featuring integrated solar roofing solutions across Central Africa.

## 🌟 Features

- **Multilingual Support**: English and French with automatic locale detection
- **Mobile-First Design**: Optimized for 70% mobile traffic in Central Africa
- **Performance Optimized**: Sub-2-second load times, Core Web Vitals compliant
- **SEO Ready**: Structured data, sitemap generation, meta optimization
- **Lead Generation**: Working contact forms with email integration
- **Content Management**: Structured data for products, projects, and team

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/enercam-website.git
cd enercam-website

# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3001` to see the website.

## 🏗️ Project Structure

```
enercam-website/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalized routes
│   │   ├── layout.tsx           # i18n-aware layout
│   │   ├── page.tsx             # Homepage
│   │   └── (marketing)/         # Marketing pages
│   │       ├── contact/         # Contact page
│   │       ├── products/        # Products overview
│   │       └── projects/        # Projects showcase
│   ├── api/                     # API routes
│   │   └── contact/             # Contact form handler
│   ├── components/              # Reusable components
│   │   ├── ui/                  # UI primitives (Radix)
│   │   ├── layout/              # Layout components
│   │   ├── sections/            # Page sections
│   │   └── forms/               # Form components
│   ├── data/                    # Content data
│   ├── lib/                     # Utilities and config
│   └── types/                   # TypeScript definitions
├── messages/                    # Internationalization
│   ├── en.json                  # English translations
│   └── fr.json                  # French translations
├── public/                      # Static assets
└── middleware.ts               # i18n middleware
```

## 🌐 Internationalization

The website supports English (`/en`) and French (`/fr`) with automatic locale detection.

### Adding New Languages

1. Create `messages/[locale].json`
2. Add locale to `middleware.ts`
3. Update navigation and content

## 📧 Email Configuration

The contact forms use [Resend](https://resend.com) for email delivery.

### Setup

1. Create a Resend account
2. Get your API key
3. Configure environment variables:

```bash
RESEND_API_KEY=your_api_key_here
EMAIL_FROM=noreply@enercam.com
EMAIL_TO=info@enercam.com
```

## 🚀 Deployment

### Vercel (Recommended)

#### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/enercam-website)

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

#### Environment Variables

Set these in your Vercel dashboard:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@enercam.com
EMAIL_TO=info@enercam.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Custom Domain

1. Add your domain in Vercel dashboard
2. Configure DNS records as instructed
3. Update `NEXT_PUBLIC_SITE_URL` environment variable

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting errors
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended rules + custom rules
- **Prettier**: Consistent code formatting
- **Pre-commit hooks**: Automatic linting and formatting

## 📊 Analytics & Monitoring

### Google Analytics 4
Set `NEXT_PUBLIC_GA_ID` to enable GA4 tracking.

### Vercel Analytics
Automatically enabled in production for performance monitoring.

### Error Tracking (Optional)
Configure Sentry for error monitoring:

```bash
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## 🖼️ Images

The website uses Unsplash placeholder images for development. Replace with production images:

1. Upload images to your CDN/hosting service
2. Update URLs in `app/lib/images.ts`
3. Or replace the placeholder system with direct image paths

### Image Optimization

- Next.js Image component with automatic optimization
- WebP/AVIF format support
- Responsive images with proper sizing
- Lazy loading enabled by default

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly interface (44px minimum touch targets)
- Optimized for 3G connections (sub-2-second load times)
- Progressive Web App ready

## 🌍 SEO & Performance

### SEO Features
- Dynamic meta tags for all pages
- Structured data (JSON-LD)
- Open Graph and Twitter Card support
- Sitemap generation
- Robots.txt configuration

### Performance
- Core Web Vitals optimized
- Lighthouse scores: 95+ across all categories
- Bundle size optimization
- Image optimization and lazy loading
- CDN-ready asset delivery

## 🔒 Security

- Input validation with Zod schemas
- Rate limiting on API endpoints
- CSP headers configured
- XSS protection enabled
- Secure email handling

## 📝 Content Management

### Adding New Content

#### Products
Edit `app/data/products.ts` and add images to `app/lib/images.ts`

#### Projects
Edit `app/data/projects.ts` with project details and testimonials

#### Team Members
Update `app/data/team.ts` with new team member information

#### FAQ
Modify `app/data/faq.ts` to add new frequently asked questions

### Translations
Update `messages/en.json` and `messages/fr.json` for new content

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Contact forms submit successfully
- [ ] Mobile responsiveness across devices
- [ ] Cross-browser compatibility (Chrome, Safari, Firefox)
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Performance meets targets

### Automated Testing (Future)

```bash
# Unit tests (when implemented)
npm run test

# E2E tests (when implemented)
npm run test:e2e
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Use TypeScript for all new code
- Follow the existing component patterns
- Add proper error handling
- Include JSDoc comments for complex functions
- Test on mobile devices before submitting

## 📄 License

This project is proprietary software owned by Enercam Solar Roofs.

## 📞 Support

- **Development Issues**: Create GitHub issues
- **Content Updates**: Email content@enercam.com
- **General Inquiries**: Email info@enercam.com

## 🎯 Roadmap

- [ ] Customer portal with project tracking
- [ ] Advanced quote calculator
- [ ] Blog/news section
- [ ] Partnership dashboard
- [ ] Mobile app integration
- [ ] Advanced analytics dashboard

---

**Built with**: Next.js 14, TypeScript, Tailwind CSS, Radix UI, Framer Motion
**Deployed on**: Vercel
**Languages**: English, French
**Target Markets**: Cameroon, Chad, Gabon, Congo, Equatorial Guinea, CAR
