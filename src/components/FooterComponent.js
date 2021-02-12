import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-6">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/ourstory">Our Story</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/venue">Venue</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-6 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook" /></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="col-sm-4 text-sm-right text-center">
                        <a role="button" className="btn btn-link" href="tel:+12345678901"><i className="fa fa-phone" /> 123-456-7890</a><br />
                        <a role="button" className="btn btn-link" href="mailto:cafeCerv@ntes.co"><i className="fa fa-envelope-o" /> cafeCerv@ntes.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;