import { PRODUCT_KEYS } from '../../data/productData'

export const es = {
  common: {
    loading: 'Cargando...',
    error: 'Se produjo un error',
    cart: {
      title: 'Carrito de Compras',
      add: 'Añadir al carrito',
      added: 'Añadido al carrito',
      removed: 'Eliminado del carrito',
      empty: 'Tu carrito está vacío',
      total: 'Total',
      checkout: 'Proceder al pago',
      close: 'Cerrar carrito',
      decrease: 'Disminuir cantidad',
      increase: 'Aumentar cantidad',
      remove: 'Eliminar artículo',
      subtotal: 'Subtotal',
    },
  },
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    products: 'Productos',
    contact: 'Contacto',
  },
  home: {
    hero: {
      title: 'Excelencia en Ingeniería Automotriz',
      subtitle: 'Entregando componentes automotrices de primera calidad que impulsan los vehículos del mañana. Confianza, innovación y precisión en cada pieza que fabricamos.',
      cta: {
        products: 'Ver Productos',
        contact: 'Contactar Ventas',
      },
    },
    features: {
      title: '¿Por qué elegir AutoCore Hub?',
      subtitle: 'Calidad líder en la industria respaldada por décadas de experiencia',
      quality: {
        title: 'Calidad Garantizada',
        description: 'Cada componente se somete a rigurosas pruebas y medidas de control de calidad',
      },
      delivery: {
        title: 'Entrega Global',
        description: 'Envíos rápidos y confiables a fabricantes de automóviles en todo el mundo',
      },
      excellence: {
        title: 'Excelencia Certificada',
        description: 'Certificación ISO 9001:2015 con estándares líderes en la industria',
      },
    },
    cta: {
      title: '¿Listo para Mejorar tu Cadena de Suministro?',
      subtitle: 'Únete a los principales fabricantes que confían en AutoCore Hub para sus necesidades de componentes',
      button: 'Comienza Hoy',
    },
  },
  about: {
    hero: {
      title: 'Sobre AutoCore Hub',
      subtitle: 'Fundada en 1995, hemos estado a la vanguardia de la fabricación de componentes automotrices, brindando excelencia e innovación a nuestros socios globales.',
    },
    history: {
      title: 'Nuestra Historia',
      content: 'AutoCore Hub comenzó como una pequeña instalación de fabricación en Detroit, impulsada por la pasión por la excelencia automotriz. Durante los últimos 25 años, nos hemos convertido en un líder global en la fabricación de componentes automotrices, sirviendo a los principales fabricantes de automóviles en todo el mundo.',
    },
    values: {
      title: 'Nuestros Valores Fundamentales',
      excellence: {
        title: 'Excelencia',
        description: 'Nos esforzamos por la excelencia en cada componente que fabricamos, asegurando los más altos estándares de calidad.',
      },
      innovation: {
        title: 'Innovación',
        description: 'La innovación continua impulsa nuestra investigación y desarrollo, manteniéndonos adelante de las tendencias de la industria.',
      },
      partnership: {
        title: 'Asociación',
        description: 'Construimos asociaciones duraderas con nuestros clientes, comprendiendo y satisfaciendo sus necesidades específicas.',
      },
    },
    leadership: {
      title: 'Nuestro Liderazgo',
      team: {
        ceo: {
          name: 'Michael Chen',
          role: 'Director Ejecutivo',
        },
        cto: {
          name: 'Sarah Johnson',
          role: 'Director de Tecnología',
        },
        operations: {
          name: 'David Martinez',
          role: 'Director de Operaciones',
        },
      },
    },
  },
  footer: {
    quickLinks: 'Enlaces Rápidos',
    contact: {
      title: 'Contáctenos',
      phone: 'Teléfono',
      email: 'Correo',
      address: 'Dirección',
    },
    businessHours: {
      title: 'Horario de Atención',
      weekdays: 'Lunes - Viernes: 9:00 AM - 6:00 PM',
      saturday: 'Sábado: 10:00 AM - 2:00 PM',
      sunday: 'Domingo: Cerrado',
    },
    copyright: '© {{year}} AutoCore Hub. Todos los derechos reservados.',
  },
  products: {
    title: 'Nuestros Productos',
    subtitle: 'Descubra nuestra completa gama de componentes automotrices de alta calidad, diseñados para la excelencia y la durabilidad.',
    viewProducts: 'Ver productos',
    customSolutions: {
      title: '¿Necesita soluciones personalizadas?',
      description: 'Nuestro equipo de ingenieros puede desarrollar componentes personalizados adaptados a sus necesidades específicas.',
      cta: 'Contactar a nuestros ingenieros',
    },
    categories: {
      'engine-components': {
        name: 'Componentes de Motor',
        description: 'Pistones de alto rendimiento, válvulas y sistemas de distribución',
      },
      'transmission': {
        name: 'Piezas de Transmisión',
        description: 'Engranajes de precisión, ejes y conjuntos de rodamientos',
      },
      'brake-systems': {
        name: 'Sistemas de Frenos',
        description: 'Pastillas de freno avanzadas, rotores y componentes hidráulicos',
      },
      'suspension': {
        name: 'Sistemas de Suspensión',
        description: 'Amortiguadores, puntales y componentes de suspensión de alta calidad',
      },
      'electrical': {
        name: 'Sistemas Eléctricos',
        description: 'Componentes eléctricos automotrices y sensores avanzados',
      },
    },
    addToCart: 'Añadir al carrito',
    price: 'Precio',
    categoryNotFound: 'Categoría no encontrada',
    items: {
      [PRODUCT_KEYS.HIGH_PERFORMANCE_PISTON_SET]: {
        name: 'Juego de Pistones de Alto Rendimiento',
        description: 'Pistones de aluminio forjado diseñados para máxima durabilidad y rendimiento',
      },
      [PRODUCT_KEYS.VALVE_TRAIN_KIT]: {
        name: 'Kit de Tren de Válvulas',
        description: 'Componentes de válvulas de alta precisión con resortes y guías',
      },
      [PRODUCT_KEYS.PRECISION_GEARSET]: {
        name: 'Juego de Engranajes de Precisión',
        description: 'Juego de engranajes sincronizados de acero aleado de alta resistencia',
      },
      'product-1': {
        name: 'Nombre del Producto',
        description: 'Descripción del Producto',
      },
    },
  },
  contact: {
    title: 'Contáctenos',
    subtitle: '¿Tiene preguntas? Estamos aquí para ayudar. Contacte a nuestro equipo para soporte o consultas comerciales.',
    form: {
      title: 'Envíenos un mensaje',
      name: {
        label: 'Nombre',
      },
      email: {
        label: 'Correo electrónico',
      },
      subject: {
        label: 'Asunto',
      },
      message: {
        label: 'Mensaje',
      },
      submit: {
        sending: 'Enviando...',
        default: 'Enviar Mensaje',
      },
      success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
      error: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo.',
    },
    info: {
      title: 'Información de Contacto',
      phone: {
        title: 'Teléfono',
        numbers: [
          '+1 (555) 123-4567',
          '+1 (555) 987-6543',
        ],
      },
      email: {
        title: 'Correo Electrónico',
        addresses: [
          'contact@autocorehub.com',
          'support@autocorehub.com',
        ],
      },
      address: {
        title: 'Dirección',
        lines: [
          '123 Industry Avenue',
          'Tech City, TC 12345',
          'United States',
        ],
      },
      hours: {
        title: 'Horario de Atención',
        weekdays: 'Lunes - Viernes: 9:00 AM - 6:00 PM',
        saturday: 'Sábado: 10:00 AM - 2:00 PM',
        sunday: 'Domingo: Cerrado',
      },
    },
  },
}