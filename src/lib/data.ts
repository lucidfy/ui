export interface Theme {
  name: string,
  id: string,
}

export const themes: Theme[] = [
  {
    name: "🌝  light",
    id: "light",
  },
  {
    name: "🌚  dark",
    id: "dark",
  },
  {
    name: "🧁  cupcake",
    id: "cupcake",
  },
  {
    name: "🐝  bumblebee",
    id: "bumblebee",
  },
  {
    name: "✳️  Emerald",
    id: "emerald",
  },
  {
    name: "🏢  Corporate",
    id: "corporate",
  },
  {
    name: "🌃  synthwave",
    id: "synthwave",
  },
  {
    name: "👴  retro",
    id: "retro",
  },
  {
    name: "🤖  cyberpunk",
    id: "cyberpunk",
  },
  {
    name: "🌸  valentine",
    id: "valentine",
  },
  {
    name: "🎃  halloween",
    id: "halloween",
  },
  {
    name: "🌷  garden",
    id: "garden",
  },
  {
    name: "🌲  forest",
    id: "forest",
  },
  {
    name: "🐟  aqua",
    id: "aqua",
  },
  {
    name: "👓  lofi",
    id: "lofi",
  },
  {
    name: "🖍  pastel",
    id: "pastel",
  },
  {
    name: "🧚‍♀️  fantasy",
    id: "fantasy",
  },
  {
    name: "📝  Wireframe",
    id: "wireframe",
  },
  {
    name: "🏴  black",
    id: "black",
  },
  {
    name: "💎  luxury",
    id: "luxury",
  },
  {
    name: "🧛‍♂️  dracula",
    id: "dracula",
  },
  {
    name: "🖨  CMYK",
    id: "cmyk",
  },
  {
    name: "🍁  Autumn",
    id: "autumn",
  },
  {
    name: "💼  Business",
    id: "business",
  },
  {
    name: "💊  Acid",
    id: "acid",
  },
  {
    name: "🍋  Lemonade",
    id: "lemonade",
  },
  {
    name: "🌙  Night",
    id: "night",
  },
  {
    name: "☕️  Coffee",
    id: "coffee",
  },
  {
    name: "❄️  Winter",
    id: "winter",
  },
]

export interface Page {
  showLine?: boolean;
  name?: string;
  items: Item[];
}

export interface Item {
  name: string;
  href: string;
  icon?: string;
  badge?: string;
  hidden?: boolean;
  highlightAnotherItem?: string;
}

export const pages : Page[] = [
  {
    showLine: false,
    name: 'Prologue',
    items: [
      {
        name: 'Install',
        href: '/installation',
      },
      {
        name: 'Contributing Guide',
        href: '/contributing-guide',
      },
    ],
  },
  {
    name: 'HTTP',
    items: [
      {
        name: 'Routing',
        href: '/routing',
      },
      {
        name: 'Middleware',
        href: '/middleware',
      },
      {
        name: 'Handlers',
        href: '/handlers',
      },
      {
        name: 'Form Validations',
        href: '/form-validations',
      },
    ],
  },
  {
    name: 'Models & Migrations',
    items: [
      {
        name: 'Migrations',
        href: '/migrations',
      },
      {
        name: 'Models',
        href: '/models',
      },
    ],
  },
  {
    name: 'Lucid "RUN"',
    items: [
      {
        name: 'Console Commands',
        href: '/console-commands',
      },
    ]
  },
  {
    name: 'Core',
    items: [
      {
        name: 'Engine Contract',
        href: '/core-engine-contract',
      },
      {
        name: 'Routing Resource',
        href: '/core-routing-resource',
      },
      {
        name: 'Validator',
        href: '/core-validator',
      }
    ]
  }
]
