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
    name: "Prologue",
    items: [
      {
        name: "Install",
        href: "/installation",
      },
      {
        name: "Contributing Guide",
        href: "/contributing-guide",
      },
    ],
  },
  {
    name: "HTTP",
    items: [
      {
        name: "Routing",
        href: "/routing",
      },
      {
        name: "Middleware",
        href: "/middleware",
      },
      {
        name: "Handlers",
        href: "/handlers",
      },
      {
        name: "Form Validations",
        href: "/form-validations",
      },
    ],
  },
  {
    name: "Models & Migrations",
    items: [
      {
        name: 'Migrations',
        href: "/migrations",
      },
      {
        name: 'Models',
        href: "/models",
      },
    ],
  },
  {
    name: 'Lucid "RUN"',
    items: [
      {
        name: "Console Commands",
        href: "/console-commands",
      },
    ]
  }
]
