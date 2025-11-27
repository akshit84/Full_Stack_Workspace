import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-300/20">
        <Navbar />
        <div className="pt-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
