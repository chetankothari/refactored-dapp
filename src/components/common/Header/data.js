const tabs = [
  {
    title: "AI Marketplace",
    active: true,
    link: "#",
    openInNewTab: false,
  },
  {
    title: "Get Started",
    active: false,
    link: "https://blog.singularitynet.io/a-beginners-guide-to-the-singularitynet-beta-74d523902958",
    openInNewTab: true,
  },
];

const dropdowns = [
  {
    label: "Resources",
    list: [
      { value: "", label: "Documentation" },
      { value: "", label: "Dataset Download" },
      { value: "", label: "API Library" },
      { value: "", label: "Telegram" },
      { value: "", label: "Forum" },
      { value: "", label: "Blog" },
    ],
  },
];

export const NavData = {
  tabs,
  dropdowns,
};
