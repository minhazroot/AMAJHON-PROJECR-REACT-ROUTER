import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">

            <div className="w-[20%] bg-red-400">
                <ul >
                    <li><Link to="/Dashboard">Dashboard</Link></li>
                    <li><Link to="/Dashboard/Contact">Contact</Link></li>
                </ul>
            </div>
            <div className="w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;