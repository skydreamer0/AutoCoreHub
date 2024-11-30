import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import { ImageOff } from 'lucide-react'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
}

export default function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  // Fallback images in order of preference
  const fallbackImages = [
    'https://images.unsplash.com/photo-1585062544768-5f0e2f6f7bc3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  ]

  const handleImageError = () => {
    const currentIndex = fallbackImages.indexOf(imageSrc)
    if (currentIndex < fallbackImages.length - 1) {
      setImageSrc(fallbackImages[currentIndex + 1])
    } else {
      setHasError(true)
    }
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <LoadingSpinner />
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-400">
            <ImageOff className="w-8 h-8 mx-auto mb-2" />
            <span className="text-sm">Image not available</span>
          </div>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}
    </div>
  )
}