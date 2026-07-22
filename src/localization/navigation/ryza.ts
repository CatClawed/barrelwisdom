import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Ryza Guide",
    svg: "main.svg?v=1#fa-faq",
    expand: true,
    children: [
      {
        name: "FAQ",
        url: "/ryza/faq"
      },
      {
        name: "Synthesis Basics",
        url: "/ryza/synthesis-basics"
      },
      {
        name: "Battle Basics",
        url: "/ryza/battle-system-basics"
      },
      {
        name: "Boss Help",
        url: "/ryza/boss-help"
      },
      {
        name: "Ultimate Builds",
        url: "/ryza/ultimate-builds"
      },
      {
        name: "Gem Farming",
        url: "/ryza/gem-farming"
      },
      {
        name: "Quests",
        url: "/ryza/quests"
      },
      {
        name: "Puni Raising",
        url: "/ryza/puni-raising"
      },
      {
        name: "Seeds",
        url: "/ryza/seeds"
      }
    ]
  }
];

export const languages = {en};
