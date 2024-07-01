import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="md:flex md:justify-between mt-5 shadow-lg p-2 m-3">
             <div>
                <h1 className="text-3xl"><span className="text-blue-600">BD</span>-<span className="text-lime-500">Market</span></h1>
            </div>  
            <ul className="flex gap-5">
                <NavLink className={({isActive})=> isActive ? "bg-zinc-300 rounded-lg p-1":''} to='/'>Home</NavLink>
                <NavLink  className={({isActive})=> isActive ? "bg-zinc-300 rounded-lg p-1":''}  to='/product'>Product</NavLink>
                <NavLink  className={({isActive})=> isActive ? "bg-zinc-300 rounded-lg p-1":''} to='dashboard'>Dashboard</NavLink>
                    
            </ul>
          </nav>
    );
};

export default Navbar;