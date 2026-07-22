import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Blue Reflection",
    svg: "main.svg?v=1#fa-school",
    expand: true,
    children: [
      {
        name: "Fragment Episodes",
        url: "/bluereflection/fragment-episodes"
      },
      {
        name: "Dark Cave",
        url: "/bluereflection/dark-cave"
      },
      {
        name: "Table Chat",
        url: "/bluereflection/table-chat-topics"
      },
      {
        name: "Farming Materials",
        url: "/bluereflection/farming-materials"
      },
      {
        name: "Items",
        url: "/bluereflection/items/en"
      },
      {
        name: "Demons",
        url: "/bluereflection/demons/en"
      },
      {
        name: "Fragment Effects",
        url: "/bluereflection/fragment-effects/en"
      },
      {
        name: "Missions",
        url: "/bluereflection/missions/en"
      },
      {
        name: "Skills",
        url: "/bluereflection/skills/en"
      }
    ]
  }
];

export const languages = {en};
