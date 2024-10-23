import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { WeatherCardData } from "./BoardMain";

const BoardCard = ({ data }: { data: WeatherCardData }) => {
     const { title, value, previous_value, unit, icon } = data;
     return (
          <div className="flex items-center gap-4 bg-light rounded-sm p-5">
               {icon}
               <div className="flex-1 flex flex-col gap-1">
                    <h4 className="text-clr-muted font-light text-sm capitalize">
                         {title}
                    </h4>
                    <div className="flex justify-between items-center">
                         <h2 className="text-clr-dark ">
                              {value}
                              {unit}
                         </h2>
                         <div className="flex justify-between items-center gap-2">
                              {value - previous_value < 0 ? (
                                   <FaCaretDown className="text-clr-danger" />
                              ) : (
                                   <FaCaretUp className="text-clr-primary" />
                              )}
                              <span className="text-clr-muted text-xs">
                                   {Math.abs(value - previous_value).toFixed(1)}
                                   {unit}
                              </span>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default BoardCard;
