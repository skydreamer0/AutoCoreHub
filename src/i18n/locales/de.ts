import { PRODUCT_KEYS } from '../../data/productData'

export const de = {
  common: {
    loading: 'Wird geladen...',
    error: 'Ein Fehler ist aufgetreten',
    cart: {
      title: 'Warenkorb',
      add: 'In den Warenkorb',
      added: 'Zum Warenkorb hinzugefügt',
      removed: 'Aus dem Warenkorb entfernt',
      empty: 'Ihr Warenkorb ist leer',
      total: 'Gesamt',
      checkout: 'Zur Kasse',
      close: 'Warenkorb schließen',
      decrease: 'Menge verringern',
      increase: 'Menge erhöhen',
      remove: 'Artikel entfernen',
      subtotal: 'Zwischensumme',
    },
  },
  nav: {
    home: 'Startseite',
    about: 'Über uns',
    products: 'Produkte',
    contact: 'Kontakt',
  },
  home: {
    hero: {
      title: 'Exzellenz in der Automobiltechnik',
      subtitle: 'Lieferung hochwertiger Automobilkomponenten, die die Fahrzeuge von morgen antreiben. Vertrauen, Innovation und Präzision in jedem Teil, das wir herstellen.',
      cta: {
        products: 'Produkte ansehen',
        contact: 'Vertrieb kontaktieren',
      },
    },
    features: {
      title: 'Warum AutoCore Hub wählen',
      subtitle: 'Branchenführende Qualität, gestützt auf jahrzehntelange Erfahrung',
      quality: {
        title: 'Qualitätsgarantie',
        description: 'Jede Komponente durchläuft strenge Tests und Qualitätskontrollmaßnahmen',
      },
      delivery: {
        title: 'Weltweiter Versand',
        description: 'Schnelle und zuverlässige Lieferung an Automobilhersteller weltweit',
      },
      excellence: {
        title: 'Zertifizierte Exzellenz',
        description: 'ISO 9001:2015 zertifiziert mit branchenführenden Standards',
      },
    },
    cta: {
      title: 'Bereit, Ihre Lieferkette zu verbessern?',
      subtitle: 'Schließen Sie sich den führenden Herstellern an, die AutoCore Hub für ihren Komponentenbedarf vertrauen',
      button: 'Jetzt starten',
    },
  },
  about: {
    hero: {
      title: 'Über AutoCore Hub',
      subtitle: 'Gegründet 1995, sind wir führend in der Herstellung von Automobilkomponenten und bieten Exzellenz und Innovation für unsere globalen Partner.',
    },
    history: {
      title: 'Unsere Geschichte',
      content: 'AutoCore Hub begann als kleine Fertigungsanlage in Detroit, angetrieben von der Leidenschaft für automobile Exzellenz. In den letzten 25 Jahren sind wir zu einem globalen Marktführer in der Herstellung von Automobilkomponenten geworden und beliefern die wichtigsten Automobilhersteller weltweit.',
    },
    values: {
      title: 'Unsere Grundwerte',
      excellence: {
        title: 'Exzellenz',
        description: 'Wir streben nach Exzellenz in jeder Komponente, die wir herstellen, und gewährleisten höchste Qualitätsstandards.',
      },
      innovation: {
        title: 'Innovation',
        description: 'Kontinuierliche Innovation treibt unsere Forschung und Entwicklung voran und hält uns vor Branchentrends.',
      },
      partnership: {
        title: 'Partnerschaft',
        description: 'Wir bauen dauerhafte Partnerschaften mit unseren Kunden auf, verstehen und erfüllen ihre einzigartigen Bedürfnisse.',
      },
    },
    leadership: {
      title: 'Unsere Führung',
      team: {
        ceo: {
          name: 'Michael Chen',
          role: 'Geschäftsführer',
        },
        cto: {
          name: 'Sarah Johnson',
          role: 'Technischer Direktor',
        },
        operations: {
          name: 'David Martinez',
          role: 'Leiter Betrieb',
        },
      },
    },
  },
  footer: {
    quickLinks: 'Schnellzugriff',
    contact: {
      title: 'Kontakt',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
    },
    businessHours: {
      title: 'Öffnungszeiten',
      weekdays: 'Montag - Freitag: 9:00 - 18:00',
      saturday: 'Samstag: 10:00 - 14:00',
      sunday: 'Sonntag: Geschlossen',
    },
    copyright: '© {{year}} AutoCore Hub. Alle Rechte vorbehalten.',
  },
  products: {
    title: 'Unsere Produkte',
    subtitle: 'Entdecken Sie unser umfassendes Sortiment an hochwertigen Automobilkomponenten, entwickelt für Exzellenz und Langlebigkeit.',
    viewProducts: 'Produkte ansehen',
    customSolutions: {
      title: 'Benötigen Sie maßgeschneiderte Lösungen?',
      description: 'Unser Ingenieurteam kann kundenspezifische Komponenten entwickeln, die auf Ihre spezifischen Anforderungen zugeschnitten sind.',
      cta: 'Kontaktieren Sie unsere Ingenieure',
    },
    categories: {
      'engine-components': {
        name: 'Motorkomponenten',
        description: 'Hochleistungskolben, Ventile und Steuerungssysteme',
      },
      'transmission': {
        name: 'Getriebeteile',
        description: 'Präzisionsgefertigte Zahnräder, Wellen und Lagereinheiten',
      },
      'brake-systems': {
        name: 'Bremssysteme',
        description: 'Fortschrittliche Bremsbeläge, Bremsscheiben und Hydraulikkomponenten',
      },
      'suspension': {
        name: 'Fahrwerkssysteme',
        description: 'Hochwertige Stoßdämpfer, Federbeine und Fahrwerkskomponenten',
      },
      'electrical': {
        name: 'Elektrische Systeme',
        description: 'Fortschrittliche Automobilelektronik und Sensoren',
      },
    },
    addToCart: 'In den Warenkorb',
    price: 'Preis',
    categoryNotFound: 'Kategorie nicht gefunden',
    items: {
      [PRODUCT_KEYS.HIGH_PERFORMANCE_PISTON_SET]: {
        name: 'Hochleistungs-Kolbensatz',
        description: 'Geschmiedete Aluminium-Kolben für maximale Haltbarkeit und Leistung',
      },
      [PRODUCT_KEYS.VALVE_TRAIN_KIT]: {
        name: 'Ventiltrieb-Kit',
        description: 'Hochpräzisions-Ventilkomponenten mit Federn und Führungen',
      },
      [PRODUCT_KEYS.PRECISION_GEARSET]: {
        name: 'Präzisions-Getriebesatz',
        description: 'Synchrongetriebe aus hochfestem Legierungsstahl',
      },
      'product-1': {
        name: 'Produktname',
        description: 'Produktbeschreibung',
      },
    },
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Haben Sie Fragen? Wir sind hier, um zu helfen. Kontaktieren Sie unser Team für Support oder Geschäftsanfragen.',
    form: {
      title: 'Nachricht senden',
      name: {
        label: 'Name',
      },
      email: {
        label: 'E-Mail',
      },
      subject: {
        label: 'Betreff',
      },
      message: {
        label: 'Nachricht',
      },
      submit: {
        sending: 'Wird gesendet...',
        default: 'Nachricht senden',
      },
      success: 'Nachricht erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.',
      error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    },
    info: {
      title: 'Kontaktinformationen',
      phone: {
        title: 'Telefon',
        numbers: [
          '+1 (555) 123-4567',
          '+1 (555) 987-6543',
        ],
      },
      email: {
        title: 'E-Mail',
        addresses: [
          'contact@autocorehub.com',
          'support@autocorehub.com',
        ],
      },
      address: {
        title: 'Adresse',
        lines: [
          '123 Industry Avenue',
          'Tech City, TC 12345',
          'United States',
        ],
      },
      hours: {
        title: 'Öffnungszeiten',
        weekdays: 'Montag - Freitag: 9:00 - 18:00 Uhr',
        saturday: 'Samstag: 10:00 - 14:00 Uhr',
        sunday: 'Sonntag: Geschlossen',
      },
    },
  },
}