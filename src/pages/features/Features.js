import './features.scss'
import { Link } from 'react-router-dom';

const Features = () => {
    return ( 
        <div className="features">
            <h1>features page</h1>
            <div className="lang-feed">
                <h1>LANGUAGE COMMUNITIES</h1>
                <div className="container">
                    <div className="langbox">
                        <h1>JAVASCRIPT</h1>
                        <Link to='/features/communities/javascript'>view</Link>
                    </div>
                    <div className="langbox">
                        <h1>PYTHON</h1>
                        <Link to='/features/communities/python'>view</Link>
                    </div>
                    <div className="langbox">
                        <h1>JAVA</h1>
                        <Link to='/features/communities/java'>view</Link>
                    </div>
                    <div className="langbox">
                        <h1>GOLANG</h1>
                        <Link to='/features/communities/golang'>view</Link>
                    </div>
                    <div className="langbox">
                        <h1>c#</h1>
                        <Link to='/features/communities/c#'>view</Link>
                    </div>
                    <div className="langbox see-more">
                        <h1><Link to='/features/communities'>see more</Link></h1>
                    </div>
                </div>
            </div>
            <div className="room-feed">
                <h1>CONVERSATIONS</h1>
                <div className="container">
                    <div className="roombox">JS ROCKS</div>
                    <div className="roombox">why sass</div>
                    <div className="roombox">frontend over </div>
                    <div className="roombox see-more">SEE MORE</div>
                </div>
            </div>
            <div className="quiz-feed">
                <h1>TAKE THE QUIZ</h1>
                <p>once passed you will have a badge of elite on ur profile</p>
                <div className="container">
                    <div className="quizbox">HTML</div>
                    <div className="quizbox">CSS</div>
                    <div className="quizbox">JAVASCRIPT</div>
                    <div className="quizbox see-more">SEE MORE</div>
                </div>
            </div>
            <div className="polls-feed">
                <h1>HELP US BY ENGAGING IN POLLS</h1>
                <p>take polls</p>
                <div className="container">
                    <div className="pollsbox">FAVOURITE PROGRAMMING LANGUAGE</div>
                    <div className="pollsbox">REACT vs VUE</div>
                    <div className="pollsbox">python vs node</div>
                    <div className="pollsbox see-more">SEE MORE</div>
                </div>
            </div>
        </div>
     );
}
 
export default Features;