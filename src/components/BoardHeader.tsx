import {
     MdMenu,
     MdOutlineNotifications,
     MdOutlinePerson,
     MdSearch,
} from "react-icons/md";
import Button from "./Button";
import { format } from "date-fns";
import useWeatherDataContext from "../hooks/useWeatherDataContext";

const BoardHeader = () => {
     const { toggleSideBar } = useWeatherDataContext();
     const date = new Date();
     const monthYear = format(date, "MMMM yyyy");
     const formatedDate = format(date, "eeee MMM e, yyyy");

     return (
          <nav className="border-b-2 border-light px-5 pb-5 pt-6 flex flex-col sm:flex-row gap-5 items-center justify-between">
               <div className="">
                    <h2 className="text-clr-dark text-xl">{monthYear}</h2>
                    <p className="text-clr-muted text-sm">{formatedDate}</p>
               </div>
               <div className="flex gap-5">
                    <div className="max-w-sm w-full bg-light h-10 rounded-lg md:flex items-center px-5 hidden">
                         <MdSearch size={30} className="text-clr-muted" />
                         <input
                              type="text"
                              className="flex-1 bg-transparent ml-2 text-sm outline-none text-clr-dark"
                              placeholder="search location"
                         />
                    </div>
                    <Button
                         icon={<MdSearch size={24} />}
                         className="p-2 rounded-lg md:hidden"
                    />
                    <Button
                         icon={<MdOutlineNotifications size={24} />}
                         className="p-2 rounded-lg"
                    />
                    <Button
                         icon={<MdOutlinePerson size={24} />}
                         className="p-2 rounded-lg"
                    />
                    <Button
                         icon={<MdMenu size={24} />}
                         className="p-2 rounded-lg xl:hidden"
                         onPress={toggleSideBar}
                    />
               </div>
          </nav>
     );
};

export default BoardHeader;
