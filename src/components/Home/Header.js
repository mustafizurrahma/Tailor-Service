import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
   return (
      <section className="header">
         <Container className="header-info d-flex justify-content-center align-items-center">
            <div className="header-content text-center text-uppercase">
               <h1>Tailor Service?</h1>
               <p>We provide service to make clothes!</p>
               <h6>Call Now +8801749005073</h6>
               <button className="btn custom-btn mt-3">More Info</button>
            </div>
         </Container>
      </section>
   );
};

export default Header;
