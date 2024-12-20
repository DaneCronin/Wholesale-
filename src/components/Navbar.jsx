
import Logo from '../assets/images/Logo.avif';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="header">

     
       <nav className="flex gap-7 text-lg font-medium">

       <NavLink to="/" className=" items-center justify-center flex">
      <img src={Logo} alt="Cat and Cloud Logo"/> 
       </NavLink>



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
