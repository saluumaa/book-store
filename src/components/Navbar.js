import { NavLink, Outlet } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <>
    <header>
      <nav className="nav-bar">
        <ul>
          <div className="logo">BOOKSTORE</div>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/categories">Categories</NavLink></li>
        </ul>
        <div className="profile-icon">
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
