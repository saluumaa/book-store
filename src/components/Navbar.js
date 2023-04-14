import { NavLink, Outlet } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <>
    <header>
      <nav className="pointer flex nav-bar">
        <ul className="flex">
          <div className="logo">BOOKSTORE</div>
          <li><NavLink to="/" className="black">Home</NavLink></li>
          <li><NavLink to="/categories">Categories</NavLink></li>
        </ul>
        <div className="pointer border profile-icon">
          <FaUser className="user-icon" />
        </div>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
export default Navbar;
