import React from 'react';
import '../ContactUs/ContactUs.css'
const ContactUs = () => {
    return (
        <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Contact Us</h5>
                    <h1 className="text-brand">Let us know what you think of our service</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="row">

                       <div className="form-group col-md-6">
                           <input type="text" className="form-control" placeholder="First Name *"/>
                       </div>

                       <div className="form-group col-md-6">
                           <input type="text" className="form-control" placeholder="Last Name *"/>
                       </div>

                       <div className="form-group col-md-6">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>

                       <div className="form-group col-md-6">
                           <input type="number" className="form-control" placeholder="Phone Number *"/>
                       </div>

                       <div className="form-group col-md-12">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       
                       <div className="form-group">
                           <button type="button" className="btn btn-brand"> Submit </button>
                       </div>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default ContactUs;