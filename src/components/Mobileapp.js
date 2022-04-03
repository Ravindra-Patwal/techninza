import React from 'react'

function Mobileapp() {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-6">
                        <div className="_setup_process">
                            <h2>Mobile App <span className="theme-cl-2">Development</span></h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                        <div className="btn-box clearfix mt-5">
                            <a href="index.html" className="download-btn play-store">
                                <i className="fa fa-android"></i>
                                <span>Download on</span>
                                <h3>Google Play</h3>
                            </a>

                            <a href="index.html" className="download-btn app-store">
                                <i className="fa fa-apple"></i>
                                <span>Download on</span>
                                <h3>App Store</h3>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <img src="img/app.png" className="img-fluid" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Mobileapp