import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <header>
        <nav className="nav-bar">
            <div className="logo">BOOKSTORE</div>
            <ul>
               <li><NavLink to="/">Home</NavLink></li> 
               <li><NavLink to="/categories">Categories</NavLink></li>
            </ul>
        </nav>
        </header>
        <main>
           <Outlet /> 
        </main>
        </>
    )
}
export default Navbar