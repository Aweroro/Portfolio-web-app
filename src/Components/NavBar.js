import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Styles/NavbarStyles.css';
import { FaBars, FaTimes  } from 'react-icons/fa';

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const handleopenMenu = () => setOpenMenu(!openMenu);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        } else{
            setColor(false);
        }
        };

    window.addEventListener('scroll', changeColor);

  return (
    <div className={color? 'header header-bg' : 'header'} >
      <Link to={'/'}>
        <h1>Aweroro Hadi</h1>
      </Link>
      <ul className={openMenu ? 'nav-menu active' : 'nav-menu'}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'projects'}>Projects</Link></li>
        <li><Link to={'about'}>About</Link></li>
        <li><Link to={'contact'}>Contact</Link></li>
      </ul>
      <div className='hamburger' onClick={handleopenMenu}>
        {openMenu? <FaTimes size={30} style={{color:'#fff'}}/> : <FaBars size={30} style={{color:'#fff'}}/>}
      </div>
    </div>
  )
}


export default NavBar
