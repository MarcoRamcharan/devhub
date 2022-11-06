import { useParams } from "react-router-dom";
import './community.scss'

const Community = () => {

    const {name} = useParams()

    return ( 
        <div className="community">
            <h1>welcome to the {name} community</h1>
            <p>here you will be able to</p>
            <ul>
                <li>join the community</li>
                <li>leave a comment when joining</li>
            </ul>
        </div>
     );
}
 
export default Community;