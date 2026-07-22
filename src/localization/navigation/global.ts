import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Donate",
    url: "/blog/donate",
    svg: "main.svg?v=1#fa-donate"
  },
  {
    name: "Discord",
    url: "https://discord.gg/utRynRKxwh",
    svg: "main.svg?v=1#fa-discord",
    external: true
  },
  {
    name: "Legal",
    url: "/blog/legal",
    svg: "main.svg?v=1#fa-legal"
  },
  {
    name: "Source",
    url: "https://github.com/CatClawed/barrelwisdom",
    svg: "main.svg?v=1#fa-github",
    external: true
  }
];

export const languages = {en};
