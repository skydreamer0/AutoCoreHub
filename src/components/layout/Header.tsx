import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import CartDrawer from '../cart/CartDrawer'
import LanguageSwitcher from '../ui/LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getCartItemCount } = useCart()
  const { t } = useTranslation()

  const navigation = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  return (
    <header className="fixed w-full backdrop-blur-md bg-opacity-80 bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-cyber-glow">AutoCore Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link text-base font-medium ${
                    isActive
                      ? 'text-cyber-blue'
                      : 'text-gray-300 hover:text-cyber-blue'
                  } transition-colors`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Cart Button */}
          <button
            className="relative p-2 text-gray-300 hover:text-cyber-blue transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-6 w-6" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-cyber-blue text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-300 hover:text-cyber-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden cyber-card my-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-cyber-blue bg-gray-800'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-cyber-blue'
                    } transition-colors`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  )
}