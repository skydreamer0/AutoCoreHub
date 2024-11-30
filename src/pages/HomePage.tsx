import { ArrowRight, Shield, Truck, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-cyber-dark to-cyber-card overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1)_0%,transparent_65%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 flex flex-col items-center justify-center min-h-[85vh]">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue to-white">
                {t('home.hero.title')}
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <Link
                to="/products"
                className="group px-8 py-3 bg-cyber-blue/90 rounded hover:bg-cyber-blue transition-all duration-300 flex items-center justify-center gap-2 text-cyber-dark font-medium"
              >
                {t('home.hero.cta.products')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-cyber-blue/50 rounded hover:border-cyber-blue hover:bg-cyber-blue/5 transition-all duration-300 font-medium"
              >
                {t('home.hero.cta.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cyber-dark relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t('home.features.quality.title'),
                description: t('home.features.quality.description')
              },
              {
                icon: Truck,
                title: t('home.features.delivery.title'),
                description: t('home.features.delivery.description')
              },
              {
                icon: Award,
                title: t('home.features.excellence.title'),
                description: t('home.features.excellence.description')
              }
            ].map((feature, index) => (
              <div key={index} 
                className="group p-6 rounded-lg bg-cyber-card border border-cyber-blue/10 hover:border-cyber-blue/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-5 rounded bg-cyber-blue/5 flex items-center justify-center group-hover:bg-cyber-blue/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-cyber-blue" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-card relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,243,255,0.03)_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
              {t('home.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-cyber-blue/90 hover:bg-cyber-blue text-cyber-dark rounded transition-all duration-300 font-medium"
            >
              {t('home.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}