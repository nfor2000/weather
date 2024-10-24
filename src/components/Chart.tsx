import Chart from "react-apexcharts";
import useWeatherDataContext from "../hooks/useWeatherDataContext";
const BoardChart = () => {
     const {
          data: { days },
     } = useWeatherDataContext();
     const daysOfWeek = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

     const nextSevenDays = days.slice(0, 7);

     const temperatures = nextSevenDays
          .map((day: any) => day?.temp)
          .sort((a: number, b: number) => a - b); // Fixed sorting function

     const daysValue = nextSevenDays.map((day: any) => {
          const date = new Date(day.datetime);
          return date.getUTCDay();
     });

     const weekDays = daysValue.map((value: number) => daysOfWeek[value]);

     const options = {
          colors: ["#001739"],
          chart: {
               id: "temp-area",
               toolpit: {
                    enabled: false,
               },
               height: 280,
               toolbar: {
                    show: false,
               },
          },
          dataLabels: {
               enabled: true,
               enabledOnSeries: undefined,
               formatter: function (val: number) {
                    return val;
               },
               style: {
                    fontSize: "14px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold",
                    colors: ["#2F69FE"],
               },
          },
          xaxis: {
               categories: weekDays,
          },
          fill: {
               type: "gradient",
               gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    colorStops: [
                         {
                              offset: 0,
                              color: "#001739",
                              opacity: 0.1,
                         },
                         {
                              offset: 20,
                              color: "#001739",
                              opacity: 0.2,
                         },
                         {
                              offset: 100,
                              color: "#95DA74",
                              opacity: 0,
                         },
                    ],
                    stops: [0, 90, 100],
               },
          },
          grid: {
               yaxis: {
                    lines: {
                         show: false,
                    },
               },
          },
     };

     const series = [
          {
               name: "series-1",
               data: temperatures,
          },
     ];
     return (
          <div>
               <Chart
                    options={options}
                    series={series}
                    type="area"
                    width={"100%"}
               />
          </div>
     );
};

export default BoardChart;
