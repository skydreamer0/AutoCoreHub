import { PRODUCT_KEYS } from '../../data/productData'

export const en = {
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    cart: {
      title: 'Shopping Cart',
      add: 'Add to Cart',
      added: 'Added to cart',
      removed: 'Removed from cart',
      empty: 'Your cart is empty',
      total: 'Total',
      checkout: 'Proceed to Checkout',
      close: 'Close cart',
      decrease: 'Decrease quantity',
      increase: 'Increase quantity',
      remove: 'Remove item',
      subtotal: 'Subtotal',
    },
  },
  nav: {
    home: 'Home Page',
    about: 'About Us',
    products: 'Our Products',
    contact: 'Contact Us',
  },
  home: {
    hero: {
      title: 'Automotive Engineering Excellence',
      subtitle: 'Delivering premium automotive components that power tomorrow\'s vehicles. Trust, innovation, and precision in every part we manufacture.',
      cta: {
        products: 'View Products',
        contact: 'Contact Sales',
      },
    },
    features: {
      title: 'Why Choose AutoCore Hub',
      subtitle: 'Industry-leading quality backed by decades of experience',
      quality: {
        title: 'Quality Guaranteed',
        description: 'Every component undergoes rigorous testing and quality control measures',
      },
      delivery: {
        title: 'Global Delivery',
        description: 'Fast and reliable shipping to automotive manufacturers worldwide',
      },
      excellence: {
        title: 'Certified Excellence',
        description: 'ISO 9001:2015 certified with industry-leading standards',
      },
    },
    cta: {
      title: 'Ready to Upgrade Your Supply Chain?',
      subtitle: 'Join leading manufacturers who trust AutoCore Hub for their component needs',
      button: 'Get Started',
    },
  },
  about: {
    hero: {
      title: 'About AutoCore Hub',
      subtitle: 'Founded in 1995, we\'ve been at the forefront of automotive component manufacturing, delivering excellence and innovation to our global partners.',
    },
    history: {
      title: 'Our History',
      content: 'AutoCore Hub began as a small manufacturing facility in Detroit, driven by a passion for automotive excellence. Over the past 25 years, we\'ve grown into a global leader in automotive component manufacturing, serving major automotive manufacturers worldwide.',
    },
    values: {
      title: 'Our Core Values',
      excellence: {
        title: 'Excellence',
        description: 'We pursue excellence in every component we manufacture, ensuring the highest quality standards.',
      },
      innovation: {
        title: 'Innovation',
        description: 'Continuous innovation drives our R&D, keeping us ahead of industry trends.',
      },
      partnership: {
        title: 'Partnership',
        description: 'We build lasting partnerships with our customers, understanding and meeting their unique needs.',
      },
    },
    leadership: {
      title: 'Our Leadership',
      team: {
        ceo: {
          name: 'Michael Chen',
          role: 'Chief Executive Officer',
        },
        cto: {
          name: 'Sarah Johnson',
          role: 'Chief Technology Officer',
        },
        operations: {
          name: 'David Martinez',
          role: 'Director of Operations',
        },
      },
    },
  },
  footer: {
    quickLinks: 'Quick Links',
    contact: {
      title: 'Contact Us',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
    },
    businessHours: {
      title: 'Business Hours',
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
      saturday: 'Saturday: 10:00 AM - 2:00 PM',
      sunday: 'Sunday: Closed',
    },
    copyright: '© {{year}} AutoCore Hub. All rights reserved.',
  },
  products: {
    title: 'Our Products',
    subtitle: 'Discover our comprehensive range of high-quality automotive components, engineered for excellence and built to last.',
    viewProducts: 'View Products',
    customSolutions: {
      title: 'Need Custom Solutions?',
      description: 'Our engineering team can develop custom components tailored to your specific needs.',
      cta: 'Contact Our Engineers',
    },
    categories: {
      'engine-components': {
        name: 'Engine Components',
        description: 'High-performance pistons, valves, and timing systems',
      },
      'transmission': {
        name: 'Transmission Parts',
        description: 'Precision-engineered gears, shafts, and bearing assemblies',
      },
      'brake-systems': {
        name: 'Brake Systems',
        description: 'Advanced brake pads, rotors, and hydraulic components',
      },
      'suspension': {
        name: 'Suspension Systems',
        description: 'High-quality shocks, struts, and suspension components',
      },
      'electrical': {
        name: 'Electrical Systems',
        description: 'Advanced automotive electrical components and sensors',
      },
    },
    addToCart: 'Add to Cart',
    price: 'Price',
    categoryNotFound: 'Category not found',
    items: {
      [PRODUCT_KEYS.HIGH_PERFORMANCE_PISTON_SET]: {
        name: 'High Performance Piston Set',
        description: 'Forged aluminum pistons designed for maximum durability and performance',
      },
      [PRODUCT_KEYS.VALVE_TRAIN_KIT]: {
        name: 'Valve Train Kit',
        description: 'High-precision valve components with springs and guides',
      },
      [PRODUCT_KEYS.PRECISION_GEARSET]: {
        name: 'Precision Gearset',
        description: 'High-strength alloy steel synchronized gear set',
      },
      'product-1': {
        name: 'Product Name',
        description: 'Product Description'
      },
    },
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Have questions? We\'re here to help. Reach out to our team for support or business inquiries.',
    form: {
      title: 'Send us a message',
      name: {
        label: 'Name',
      },
      email: {
        label: 'Email',
      },
      subject: {
        label: 'Subject',
      },
      message: {
        label: 'Message',
      },
      submit: {
        sending: 'Sending...',
        default: 'Send Message',
      },
      success: 'Message sent successfully! We will get back to you soon.',
      error: 'Failed to send message. Please try again.',
    },
    info: {
      title: 'Contact Information',
      phone: {
        title: 'Phone',
        numbers: [
          '+1 (555) 123-4567',
          '+1 (555) 987-6543',
        ],
      },
      email: {
        title: 'Email',
        addresses: [
          'contact@autocorehub.com',
          'support@autocorehub.com',
        ],
      },
      address: {
        title: 'Address',
        lines: [
          '123 Industry Avenue',
          'Tech City, TC 12345',
          'United States',
        ],
      },
      hours: {
        title: 'Business Hours',
        weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
        saturday: 'Saturday: 10:00 AM - 2:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
  },
}