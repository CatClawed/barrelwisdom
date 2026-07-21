import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    "name": "Firis Guide",
    "svg": "main.svg?v=1#fa-book",
    "expand": true,
    "children": [
      {
        "name": "Ultimate Setups",
        "url": "/firis/ultimate-setups"
      },
      {
        "name": "Endgame Farming",
        "url": "/firis/endgame-farming"
      }
    ]
  },
  {
    "name": "Encyclopedia",
    "svg": "main.svg?v=1#ryza2-material",
    "expand": true,
    "children": [
      {
        "name": "Recipe Ideas",
        "url": "/firis/recipe-ideas"
      },
      {
        "name": "Items",
        "url": "/firis/items"
      },
      {
        "name": "Monsters",
        "url": "/firis/monsters"
      },
      {
        "name": "Traits",
        "url": "/firis/traits"
      },
      {
        "name": "Effects",
        "url": "/firis/effects"
      },
      {
        "name": "Catalysts",
        "url": "/firis/catalysts"
      },
      {
        "name": "Shops",
        "url": "/firis/shops"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    "name": "レシピ発想",
    "url": "/firis/recipe-ideas"
  },
  {
    "name": "アイテム",
    "url": "/firis/items"
  },
  {
    "name": "魔物",
    "url": "/firis/monsters"
  },
  {
    "name": "特性",
    "url": "/firis/traits"
  },
  {
    "name": "効果",
    "url": "/firis/effects"
  },
  {
    "name": "触媒",
    "url": "/firis/catalysts"
  },
  {
    "name": "ショップ",
    "url": "/firis/shops"
  }
];

export const sc: NavItem[] = [
  {
    "name": "构思配方",
    "url": "/firis/recipe-ideas"
  },
  {
    "name": "道具",
    "url": "/firis/items"
  },
  {
    "name": "魔物",
    "url": "/firis/monsters"
  },
  {
    "name": "特性",
    "url": "/firis/traits"
  },
  {
    "name": "效果",
    "url": "/firis/effects"
  },
  {
    "name": "触媒",
    "url": "/firis/catalysts"
  },
  {
    "name": "商店",
    "url": "/firis/shops"
  }
];

export const tc: NavItem[] = [
  {
    "name": "構思配方",
    "url": "/firis/recipe-ideas"
  },
  {
    "name": "道具",
    "url": "/firis/items"
  },
  {
    "name": "魔物",
    "url": "/firis/monsters"
  },
  {
    "name": "特性",
    "url": "/firis/traits"
  },
  {
    "name": "效果",
    "url": "/firis/effects"
  },
  {
    "name": "觸媒",
    "url": "/firis/catalysts"
  },
  {
    "name": "商店",
    "url": "/firis/shops"
  }
];

export const languages = {en, ja, sc, tc};
