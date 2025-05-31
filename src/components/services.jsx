import code from '../asset/code.png'; 
import uiuxIcon from '../asset/frontend.png';
import problemSolvingIcon from '../asset/tool.png';
import Mycarousel from './carousel';
import LangugageCarousel from './carouseler';

const Services = () => {
  return (
    <section id="skills" className="services-section py-5 px-5">
  <div className="text-center mb-4">
      <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <div className="icon-line"></div>
            <p className="fade-in mb-0">Services</p>
          </div>

    <h2 className="section-title">What can I do?</h2>
  </div>

  <div className="container">
  <div className="row justify-content-center">
    <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4">
      <div className="service-card">
        <img src={code} className="icones" />
        <h3>Web Design</h3>
        <p>Building web interfaces that adapt beautifully across all devices</p>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4">
      <div className="service-card">
        <img src={uiuxIcon} className="icones" />
        <h3>Frontend Dev</h3>
        <p>I turn mockups into reality using clean HTML, CSS & JS</p>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4">
      <div className="service-card">
        <img src={problemSolvingIcon} className="icones" />
        <h3>UI/UX Design</h3>
        <p>Using Figma/Canva to design beautiful, intuitive user flows</p>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mb-4">
      <div className="service-card">
        <img src={problemSolvingIcon} className="icones" />
        <h3>Problem Solving</h3>
        <p>Solving logic problems and making ideas come to life</p>
      </div>
    </div>
  </div>
</div>
<Mycarousel />
<LangugageCarousel />
</section>

  );
};

export default Services;
