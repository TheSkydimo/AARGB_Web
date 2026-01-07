export const defaultLang = "en" as const;

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
    "home.description":
      "AARGB 官方电脑周边氛围灯光控制系统官网：产品介绍、特性说明与官方软件下载。",
    "home.hero.title": "AARGB 桌面氛围灯光控制系统",
    "home.hero.subtitle":
      "通过官方控制软件，统一管理你的 ARGB 灯光设备",
    "home.hero.cta.download": "下载软件",
    "home.hero.cta.features": "了解特性",

    "home.download.heading": "AARGB 桌面氛围灯光控制系统",
    "home.download.lead":
      "AARGB 桌面氛围灯光控制系统是一款基于官方软件与控制器统一管理灯光效果的系统，支持同屏模式、音乐模式、动态灯效与单色模式等。",
    "home.download.versionLabel": "版本：",
    "home.download.cta": "立即下载",
    "home.download.more": "更多版本",
    "home.download.menu.aria": "更多下载选项",
    "home.download.menu.primary": "直接下载",
    "home.download.menu.more": "前往下载页",

    "home.download.cards.winClassic.title": "Windows 经典版",
    "home.download.cards.winClassic.os": "适配 Win8+。",
    "home.download.cards.winClassic.b1": "即装即用，界面简洁直观。",
    "home.download.cards.winClassic.b2": "基础布局与控制。",
    "home.download.cards.winClassic.b3": "常用屏幕同步、音乐同步。",
    "home.download.cards.winClassic.b4": "多种日常氛围灯光效果。",

    "home.download.cards.winRecommended.title": "Windows 推荐版",
    "home.download.cards.winRecommended.badge": "NEW",
    "home.download.cards.winRecommended.os": "适配 Win10+。",
    "home.download.cards.winRecommended.b1": "一站式跨品牌灯光控制。",
    "home.download.cards.winRecommended.b2": "数千设备统一管理，复杂场景一键搞定。",
    "home.download.cards.winRecommended.b3": "像素级灯珠布局映射，高精度屏幕同步。",
    "home.download.cards.winRecommended.b4": "AI 智能生成专属灯效。",
    "home.download.cards.winRecommended.b5": "功能持续更新，生态不断扩展。",
    "home.download.cards.winRecommended.b6": "部分功能基于开源项目 OpenRGB（GPL-2.0）构建。",

    "home.download.cards.macos.title": "MacOS 版",
    "home.download.cards.macos.os": "适配 MacOS 10.13 及以上。",
    "home.download.cards.macos.b1": "经典稳定版本。",
    "home.download.cards.macos.b2": "简洁易用，与 MacOS 体验一致。",
    "home.download.cards.macos.b3": "适用于日常桌面氛围灯光。",
    "common.highlights.easy.title": "安装简单",
    "common.highlights.easy.desc":
      "通过 USB 将控制器连接至电脑，安装官方控制软件后即可完成配置与使用。",
    "common.highlights.devices.title": "设备种类齐全",
    "common.highlights.devices.desc":
      "支持控制多种不同类型的灯光设备，包括屏幕背光灯、桌面灯、落地灯及其他 ARGB 外设。",
    "common.highlights.lowResource.title": "占用资源低",
    "common.highlights.lowResource.desc":
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
    "products.cards.monitorBacklight.title": "屏幕背光灯",
    "products.cards.monitorBacklight.desc": "适用于显示器背部环境光，支持同屏/音乐/动态等灯效模式。",
    "products.cards.deskLamp.title": "桌面氛围灯",
    "products.cards.deskLamp.desc": "桌面范围补光与氛围灯效，适合游戏、观影与日常使用。",
    "products.cards.floorLamp.title": "落地灯",
    "products.cards.floorLamp.desc": "更大范围的环境光覆盖，适合房间角落或桌边布置。",
    "products.cards.peripherals.title": "键鼠与外设",
    "products.cards.peripherals.desc": "支持键盘、鼠标、鼠标垫等外设灯效的统一管理与同步。",
    "products.cards.pcCase.title": "机箱 ARGB 设备",
    "products.cards.pcCase.desc": "机箱风扇、灯带等 ARGB 设备的统一控制与效果联动。",
    "products.note": "所有设备均通过官方软件进行统一管理与配置。",

    "features.title": "特性 | AARGB",
    "features.description": "了解 AARGB 官方控制软件与多设备灯效能力。",
    "features.heading": "特性",
    "features.highlights.title": "核心特性概览",
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
    "features.performance.b1": "在同时控制多个灯光设备的情况下，CPU 占用较低",
    "features.performance.b2": "适合长时间运行",
    "features.performance.b3": "不影响系统正常使用",

    "download.title": "下载 | AARGB",
    "download.description": "获取 AARGB 官方控制软件，并查看基本使用说明。",
    "download.heading": "下载",
    "download.lead": "本页面提供 AARGB 官方控制软件的下载与基本使用说明。",
    "download.cta.new": "下载新软件",
    "download.cta.legacy": "下载旧软件",
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
      "Official website for the AARGB PC ambient lighting control system: product info, features, and official downloads.",
    "home.hero.title": "AARGB Desktop Ambient Lighting Control System",
    "home.hero.subtitle":
      "A PC ambient lighting control system managed by the official app and controller, with modes like screen sync, music reactive, dynamic effects, and solid color.",
    "home.hero.cta.download": "Download software",
    "home.hero.cta.features": "Explore features",

    "home.download.heading": "AARGB Desktop Ambient Lighting Control System",
    "home.download.lead":
      "AARGB Desktop Ambient Lighting Control System is a system that manages the lighting effects of your ARGB devices through the official control software, with modes like screen sync, music reactive, dynamic effects, and solid color.",
    "home.download.versionLabel": "Version:",
    "home.download.cta": "Download now",
    "home.download.more": "More versions",
    "home.download.menu.aria": "More download options",
    "home.download.menu.primary": "Direct download",
    "home.download.menu.more": "Go to download page",

    "home.download.cards.winClassic.title": "Windows Classic",
    "home.download.cards.winClassic.os": "For Windows 8+.",
    "home.download.cards.winClassic.b1": "Install and use right away. Clean, simple UI.",
    "home.download.cards.winClassic.b2": "Basic layout and control.",
    "home.download.cards.winClassic.b3": "Common screen sync and music sync.",
    "home.download.cards.winClassic.b4": "Everyday ambience lighting effects.",

    "home.download.cards.winRecommended.title": "Windows Recommended",
    "home.download.cards.winRecommended.badge": "NEW",
    "home.download.cards.winRecommended.os": "For Windows 10+.",
    "home.download.cards.winRecommended.b1": "One-stop cross-brand lighting control.",
    "home.download.cards.winRecommended.b2": "Unified management for thousands of devices.",
    "home.download.cards.winRecommended.b3": "Pixel-level LED layout mapping for high-precision screen sync.",
    "home.download.cards.winRecommended.b4": "AI generates personalized lighting effects.",
    "home.download.cards.winRecommended.b5": "Continuously updated and expanding ecosystem.",
    "home.download.cards.winRecommended.b6": "Some features are built on OpenRGB (GPL-2.0).",

    "home.download.cards.macos.title": "MacOS",
    "home.download.cards.macos.os": "For macOS 10.13+.",
    "home.download.cards.macos.b1": "Classic stable release.",
    "home.download.cards.macos.b2": "Simple and consistent with macOS.",
    "home.download.cards.macos.b3": "Great for everyday ambience lighting.",
    "common.highlights.easy.title": "Easy setup",
    "common.highlights.easy.desc":
      "Connect the controller to your PC via USB, install the official software, and you’re ready to configure and use it.",
    "common.highlights.devices.title": "Broad device support",
    "common.highlights.devices.desc":
      "Supports various lighting devices, including monitor backlights, desk lamps, floor lamps, and other ARGB peripherals.",
    "common.highlights.lowResource.title": "Low resource usage",
    "common.highlights.lowResource.desc":
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
    "products.cards.monitorBacklight.title": "Monitor backlight",
    "products.cards.monitorBacklight.desc":
      "Ambient backlighting behind your display, with screen sync, music reactive, and dynamic modes.",
    "products.cards.deskLamp.title": "Desk ambient lamp",
    "products.cards.deskLamp.desc":
      "A compact desk light for comfortable ambience while gaming, watching, or working.",
    "products.cards.floorLamp.title": "Floor lamp",
    "products.cards.floorLamp.desc":
      "Wider ambient coverage for rooms—great for corners or beside your desk.",
    "products.cards.peripherals.title": "Peripherals",
    "products.cards.peripherals.desc":
      "Unified control for keyboards, mice, and mousepads with synchronized effects.",
    "products.cards.pcCase.title": "PC case ARGB devices",
    "products.cards.pcCase.desc":
      "Centralized control for case fans, light strips, and other ARGB hardware.",
    "products.note": "All devices are managed and configured through the official software.",

    "features.title": "Features | AARGB",
    "features.description": "Official control software, multi-device control, modes, and stability.",
    "features.heading": "Features",
    "features.highlights.title": "Key feature highlights",
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
    "features.performance.b1": "Low CPU usage even when controlling multiple devices",
    "features.performance.b2": "Suitable for long-running use",
    "features.performance.b3": "Does not interfere with normal system use",

    "download.title": "Download | AARGB",
    "download.description": "Get the official AARGB control software and basic usage notes.",
    "download.heading": "Download",
    "download.lead": "Official AARGB control software download and basic usage notes.",
    "download.cta.new": "Download (new)",
    "download.cta.legacy": "Download (legacy)",
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
      "Официальный сайт AARGB: описание продукта, возможности и официальная загрузка ПО для атмосферной подсветки ПК.",
    "home.hero.title": "Система управления атмосферной подсветкой AARGB",
    "home.hero.subtitle":
      "Система управления атмосферной подсветкой ПК: официальный софт и контроллер для единого управления эффектами, например синхронизация с экраном, музыка, динамические эффекты и однотонный режим.",
    "home.hero.cta.download": "Скачать ПО",
    "home.hero.cta.features": "Особенности",

    "home.download.heading": "Скачать ПО",
    "home.download.lead":
      "Выберите версию официального ПО AARGB для управления ARGB‑подсветкой: синхронизация с экраном, музыка, динамические эффекты и статический цвет.",
    "home.download.versionLabel": "Версия:",
    "home.download.cta": "Скачать",
    "home.download.more": "Другие версии",
    "home.download.menu.aria": "Другие варианты загрузки",
    "home.download.menu.primary": "Прямая загрузка",
    "home.download.menu.more": "Перейти на страницу загрузок",

    "home.download.cards.winClassic.title": "Windows Classic",
    "home.download.cards.winClassic.os": "Для Windows 8+.",
    "home.download.cards.winClassic.b1": "Установите и пользуйтесь сразу. Простой и понятный интерфейс.",
    "home.download.cards.winClassic.b2": "Базовая компоновка и управление.",
    "home.download.cards.winClassic.b3": "Синхронизация с экраном и музыкой.",
    "home.download.cards.winClassic.b4": "Повседневные атмосферные эффекты подсветки.",

    "home.download.cards.winRecommended.title": "Windows Recommended",
    "home.download.cards.winRecommended.badge": "NEW",
    "home.download.cards.winRecommended.os": "Для Windows 10+.",
    "home.download.cards.winRecommended.b1": "Единое управление подсветкой разных брендов.",
    "home.download.cards.winRecommended.b2": "Управление тысячами устройств в одном месте.",
    "home.download.cards.winRecommended.b3":
      "Пиксельное сопоставление раскладки светодиодов для высокоточной синхронизации с экраном.",
    "home.download.cards.winRecommended.b4": "ИИ создаёт персонализированные эффекты подсветки.",
    "home.download.cards.winRecommended.b5": "Постоянные обновления и расширяющаяся экосистема.",
    "home.download.cards.winRecommended.b6": "Часть функций построена на OpenRGB (GPL-2.0).",

    "home.download.cards.macos.title": "macOS",
    "home.download.cards.macos.os": "Для macOS 10.13+.",
    "home.download.cards.macos.b1": "Классический стабильный релиз.",
    "home.download.cards.macos.b2": "Просто и в стиле macOS.",
    "home.download.cards.macos.b3": "Отлично подходит для повседневного атмосферного освещения.",
    "common.highlights.easy.title": "Простая установка",
    "common.highlights.easy.desc":
      "Подключите контроллер к ПК по USB, установите официальное ПО — и можно настраивать и пользоваться.",
    "common.highlights.devices.title": "Широкая поддержка устройств",
    "common.highlights.devices.desc":
      "Поддерживаются разные типы подсветки: подсветка монитора, настольные лампы, торшеры и другие ARGB-периферийные устройства.",
    "common.highlights.lowResource.title": "Низкая нагрузка",
    "common.highlights.lowResource.desc":
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
    "products.cards.monitorBacklight.title": "Подсветка монитора",
    "products.cards.monitorBacklight.desc":
      "Атмосферная подсветка за монитором с режимами синхронизации с экраном, музыкой и динамикой.",
    "products.cards.deskLamp.title": "Настольная лампа",
    "products.cards.deskLamp.desc":
      "Компактное атмосферное освещение для игр, просмотра и повседневной работы.",
    "products.cards.floorLamp.title": "Торшер",
    "products.cards.floorLamp.desc":
      "Более широкое покрытие света — удобно для углов комнаты или рядом со столом.",
    "products.cards.peripherals.title": "Периферия",
    "products.cards.peripherals.desc":
      "Единое управление подсветкой клавиатуры, мыши и коврика с синхронизацией эффектов.",
    "products.cards.pcCase.title": "ARGB устройства в корпусе",
    "products.cards.pcCase.desc":
      "Централизованное управление вентиляторами, лентами и другим ARGB‑железом.",
    "products.note": "Все устройства управляются и настраиваются через официальное ПО.",

    "features.title": "Особенности | AARGB",
    "features.description": "Официальное ПО, синхронизация нескольких устройств, режимы и стабильность.",
    "features.heading": "Особенности",
    "features.highlights.title": "Ключевые особенности — кратко",
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
    "features.performance.b1": "Низкая нагрузка на CPU даже при управлении несколькими устройствами",
    "features.performance.b2": "Подходит для длительной работы",
    "features.performance.b3": "Не мешает обычной работе системы",

    "download.title": "Скачать | AARGB",
    "download.description": "Официальная загрузка ПО AARGB и базовые рекомендации по использованию.",
    "download.heading": "Скачать",
    "download.lead": "Официальная загрузка ПО AARGB и базовые рекомендации по использованию.",
    "download.cta.new": "Скачать (новая версия)",
    "download.cta.legacy": "Скачать (старая версия)",
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
      "AARGB resmi sitesi: ürün bilgileri, özellikler ve PC ambiyans aydınlatma kontrol yazılımı için resmi indirme.",
    "home.hero.title": "AARGB Masaüstü Ambiyans Aydınlatma Kontrol Sistemi",
    "home.hero.subtitle":
      "Resmi yazılım ve denetleyici ile PC ambiyans aydınlatma efektlerini tek yerden yönetin; ör. ekran senkronu, müzik, dinamik efektler ve tek renk modu.",
    "home.hero.cta.download": "Yazılımı indir",
    "home.hero.cta.features": "Özellikleri keşfet",

    "home.download.heading": "Yazılımı indir",
    "home.download.lead":
      "Resmi AARGB kontrol yazılımının sürümünü seçin: ekran senkronu, müzik tepkili, dinamik efektler ve tek renk modu.",
    "home.download.versionLabel": "Sürüm:",
    "home.download.cta": "Şimdi indir",
    "home.download.more": "Diğer sürümler",
    "home.download.menu.aria": "Diğer indirme seçenekleri",
    "home.download.menu.primary": "Doğrudan indir",
    "home.download.menu.more": "İndirme sayfasına git",

    "home.download.cards.winClassic.title": "Windows Classic",
    "home.download.cards.winClassic.os": "Windows 8+ için.",
    "home.download.cards.winClassic.b1": "Hemen kur ve kullan. Temiz, basit arayüz.",
    "home.download.cards.winClassic.b2": "Temel düzen ve kontrol.",
    "home.download.cards.winClassic.b3": "Ekran senkronu ve müzik senkronu.",
    "home.download.cards.winClassic.b4": "Günlük ambiyans aydınlatma efektleri.",

    "home.download.cards.winRecommended.title": "Windows Recommended",
    "home.download.cards.winRecommended.badge": "NEW",
    "home.download.cards.winRecommended.os": "Windows 10+ için.",
    "home.download.cards.winRecommended.b1": "Markalar arası tek noktadan aydınlatma kontrolü.",
    "home.download.cards.winRecommended.b2": "Binlerce cihaz için birleşik yönetim.",
    "home.download.cards.winRecommended.b3":
      "Yüksek hassasiyetli ekran senkronu için piksel düzeyi LED yerleşim eşlemesi.",
    "home.download.cards.winRecommended.b4": "AI kişiselleştirilmiş aydınlatma efektleri üretir.",
    "home.download.cards.winRecommended.b5": "Sürekli güncellenen ve büyüyen ekosistem.",
    "home.download.cards.winRecommended.b6": "Bazı özellikler OpenRGB (GPL-2.0) üzerine kuruludur.",

    "home.download.cards.macos.title": "macOS",
    "home.download.cards.macos.os": "macOS 10.13+ için.",
    "home.download.cards.macos.b1": "Klasik, kararlı sürüm.",
    "home.download.cards.macos.b2": "Basit ve macOS ile uyumlu.",
    "home.download.cards.macos.b3": "Günlük ambiyans aydınlatması için ideal.",
    "common.highlights.easy.title": "Kolay kurulum",
    "common.highlights.easy.desc":
      "Denetleyiciyi USB ile PC’ye bağlayın, resmi yazılımı yükleyin ve kullanıma başlayın.",
    "common.highlights.devices.title": "Geniş cihaz desteği",
    "common.highlights.devices.desc":
      "Monitör arka aydınlatması, masa lambası, yer lambası ve diğer ARGB çevre birimleri dâhil çeşitli cihazları destekler.",
    "common.highlights.lowResource.title": "Düşük kaynak kullanımı",
    "common.highlights.lowResource.desc":
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
    "products.cards.monitorBacklight.title": "Monitör arka aydınlatması",
    "products.cards.monitorBacklight.desc":
      "Ekran arkası ambiyans ışığı; ekran senkronu, müzik tepkili ve dinamik modlar.",
    "products.cards.deskLamp.title": "Masa ambiyans lambası",
    "products.cards.deskLamp.desc":
      "Oyun, izleme ve çalışma için kompakt masa üstü ambiyans aydınlatması.",
    "products.cards.floorLamp.title": "Yer lambası",
    "products.cards.floorLamp.desc":
      "Oda genelinde daha geniş ambiyans kapsaması; köşeler ve masa yanı için ideal.",
    "products.cards.peripherals.title": "Çevre birimleri",
    "products.cards.peripherals.desc":
      "Klavye, mouse ve mousepad için birleşik kontrol ve senkron efektler.",
    "products.cards.pcCase.title": "Kasa ARGB cihazları",
    "products.cards.pcCase.desc":
      "Kasa fanları, LED şeritler ve diğer ARGB donanımlar için merkezi kontrol.",
    "products.note": "Tüm cihazlar resmi yazılım üzerinden tek merkezden yönetilir ve yapılandırılır.",

    "features.title": "Özellikler | AARGB",
    "features.description": "Resmi kontrol yazılımı, çoklu cihaz yönetimi, modlar ve kararlılık.",
    "features.heading": "Özellikler",
    "features.highlights.title": "Özellik özetleri",
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
    "features.performance.b1": "Birden fazla cihaz kontrolünde bile CPU kullanımı düşüktür",
    "features.performance.b2": "Uzun süreli çalışmaya uygundur",
    "features.performance.b3": "Sistemin normal kullanımını etkilemez",

    "download.title": "İndir | AARGB",
    "download.description": "AARGB resmi kontrol yazılımını edinin ve temel kullanım notlarını inceleyin.",
    "download.heading": "İndir",
    "download.lead":
      "AARGB resmi kontrol yazılımı indirme sayfası ve temel kullanım notları.",
    "download.cta.new": "İndir (yeni)",
    "download.cta.legacy": "İndir (eski)",
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

  },
} as const;


