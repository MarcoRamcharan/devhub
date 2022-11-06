import './home.scss'

const Home = () => {
    return ( 
        <div className="home">
            <div className="banner">
                <h1 style={{fontSize:'180px', letterSpacing: '0.2rem'}}>DEVHUB</h1>
                <p style={{fontSize:'50px'}}>connecting devs</p>
                <div className="box">
                    <h4>CONNECT || COMMENT || VOTE</h4>
                </div>
            </div>
            <div className="about">
                <p>Created in 2022, DEVHUB is a platform which <br></br>
                    enables developers to create a profile and <br></br>
                    make yourself visible to the rest of the dev world.<br></br>
                    Our aim is to better the dev world.
                </p>
            </div>
            <div className="services-info">
            <h1>what can we do with devhub</h1>
                <p>devhubs services/features include:</p>
                <ul>
                    <li>1.CREATING A PROFILE THAT WILL BE PUBLIC</li>
                    <li>2.JOINING A LANGUAGE COMMUNITY</li>
                    <li>3.COMMENT ON OR CREATE AN UNPOPULAR OPINIONS</li>
                    <li>4.TAKE PART IN OUR POLLS</li>
                    <li>5.GET BADGED BY TAKING A TEST IN MULTIPLE LANGUAGES</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Home;