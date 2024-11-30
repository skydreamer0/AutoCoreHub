import { X, Trash2, ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ProductImage from '../ui/ProductImage'
import toast from 'react-hot-toast'
import { createPortal } from 'react-dom'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { t } = useTranslation()
  const { items, removeFromCart, updateQuantity, getProduct, getCartTotal } = useCart()

  if (!isOpen) return null

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    const success = updateQuantity(productId, Math.max(0, quantity))
    if (!success) {
      // Error message will be shown by the CartContext
      return
    }
  }

  const handleRemoveItem = (productId: number) => {
    try {
      removeFromCart(productId)
      toast.success(t('common.cart.removed'))
    } catch (error) {
      console.error('Error removing item:', error)
      toast.error(t('common.error'))
    }
  }

  const validItems = items.filter(item => {
    const product = getProduct(item.productId)
    return product != null
  })

  const cartContent = (
    <div 
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        backgroundColor: isOpen ? 'rgba(0,0,255,0.1)' : 'transparent',
        pointerEvents: isOpen ? 'auto' : 'none'
      }}
    >
      <div 
        className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex z-[10000]">
        <div className="relative w-screen max-w-md transform transition-transform duration-300 ease-in-out">
          <div className="h-full flex flex-col bg-cyber-dark border border-cyber-blue/20 shadow-lg">
            <div className="flex items-center justify-between p-4 bg-cyber-card border-b border-cyber-blue/20">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-cyber-blue" />
                <h2 className="text-lg font-medium text-text-primary">
                  {t('common.cart.title')}
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="text-text-muted hover:text-cyber-blue transition-colors"
                aria-label={t('common.cart.close')}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {validItems.length === 0 ? (
                <div className="text-center text-text-muted mt-8">
                  <p>{t('common.cart.empty')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {validItems.map((item) => {
                    const product = getProduct(item.productId)
                    if (!product) return null

                    return (
                      <div 
                        key={item.productId} 
                        className="bg-cyber-card rounded-lg p-4 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors"
                      >
                        <div className="flex gap-4">
                          <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg border border-cyber-blue/10">
                            <ProductImage
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-text-primary font-medium truncate">
                              {t(`products.items.${product.translationKey || product.id}.name`)}
                            </h3>
                            <p className="mt-1 text-text-muted text-sm line-clamp-2">
                              {t(`products.items.${product.translationKey || product.id}.description`)}
                            </p>
                            <div className="mt-2 flex items-center justify-between">
                              <p className="text-cyber-blue font-medium">${product.price}</p>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center rounded bg-cyber-dark border border-cyber-blue/20 text-text-primary hover:border-cyber-blue hover:text-cyber-blue transition-colors"
                                  aria-label={t('common.cart.decrease')}
                                >
                                  -
                                </button>
                                <span className="w-8 text-center text-text-primary">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center rounded bg-cyber-dark border border-cyber-blue/20 text-text-primary hover:border-cyber-blue hover:text-cyber-blue transition-colors"
                                  aria-label={t('common.cart.increase')}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-text-muted">
                              {t('common.cart.subtotal')}: ${(product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.productId)}
                            className="text-text-muted hover:text-cyber-purple transition-colors p-1 self-start"
                            aria-label={t('common.cart.remove')}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="border-t border-cyber-blue/20 p-4 bg-cyber-card">
              <div className="flex justify-between mb-4">
                <span className="text-text-primary font-medium">
                  {t('common.cart.total')}
                </span>
                <span className="text-cyber-blue font-medium">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <Link
                to="/checkout"
                onClick={onClose}
                className="w-full px-4 py-2 flex items-center justify-center bg-cyber-blue text-cyber-dark rounded hover:bg-cyber-purple transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                aria-disabled={validItems.length === 0}
              >
                {t('common.cart.checkout')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(
    cartContent,
    document.body
  )
}