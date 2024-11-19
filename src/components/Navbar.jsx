

import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="header">

        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
       <p className="blue-gradient_text"><img src=""/></p>
       </NavLink>

       <nav className="flex gap-7 text-lg font-medium ">
        <NavLink to="/ourcoffees" className= {({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
            Our Coffees
        </NavLink>

        <NavLink to="/coffeeclass" className= {({isActive}) => isActive ? 'text-blue-500' : 'text-black' }>
          Coffee Classes
        </NavLink>

       </nav>

    </header>
  )
}

export default Navbar;
