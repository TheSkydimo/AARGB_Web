export const defaultLang = "zh" as const;

export const languages = {
  zh: "中文",
  en: "English",
  ru: "Русский",
  tr: "Türkçe",
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    "site.name": "AARGB",
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.features": "特性",
    "nav.download": "下载",
    "nav.about": "关于",
    "nav.language": "语言",

    "home.title": "AARGB | 桌面氛围灯光控制系统",
    "home.description": "AARGB 官方桌面 ARGB 氛围灯光控制系统官网，提供产品信息、特性介绍与官方下载入口。",
    "home.hero.title": "AARGB 桌面氛围灯光控制系统",
    "home.hero.subtitle": "通过官方控制软件，统一管理你的 ARGB 灯光设备",
    "home.hero.cta.download": "下载软件",
    "home.hero.cta.features": "了解特性",
    "home.overview.title": "我们的产品",
    "home.overview.easy.title": "安装简单",
    "home.overview.easy.desc":
      "通过 USB 将控制器连接至电脑，安装官方控制软件后即可完成配置与使用。",
    "home.overview.devices.title": "设备种类齐全",
    "home.overview.devices.desc":
      "支持控制多种不同类型的灯光设备，包括屏幕背光灯、桌面灯、落地灯及其他 ARGB 外设。",
    "home.overview.lowResource.title": "占用资源低",
    "home.overview.lowResource.desc":
      "在多设备控制场景下，系统资源占用较低，不会影响电脑的正常使用。",

    "products.title": "产品 | AARGB",
    "products.description": "了解 AARGB 所支持的灯光设备类型与整体产品形态。",
    "products.heading": "产品",
    "products.lead": "本页面用于介绍 AARGB 所支持的灯光设备类型与整体产品形态。",
    "products.deviceTypes.title": "支持的设备类型",
    "products.deviceTypes.monitorBacklight": "屏幕背光灯",
    "products.deviceTypes.deskLamp": "桌面氛围灯",
    "products.deviceTypes.floorLamp": "落地灯",
    "products.deviceTypes.peripherals": "键盘、鼠标、鼠标垫",
    "products.deviceTypes.pcCase": "机箱风扇等 ARGB 设备",
    "products.note": "所有设备均通过官方软件进行统一管理与配置。",

    "features.title": "特性 | AARGB",
    "features.description": "了解 AARGB 官方控制软件与多设备灯效能力。",
    "features.heading": "特性",
    "features.software.title": "官方控制软件",
    "features.software.desc":
      "AARGB 提供官方灯光控制软件，用于设备管理、灯效配置与系统稳定运行。",
    "features.software.b1": "官方发布与维护",
    "features.software.b2": "无需依赖第三方灯光平台",
    "features.software.b3": "专注于灯光控制相关功能",
    "features.multidevice.title": "多设备统一控制",
    "features.multidevice.desc":
      "通过一套软件即可同时控制多个 ARGB 灯光设备，实现统一配置与同步效果。",
    "features.multidevice.i1": "屏幕背光灯",
    "features.multidevice.i2": "桌面灯 / 落地灯",
    "features.multidevice.i3": "键盘、鼠标、鼠标垫",
    "features.multidevice.i4": "机箱风扇等",
    "features.modes.title": "灯效模式",
    "features.modes.desc": "软件内置多种灯效模式，适用于不同使用场景。",
    "features.modes.i1": "同屏模式：根据屏幕内容实时变化灯光颜色",
    "features.modes.i2": "音乐模式：根据音频节奏动态调整灯效",
    "features.modes.i3": "动态灯效：幻彩、渐变、呼吸等",
    "features.modes.i4": "基础灯效：单色与静态效果",
    "features.performance.title": "稳定性与资源占用",
    "features.performance.desc": "软件在设计时充分考虑系统稳定性与性能表现。",
    "features.performance.b1": "在同时控制多个灯光设备的情况下，CPU 占用约为 1% 左右",
    "features.performance.b2": "适合长时间运行",
    "features.performance.b3": "不影响系统正常使用",

    "download.title": "下载 | AARGB",
    "download.description": "获取 AARGB 官方控制软件，并查看基本使用说明。",
    "download.heading": "下载",
    "download.lead": "本页面提供 AARGB 官方控制软件的下载与基本使用说明。",
    "download.contents.title": "下载内容",
    "download.contents.b1": "最新版本软件",
    "download.contents.b2": "版本号与更新时间",
    "download.contents.b3": "支持的操作系统说明（如 Windows）",
    "download.tips.title": "使用提示",
    "download.tips.text":
      "为确保设备正常工作，请使用 AARGB 官方控制软件进行配置与管理。",

    "about.title": "关于 | AARGB",
    "about.description": "了解 AARGB 的定位与我们在桌面氛围灯光控制系统上的投入。",
    "about.heading": "关于我们",
    "about.lead": "关于 AARGB",
    "about.p1":
      "AARGB 是一家专注于电脑周边氛围灯光控制系统的企业，集研发、生产与销售于一体。",
    "about.p2":
      "我们致力于通过稳定的软件与硬件方案，为用户提供可靠、易用的桌面灯光体验，让灯光成为桌面环境的一部分。",

    "placeholder.title": "占位页 | AARGB",
  },
  en: {
    "site.name": "AARGB",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.features": "Features",
    "nav.download": "Download",
    "nav.about": "About",
    "nav.language": "Language",

    "home.title": "AARGB | Desktop Ambient Lighting Control",
    "home.description":
      "Official website for the AARGB desktop ARGB ambient lighting system: product info, features, and official downloads.",
    "home.hero.title": "AARGB Desktop Ambient Lighting Control System",
    "home.hero.subtitle":
      "Manage your ARGB lighting devices in one place with the official control software.",
    "home.hero.cta.download": "Download software",
    "home.hero.cta.features": "Explore features",
    "home.overview.title": "Our products",
    "home.overview.easy.title": "Easy setup",
    "home.overview.easy.desc":
      "Connect the controller to your PC via USB, install the official software, and you’re ready to configure and use it.",
    "home.overview.devices.title": "Wide device support",
    "home.overview.devices.desc":
      "Supports various lighting devices, including monitor backlights, desk lamps, floor lamps, and other ARGB peripherals.",
    "home.overview.lowResource.title": "Low resource usage",
    "home.overview.lowResource.desc":
      "Designed to keep system resource usage low even when controlling multiple devices.",

    "products.title": "Products | AARGB",
    "products.description": "See what kinds of lighting devices AARGB supports.",
    "products.heading": "Products",
    "products.lead":
      "This page introduces the device categories supported by AARGB and the overall product form factor.",
    "products.deviceTypes.title": "Supported device types",
    "products.deviceTypes.monitorBacklight": "Monitor backlight",
    "products.deviceTypes.deskLamp": "Desk ambient lamp",
    "products.deviceTypes.floorLamp": "Floor lamp",
    "products.deviceTypes.peripherals": "Keyboard, mouse, mousepad",
    "products.deviceTypes.pcCase": "PC case fans and other ARGB devices",
    "products.note": "All devices are managed and configured through the official software.",

    "features.title": "Features | AARGB",
    "features.description": "Official control software, multi-device control, modes, and stability.",
    "features.heading": "Features",
    "features.software.title": "Official control software",
    "features.software.desc":
      "AARGB provides an official lighting control app for device management, effects configuration, and stable operation.",
    "features.software.b1": "Officially released and maintained",
    "features.software.b2": "No reliance on third-party lighting platforms",
    "features.software.b3": "Focused on lighting control features",
    "features.multidevice.title": "Unified multi-device control",
    "features.multidevice.desc":
      "Control multiple ARGB lighting devices with one app for unified configuration and synchronized effects.",
    "features.multidevice.i1": "Monitor backlight",
    "features.multidevice.i2": "Desk lamp / floor lamp",
    "features.multidevice.i3": "Keyboard, mouse, mousepad",
    "features.multidevice.i4": "PC case fans, etc.",
    "features.modes.title": "Lighting modes",
    "features.modes.desc": "Built-in modes for different use cases.",
    "features.modes.i1": "Screen sync: colors change with on-screen content",
    "features.modes.i2": "Music: effects react to audio rhythm",
    "features.modes.i3": "Dynamic effects: rainbow, gradient, breathing, etc.",
    "features.modes.i4": "Basic effects: solid color and static effects",
    "features.performance.title": "Stability and resource usage",
    "features.performance.desc": "Designed with system stability and performance in mind.",
    "features.performance.b1": "CPU usage is around 1% when controlling multiple devices",
    "features.performance.b2": "Suitable for long-running use",
    "features.performance.b3": "Does not interfere with normal system use",

    "download.title": "Download | AARGB",
    "download.description": "Get the official AARGB control software and basic usage notes.",
    "download.heading": "Download",
    "download.lead": "Official AARGB control software download and basic usage notes.",
    "download.contents.title": "What you’ll find here",
    "download.contents.b1": "Latest software release",
    "download.contents.b2": "Version number and update time",
    "download.contents.b3": "Supported operating systems (e.g., Windows)",
    "download.tips.title": "Usage tips",
    "download.tips.text":
      "To ensure your devices work properly, please configure and manage them using the official AARGB control software.",

    "about.title": "About | AARGB",
    "about.description": "Learn what AARGB focuses on and why we build stable lighting solutions.",
    "about.heading": "About us",
    "about.lead": "About AARGB",
    "about.p1":
      "AARGB is a company focused on ambient lighting control systems for PC peripherals, covering R&D, manufacturing, and sales.",
    "about.p2":
      "We aim to deliver reliable and easy-to-use desktop lighting experiences through stable software and hardware solutions—making light a natural part of your setup.",

    "placeholder.title": "Placeholder | AARGB",
  },
  ru: {
    "site.name": "AARGB",
    "nav.home": "Главная",
    "nav.products": "Продукты",
    "nav.features": "Особенности",
    "nav.download": "Скачать",
    "nav.about": "О нас",
    "nav.language": "Язык",

    "home.title": "AARGB | Управление атмосферной подсветкой",
    "home.description":
      "Официальный сайт AARGB: информация о продуктах, возможностях и официальные загрузки ПО для ARGB-подсветки.",
    "home.hero.title": "Система управления атмосферной подсветкой AARGB",
    "home.hero.subtitle":
      "Управляйте устройствами ARGB в одном месте с помощью официального программного обеспечения.",
    "home.hero.cta.download": "Скачать ПО",
    "home.hero.cta.features": "Особенности",
    "home.overview.title": "Наши продукты",
    "home.overview.easy.title": "Простая установка",
    "home.overview.easy.desc":
      "Подключите контроллер к ПК по USB, установите официальное ПО — и можно настраивать и пользоваться.",
    "home.overview.devices.title": "Широкая поддержка устройств",
    "home.overview.devices.desc":
      "Поддерживаются разные типы подсветки: подсветка монитора, настольные лампы, торшеры и другие ARGB-периферийные устройства.",
    "home.overview.lowResource.title": "Низкая нагрузка",
    "home.overview.lowResource.desc":
      "Низкое потребление ресурсов даже при управлении несколькими устройствами.",

    "products.title": "Продукты | AARGB",
    "products.description": "Какие типы устройств подсветки поддерживает AARGB.",
    "products.heading": "Продукты",
    "products.lead":
      "На этой странице описаны категории устройств подсветки, поддерживаемые AARGB, и общий формат продукта.",
    "products.deviceTypes.title": "Поддерживаемые типы устройств",
    "products.deviceTypes.monitorBacklight": "Подсветка монитора",
    "products.deviceTypes.deskLamp": "Настольная атмосферная лампа",
    "products.deviceTypes.floorLamp": "Торшер",
    "products.deviceTypes.peripherals": "Клавиатура, мышь, коврик для мыши",
    "products.deviceTypes.pcCase": "Вентиляторы корпуса и другие ARGB-устройства",
    "products.note": "Все устройства управляются и настраиваются через официальное ПО.",

    "features.title": "Особенности | AARGB",
    "features.description": "Официальное ПО, синхронизация нескольких устройств, режимы и стабильность.",
    "features.heading": "Особенности",
    "features.software.title": "Официальное ПО управления",
    "features.software.desc":
      "AARGB предоставляет официальное приложение для управления устройствами, настройки эффектов и стабильной работы системы.",
    "features.software.b1": "Официальный выпуск и поддержка",
    "features.software.b2": "Без зависимости от сторонних платформ подсветки",
    "features.software.b3": "Фокус на функциях управления подсветкой",
    "features.multidevice.title": "Единое управление несколькими устройствами",
    "features.multidevice.desc":
      "Одна программа позволяет управлять несколькими ARGB-устройствами, настраивать их единообразно и синхронизировать эффекты.",
    "features.multidevice.i1": "Подсветка монитора",
    "features.multidevice.i2": "Настольная лампа / торшер",
    "features.multidevice.i3": "Клавиатура, мышь, коврик",
    "features.multidevice.i4": "Вентиляторы корпуса и т. п.",
    "features.modes.title": "Режимы эффектов",
    "features.modes.desc": "Встроенные режимы для разных сценариев использования.",
    "features.modes.i1": "Синхронизация с экраном: цвет меняется по содержимому экрана",
    "features.modes.i2": "Музыка: эффекты реагируют на ритм аудио",
    "features.modes.i3": "Динамика: радуга, градиент, дыхание и т. п.",
    "features.modes.i4": "Базовые эффекты: однотонный и статический режим",
    "features.performance.title": "Стабильность и нагрузка",
    "features.performance.desc":
      "В проектировании уделено внимание стабильности системы и производительности.",
    "features.performance.b1":
      "При управлении несколькими устройствами загрузка CPU около 1%",
    "features.performance.b2": "Подходит для длительной работы",
    "features.performance.b3": "Не мешает обычной работе системы",

    "download.title": "Скачать | AARGB",
    "download.description": "Официальная загрузка ПО AARGB и базовые рекомендации по использованию.",
    "download.heading": "Скачать",
    "download.lead": "Официальная загрузка ПО AARGB и базовые рекомендации по использованию.",
    "download.contents.title": "Содержимое страницы",
    "download.contents.b1": "Последняя версия ПО",
    "download.contents.b2": "Номер версии и время обновления",
    "download.contents.b3": "Поддерживаемые ОС (например, Windows)",
    "download.tips.title": "Советы по использованию",
    "download.tips.text":
      "Чтобы устройства работали корректно, используйте официальное ПО AARGB для настройки и управления.",

    "about.title": "О нас | AARGB",
    "about.description": "Чем занимается AARGB и на чём мы фокусируемся.",
    "about.heading": "О нас",
    "about.lead": "О компании AARGB",
    "about.p1":
      "AARGB — компания, специализирующаяся на системах управления атмосферной подсветкой для ПК‑периферии, объединяющая разработку, производство и продажи.",
    "about.p2":
      "Мы стремимся обеспечивать надёжный и удобный опыт настольной подсветки благодаря стабильным программным и аппаратным решениям — чтобы свет стал частью вашего рабочего пространства.",

    "placeholder.title": "Страница-заглушка | AARGB",
  },
  tr: {
    "site.name": "AARGB",
    "nav.home": "Ana Sayfa",
    "nav.products": "Ürünler",
    "nav.features": "Özellikler",
    "nav.download": "İndir",
    "nav.about": "Hakkında",
    "nav.language": "Dil",

    "home.title": "AARGB | Masaüstü Ambiyans Aydınlatma Kontrolü",
    "home.description":
      "AARGB resmi sitesi: ürün bilgileri, özellikler ve ARGB ambiyans aydınlatma için resmi yazılım indirme sayfası.",
    "home.hero.title": "AARGB Masaüstü Ambiyans Aydınlatma Kontrol Sistemi",
    "home.hero.subtitle":
      "Resmi kontrol yazılımı ile ARGB aydınlatma cihazlarınızı tek yerden yönetin.",
    "home.hero.cta.download": "Yazılımı indir",
    "home.hero.cta.features": "Özellikleri keşfet",
    "home.overview.title": "Ürünlerimiz",
    "home.overview.easy.title": "Kolay kurulum",
    "home.overview.easy.desc":
      "Denetleyiciyi USB ile PC’ye bağlayın, resmi yazılımı yükleyin ve kullanıma başlayın.",
    "home.overview.devices.title": "Geniş cihaz desteği",
    "home.overview.devices.desc":
      "Monitör arka aydınlatması, masa lambası, yer lambası ve diğer ARGB çevre birimleri dâhil çeşitli cihazları destekler.",
    "home.overview.lowResource.title": "Düşük kaynak kullanımı",
    "home.overview.lowResource.desc":
      "Birden fazla cihaz kontrol edilirken bile sistem kaynak kullanımını düşük tutacak şekilde tasarlanmıştır.",

    "products.title": "Ürünler | AARGB",
    "products.description": "AARGB’nin desteklediği aydınlatma cihaz türlerini keşfedin.",
    "products.heading": "Ürünler",
    "products.lead":
      "Bu sayfa, AARGB’nin desteklediği aydınlatma cihaz kategorilerini ve ürün formunu tanıtır.",
    "products.deviceTypes.title": "Desteklenen cihaz türleri",
    "products.deviceTypes.monitorBacklight": "Monitör arka aydınlatması",
    "products.deviceTypes.deskLamp": "Masa ambiyans lambası",
    "products.deviceTypes.floorLamp": "Yer lambası",
    "products.deviceTypes.peripherals": "Klavye, mouse, mousepad",
    "products.deviceTypes.pcCase": "Kasa fanları ve diğer ARGB cihazlar",
    "products.note": "Tüm cihazlar resmi yazılım üzerinden tek merkezden yönetilir ve yapılandırılır.",

    "features.title": "Özellikler | AARGB",
    "features.description": "Resmi kontrol yazılımı, çoklu cihaz yönetimi, modlar ve kararlılık.",
    "features.heading": "Özellikler",
    "features.software.title": "Resmi kontrol yazılımı",
    "features.software.desc":
      "AARGB, cihaz yönetimi, efekt ayarları ve kararlı çalışma için resmi kontrol yazılımı sunar.",
    "features.software.b1": "Resmi olarak yayınlanır ve bakımı yapılır",
    "features.software.b2": "Üçüncü parti aydınlatma platformlarına bağlı değildir",
    "features.software.b3": "Aydınlatma kontrolüne odaklanır",
    "features.multidevice.title": "Birleşik çoklu cihaz kontrolü",
    "features.multidevice.desc":
      "Tek bir yazılım ile birden fazla ARGB cihazını yönetin; ayarları birleştirin ve efektleri senkronlayın.",
    "features.multidevice.i1": "Monitör arka aydınlatması",
    "features.multidevice.i2": "Masa lambası / yer lambası",
    "features.multidevice.i3": "Klavye, mouse, mousepad",
    "features.multidevice.i4": "Kasa fanları vb.",
    "features.modes.title": "Efekt modları",
    "features.modes.desc": "Farklı kullanım senaryoları için yerleşik modlar.",
    "features.modes.i1": "Ekran senkronu: renkler ekrandaki içeriğe göre değişir",
    "features.modes.i2": "Müzik: efektler ses ritmine tepki verir",
    "features.modes.i3": "Dinamik: gökkuşağı, geçiş, nefes alma vb.",
    "features.modes.i4": "Temel: tek renk ve statik efektler",
    "features.performance.title": "Kararlılık ve kaynak kullanımı",
    "features.performance.desc":
      "Sistem kararlılığı ve performans göz önünde bulundurularak tasarlanmıştır.",
    "features.performance.b1":
      "Birden fazla cihaz kontrolünde CPU kullanımı yaklaşık %1’dir",
    "features.performance.b2": "Uzun süreli çalışmaya uygundur",
    "features.performance.b3": "Sistemin normal kullanımını etkilemez",

    "download.title": "İndir | AARGB",
    "download.description": "AARGB resmi kontrol yazılımını edinin ve temel kullanım notlarını inceleyin.",
    "download.heading": "İndir",
    "download.lead":
      "AARGB resmi kontrol yazılımı indirme sayfası ve temel kullanım notları.",
    "download.contents.title": "İndirme içeriği",
    "download.contents.b1": "En güncel yazılım sürümü",
    "download.contents.b2": "Sürüm numarası ve güncelleme zamanı",
    "download.contents.b3": "Desteklenen işletim sistemleri (örn. Windows)",
    "download.tips.title": "Kullanım ipuçları",
    "download.tips.text":
      "Cihazların düzgün çalışması için lütfen resmi AARGB yazılımı ile yapılandırın ve yönetin.",

    "about.title": "Hakkında | AARGB",
    "about.description": "AARGB’nin odağı ve masaüstü aydınlatma yaklaşımı hakkında.",
    "about.heading": "Hakkımızda",
    "about.lead": "AARGB hakkında",
    "about.p1":
      "AARGB, PC çevre birimleri için ambiyans aydınlatma kontrol sistemlerine odaklanan; Ar-Ge, üretim ve satış süreçlerini bir araya getiren bir şirkettir.",
    "about.p2":
      "Kararlı yazılım ve donanım çözümleriyle güvenilir ve kolay bir masaüstü aydınlatma deneyimi sunmayı hedefliyoruz; ışığın kurulumunuzun doğal bir parçası olmasını sağlıyoruz.",

    "placeholder.title": "Yer tutucu | AARGB",
  },
} as const;


