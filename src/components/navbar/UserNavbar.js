import './usernavbar.scss'
import pic from '../../i.jpg'

const Navbar = () => {
    return ( 
        <nav className="userNav">
            <h1>usernavbar</h1>
            <img src={pic} alt="" />
        </nav>
     );
}
 
export default Navbar;