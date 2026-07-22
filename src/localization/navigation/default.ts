import type { NavItem } from "@app/localization/localization"

export const en: NavItem[] = [
  {
    name: "Yumia",
    url: "/yumia/items/en",
    svg: "main.svg?v=1#yumia"
  },
  {
    name: "Resleriana Red White",
    url: "/resleriana-red-white/items/en",
    svg: "main.svg?v=1#resleri-icon"
  },
  {
    name: "Ryza",
    svg: "main.svg?v=1#ryza2-race-puni",
    expand: true,
    children: [
      {
        name: "Atelier Ryza",
        url: "/ryza/faq"
      },
      {
        name: "Atelier Ryza 2",
        url: "/ryza2/faq"
      },
      {
        name: "Atelier Ryza 3",
        url: "/ryza3/how-to-get-infinite-gems"
      }
    ]
  },
  {
    name: "Mysterious",
    svg: "main.svg?v=1#sophie2-race-elvira",
    expand: true,
    children: [
      {
        name: "Atelier Firis",
        url: "/firis/ultimate-setups"
      },
      {
        name: "Atelier Sophie 2",
        url: "/sophie2/faq"
      }
    ]
  },
  {
    name: "Dusk",
    svg: "main.svg?v=1#shallie-race-slag",
    children: [
      {
        name: "Atelier Escha & Logy",
        url: "/escha/faq",
        svg: "main.svg?v=1#fas fa-chevron-right"
      },
      {
        name: "Atelier Shallie",
        url: "/shallie/faq",
        svg: "main.svg?v=1#fas fa-chevron-right"
      }
    ]
  },
  {
    name: "Atelier Totori",
    url: "/totori/faq",
    svg: "main.svg?v=1#totori-category-fish"
  },
  {
    name: "Blue Reflection",
    svg: "main.svg?v=1#fa-school",
    children: [
      {
        name: "Blue Reflection",
        url: "/bluereflection/fragment-episodes"
      },
      {
        name: "Second Light",
        url: "/second-light/faq"
      }
    ]
  },
  {
    name: "Immature Status",
    svg: "main.svg?v=1#ryza2-category-bombs",
    children: [
      {
        name: "Atelier Lulua",
        url: "/lulua/easy-final-boss-guide"
      },
      {
        name: "Nights of Azure 2",
        url: "/noa2/maps"
      }
    ]
  }
];

export const languages = {en};
