import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex justify-between shadow-md px-5 mt-2 p-3 ">
            <div>
                <img className="h-14 w-32" src={`https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg`} alt="" />
                {/* <h1>AMAJHON</h1> */}
            </div>
            <ul className="flex  font-semibold   gap-x-5  justify-center">
                <Link to="/">HOME</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Dashboard">Dashboard</Link>
            </ul>
        </nav>
    );
};

export default Navbar;