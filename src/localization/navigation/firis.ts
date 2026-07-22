import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Firis Guide",
    svg: "main.svg?v=1#fa-book",
    expand: true,
    children: [
      {
        name: "Ultimate Setups",
        url: "/firis/ultimate-setups"
      },
      {
        name: "Endgame Farming",
        url: "/firis/endgame-farming"
      }
    ]
  },
  {
    name: "Encyclopedia",
    svg: "main.svg?v=1#ryza2-material",
    expand: true,
    children: [
      {
        name: "Recipe Ideas",
        url: "/firis/recipe-ideas/en"
      },
      {
        name: "Items",
        url: "/firis/items/en"
      },
      {
        name: "Monsters",
        url: "/firis/monsters/en"
      },
      {
        name: "Traits",
        url: "/firis/traits/en"
      },
      {
        name: "Effects",
        url: "/firis/effects/en"
      },
      {
        name: "Catalysts",
        url: "/firis/catalysts/en"
      },
      {
        name: "Shops",
        url: "/firis/shops/en"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    name: "レシピ発想",
    url: "/firis/recipe-ideas/ja"
  },
  {
    name: "アイテム",
    url: "/firis/items/ja"
  },
  {
    name: "魔物",
    url: "/firis/monsters/ja"
  },
  {
    name: "特性",
    url: "/firis/traits/ja"
  },
  {
    name: "効果",
    url: "/firis/effects/ja"
  },
  {
    name: "触媒",
    url: "/firis/catalysts/ja"
  },
  {
    name: "ショップ",
    url: "/firis/shops/ja"
  }
];

export const sc: NavItem[] = [
  {
    name: "构思配方",
    url: "/firis/recipe-ideas/sc"
  },
  {
    name: "道具",
    url: "/firis/items/sc"
  },
  {
    name: "魔物",
    url: "/firis/monsters/sc"
  },
  {
    name: "特性",
    url: "/firis/traits/sc"
  },
  {
    name: "效果",
    url: "/firis/effects/sc"
  },
  {
    name: "触媒",
    url: "/firis/catalysts/sc"
  },
  {
    name: "商店",
    url: "/firis/shops/sc"
  }
];

export const tc: NavItem[] = [
  {
    name: "構思配方",
    url: "/firis/recipe-ideas/tc"
  },
  {
    name: "道具",
    url: "/firis/items/tc"
  },
  {
    name: "魔物",
    url: "/firis/monsters/tc"
  },
  {
    name: "特性",
    url: "/firis/traits/tc"
  },
  {
    name: "效果",
    url: "/firis/effects/tc"
  },
  {
    name: "觸媒",
    url: "/firis/catalysts/tc"
  },
  {
    name: "商店",
    url: "/firis/shops/tc"
  }
];

export const languages = {en, ja, sc, tc};
