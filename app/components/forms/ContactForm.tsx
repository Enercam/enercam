"use client"

import { useState } from "react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import { SERVICE_AREAS, INTEREST_TYPES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = `Contact Form: ${data.interest} - ${data.name}`
    const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Location: ${data.location}
Interest: ${data.interest}

Message:
${data.message}
    `.trim()

    const mailtoLink = `mailto:info@enercam.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open mailto link
    window.location.href = mailtoLink

    // Show success message
    setIsSubmitted(true)
    reset()

    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">Message Sent!</h3>
          <p className="text-neutral-600">
            Your email client has opened with your message. Send it to complete your inquiry.
          </p>
        </div>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
          placeholder="Your full name"
        />

        <Input
          label="Email Address"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone Number (Optional)"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="+237 xxx xxx xxx"
        />

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Service Area</label>
          <Select
            value={watch('location')}
            onValueChange={(value) => setValue('location', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your location" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_AREAS.map((area) => (
                <SelectItem key={area} value={area}>
                  {area}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.location && (
            <p className="text-sm text-red-500">{errors.location.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">How can we help you?</label>
        <Select
          value={watch('interest')}
          onValueChange={(value: "quote" | "general" | "partnership" | "careers") => setValue('interest', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your interest" />
          </SelectTrigger>
          <SelectContent>
            {INTEREST_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.interest && (
          <p className="text-sm text-red-500">{errors.interest.message}</p>
        )}
      </div>

      <Textarea
        label="Message"
        {...register('message')}
        error={errors.message?.message}
        placeholder="Tell us about your project or question..."
        rows={5}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      <p className="text-sm text-neutral-600 text-center">
        We respond to all inquiries within 24 hours.
      </p>
    </form>
  )
}
