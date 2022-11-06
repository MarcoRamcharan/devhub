import {Outlet} from 'react-router-dom'
import UserNavbar from '../../components/navbar/UserNavbar';
import Footer from '../../components/footer/Footer';

const UserLayout = () => {
    return ( 
        <div className="userLayout">
            <UserNavbar/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default UserLayout;