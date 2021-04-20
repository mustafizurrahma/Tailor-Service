import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:8000/services')
         .then((res) => {
            setServices(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <section className="services pt-5">
         <Container>
            <div className="title mb-5">
               <h3>Our Services</h3>
            </div>
            <Row>
               {services.map((service) => (
                  <Col lg={4} md={6} key={service._id}>
                     <Service {...service} />
                  </Col>
               ))}
            </Row>
         </Container>
      </section>
   );
};

export default Services;
