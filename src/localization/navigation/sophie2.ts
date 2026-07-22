import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Sophie 2",
    svg: "main.svg?v=1#fa-faq",
    expand: true,
    children: [
      {
        name: "FAQ",
        url: "/sophie2/faq"
      },
      {
        name: "Gathering Rank",
        url: "/sophie2/how-to-raise-gathering-rank"
      },
      {
        name: "Boss Help",
        url: "/sophie2/beating-any-boss"
      },
      {
        name: "Very Hard Final Boss",
        url: "/sophie2/beating-the-final-boss-on-very-hard"
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
        url: "/sophie2/recipe-ideas/en"
      },
      {
        name: "Items",
        url: "/sophie2/items/en"
      },
      {
        name: "Monsters",
        url: "/sophie2/monsters/en"
      },
      {
        name: "Traits",
        url: "/sophie2/traits/en"
      },
      {
        name: "Effects",
        url: "/sophie2/effects/en"
      },
      {
        name: "Major Gathering",
        url: "/sophie2/major-gathering/en"
      },
      {
        name: "Seeds",
        url: "/sophie2/seeds/en"
      }
    ]
  },
  {
    name: "Locations",
    svg: "main.svg?v=1#fa-location",
    children: [
      {
        name: "Roytale",
        url: "/sophie2/locations/roytale/en"
      },
      {
        name: "Flower Bank Ruins",
        url: "/sophie2/locations/flower-bank-ruins/en"
      },
      {
        name: "Snowy Corridor",
        url: "/sophie2/locations/snowy-corridor/en"
      },
      {
        name: "Thunderbolt Palace",
        url: "/sophie2/locations/thunderbolt-palace/en"
      },
      {
        name: "Nightmare Muster",
        url: "/sophie2/locations/nightmare-muster/en"
      },
      {
        name: "Near-Forest",
        url: "/sophie2/locations/near-forest/en"
      },
      {
        name: "Illusion Vale",
        url: "/sophie2/locations/illusion-vale/en"
      },
      {
        name: "Eternal Sand Dunes",
        url: "/sophie2/locations/eternal-sand-dunes/en"
      },
      {
        name: "Windswept Plains",
        url: "/sophie2/locations/windswept-plains/en"
      },
      {
        name: "Almare Grasslands",
        url: "/sophie2/locations/almare-grasslands/en"
      },
      {
        name: "Erk's Ice Caves",
        url: "/sophie2/locations/erk-s-ice-caves/en"
      },
      {
        name: "Quartz Lapis",
        url: "/sophie2/locations/quartz-lapis/en"
      },
      {
        name: "Ancient City Royum",
        url: "/sophie2/locations/ancient-city-royum/en"
      },
      {
        name: "Zelgador Summit",
        url: "/sophie2/locations/zelgador-summit/en"
      },
      {
        name: "Burning Mt. Surva",
        url: "/sophie2/locations/burning-mt-surva/en"
      },
      {
        name: "Surva's Heart",
        url: "/sophie2/locations/surva-s-heart/en"
      },
      {
        name: "Dusk Forest",
        url: "/sophie2/locations/dusk-forest/en"
      },
      {
        name: "The Dream Tree",
        url: "/sophie2/locations/the-dream-tree/en"
      },
      {
        name: "Heartscape",
        url: "/sophie2/locations/heartscape/en"
      },
      {
        name: "Childhood Dreamland",
        url: "/sophie2/locations/childhood-dreamland/en"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    name: "レシピ発想",
    url: "/sophie2/recipe-ideas/ja"
  },
  {
    name: "アイテム",
    url: "/sophie2/items/ja"
  },
  {
    name: "魔物",
    url: "/sophie2/monsters/ja"
  },
  {
    name: "特性",
    url: "/sophie2/traits/ja"
  },
  {
    name: "効果",
    url: "/sophie2/effects/ja"
  },
  {
    name: "大採取",
    url: "/sophie2/major-gathering/ja"
  },
  {
    name: "種",
    url: "/sophie2/seeds/ja"
  }
];

export const ko: NavItem[] = [
  {
    name: "레시피 발상",
    url: "/sophie2/recipe-ideas/ko"
  },
  {
    name: "아이템",
    url: "/sophie2/items/ko"
  },
  {
    name: "몬스터",
    url: "/sophie2/monsters/ko"
  },
  {
    name: "특성",
    url: "/sophie2/traits/ko"
  },
  {
    name: "효과",
    url: "/sophie2/effects/ko"
  },
  {
    name: "대채집",
    url: "/sophie2/major-gathering/ko"
  },
  {
    name: "씨앗",
    url: "/sophie2/seeds/ko"
  }
];

export const sc: NavItem[] = [
  {
    name: "构思配方",
    url: "/sophie2/recipe-ideas/sc"
  },
  {
    name: "道具",
    url: "/sophie2/items/sc"
  },
  {
    name: "魔物",
    url: "/sophie2/monsters/sc"
  },
  {
    name: "特性",
    url: "/sophie2/traits/sc"
  },
  {
    name: "效果",
    url: "/sophie2/effects/sc"
  },
  {
    name: "大采集",
    url: "/sophie2/major-gathering/sc"
  },
  {
    name: "种子",
    url: "/sophie2/seeds/sc"
  }
];

export const tc: NavItem[] = [
  {
    name: "構思配方",
    url: "/sophie2/recipe-ideas/tc"
  },
  {
    name: "道具",
    url: "/sophie2/items/tc"
  },
  {
    name: "魔物",
    url: "/sophie2/monsters/tc"
  },
  {
    name: "特性",
    url: "/sophie2/traits/tc"
  },
  {
    name: "效果",
    url: "/sophie2/effects/tc"
  },
  {
    name: "大採集",
    url: "/sophie2/major-gathering/tc"
  },
  {
    name: "種子",
    url: "/sophie2/seeds/tc"
  }
];

export const languages = {en, ja, ko, sc, tc};
