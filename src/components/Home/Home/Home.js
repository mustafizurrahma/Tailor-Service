import React from 'react';
import Navbars from '../Navbar/Navbars'
import Footer from '../Footer/Footer'
import Sliders from '../Sliders/Sliders'
import ContactUs from '../ContactUs/ContactUs'
const Home = () => {
    return (
        <>
           <Navbars></Navbars>
           <Sliders></Sliders>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </>
    );
};

export default Home;