import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productCategories } from '../data/products'
import ProductImage from '../components/ui/ProductImage'
import { useTranslation } from 'react-i18next'

export default function ProductsPage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {t('products.title')}
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          {t('products.subtitle')}
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {productCategories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.id}`}
            className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-transform hover:-translate-y-1"
          >
            <ProductImage
              src={category.image}
              alt={t(`products.categories.${category.id}.name`)}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {t(`products.categories.${category.id}.name`)}
              </h3>
              <p className="mt-2 text-gray-600">
                {t(`products.categories.${category.id}.description`)}
              </p>
              <div className="mt-4 flex items-center text-blue-600">
                {t('products.viewProducts')} <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 rounded-xl p-8 my-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {t('products.customSolutions.title')}
        </h2>
        <p className="mt-2 text-gray-600">
          {t('products.customSolutions.description')}
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('products.customSolutions.cta')}
        </Link>
      </div>
    </div>
  )
}