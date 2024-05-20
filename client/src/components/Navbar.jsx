import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import {logout}  from '../JS/Actions/user';

const Navbar = () => {

const isAuth = useSelector((state) => state.user.isAuth);
const isAdmin = useSelector((state) => state.user.isAdmin);
const dispatch = useDispatch();

const handleLogout = () => {
    dispatch(logout());
};

return (
  <nav className='navbar'>
      <div className='navbar-left'>
          <Link to="/" className='navbar-brand'>Kitebi</Link>
      </div>
      <div className='navbar-right'>
          <Link to="/books" className='navbar-link'> Books</Link>
    {isAdmin && (     
          <Link to="/dashboard" className='navbar-link'> Dashboard</Link>
        )}
    {isAuth ? (
              <Link to="/" onClick={handleLogout} className='navbar-link'>Logout</Link>
      ) : (
      <Link to="/login" className='navbar-link'>Login</Link>
      )}
      </div>
  </nav>
)}

export default Navbar