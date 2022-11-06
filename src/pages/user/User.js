import './user.scss'
import {Link} from 'react-router-dom'

const User = () => {
    return ( 
        <div className="userPage">
            <h1>hi im the user page</h1>
            <p>this is the dashboard when the user is logged</p>
            <h3>features</h3>
            <ul>
                <li>upload ur photo</li>
                <li>links you to the features page id:enables you to use the polls create a room etc</li>
                <Link to='/features'>features</Link>
                <li>add your personal info</li>
                <li>create a readme for youre profile here</li>
                <li>show ur website and socials link</li>
                <li>take you to edit profile page</li>
                <li>take you to add personal info page</li>
            </ul>
        </div>
     );
}
 
export default User;