import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Ryza 3",
    svg: "main.svg?v=1#fa-faq",
    expand: true,
    children: [
      {
        name: "Infinite Gems",
        url: "/ryza3/how-to-get-infinite-gems"
      },
      {
        name: "SP Guide",
        url: "/ryza3/sp-guide-unlock-the-whole-skill-tree-in-30-minutes"
      },
      {
        name: "Role Guide",
        url: "/ryza3/how-to-get-the-being-versatile-achievement"
      },
      {
        name: "Traveler's Memoirs",
        url: "/ryza3/traveler-s-memoir-guide-rumor-chasing-adventurer-achievement"
      },
      {
        name: "Ultimate Swordsmanship Achievement",
        url: "/ryza3/how-to-get-the-ultimate-swordsmanship-achievement"
      }
    ]
  }
];

export const languages = {en};
