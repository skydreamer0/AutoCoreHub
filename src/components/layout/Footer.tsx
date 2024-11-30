import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">AutoCore Hub</h3>
            <p className="text-sm">
              {t('home.hero.subtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">
              {t('footer.contact.title')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>{t('footer.contact.phone')}: +1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>{t('footer.contact.email')}: contact@autocorehub.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{t('footer.contact.address')}: 123 Industry Ave</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">
              {t('footer.businessHours.title')}
            </h3>
            <ul className="space-y-2">
              <li>{t('footer.businessHours.weekdays')}</li>
              <li>{t('footer.businessHours.saturday')}</li>
              <li>{t('footer.businessHours.sunday')}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  )
}