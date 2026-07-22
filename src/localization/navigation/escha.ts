import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Escha & Logy Guide",
    svg: "main.svg?v=1#fa-faq",
    expand: true,
    children: [
      {
        name: "FAQ",
        url: "/escha/faq"
      },
      {
        name: "Lithograph Locations",
        url: "/escha/lithograph-locations"
      },
      {
        name: "Documents",
        url: "/escha/documents"
      },
      {
        name: "Achievements",
        url: "/escha/achievements"
      },
      {
        name: "Beat Final Boss",
        url: "/escha/beating-the-final-boss"
      },
      {
        name: "Ultimate Builds",
        url: "/escha/ultimate-item-guide"
      },
      {
        name: "Money",
        url: "/escha/money"
      }
    ]
  },
  {
    name: "Assignments",
    svg: "main.svg?v=1#fa-book",
    children: [
      {
        name: "Assignment 1",
        url: "/escha/assignment-1"
      },
      {
        name: "Assignment 2",
        url: "/escha/assignment-2"
      },
      {
        name: "Assignment 3",
        url: "/escha/assignment-3"
      },
      {
        name: "Assignment 4",
        url: "/escha/assignment-4"
      },
      {
        name: "Assignment 5",
        url: "/escha/assignment-5"
      },
      {
        name: "Assignment 6",
        url: "/escha/assignment-6"
      },
      {
        name: "Assignment 7",
        url: "/escha/assignment-7"
      },
      {
        name: "Assignment 8",
        url: "/escha/assignment-8"
      },
      {
        name: "Assignment 9",
        url: "/escha/assignment-9"
      },
      {
        name: "Endgame",
        url: "/escha/end-game"
      }
    ]
  },
  {
    name: "Encyclopedia",
    svg: "main.svg?v=1#ryza2-material",
    expand: true,
    children: [
      {
        name: "Items",
        url: "/escha/items/en"
      },
      {
        name: "Recipe Books",
        url: "/escha/recipe-books/en"
      },
      {
        name: "Properties",
        url: "/escha/properties/en"
      },
      {
        name: "Effects",
        url: "/escha/effects/en"
      },
      {
        name: "Monsters",
        url: "/escha/monsters/en"
      }
    ]
  },
  {
    name: "Locations",
    svg: "main.svg?v=1#fa-location",
    children: [
      {
        name: "Twilight Forest",
        url: "/escha/locations/twilight-forest/en"
      },
      {
        name: "Old Highway",
        url: "/escha/locations/old-highway/en"
      },
      {
        name: "Southern Ruins",
        url: "/escha/locations/southern-ruins/en"
      },
      {
        name: "Upland Forest",
        url: "/escha/locations/upland-forest/en"
      },
      {
        name: "Withering Plains",
        url: "/escha/locations/withering-plains/en"
      },
      {
        name: "Abandoned River",
        url: "/escha/locations/abandoned-river/en"
      },
      {
        name: "Slag Graveyard",
        url: "/escha/locations/slag-graveyard/en"
      },
      {
        name: "Searing Wastes",
        url: "/escha/locations/searing-wastes/en"
      },
      {
        name: "Dragon's Nest",
        url: "/escha/locations/dragon-s-nest/en"
      },
      {
        name: "Lab of Eternity",
        url: "/escha/locations/lab-of-eternity/en"
      },
      {
        name: "Ends of the Earth",
        url: "/escha/locations/ends-of-the-earth/en"
      },
      {
        name: "Fallen Ruins",
        url: "/escha/locations/fallen-ruins/en"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    name: "アイテム",
    url: "/escha/items/ja",
    svg: "A15.svg?v=1#category-book"
  },
  {
    name: "レシピブック",
    url: "/escha/recipe-books/ja"
  },
  {
    name: "潜在能力",
    url: "/escha/properties/ja"
  },
  {
    name: "効果",
    url: "/escha/effects/ja"
  },
  {
    name: "魔物",
    url: "/escha/monsters/ja"
  }
];

export const languages = {en, ja};
