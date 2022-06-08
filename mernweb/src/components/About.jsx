import React from 'react';

const About = () => {
    return(
        <div>
            <section id="about">
                <div className="container my-4 py-5">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <img src="assets/about1.jpg" alt="About" className='w-75 mt-5' />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="dispaly-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className='w-50'/>
                            <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Possimus in suscipit tempora qui, beatae aliquam unde ab. 
                             Iusto nam commodi eligendi blanditiis nesciunt quam, eos mollitia provident 
                             incidunt praesentium reiciendis voluptate totam maxime minima minus ducimus! 
                             Corporis quis perferendis recusandae et neque, ipsa earum?
                             Maiores rem est animi quo recusandae.</p>
                             <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                             <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;