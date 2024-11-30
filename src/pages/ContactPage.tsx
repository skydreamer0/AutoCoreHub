import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { sendEmail } from '../utils/emailService'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      await sendEmail({
        type: 'contact',
        data: {
          from_name: formData.get('name') as string,
          from_email: formData.get('email') as string,
          subject: formData.get('subject') as string,
          message: formData.get('message') as string,
        },
      })

      toast.success(t('contact.form.success'))
      e.currentTarget.reset()
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error(t('contact.form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const phoneNumbers = t('contact.info.phone.numbers', { 
    returnObjects: true 
  }) as string[]
  
  const emailAddresses = t('contact.info.email.addresses', { 
    returnObjects: true 
  }) as string[]
  
  const addressLines = t('contact.info.address.lines', { 
    returnObjects: true 
  }) as string[]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t('contact.title')}</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 py-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('contact.form.name.label')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('contact.form.email.label')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                {t('contact.form.subject.label')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('contact.form.message.label')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? t('contact.form.submit.sending') : t('contact.form.submit.default')}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.info.title')}</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.phone.title')}</h3>
                {phoneNumbers.map((number: string) => (
                  <p key={number} className="mt-1 text-gray-600">{number}</p>
                ))}
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.email.title')}</h3>
                {emailAddresses.map((email: string) => (
                  <p key={email} className="mt-1 text-gray-600">{email}</p>
                ))}
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.address.title')}</h3>
                <div className="mt-1 text-gray-600">
                  {addressLines.map((line: string) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{t('contact.info.hours.title')}</h3>
                <p className="mt-1 text-gray-600">{t('contact.info.hours.weekdays')}</p>
                <p className="text-gray-600">{t('contact.info.hours.saturday')}</p>
                <p className="text-gray-600">{t('contact.info.hours.sunday')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}