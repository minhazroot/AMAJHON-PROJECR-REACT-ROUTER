import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Spenner from "../Spenner/Spenner";



const Main = () => {
    const Navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>



            <div className="min-h-screen">
                {
                    Navigation.state === 'loading' ? <Spenner></Spenner> : <Outlet></Outlet>
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
