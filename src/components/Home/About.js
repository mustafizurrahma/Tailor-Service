import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../image/about.jpg';

const About = () => {
   return (
      <section className="about pt-5">
         <Container>
            <div className="title mb-5">
               <h3>About My Tailor Service</h3>
            </div>
            <Row className="align-items-center">
               <Col md={6}>
                  <img src={about} alt="about" />
               </Col>
               <Col md={6}>
                  <h6>The Art of Tailoring</h6>
                  <p className="text-justify mb-0">he world of fashion is characterized by glitz, glamour, innovation, and cutting-edge forward thinking. Each season, designers at every level, from haute couture to more accessible everyday brands, tap into their creative genius to craft collections that inspire the masses.

Consumers adore this. Clothing is one of the top expressions of the self, and being able to adorn yourself in garments that you feel align with your unique personal taste is a wonderful way to help others understand who you are deep inside!

However, buying things off the rack can be tricky. Things can feel perfectly fitted on one part of your body, but entirely loose or tight on another. While fashion designers do their best to sew clothes that fit the human body properly, this can be a challenge as we are all different shapes and sizes.
                  </p>
                  <button className="btn custom-btn mt-3">Read More</button>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default About;
