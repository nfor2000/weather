import {
     createBrowserRouter,
     createRoutesFromElements,
     Route,
     RouterProvider,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Calendar from "./pages/Calendar";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import MainLayout from "./layout/MainLayout";

const App = () => {
     const router = createBrowserRouter(
          createRoutesFromElements(
               <Route element={<MainLayout />}>
                    <Route index path="/" element={<DashBoard />} />
                    <Route index path="/calendar" element={<Calendar />} />
                    <Route index path="/map" element={<Map />} />
                    <Route index path="/setting" element={<Setting />} />
                    <Route index path="/profile" element={<Profile />} />
               </Route>
          )
     );
     return (
          <>
               <RouterProvider router={router} />
          </>
     );
};

export default App;
