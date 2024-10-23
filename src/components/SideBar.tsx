import React from "react";
import { FaBolt } from "react-icons/fa";
import { MdCalendarMonth, MdImage, MdLogout, MdSettings } from "react-icons/md";
import { RiHome5Line } from "react-icons/ri";
import { TbChartTreemap } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import useWeatherDataContext from "../hooks/useWeatherDataContext";
import cn from "../lib/utils";

interface Link {
     label: string;
     icon: React.ReactNode;
     ref: string;
}

const links: Link[] = [
     {
          label: "DashBoard",
          icon: <RiHome5Line size={24} />,
          ref: "/",
     },
     {
          label: "Map",
          icon: <TbChartTreemap size={24} />,
          ref: "/map",
     },
     {
          label: "Saved Location",
          icon: <MdImage size={24} />,
          ref: "/",
     },
     {
          label: "Calendar",
          icon: <MdCalendarMonth size={24} />,
          ref: "/calendar",
     },
];

const SideBar = () => {
     const { showSideBar, toggleSideBar } = useWeatherDataContext();
     const navigate = useNavigate();
     return (
          <aside
               className={cn(
                    "bg-bg-side-bar left-0 top-0 z-10 bottom-0 w-max px-5 py-6 fixed transforms flex-col gap-5 flex xl:translate-x-0 xl:static transition-all",
                    showSideBar ? "translate-x-0" : "-translate-x-full"
               )}
          >
               <div className="flex  items-center gap-2">
                    <div className="bg-clr-primary w-10 h-10 flex items-center justify-center rounded-full">
                         <FaBolt className="text-white" />
                    </div>
                    <h1 className="text-clr-primary text-lg">Weather Jam</h1>
               </div>
               <ul className="flex flex-col gap-5 pl-2">
                    {links.map((link, index) => (
                         <li
                              key={index}
                              className="flex items-center gap-1 text-clr-muted hover:text-clr-primary cursor-pointer"
                         >
                              {link.icon}
                              <button
                                   onClick={() => {
                                        toggleSideBar();
                                        navigate(link.ref);
                                   }}
                                   className="text-sm"
                              >
                                   {link.label}
                              </button>
                         </li>
                    ))}
               </ul>
               <div className="mt-auto flex flex-col gap-4">
                    <h3 className="text-clr-muted text-sm">Setting</h3>
                    <ul className="pl-2 flex flex-col gap-2">
                         <li className="flex items-center gap-1 text-clr-muted hover:text-clr-primary cursor-pointer">
                              <MdSettings />
                              <Link to="/setting" className="text-sm">
                                   settings
                              </Link>
                         </li>
                         <li className="flex items-center gap-1 text-clr-muted hover:text-clr-primary cursor-pointer">
                              <MdLogout />
                              <a href="" className="text-sm">
                                   Logout account
                              </a>
                         </li>
                    </ul>
               </div>
          </aside>
     );
};

export default SideBar;
