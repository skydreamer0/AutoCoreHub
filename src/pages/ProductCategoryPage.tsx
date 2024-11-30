import { useParams } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { products, productCategories } from '../data/products'
import { useCart } from '../context/CartContext'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import ProductImage from '../components/ui/ProductImage'

export default function ProductCategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const { addToCart } = useCart()
  const { t } = useTranslation()

  const category = productCategories.find(c => c.id === categoryId)
  const categoryProducts = products.filter(p => p.category === categoryId)

  if (!category) {
    return (
      <div className="text-center py-12">
        {t('products.categoryNotFound')}
      </div>
    )
  }

  const handleAddToCart = (productId: number) => {
    addToCart(productId, 1)
    toast.success(t('common.cart.added'))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Category Header */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {t(`products.categories.${category.id}.name`)}
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          {t(`products.categories.${category.id}.description`)}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
          >
            <ProductImage
              src={product.image}
              alt={product.translationKey 
                ? t(`products.items.${product.translationKey}.name`)
                : product.name}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {product.translationKey 
                  ? t(`products.items.${product.translationKey}.name`)
                  : product.name}
              </h3>
              <p className="mt-2 text-gray-600">
                {product.translationKey 
                  ? t(`products.items.${product.translationKey}.description`)
                  : product.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-medium text-gray-900">
                  ${product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {t('products.addToCart')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}