import { PRODUCT_KEYS } from '../../data/productData'

export const ja = {
  common: {
    loading: '読み込み中...',
    error: 'エラーが発生しました',
    cart: {
      title: 'ショッピングカート',
      add: 'カートに追加',
      added: 'カートに追加しました',
      removed: 'カートから削除しました',
      empty: 'カートは空です',
      total: '合計',
      checkout: 'レジに進む',
      close: 'カートを閉じる',
      decrease: '数量を減らす',
      increase: '数量を増やす',
      remove: '商品を削除',
      subtotal: '小計',
    },
  },
  nav: {
    home: 'ホーム',
    about: '会社概要',
    products: '製品',
    contact: 'お問い合わせ',
  },
  home: {
    hero: {
      title: '自動車工学における卓越性',
      subtitle: '明日の車両を動かす高品質な自動車部品を提供。私たちが製造する全ての部品に信頼性、革新性、精密性を。',
      cta: {
        products: '製品を見る',
        contact: '営業に連絡',
      },
    },
    features: {
      title: 'AutoCore Hubを選ぶ理由',
      subtitle: '数十年の経験に裏打ちされた業界をリードする品質',
      quality: {
        title: '品質保証',
        description: '全ての部品が厳格な試験と品質管理措置を受けています',
      },
      delivery: {
        title: 'グローバル配送',
        description: '世界中の自動車メーカーへの迅速で信頼性の高い配送',
      },
      excellence: {
        title: '認証された卓越性',
        description: 'ISO 9001:2015認証取得、業界をリードする基準',
      },
    },
    cta: {
      title: 'サプライチェーンのアップグレードの準備はできていますか？',
      subtitle: '部品ニーズにAutoCore Hubを信頼する主要メーカーに参加しませんか',
      button: '今すぐ始める',
    },
  },
  about: {
    hero: {
      title: 'AutoCore Hubについて',
      subtitle: '1995年の設立以来、自動車部品製造の最前線で、グローバルパートナーに卓越性と革新性を提供し続けています。',
    },
    history: {
      title: '私たちの歴史',
      content: 'AutoCore Hubは、デトロイトの小さな製造施設として、自動車における卓越性への情熱から始まりました。過去25年以上にわたり、私たちは自動車部品製造のグローバルリーダーへと成長し、世界中の主要な自動車メーカーにサービスを提供しています。',
    },
    values: {
      title: '私たちの核心的価値',
      excellence: {
        title: '卓越性',
        description: '製造する全ての部品において卓越性を追求し、最高品質基準を確保します。',
      },
      innovation: {
        title: '革新',
        description: '継続的な革新が研究開発を推進し、業界トレンドの先を行きます。',
      },
      partnership: {
        title: 'パートナーシップ',
        description: '顧客との永続的なパートナーシップを構築し、独自のニーズを理解し満たします。',
      },
    },
    leadership: {
      title: '経営陣',
      team: {
        ceo: {
          name: 'Michael Chen',
          role: '最高経営責任者',
        },
        cto: {
          name: 'Sarah Johnson',
          role: '最高技術責任者',
        },
        operations: {
          name: 'David Martinez',
          role: '業務執行責任者',
        },
      },
    },
  },
  footer: {
    quickLinks: 'クイックリンク',
    contact: {
      title: 'お問い合わせ',
      phone: '電話',
      email: 'メール',
      address: '住所',
    },
    businessHours: {
      title: '営業時間',
      weekdays: '月曜 - 金曜：9:00 - 18:00',
      saturday: '土曜：10:00 - 14:00',
      sunday: '日曜：休業',
    },
    copyright: '© {{year}} AutoCore Hub. All rights reserved.',
  },
  products: {
    title: '製品一覧',
    subtitle: '高品質な自動車部品の包括的なラインナップをご覧ください。優れた技術と耐久性を備えています。',
    viewProducts: '製品を見る',
    customSolutions: {
      title: 'カスタムソリューションが必要ですか？',
      description: '当社のエンジニアリングチームが、お客様の具体的なニーズに合わせたカスタム部品を開発いたします。',
      cta: 'エンジニアに相談する',
    },
    categories: {
      'engine-components': {
        name: 'エンジン部品',
        description: '高性能ピストン、バルブ、タイミングシステム',
      },
      'transmission': {
        name: 'トランスミッション部品',
        description: '精密加工されたギア、シャフト、ベアリングアセンブリ',
      },
      'brake-systems': {
        name: 'ブレーキシステム',
        description: '先進的なブレーキパッド、ローター、油圧部品',
      },
      'suspension': {
        name: 'サスペンションシステム',
        description: '高品質ショック、ストラット、サスペンション部品',
      },
      'electrical': {
        name: '電気システ',
        description: '先進的な自動車電装部品とセンサー',
      },
    },
    addToCart: 'カートに追加',
    price: '価格',
    categoryNotFound: 'カテゴリーが見つかりません',
    items: {
      [PRODUCT_KEYS.HIGH_PERFORMANCE_PISTON_SET]: {
        name: '高性能ピストンセット',
        description: '最大の耐久性とパフォーマンスのために設計された鍛造アルミニウムピストン',
      },
      [PRODUCT_KEYS.VALVE_TRAIN_KIT]: {
        name: 'バルブトレインキット',
        description: 'バルブスプリングとガイドを含む高精度バルブ部品',
      },
      [PRODUCT_KEYS.PRECISION_GEARSET]: {
        name: '精密ギアセット',
        description: '高強度合金鋼製の同期ギアセット',
      },
      'product-1': {
        name: '商品名',
        description: '商品説明',
      },
    },
  },
  contact: {
    title: 'お問い合わせ',
    subtitle: 'ご質問がありますか？サポートやビジネスに関するお問い合わせは、私たちのチームまでご連絡ください。',
    form: {
      title: 'メッセージを送信',
      name: {
        label: 'お名前',
      },
      email: {
        label: 'メールアドレス',
      },
      subject: {
        label: '件名',
      },
      message: {
        label: 'メッセージ',
      },
      submit: {
        sending: '送信中...',
        default: 'メッセージを送信',
      },
      success: 'メッセージが正常に送信されました。まもなくご連絡いたします。',
      error: 'メッセージの送信に失敗しました。もう一度お試しください。',
    },
    info: {
      title: '連絡先情報',
      phone: {
        title: '電話番号',
        numbers: [
          '+1 (555) 123-4567',
          '+1 (555) 987-6543',
        ],
      },
      email: {
        title: 'メールアドレス',
        addresses: [
          'contact@autocorehub.com',
          'support@autocorehub.com',
        ],
      },
      address: {
        title: '住所',
        lines: [
          '123 Industry Avenue',
          'Tech City, TC 12345',
          'United States',
        ],
      },
      hours: {
        title: '営業時間',
        weekdays: '月曜日 - 金曜日：9:00 - 18:00',
        saturday: '土曜日：10:00 - 14:00',
        sunday: '日曜日：休業',
      },
    },
  },
}