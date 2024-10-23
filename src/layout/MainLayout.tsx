import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import RightSideBar from "../components/RightSideBar";
import WeatherDataProvider from "../context/WeatherDataProvider";

const MainLayout = () => {
     return (
          <WeatherDataProvider>
               <main className="min-h-screen flex flex-col xl:w-[1280px] w-full mx-auto bg-white lg:flex-row">
                    <SideBar />
                    <div className="flex-1">
                         <Outlet />
                    </div>
                    <RightSideBar />
               </main>
          </WeatherDataProvider>
     );
};

export default MainLayout;
