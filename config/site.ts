export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GlobeTrotters",
  description:
    "Rediscover the world with the routes we've carefully prepared for you.",
  navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    {
      label: "Tours",
      href: "/tours",
    },
    {
      label: "Top 10",
      href: "/top-10",
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About Us",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/erayfazilordanuc",
    linkedin:
      "https://www.linkedin.com/in/eray-faz%C4%B1l-ordanu%C3%A7-2b85582a2/",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
