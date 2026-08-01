import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Totori Guide",
    svg: "main.svg?v=1#fa-faq",
    expand: true,
    children: [
      {
        name: "FAQ",
        url: "/totori/faq"
      },
      {
        name: "Year 1",
        url: "/totori/year-1"
      },
      {
        name: "Year 2",
        url: "/totori/year-2"
      },
      {
        name: "Year 3",
        url: "/totori/year-3"
      },
      {
        name: "Year 4",
        url: "/totori/year-4"
      },
      {
        name: "Wrap Up",
        url: "/totori/wrap-up"
      },
      {
        name: "Endings",
        url: "/totori/endings"
      }
    ]
  },
  {
    name: "Events",
    svg: "main.svg?v=1#fa-book",
    children: [
      {
        name: "Gino",
        url: "/totori/gino-events"
      },
      {
        name: "Mimi",
        url: "/totori/mimi-events"
      },
      {
        name: "Melvia",
        url: "/totori/melvia-events"
      },
      {
        name: "Marc",
        url: "/totori/marc-events"
      },
      {
        name: "Rorona",
        url: "/totori/rorona-events"
      },
      {
        name: "Sterk",
        url: "/totori/sterk-events"
      },
      {
        name: "Chim",
        url: "/totori/chim-end-requirements"
      },
      {
        name: "Filly & Tiffani",
        url: "/totori/filly-and-tiffani-events"
      },
      {
        name: "Cooking Class",
        url: "/totori/cooking-class"
      },
      {
        name: "Specialty Liquor",
        url: "/totori/specialty-liquor"
      }
    ]
  },
  {
    name: "Tutorials",
    svg: "totori.svg?v=1#synthesis",
    children: [
      {
        name: "Boss Preparation",
        url: "/totori/boss-preparation"
      },
      {
        name: "Gathering Better Items",
        url: "/totori/gathering-better-items"
      },
      {
        name: "Money",
        url: "/totori/money"
      }
    ]
  },
  {
    name: "Encyclopedia",
    svg: "totori.svg?v=1#category-supplement",
    expand: true,
    children: [
      {
        name: "Items",
        url: "/totori/items/en"
      },
      {
        name: "Recipe Books",
        url: "/totori/recipe-books/en"
      },
      {
        name: "Traits",
        url: "/totori/traits/en"
      },
      {
        name: "Effects",
        url: "/totori/effects/en"
      },
      {
        name: "Monsters",
        url: "/totori/monsters/en"
      }
    ]
  }
];

export const ja: NavItem[] = [
  {
    name: "アイテム",
    svg: "totori.svg?v=1#category-supplement",
    url: "/totori/items/ja"
  },
  {
    name: "レシピブック",
    url: "/totori/recipe-books/ja"
  },
  {
    name: "特性",
    url: "/totori/traits/ja"
  },
  {
    name: "効果",
    url: "/totori/effects/ja"
  },
  {
    name: "魔物",
    url: "/totori/monsters/ja"
  }
];

export const languages = {en, ja};
