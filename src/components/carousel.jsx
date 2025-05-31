import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import figma from '../asset/figma.png';
import canva from '../asset/canvas.png';
import adobe from '../asset/adobe.png';
import tool from '../asset/tool.png';
import invision from '../asset/invision.png';
import illustrator from '../asset/illustrator.png';

function MyCarousel() {
  return (
    <section className="text-center py-5" id="design-tools">
    <h2 className="mb-4  text-white py-4">Design tools</h2>
    <Carousel className="my-carousel" interval={3000} indicators controls fade>
      {/* Slide 1 */}
      <Carousel.Item>
        <Row className="justify-content-center g-4">
          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={figma} alt="Figma" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>Figma</h3>
              <p>Collaborative UI design and prototyping tool.</p>
            </div>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={canva} alt="Canva" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>Canva</h3>
              <p>Easy drag-and-drop design tool for creatives.</p>
            </div>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={adobe} alt="Adobe XD" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>Adobe XD</h3>
              <p>Powerful tool for UI/UX and wireframing.</p>
            </div>
          </Col>
        </Row>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <Row className="justify-content-center g-4">
          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={invision} alt="InVision" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>InVision</h3>
              <p>Prototyping, feedback, and collaboration tool.</p>
            </div>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={illustrator} alt="Illustrator" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>Illustrator</h3>
              <p>Vector graphic design for logos and icons.</p>
            </div>
          </Col>

          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <div className="service-card text-white">
              <img src={tool} alt="Design Tool" style={{ width: '50%', margin: '0 auto 1rem', objectFit: 'contain' }} />
              <h3>Design Tool</h3>
              <p>Versatile tools for creative workflows.</p>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default MyCarousel;
