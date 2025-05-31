import profile from '../asset/moii.png';

const About = () => {
  return (
    <section id="about" className="about-section container py-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img  src={profile} alt="Me" className="img-fluid rounded"style={{width: '100%',maxWidth: '400px', }}/>
        </div>

        <div className="col-12 col-md-6 text-center text-md-start">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
            <div className="icon-line"></div>
            <p className="  mb-0">About Me</p>
          </div>

          <h2 className="mb-3">Who am I?</h2>
          <p>
            I am a passionate developer with a keen interest in creating beautiful and functional web applications. 
            My journey in web development has been driven by a love for problem-solving and a desire to build impactful digital experiences.
          </p>
          <p>
            With a background in computer science, I have honed my skills in various programming languages and frameworks. 
            I thrive on challenges and enjoy learning new technologies to stay ahead in the ever-evolving tech landscape.
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
