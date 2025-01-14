"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slices/menuSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const openMenus = useSelector((state: any) => state.menu.openMenus);
  const router = useRouter();

/*   useEffect(() => {
    if (!router) {
      console.error("NextRouter is not mounted.");
    }
  }, [router]) */;

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
    <div className="bg-black w-[250px] transition-all ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40">
      <ul>
        {sidebarData.map((menu, index) => {
          const isActive = openMenus[menu.title];
          const isCurrentPath = router.pathname.includes(menu.title.toLowerCase());
          const colorClass = isCurrentPath
            ? "text-white"
            : "text-white/50 hover:text-white";

          return (
            <li key={index} className="menu">
              <div
                className={`flex items-center gap-1 text-md pl-6 py-3 border-b border-white/10 cursor-pointer ${colorClass}`}
                onClick={() => dispatch(toggleMenu(menu.title))}
              >
                {menu.title}
              </div>
              {menu.subMenus && isActive && (
                <ul className="pl-8 text-sm text-gray-400">
                  {menu.subMenus.map((subMenu, idx) => (
                    <li
                      key={idx}
                      className="py-1 hover:text-gray-200 cursor-pointer"
                      onClick={() => {
                        // Example: Handle sub-menu navigation
                        router.push(`/${menu.title.toLowerCase()}/${subMenu.title.toLowerCase().replace(/ /g, "-")}`);
                      }}
                    >
                      {subMenu.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
