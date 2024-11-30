import { Product, ProductCategory } from '../types/types'
import { productBaseData } from './productData'

export const productCategories: ProductCategory[] = [
  {
    id: 'engine-components',
    name: '', // Now handled by translations
    description: '', // Now handled by translations
    image: 'https://images.unsplash.com/photo-1585062544768-5f0e2f6f7bc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'transmission',
    name: '', // Now handled by translations
    description: '', // Now handled by translations
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brake-systems',
    name: '', // Now handled by translations
    description: '', // Now handled by translations
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'suspension',
    name: '', // Now handled by translations
    description: '', // Now handled by translations
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'electrical',
    name: '', // Now handled by translations
    description: '', // Now handled by translations
    image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&w=800&q=80',
  },
]

export const products: Product[] = Object.entries(productBaseData).map(([key, data]) => ({
  ...data,
  name: '', // Now handled by translations
  description: '', // Now handled by translations
  translationKey: key,
}))