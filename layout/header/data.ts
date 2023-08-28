import * as Icon from "@/components/ui/icons";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    slug: "/",
  },
  {
    id: 2,
    title: "Jobs",
    slug: "/",
    submenu: [
      {
        id: 2.1,
        title: "Locations",
        links: [
          {
            id: 2.11,
            title: "Mohali",
            slug: "/",
          },
          {
            id: 2.12,
            title: "Chandigarh",
            slug: "/",
          },
          {
            id: 2.13,
            title: "Panchkula",
            slug: "/",
          },
        ],
      },
      {
        id: 2.2,
        title: "Job Level",
        links: [
          {
            id: 2.21,
            title: "Junior",
            slug: "/",
          },
          {
            id: 2.22,
            title: "Senior",
            slug: "/",
          },
          {
            id: 2.23,
            title: "Executive",
            slug: "/",
          },
        ],
      },
      {
        id: 2.3,
        title: "Department",
        links: [
          {
            id: 2.31,
            title: "Design",
            slug: "/",
          },
          {
            id: 2.32,
            title: "Development",
            slug: "/",
          },
          {
            id: 2.33,
            title: "Talent Acquisition",
            slug: "/",
          },
          {
            id: 2.34,
            title: "Devops",
            slug: "/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Contact",
    slug: "/",
  },
  {
    id: 4,
    title: "About",
    slug: "/",
  },
];
