import { PRODUCT_KEYS } from '../../data/productData'

export const zh = {
  common: {
    loading: '載入中...',
    error: '發生錯誤',
    cart: {
      add: '加入購物車',
      added: '已加入購物車',
      empty: '購物車為空',
      total: '總計',
      checkout: '結帳',
      subtotal: '小計',
      decrease: '減少數量',
      increase: '增加數量',
      remove: '移除商品'
    },
  },
  nav: {
    home: '首頁',
    about: '關於我們',
    products: '產品',
    contact: '聯絡我們',
  },
  home: {
    hero: {
      title: '汽車工程卓越品質',
      subtitle: '提供驅動明日汽車的優質汽車零件。我們製造的每一個零件都體現信任、創新和精確。',
      cta: {
        products: '查看產品',
        contact: '聯絡銷售',
      },
    },
    features: {
      title: '為什麼選擇AutoCore Hub',
      subtitle: '數十年經驗支持的業界領先品質',
      quality: {
        title: '品質保證',
        description: '每個零件都經過嚴格測試和品質控制措施',
      },
      delivery: {
        title: '全球配送',
        description: '為全球汽車製造商提供快速可靠的運輸',
      },
      excellence: {
        title: '認證卓越',
        description: 'ISO 9001:2015認證，業界領先標準',
      },
    },
    cta: {
      title: '準備好升級您的供應鏈了嗎？',
      subtitle: '加入信任AutoCore Hub滿足零件需求的領先製造商',
      button: '立即開始',
    },
  },
  about: {
    hero: {
      title: '關於AutoCore Hub',
      subtitle: '成立於1995年，我們一直站在汽車零件製造的前沿，為全球合作夥伴提供卓越和創新。',
    },
    history: {
      title: '我們的歷史',
      content: 'AutoCore Hub始於底特律的一個小型製造工廠，源於對汽車卓越的熱情。在過去25年中，我們已發展成為全球汽車零件製造領域的領導者，為全球主要汽車製造商提供服務。',
    },
    values: {
      title: '我們的核心價值觀',
      excellence: {
        title: '卓越',
        description: '我們在製造的每個零件中都追求卓越，確保最高的品質標準。',
      },
      innovation: {
        title: '創新',
        description: '持續創新推動我們的研發，保持業界趨勢領先地位。',
      },
      partnership: {
        title: '合作',
        description: '我們與客戶建立持久的合作關係，理解並滿足他們的獨特需求。',
      },
    },
    leadership: {
      title: '領導團隊',
      team: {
        ceo: {
          name: 'Michael Chen',
          role: '執行長',
        },
        cto: {
          name: 'Sarah Johnson',
          role: '技術長',
        },
        operations: {
          name: 'David Martinez',
          role: '營運總監',
        },
      },
    },
  },
  footer: {
    quickLinks: '快速連結',
    contact: {
      title: '聯絡我們',
      phone: '電話',
      email: '電子郵件',
      address: '地址',
    },
    businessHours: {
      title: '營業時間',
      weekdays: '週一至週五：9:00 - 18:00',
      saturday: '週六：10:00 - 14:00',
      sunday: '週日：休息',
    },
    copyright: '© {{year}} AutoCore Hub。保留所有權利。',
  },
  products: {
    title: '我們的產品',
    subtitle: '探索我們全面的高品質汽車零件系列，精工打造，經久耐用。',
    viewProducts: '查看產品',
    customSolutions: {
      title: '需要客製化解決方案？',
      description: '我們的工程團隊可以根據您的具體需求開發客製零件。',
      cta: '聯絡我們的工程師',
    },
    categories: {
      'engine-components': {
        name: '引擎零件',
        description: '高性能活塞、氣門和正時系統',
      },
      'transmission': {
        name: '變速箱零件',
        description: '精密工程齒輪、軸和軸承組件',
      },
      'brake-systems': {
        name: '制動系統',
        description: '先進的剎車片、剎車盤和液壓元件',
      },
      'suspension': {
        name: '懸吊系統',
        description: '高品質減震器、支柱和懸吊部件',
      },
      'electrical': {
        name: '電氣系統',
        description: '先進的汽車電氣元件和感測器',
      },
    },
    addToCart: '加入購物車',
    price: '價格',
    categoryNotFound: '找不到類別',
    items: {
      [PRODUCT_KEYS.HIGH_PERFORMANCE_PISTON_SET]: {
        name: '高性能活塞組',
        description: '鍛造鋁合金活塞，專為最大耐久性和性能而設計',
      },
      [PRODUCT_KEYS.VALVE_TRAIN_KIT]: {
        name: '氣門機構套件',
        description: '高精度氣門組件，包含氣門彈簧和導管',
      },
      [PRODUCT_KEYS.PRECISION_GEARSET]: {
        name: '精密齒輪組',
        description: '高強度合金鋼製造的同步齒輪組',
      },
      'product-1': {
        name: '商品名稱',
        description: '商品描述'
      },
    },
  },
  contact: {
    title: '聯絡我們',
    subtitle: '有任何問題嗎？我們在這裡為您服務。請聯繫我們的團隊尋求支援或業務諮詢。',
    form: {
      title: '傳送訊息',
      name: {
        label: '姓名',
      },
      email: {
        label: '電子郵件',
      },
      subject: {
        label: '主旨',
      },
      message: {
        label: '訊息',
      },
      submit: {
        sending: '傳送中...',
        default: '傳送訊息',
      },
      success: '訊息已成功傳送！我們將盡快回覆您。',
      error: '傳送訊息失敗。請再試一次。',
    },
    info: {
      title: '聯絡資訊',
      phone: {
        title: '電話',
        numbers: [
          '+1 (555) 123-4567',
          '+1 (555) 987-6543',
        ],
      },
      email: {
        title: '電子郵件',
        addresses: [
          'contact@autocorehub.com',
          'support@autocorehub.com',
        ],
      },
      address: {
        title: '地址',
        lines: [
          '123 Industry Avenue',
          'Tech City, TC 12345',
          'United States',
        ],
      },
      hours: {
        title: '營業時間',
        weekdays: '週一至週五：9:00 - 18:00',
        saturday: '週六：10:00 - 14:00',
        sunday: '週日：休息',
      },
    },
  },
}