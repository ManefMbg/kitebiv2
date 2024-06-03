import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import {logout}  from '../JS/Actions/user';
import { useEffect } from 'react';
import {current} from '../JS/Actions/user'

const Navbar = () => {

const isAuth = useSelector((state) => state.user.isAuth);
const isAdmin = useSelector((state) => state.user.isAdmin);
const user = useSelector((state) => state.user.user);


const dispatch = useDispatch();
const handleLogout = () => {
    dispatch(logout());
};

useEffect(() => {
  if (localStorage.getItem('token')) { dispatch(current()) }
  
}, [dispatch])


return (
  <nav className='navbar'>
      <div className='navbar-left'>
          <Link to="/" className='navbar-brand'>Kitebi</Link>
      </div>
      <div className='navbar-right'>
    {isAdmin && (     
        <Link to="/dashboard" className='navbar-link'> Dashboard</Link>
    )}
    {isAuth ? (
            <div>
              <Link to={`/profile/${user._id}`} className='navbar-link'>Profile</Link>
              <Link to="/books" className='navbar-link'> Books</Link>
              <Link to="/" onClick={handleLogout} className='navbar-link'>Logout</Link>
              </div>
      ) : (
      <Link to="/login" className='navbar-link'>Login</Link>
      )}
      </div>
  </nav>
)}

export default Navbar