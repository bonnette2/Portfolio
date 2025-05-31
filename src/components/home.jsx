import pic from '../asset/me.jpg';
import facebook from '../asset/facebok.png';
import instagram from '../asset/instagram.png';  
import linkedinIcon from '../asset/linkedin.png';
import twitterIcon from '../asset/twitter.png';

const Home = () => {
    return ( 
        <section className="home-section d-flex align-items-center" id="home">
            <div className="intro-text">
                <h2 className="fade-in hello">Hello,</h2>
                <h1 className="typewriter">I am <span className="name" style={{color:'#ff4ecb'}}>Bonnette Umurerwa</span></h1>
                <p className="fade-in bio">A passionate developer and creative thinker, building beautiful and functional web experiences.</p>
                <button className='fade-in button'>Contact me</button>
            </div>

            <div className="profile-image-container bounce">
                <img src={pic} alt="Bonnette" className="profile-pic" />

                <div className="icon-image-wrapper">
                    <hr className="icon-line" />
                    <div className="image-icons">
                        <a href="https://x.com" target="_blank"><img src={twitterIcon} alt="Twitter" className="icon-img" /></a>
                        <a href="https://linkedin.com"><img src={linkedinIcon} alt="LinkedIn" className="icon-img" /></a>
                        <a href="https://instagram.com"><img src={instagram} alt="Instagram" className="icon-img" /></a>
                        <a href="https://facebook.com"><img src={facebook} alt="Facebook" className='icon-img' /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
