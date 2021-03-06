import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import AllSupport from './AllSupport';
import Testimonials from './Testimonials';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
   return (
      <div>
         <Header />
         <Services />
         <About />
         <AllSupport />
         <Testimonials />
         <Footer />
      </div>
   );
};

export default Home;
