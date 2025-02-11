import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;