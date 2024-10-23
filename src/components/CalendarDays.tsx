export interface Day {
     currentMonth: boolean;
     date: Date;
     month: number;
     number: number;
     selected: boolean;
     year: number;
}

function CalendarDays(props: { day: Date; onClick: (day: Day) => void }) {
     const firstDayOfMonth = new Date(
          props.day.getFullYear(),
          props.day.getMonth(),
          1
     );
     const weekdayOfFirstDay = firstDayOfMonth.getDay();
     const currentDays = [];
     for (let day = 0; day < 42; day++) {
          if (day === 0 && weekdayOfFirstDay === 0) {
               firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
          } else if (day === 0) {
               firstDayOfMonth.setDate(
                    firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
               );
          } else {
               firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
          }

          const calendarDay: Day = {
               currentMonth:
                    firstDayOfMonth.getMonth() === props.day.getMonth(),
               date: new Date(firstDayOfMonth),
               month: firstDayOfMonth.getMonth(),
               number: firstDayOfMonth.getDate(),
               selected:
                    firstDayOfMonth.toDateString() === props.day.toDateString(),
               year: firstDayOfMonth.getFullYear(),
          };

          currentDays.push(calendarDay);
     }
     return (
          <div className="table-content">
               {currentDays.map((day) => {
                    return (
                         <div
                              className={
                                   "text-center h-[75px] border border-slate-200 flex justify-center items-center text-lg" +
                                   (day.currentMonth
                                        ? " text-clr-dark"
                                        : " text-slate-300") +
                                   (day.selected
                                        ? " text-clr-primary font-bold"
                                        : "")
                              }
                              onClick={() => props.onClick(day)}
                         >
                              <p>{day.number}</p>
                         </div>
                    );
               })}
          </div>
     );
}

export default CalendarDays;
