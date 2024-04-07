import './Navbar.css';
import navlogo from '../../admin-assets/nav-logo.svg';
import navProfile from '../../admin-assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
