  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataService {

    constructor() { }
    
    addLike(productId: number) {
      let product = this.productData.find(p => p.pdId === productId);
      if (product) {
        product.pdLikes += 1;
      }
    }

    categoriesData = [
      {
        id: 1,
        name: 'Одежда и Мода',
        img: '/images/categoriesimg/fashion.webp',
        code: 'fashion',
      },
      {
        id: 2,
        name: 'Дом и Гарнитур',
        img: '/images/categoriesimg/home.webp',
        code: 'homeandfurniture',
      },
      {
        id: 3,
        name: 'Смартфоны и Гаджеты',
        img: '/images/categoriesimg/appliance.webp',
        code: 'appliances',
      },
      {
        id: 4,
        name: 'Детские товары',
        img: '/images/categoriesimg/toys.webp',
        code: 'toys',
      },
    ];

    productData = [
      {
        pdId: 8565,
        pdName: "Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
        pdDesc: "Характеристики Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
        pdPrice: 55760,
        pdCategory: "appliances",
        pdSubCategory: "mobile",
        pdImg: "/images/productimg/84526902706206.jpg",
        pdUrl: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8566,
        pdName: "Apple iPhone 16 Pro Max 256Gb золотистый",
        pdDesc: "Experience the iPhone 16 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy.",
        pdPrice: 680920,
        pdCategory: "appliances",
        pdSubCategory: "mobile",
        pdImg: "/images/productimg/87295491702814.jpg",
        pdUrl: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8567,
        pdName: "Apple iPhone 16 128Gb черный",
        pdDesc: "Experience the iPhone 16 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy.",
        pdPrice: 422260,
        pdCategory: "appliances",
        pdSubCategory: "mobile",
        pdImg: "/images/productimg/87295470731294.jpg",
        pdUrl: "https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000",
        pdLikes: 0
      },

      {
        pdId: 8568,
        pdName: "Apple 18W USB-C Power Adapter USB Type-C белый",
        pdDesc: "Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.",
        pdPrice: 8573,
        pdCategory: "appliances",
        pdSubCategory: "mobile",
        pdImg: "/images/productimg/64377056231454.jpg",
        pdUrl: "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8569,
        pdName: "Wireless Mouse черный",
        pdDesc: "Wireless Mouse черный",
        pdPrice: 837 ,
        pdCategory: "appliances",
        pdSubCategory: "refrigerator",
        pdImg: "/images/productimg/79480589418526.jpg",
        pdUrl: "https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8570,
        pdName: "Wi-Fi роутер TP-LINK TD-W8961N",
        pdDesc: "Беспроводной маршрутизатор серии N со встроенным модемом ADSL2+ и скоростью передачи данных до 300 Мбит/с модели TD-W8961N представляет собой невероятно надёжное и универсальное устройство, способное предоставлять всю полноту возможностей стандарта ADSL2+, а также способное стать надёжным и экономным решением для дома и предприятия малого бизнеса.",
        pdPrice: 12170,
        pdCategory: "appliances",
        pdSubCategory: "mobile",
        pdImg: "/images/productimg/63760532275230.jpg",
        pdUrl: "https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8571,
        pdName: "Лонгслив iu brand черный",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 2136,
        pdCategory: "fashion",
        pdSubCategory: "tshirt",
        pdImg: "/images/productimg/86955318476830.jpg",
        pdSize: ["S", "M", "L", "XL"],
        pdUrl: "https://kaspi.kz/shop/p/longsliv-iu-brand-0001-bordovyi-xs-129363598/?c=750000000&hasVariants=true",
        pdLikes: 0
      },
      {
        pdId: 8572,
        pdName: "Пиджак свободного кроя черный",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 4885,
        pdCategory: "fashion",
        pdSubCategory: "tshirt",
        pdImg: "/images/productimg/86020387110942.jpg",
        pdSize: ["S", "M", "L", "XL"],
        pdUrl: "https://kaspi.kz/shop/p/pidzhak-978513-chernyi-46-119410271/?c=750000000",
        pdLikes: 0

      },
      {
        pdId: 8573,
        pdName: "Повседневный костюм синий, темно-синий",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 13118,
        pdCategory: "fashion",
        pdSubCategory: "tshirt",
        pdImg: "/images/productimg/87121922228254.jpg",
        pdSize: ["S", "M", "L", "XL"],
        pdUrl: "https://kaspi.kz/shop/p/povsednevnyi-kostjum-30241445-699061223-sinii-temno-sinii-42-48-123561323/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8574,
        pdName: "Футболка Tespe черный",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 1000,
        pdCategory: "fashion",
        pdSubCategory: "jeans",
        pdImg: "/images/productimg/86391516758046.jpg",
        pdSize: [30, 32, 34],
        pdUrl: "https://kaspi.kz/shop/p/futbolka-tespe-atk0173-chernyi-52-103962777/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8575,
        pdName: "Пиджак свободного кроя коричневый",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 4968,
        pdCategory: "fashion",
        pdSubCategory: "jeans",
        pdImg: "/images/productimg/85691775909918.jpg",
        pdSize: [26, 28, 30, 32, 34],
        pdUrl: "https://kaspi.kz/shop/p/pidzhak-978513-korichnevyi-44-118244518/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8576,
        pdName: "Стул C06, 80x46x40 см, белый",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 5498,
        pdCategory: "homeandfurniture",
        pdSubCategory: "cover",
        pdImg: "/images/productimg/3187771.jpg",
        pdUrl: "https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8577,
        pdName: "Вешалка напольная, izox, металл, 110x150 см, черный",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 4289,
        pdCategory: "homeandfurniture",
        pdSubCategory: "cover",
        pdImg: "/images/productimg/84668650291230.jpg",
        pdUrl: "https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8578,
        pdName: "Игровое кресло 501126, черный",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 34757,
        pdCategory: "homeandfurniture",
        pdSubCategory: "cover",
        pdImg: "/images/productimg/86703072149534.jpg",
        pdUrl: "https://kaspi.kz/shop/p/igrovoe-kreslo-501126-chernyi-111098602/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8579,
        pdName: "Morbido диван прямой Комфорт, обивка микровелюр, 80х210х80 см, серый",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 55939,
        pdCategory: "homeandfurniture",
        pdSubCategory: "sofa",
        pdImg: "/images/productimg/86777038274590.jpg",
        pdUrl: "https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8580,
        pdName: "Стол компьютерный Лофт,110х70x75 см, белый",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 21111,
        pdCategory: "homeandfurnitur  e",
        pdSubCategory: "table",
        pdImg: "/images/productimg/85119645319198.jpg",
        pdUrl: "https://kaspi.kz/shop/p/stol-komp-juternyi-loft-110h70x75-sm-belyi-108418941/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8581,
        pdName: "Трусики BAFURI XL, 5, 42 шт",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 3958,
        pdCategory: "toys",
        pdSubCategory: "cars",
        pdImg: "/images/productimg/84670928420894.jpg",
        pdUrl: "https://kaspi.kz/shop/p/trusiki-bafuri-xl-5-42-sht-115199086/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8582,
        pdName: "Планшет MagPad LCD 846906 розовый",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 418,
        pdCategory: "toys",
        pdSubCategory: "cars",
        pdImg: "/images/productimg/68019899269150.jpg",
        pdUrl: "https://kaspi.kz/shop/p/planshet-magpad-lcd-846906-rozovyi-108501451/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8583,
        pdName: "Интерактивная игрушка PROON Утята на лесенке пластик",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 1385,
        pdCategory: "toys",
        pdSubCategory: "puzzle",
        pdImg: "/images/productimg/64458875699230.jpg",
        pdUrl: "https://kaspi.kz/shop/p/interaktivnaja-igrushka-proon-utjata-na-lesenke-plastik-104141144/?c=750000000",
        pdLikes: 0
      },
      {
        pdId: 8584,
        pdName: "Сортер Learning Resources Ежик Спайк мультиколор",
        pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
        pdPrice: 1020,
        pdCategory: "toys",
        pdSubCategory: "toys",
        pdImg: "/images/productimg/85091548135454.jpg",
        pdUrl: "https://kaspi.kz/shop/p/sorter-learning-resources-ezhik-spaik-mul-tikolor-101668097/?c=750000000",
        pdLikes: 0
      },
    ];
  }
