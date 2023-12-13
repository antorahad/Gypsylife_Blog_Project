import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div className="font-poppins bg-white text-slate-950">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;