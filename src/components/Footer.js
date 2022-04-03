import React from 'react';

function Footer() {
    return (
        <footer className="dark-footer skin-dark-footer">
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <img src="img/logo-light.png" className="img-fluid f-logo" width="120" alt="" />
                                <p>407-472 Rue Saint-Sulpice, Montreal<br />Quebec, H2Y 2V8</p>
                                <ul className="footer-bottom-social">
                                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#"><i className="ti-twitter"></i></a></li>
                                    <li><a href="#"><i className="ti-instagram"></i></a></li>
                                    <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Useful links</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">FAQs Page</a></li>
                                    <li><a href="#">Checkout</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Developers</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">Booking</a></li>
                                    <li><a href="#">Stays</a></li>
                                    <li><a href="#">Adventures</a></li>
                                    <li><a href="#">Author Detail</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Useful links</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Press</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Useful links</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Privacy &amp; Terms</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-12 col-md-12 text-center">
                            <p className="mb-0">© 2021 Workoo. Designd By <a href="https://themezhub.com">Themez Hub</a> All Rights Reserved</p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;