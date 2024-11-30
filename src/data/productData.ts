export const PRODUCT_KEYS = {
  // Engine Components
  HIGH_PERFORMANCE_PISTON_SET: 'high-performance-piston-set',
  VALVE_TRAIN_KIT: 'valve-train-kit',
  PRECISION_GEARSET: 'precision-gearset',
  // 可以繼續添加更多產品...
} as const

export type ProductKey = typeof PRODUCT_KEYS[keyof typeof PRODUCT_KEYS]

export interface ProductBase {
  id: number
  category: string
  price: number
  image: string
}

export const productBaseData: Record<ProductKey, ProductBase> = {
  [PRODUCT_KEYS.HIGH_PERFORMANCE_PISTON_SET]: {
    id: 1,
    category: 'engine-components',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1585062544768-5f0e2f6f7bc3?auto=format&fit=crop&w=800&q=80',
  },
  [PRODUCT_KEYS.VALVE_TRAIN_KIT]: {
    id: 2,
    category: 'engine-components',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
  },
  [PRODUCT_KEYS.PRECISION_GEARSET]: {
    id: 3,
    category: 'transmission',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
} 