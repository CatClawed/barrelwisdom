import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    "name": "Blue Reflection Second Light",
    "svg": "main.svg?v=1#fa-school",
    "expand": true,
    "children": [
      {
        "name": "FAQ",
        "url": "/second-light/faq"
      },
      {
        "name": "Get True End",
        "url": "/second-light/how-to-get-true-end"
      },
      {
        "name": "Ether Mechanics",
        "url": "/second-light/ether-mechanics"
      },
      {
        "name": "Fragments & Dates",
        "url": "/second-light/fragments-and-dates"
      },
      {
        "name": "Location Guide",
        "url": "/second-light/location-guide"
      }
    ]
  },
  {
    "name": "Encyclopedia",
    "svg": "main.svg?v=1#fa-book",
    "expand": true,
    "children": [
      {
        "name": "Items",
        "url": "/second-light/items"
      },
      {
        "name": "Demons",
        "url": "/second-light/demons"
      },
      {
        "name": "Facilities",
        "url": "/second-light/facilities"
      },
      {
        "name": "Facility Sets",
        "url": "/second-light/facilities/sets"
      },
      {
        "name": "Units",
        "url": "/second-light/units"
      },
      {
        "name": "Skills",
        "url": "/second-light/skills"
      }
    ]
  },
  {
    "name": "Locations",
    "svg": "main.svg?v=1#fa-location",
    "url": "/second-light/locations",
    "children": [
      {
        "name": "Kokoro's Heartscape",
        "url": "/second-light/locations/kokoro-s-heartscape"
      },
      {
        "name": "Shiho's Heartscape",
        "url": "/second-light/locations/shiho-s-heartscape"
      },
      {
        "name": "Hinako's Heartscape",
        "url": "/second-light/locations/hinako-s-heartscape"
      },
      {
        "name": "Rena's Heartscape",
        "url": "/second-light/locations/rena-s-heartscape"
      },
      {
        "name": "Kirara's Heartscape",
        "url": "/second-light/locations/kirara-s-heartscape"
      },
      {
        "name": "Hirahara Sisters' Heartscape",
        "url": "/second-light/locations/hirahara-sisters-heartscape"
      },
      {
        "name": "Uta's Heartscape",
        "url": "/second-light/locations/uta-s-heartscape"
      },
      {
        "name": "Yuki's Heartscape",
        "url": "/second-light/locations/yuki-s-heartscape"
      },
      {
        "name": "Yuzu and Lime's Heartscape",
        "url": "/second-light/locations/yuzulime-heartscape"
      },
      {
        "name": "Origin Route",
        "url": "/second-light/locations/origin-route"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    "name": "フラグメント & デート",
    "url": "/second-light/fragments-and-dates"
  },
  {
    "name": "アイテム",
    "url": "/second-light/items"
  },
  {
    "name": "モンスター",
    "url": "/second-light/demons"
  },
  {
    "name": "学校開発",
    "url": "/second-light/facilities"
  },
  {
    "name": "セット",
    "url": "/second-light/facilities/sets"
  },
  {
    "name": "ユニット",
    "url": "/second-light/units"
  },
  {
    "name": "スキル",
    "url": "/second-light/skills"
  }
];

export const sc: NavItem[] = [
  {
    "name": "意念碎片 & 约会",
    "url": "/second-light/fragments-and-dates"
  },
  {
    "name": "道具",
    "url": "/second-light/items"
  },
  {
    "name": "魔物",
    "url": "/second-light/demons"
  },
  {
    "name": "学校开发",
    "url": "/second-light/facilities"
  },
  {
    "name": "套组",
    "url": "/second-light/facilities/sets"
  },
  {
    "name": "团队",
    "url": "/second-light/units"
  },
  {
    "name": "技能",
    "url": "/second-light/skills"
  }
];

export const tc: NavItem[] = [
  {
    "name": "意念碎片 & 約會",
    "url": "/second-light/fragments-and-dates"
  },
  {
    "name": "道具",
    "url": "/second-light/items"
  },
  {
    "name": "魔物",
    "url": "/second-light/demons"
  },
  {
    "name": "學校開發",
    "url": "/second-light/facilities"
  },
  {
    "name": "套組",
    "url": "/second-light/facilities/sets"
  },
  {
    "name": "團隊",
    "url": "/second-light/units"
  },
  {
    "name": "技能",
    "url": "/second-light/skills"
  }
];

export const languages = {en, ja, sc, tc};
