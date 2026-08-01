import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Shallie Guide",
    svg: "main.svg?v=1#fa-faq",
    expand: true,
    children: [
      {
        name: "FAQ",
        url: "/shallie/faq"
      },
      {
        name: "Alchemy Skills",
        url: "/shallie/alchemy-skills"
      },
      {
        name: "Battle Skills",
        url: "/shallie/battle-skills"
      },
      {
        name: "Events",
        url: "/shallie/events"
      },
      {
        name: "Achievements",
        url: "/shallie/achievements"
      },
      {
        name: "Advanced Mechanics",
        url: "/shallie/advanced-mechanics"
      }
    ]
  },
  {
    name: "Chapters",
    svg: "main.svg?v=1#fa-book",
    children: [
      {
        name: "Chapter 1",
        url: "/shallie/chapter-1"
      },
      {
        name: "Chapter 2",
        url: "/shallie/chapter-2"
      },
      {
        name: "Chapter 3",
        url: "/shallie/chapter-3"
      },
      {
        name: "Chapter 4",
        url: "/shallie/chapter-4"
      },
      {
        name: "Chapter 5",
        url: "/shallie/chapter-5"
      },
      {
        name: "Chapter 6",
        url: "/shallie/chapter-6"
      },
      {
        name: "Chapter 7",
        url: "/shallie/chapter-7"
      },
      {
        name: "Chapter 8",
        url: "/shallie/chapter-8"
      },
      {
        name: "Chapter 9",
        url: "/shallie/chapter-9"
      },
      {
        name: "Chapter 10",
        url: "/shallie/chapter-10"
      }
    ]
  },
  {
    name: "Encyclopedia",
    svg: "shallie.svg?v=1#race-slag",
    expand: true,
    children: [
      {
        name: "Items",
        url: "/shallie/items/en"
      },
      {
        name: "Recipe Books",
        url: "/shallie/recipe-books/en"
      },
      {
        name: "Properties",
        url: "/shallie/properties/en"
      },
      {
        name: "Effects",
        url: "/shallie/effects/en"
      },
      {
        name: "Monsters",
        url: "/shallie/monsters/en"
      },
      {
        name: "Life Tasks",
        url: "/shallie/life-tasks"
      }
    ]
  },
  {
    name: "Tutorials",
    svg: "main.svg?v=1#ryza2-category-bombs",
    children: [
      {
        name: "Ultimate Build Discussion",
        url: "/shallie/ultimate-build-discussion"
      },
      {
        name: "Preparation and Farming",
        url: "/shallie/preparation-and-farming"
      },
      {
        name: "Ultimate Equipment",
        url: "/shallie/ultimate-equipment"
      },
      {
        name: "Ultimate Items",
        url: "/shallie/ultimate-items"
      }
    ]
  },
  {
    name: "Locations",
    svg: "main.svg?v=1#fa-location",
    children: [
      {
        name: "Baskes Region",
        url: "/shallie/locations/baskes-region/en"
      },
      {
        name: "Stellard Southern Archipelago",
        url: "/shallie/locations/stellard-southern-archipelago/en"
      },
      {
        name: "Dusk Sea",
        url: "/shallie/locations/dusk-sea/en"
      },
      {
        name: "Eastern Continent",
        url: "/shallie/locations/eastern-continent/en"
      },
      {
        name: "Unexplored Lands",
        url: "/shallie/locations/unexplored-lands/en"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    name: "アイテム",
    url: "/shallie/items/ja",
    svg: "shallie.svg?v=1#race-slag"
  },
  {
    name: "レシピブック",
    url: "/shallie/recipe-books/ja"
  },
  {
    name: "潜在能力",
    url: "/shallie/properties/ja"
  },
  {
    name: "効果",
    url: "/shallie/effects/ja"
  },
  {
    name: "魔物",
    url: "/shallie/monsters/ja"
  }
];

export const languages = {en, ja};
