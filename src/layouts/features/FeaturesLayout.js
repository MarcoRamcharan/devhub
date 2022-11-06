import {Outlet} from 'react-router-dom'
import FeaturesNavbar from '../../components/navbar/FeaturesNavbar';
import Footer from '../../components/footer/Footer';

const FeaturesLayout = () => {
    return ( 
        <div className="featuresLayout">
            <FeaturesNavbar/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default FeaturesLayout;