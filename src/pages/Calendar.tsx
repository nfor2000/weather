import { format } from "date-fns";
import { useState } from "react";
import CalendarDays, { Day } from "../components/CalendarDays";
import Button from "../components/Button";
import { MdMenu } from "react-icons/md";
import useWeatherDataContext from "../hooks/useWeatherDataContext";

const Calendar = () => {
     const { toggleSideBar } = useWeatherDataContext();
     const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     const [currentDay, setCurrentDay] = useState(new Date());

     const changeCurrentDay = (day: Day) => {
          setCurrentDay(new Date(day.year, day.month, day.number));
     };
     return (
          <div className="px-5 py-8 flex flex-col gap-5">
               <div className="flex items-center justify-between">
                    <div>
                         <h2 className="text-clr-dark">Calendar</h2>
                         <h3 className="capitalize text-clr-primary">
                              {format(currentDay, "MMMM yyyy")}
                         </h3>
                    </div>
                    <Button
                         icon={<MdMenu size={30} />}
                         className="p-2 rounded-lg xl:hidden"
                         onPress={toggleSideBar}
                    />
               </div>
               <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col gap-2">
                         <div className="table-header">
                              {weekdays.map((weekday) => {
                                   return (
                                        <div className="w-full text-center">
                                             <p>{weekday}</p>
                                        </div>
                                   );
                              })}
                         </div>
                         <CalendarDays
                              day={currentDay}
                              onClick={changeCurrentDay}
                         />
                    </div>
               </div>
          </div>
     );
};

export default Calendar;
