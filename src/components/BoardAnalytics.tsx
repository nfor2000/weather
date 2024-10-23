import { MdArrowDropDown } from "react-icons/md";
import BoardChart from "./Chart";
import useWeatherDataContext from "../hooks/useWeatherDataContext";
const BoardAnalytics = () => {
     const {
          data: { resolvedAddress: location },
     } = useWeatherDataContext();
     return (
          <div className="p-5">
               <div className="flex justify-between items-center">
                    <h3>Average temperatures</h3>
                    <button className="text-clr-primary flex items-center text-sm">
                         <a href="">{location}</a>
                         <MdArrowDropDown />
                    </button>
               </div>
               <div>
                    <BoardChart />
               </div>
          </div>
     );
};

export default BoardAnalytics;
