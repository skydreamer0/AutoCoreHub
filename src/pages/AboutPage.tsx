import { Users, Target, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {t('about.hero.title')}
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          {t('about.hero.subtitle')}
        </p>
      </div>

      {/* History Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {t('about.history.title')}
        </h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>{t('about.history.content')}</p>
          <p className="mt-4">
            {t('about.history.achievements')}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t('about.values.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t('about.values.excellence.title')}
            </h3>
            <p className="text-gray-600">
              {t('about.values.excellence.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t('about.values.innovation.title')}
            </h3>
            <p className="text-gray-600">
              {t('about.values.innovation.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t('about.values.partnership.title')}
            </h3>
            <p className="text-gray-600">
              {t('about.values.partnership.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t('about.leadership.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: t('about.leadership.team.ceo.name'),
              role: t('about.leadership.team.ceo.role'),
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              name: t('about.leadership.team.cto.name'),
              role: t('about.leadership.team.cto.role'),
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              name: t('about.leadership.team.operations.name'),
              role: t('about.leadership.team.operations.role'),
              image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          ].map((person) => (
            <div key={person.name} className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src={person.image}
                alt={person.name}
              />
              <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}