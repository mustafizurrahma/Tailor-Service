import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Testimonial from './Testimonial';
import axios from 'axios';

const Testimonials = () => {
   const [reviews, serReviews] = useState([]);

   useEffect(() => {
      axios
         .get('https://shrouded-river-68219.herokuapp.com/reviews')
         .then((res) => {
            serReviews(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <section className="testimonials my-5">
         <Container>
            <div className="title mb-5">
               <h3>Our Customer's Review</h3>
            </div>
            <Row>
               {reviews.map((review) => (
                  <Col md={6} key={review._id}>
                     <Testimonial {...review} />
                  </Col>
               ))}
            </Row>
         </Container>
      </section>
   );
};

export default Testimonials;
