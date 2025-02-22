import {
  AboutIcon,
  BlogIcon,
  ContactIcon,
  HomeIcon,
  ProjectIcon,
} from "@/icons/layout/menu";
import { MenuType } from "@/types"; // Menu Configuration
import categories from "./categories";

const menuConfig: MenuType[] = [
  {
    id: 1,
    title: "Home",
    slug: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    title: "About",
    slug: "/about",
    icon: AboutIcon,
  },
  // {
  //   id: 3,
  //   title: "Projects",
  //   slug: "/projects",
  //   icon: ProjectIcon,
  // },
  {
    id: 3,
    title: "Blog",
    slug: "/blog",
    icon: BlogIcon,
    subMenu: categories,
  },
  {
    id: 4,
    title: "Contact",
    slug: "/contact",
    icon: ContactIcon,
  },
];

export default menuConfig;
