import './navbar.scss'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return ( 
        <nav className="mainNav">
            <div id='links' className="links">
                <Link to='/user/dashboard'>LOGIN</Link>
                <Link to='/'>SIGNUP</Link>
            </div>
            <h1 id='menu-icon' style={{color: 'white', fontSize: '34px', cursor: 'pointer'}}><FaBars/></h1>
        </nav>
     );
}
 
export default Navbar;