// Google Analytics 4 integration
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Custom tracking functions
export const trackEvent = {
  formSubmit: (formType: string) => {
    event({
      action: 'form_submit',
      category: 'engagement',
      label: formType,
    })
  },
  productView: (productId: string, productName: string) => {
    event({
      action: 'view_item',
      category: 'ecommerce',
      label: `${productId} - ${productName}`,
    })
  },
  contactClick: (contactType: string) => {
    event({
      action: 'contact_click',
      category: 'engagement',
      label: contactType,
    })
  },
  quoteRequest: (productId?: string) => {
    event({
      action: 'quote_request',
      category: 'conversion',
      label: productId || 'general',
    })
  },
}
