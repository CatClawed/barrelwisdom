import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Blue Reflection Second Light",
    svg: "main.svg?v=1#fa-school",
    expand: true,
    children: [
      {
        name: "FAQ",
        url: "/second-light/faq"
      },
      {
        name: "Get True End",
        url: "/second-light/how-to-get-true-end"
      },
      {
        name: "Ether Mechanics",
        url: "/second-light/ether-mechanics"
      },
      {
        name: "Fragments & Dates",
        url: "/second-light/fragments-and-dates/en"
      },
      {
        name: "Location Guide",
        url: "/second-light/location-guide"
      }
    ]
  },
  {
    name: "Encyclopedia",
    svg: "main.svg?v=1#fa-book",
    expand: true,
    children: [
      {
        name: "Items",
        url: "/second-light/items/en"
      },
      {
        name: "Demons",
        url: "/second-light/demons/en"
      },
      {
        name: "Facilities",
        url: "/second-light/facilities/en"
      },
      {
        name: "Facility Sets",
        url: "/second-light/facilities/sets/en"
      },
      {
        name: "Units",
        url: "/second-light/units/en"
      },
      {
        name: "Skills",
        url: "/second-light/skills/en"
      }
    ]
  },
  {
    name: "Locations",
    svg: "main.svg?v=1#fa-location",
    url: "/second-light/locations",
    children: [
      {
        name: "Kokoro's Heartscape",
        url: "/second-light/locations/kokoro-s-heartscape/en"
      },
      {
        name: "Shiho's Heartscape",
        url: "/second-light/locations/shiho-s-heartscape/en"
      },
      {
        name: "Hinako's Heartscape",
        url: "/second-light/locations/hinako-s-heartscape/en"
      },
      {
        name: "Rena's Heartscape",
        url: "/second-light/locations/rena-s-heartscape/en"
      },
      {
        name: "Kirara's Heartscape",
        url: "/second-light/locations/kirara-s-heartscape/en"
      },
      {
        name: "Hirahara Sisters' Heartscape",
        url: "/second-light/locations/hirahara-sisters-heartscape/en"
      },
      {
        name: "Uta's Heartscape",
        url: "/second-light/locations/uta-s-heartscape/en"
      },
      {
        name: "Yuki's Heartscape",
        url: "/second-light/locations/yuki-s-heartscape/en"
      },
      {
        name: "Yuzu and Lime's Heartscape",
        url: "/second-light/locations/yuzulime-heartscape/en"
      },
      {
        name: "Origin Route",
        url: "/second-light/locations/origin-route/en"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    name: "フラグメント & デート",
    url: "/second-light/fragments-and-dates/ja"
  },
  {
    name: "アイテム",
    url: "/second-light/items/ja"
  },
  {
    name: "モンスター",
    url: "/second-light/demons/ja"
  },
  {
    name: "学校開発",
    url: "/second-light/facilities/ja"
  },
  {
    name: "セット",
    url: "/second-light/facilities/sets/ja"
  },
  {
    name: "ユニット",
    url: "/second-light/units/ja"
  },
  {
    name: "スキル",
    url: "/second-light/skills/ja"
  }
];

export const sc: NavItem[] = [
  {
    name: "意念碎片 & 约会",
    url: "/second-light/fragments-and-dates/sc"
  },
  {
    name: "道具",
    url: "/second-light/items/sc"
  },
  {
    name: "魔物",
    url: "/second-light/demons/sc"
  },
  {
    name: "学校开发",
    url: "/second-light/facilities/sc"
  },
  {
    name: "套组",
    url: "/second-light/facilities/sets/sc"
  },
  {
    name: "团队",
    url: "/second-light/units/sc"
  },
  {
    name: "技能",
    url: "/second-light/skills/sc"
  }
];

export const tc: NavItem[] = [
  {
    name: "意念碎片 & 約會",
    url: "/second-light/fragments-and-dates/tc"
  },
  {
    name: "道具",
    url: "/second-light/items/tc"
  },
  {
    name: "魔物",
    url: "/second-light/demons/tc"
  },
  {
    name: "學校開發",
    url: "/second-light/facilities/tc"
  },
  {
    name: "套組",
    url: "/second-light/facilities/sets/tc"
  },
  {
    name: "團隊",
    url: "/second-light/units/tc"
  },
  {
    name: "技能",
    url: "/second-light/skills/tc"
  }
];

export const languages = {en, ja, sc, tc};
