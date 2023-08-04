import React from "react";
import Link from "next/link";
import { title } from "process";

type NavItemProps = { link: string; pageLink: string };
type SidebarDataProps = {
  title?: string;
  navItem: NavItemProps[];
};

const sidebarData: SidebarDataProps[] = [
  { title:'Admin', navItem: [{ link: "/dashboard", pageLink: "Dashboard" }] },
  {
    title: "title1",
    navItem: [
      { link: "/", pageLink: "Home" },
      { link: "/home2", pageLink: "Home2" },
      { link: "/", pageLink: "Home3" },
    ],
  },
  {
    title: "title2",
    navItem: [
      { link: "/", pageLink: "Category 1" },
      { link: "/", pageLink: "Category 2" },
      { link: "/", pageLink: "Category 3" },
    ],
  },
  {
    title: "title3",
    navItem: [
      { link: "/", pageLink: "Category 2" },
      { link: "/", pageLink: "Category 2" },
      { link: "/", pageLink: "Category 2" },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside style={{ backgroundColor: "#FEE3E1", color:'#DD3D73', width: "20%", padding: "10px" }}>
      <ul>
        {sidebarData.map((item, index) => (
          <li key={index}>
            <div style={{ fontSize: "16px", marginTop: "10px" }}>
              {item.title}
            </div>
            <ul>
              {item.navItem.map((navItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={navItem.link} style={{cursor:'pointer', padding:'5px'}} className="hover:bg-red-100">
                    {navItem.pageLink}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
