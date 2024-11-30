import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0]

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-cyber-blue transition-colors"
        aria-label="Change language"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <Globe className="w-5 h-5" />
        <span className="hidden sm:inline" aria-label={`Current language: ${currentLanguage.name}`}>
          {currentLanguage.nativeName}
        </span>
      </button>
      
      <div 
        className="absolute right-0 mt-2 w-56 py-2 bg-cyber-card rounded-lg shadow-xl border border-cyber-blue/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-menu"
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left hover:bg-cyber-blue/10 transition-colors flex items-center justify-between ${
              i18n.language === lang.code ? 'text-cyber-blue bg-cyber-blue/5' : 'text-gray-300'
            }`}
            role="menuitem"
            lang={lang.code}
            aria-label={`Switch to ${lang.name}`}
          >
            <span>{lang.nativeName}</span>
            <span className="text-sm text-gray-500">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}