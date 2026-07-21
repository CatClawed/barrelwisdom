import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    "title": true,
    "name": "Escha & Logy Guide",
    "svg": "main.svg?v=1#fa-faq",
    "expand": true,
    "children": [
      {
        "name": "FAQ",
        "url": "/escha/faq"
      },
      {
        "name": "Lithograph Locations",
        "url": "/escha/lithograph-locations"
      },
      {
        "name": "Documents",
        "url": "/escha/documents"
      },
      {
        "name": "Achievements",
        "url": "/escha/achievements"
      },
      {
        "name": "Beat Final Boss",
        "url": "/escha/beating-the-final-boss"
      },
      {
        "name": "Ultimate Builds",
        "url": "/escha/ultimate-item-guide"
      },
      {
        "name": "Money",
        "url": "/escha/money"
      }
    ]
  },
  {
    "name": "Assignments",
    "svg": "main.svg?v=1#fa-book",
    "children": [
      {
        "name": "Assignment 1",
        "url": "/escha/assignment-1"
      },
      {
        "name": "Assignment 2",
        "url": "/escha/assignment-2"
      },
      {
        "name": "Assignment 3",
        "url": "/escha/assignment-3"
      },
      {
        "name": "Assignment 4",
        "url": "/escha/assignment-4"
      },
      {
        "name": "Assignment 5",
        "url": "/escha/assignment-5"
      },
      {
        "name": "Assignment 6",
        "url": "/escha/assignment-6"
      },
      {
        "name": "Assignment 7",
        "url": "/escha/assignment-7"
      },
      {
        "name": "Assignment 8",
        "url": "/escha/assignment-8"
      },
      {
        "name": "Assignment 9",
        "url": "/escha/assignment-9"
      },
      {
        "name": "Endgame",
        "url": "/escha/end-game"
      }
    ]
  },
  {
    "name": "Encyclopedia",
    "svg": "main.svg?v=1#ryza2-material",
    "expand": true,
    "children": [
      {
        "name": "Items",
        "url": "/escha/items"
      },
      {
        "name": "Recipe Books",
        "url": "/escha/recipe-books"
      },
      {
        "name": "Properties",
        "url": "/escha/properties"
      },
      {
        "name": "Effects",
        "url": "/escha/effects"
      },
      {
        "name": "Monsters",
        "url": "/escha/monsters"
      }
    ]
  },
  {
    "name": "Locations",
    "svg": "main.svg?v=1#fa-location",
    "children": [
      {
        "name": "Twilight Forest",
        "url": "/escha/locations/twilight-forest"
      },
      {
        "name": "Old Highway",
        "url": "/escha/locations/old-highway"
      },
      {
        "name": "Southern Ruins",
        "url": "/escha/locations/southern-ruins"
      },
      {
        "name": "Upland Forest",
        "url": "/escha/locations/upland-forest"
      },
      {
        "name": "Withering Plains",
        "url": "/escha/locations/withering-plains"
      },
      {
        "name": "Abandoned River",
        "url": "/escha/locations/abandoned-river"
      },
      {
        "name": "Slag Graveyard",
        "url": "/escha/locations/slag-graveyard"
      },
      {
        "name": "Searing Wastes",
        "url": "/escha/locations/searing-wastes"
      },
      {
        "name": "Dragon's Nest",
        "url": "/escha/locations/dragon-s-nest"
      },
      {
        "name": "Lab of Eternity",
        "url": "/escha/locations/lab-of-eternity"
      },
      {
        "name": "Ends of the Earth",
        "url": "/escha/locations/ends-of-the-earth"
      },
      {
        "name": "Fallen Ruins",
        "url": "/escha/locations/fallen-ruins"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    "name": "アイテム",
    "url": "/escha/items",
    "svg": "A15.svg?v=1#category-book"
  },
  {
    "name": "レシピブック",
    "url": "/escha/recipe-books"
  },
  {
    "name": "潜在能力",
    "url": "/escha/properties"
  },
  {
    "name": "効果",
    "url": "/escha/effects"
  },
  {
    "name": "魔物",
    "url": "/escha/monsters"
  }
];

export const languages = {en, ja};
