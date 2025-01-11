
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../redux/slices/menuSlice";
import "../styles/sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const openMenus = useSelector((state) => state.menu.openMenus);

  const sidebarData = [
    {
      title: "System",
      subMenus: [
        { title: "API List" },
        { title: "Code Properties" },
        { title: "Menus" },
      ],
    },
    {
      title: "Users",
      subMenus: [
        { title: "View Users" },
        { title: "Add User" },
        { title: "Edit User" },
      ],
    },
    {
      title: "Groups",
      subMenus: [
        { title: "View Groups" },
        { title: "Add Group" },
      ],
    },
    {
      title: "Competitions",
      subMenus: [
        { title: "Ongoing" },
        { title: "Upcoming" },
        { title: "Completed" },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <ul>
        {sidebarData.map((menu, index) => (
          <li key={index} className="menu">
            <div
              className="menu-title"
              onClick={() => dispatch(toggleMenu(menu.title))}
            >
              {menu.title}
            </div>
            {menu.subMenus && openMenus[menu.title] && (
              <ul className="sub-menu">
                {menu.subMenus.map((subMenu, idx) => (
                  <li key={idx}>{subMenu.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
