import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { CartItem, Product } from '../types/types'
import { products } from '../data/products'
import toast from 'react-hot-toast'

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number, quantity: number) => boolean
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => boolean
  clearCart: () => void
  getCartTotal: () => number
  getCartItemCount: () => number
  getProduct: (productId: number) => Product | undefined
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const MAX_QUANTITY_PER_ITEM = 99
const CART_STORAGE_KEY = 'cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (!savedCart) return []

      const parsedCart = JSON.parse(savedCart)
      // Validate stored cart items
      const validatedCart = parsedCart.filter((item: CartItem) => {
        const product = products.find(p => p.id === item.productId)
        return product && item.quantity > 0 && item.quantity <= MAX_QUANTITY_PER_ITEM
      })
      
      return validatedCart
    } catch (error) {
      console.error('Error loading cart:', error)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
      console.error('Error saving cart:', error)
      toast.error('Failed to save cart. Please try again.')
    }
  }, [items])

  const validateProduct = (productId: number): Product | undefined => {
    const product = products.find(p => p.id === productId)
    if (!product) {
      console.error(`Invalid product ID: ${productId}`)
      toast.error('Invalid product selected')
      return undefined
    }
    return product
  }

  const validateQuantity = (quantity: number): boolean => {
    if (quantity <= 0) {
      toast.error('Quantity must be greater than 0')
      return false
    }
    if (quantity > MAX_QUANTITY_PER_ITEM) {
      toast.error(`Maximum quantity per item is ${MAX_QUANTITY_PER_ITEM}`)
      return false
    }
    return true
  }

  const addToCart = (productId: number, quantity: number): boolean => {
    try {
      // Validate product and quantity
      const product = validateProduct(productId)
      if (!product) return false
      if (!validateQuantity(quantity)) return false

      setItems(currentItems => {
        const existingItem = currentItems.find(item => item.productId === productId)
        if (existingItem) {
          const newQuantity = existingItem.quantity + quantity
          if (newQuantity > MAX_QUANTITY_PER_ITEM) {
            toast.error(`Cannot add more than ${MAX_QUANTITY_PER_ITEM} items`)
            return currentItems
          }
          return currentItems.map(item =>
            item.productId === productId
              ? { ...item, quantity: newQuantity }
              : item
          )
        }
        return [...currentItems, { productId, quantity }]
      })
      return true
    } catch (error) {
      console.error('Error adding to cart:', error)
      toast.error('Failed to add item to cart')
      return false
    }
  }

  const removeFromCart = (productId: number) => {
    try {
      if (!validateProduct(productId)) return
      setItems(currentItems => 
        currentItems.filter(item => item.productId !== productId)
      )
    } catch (error) {
      console.error('Error removing from cart:', error)
      toast.error('Failed to remove item from cart')
    }
  }

  const updateQuantity = (productId: number, quantity: number): boolean => {
    try {
      // Validate product and quantity
      if (!validateProduct(productId)) return false
      if (!validateQuantity(quantity)) return false

      setItems(currentItems => {
        const itemExists = currentItems.some(item => item.productId === productId)
        if (!itemExists) {
          console.error(`Item not found in cart: ${productId}`)
          return currentItems
        }

        return quantity === 0
          ? currentItems.filter(item => item.productId !== productId)
          : currentItems.map(item =>
              item.productId === productId ? { ...item, quantity } : item
            )
      })
      return true
    } catch (error) {
      console.error('Error updating quantity:', error)
      toast.error('Failed to update quantity')
      return false
    }
  }

  const clearCart = () => {
    try {
      setItems([])
      localStorage.removeItem(CART_STORAGE_KEY)
    } catch (error) {
      console.error('Error clearing cart:', error)
      toast.error('Failed to clear cart')
    }
  }

  const getProduct = (productId: number): Product | undefined => {
    return products.find(p => p.id === productId)
  }

  const getCartTotal = (): number => {
    try {
      return items.reduce((total, item) => {
        const product = getProduct(item.productId)
        if (!product) return total
        return total + product.price * item.quantity
      }, 0)
    } catch (error) {
      console.error('Error calculating cart total:', error)
      return 0
    }
  }

  const getCartItemCount = (): number => {
    try {
      return items.reduce((count, item) => count + item.quantity, 0)
    } catch (error) {
      console.error('Error calculating item count:', error)
      return 0
    }
  }

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemCount,
      getProduct,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}