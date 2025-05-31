import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import html from '../asset/html-5.png';
import php from '../asset/php.png';
import javascript from '../asset/programing.png'; 
import clangugage from '../asset/c.png';
import typescript from '../asset/typescript.png';


function LangugageCarousel() {
  return (
    <section className="text-center py-5" id="design-tools">
    <h2 className="mb-4  text-white py-5">Programming Languages</h2>
    <Carousel className="my-carousel" interval={3000} indicators controls fade>
      {/* Slide 1 */}
      <Carousel.Item>
        <Row className="justify-content-center g-4">
          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={html} alt="Figma" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>HTML</h3>
              <p>The backbone markup language that structures content on the web.</p>
            </div>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={javascript} alt="Canva" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>Javascript</h3>
              <p>The scripting language that makes web pages interactive and dynamic.</p>
            </div>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={php} alt="Adobe XD" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>PHP</h3>
              <p>A server-side scripting language mainly used for building dynamic websites.</p>
            </div>
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row className="justify-content-center g-4">
          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={clangugage} alt="InVision" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>C++</h3>
              <p>A powerful low-level language used for system programming and hardware..</p>
            </div>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={typescript} alt="Illustrator" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>Typescript</h3>
              <p>A typed superset of JavaScript that adds static types for safer code.</p>
            </div>
          </Col>

        </Row>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default LangugageCarousel;
