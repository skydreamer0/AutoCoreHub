export interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
  price: number
  translationKey?: string
}

export interface CartItem {
  productId: number
  quantity: number
}

export interface ProductCategory {
  id: string
  name: string
  description: string
  image: string
}