import React from 'react'

function Latestnews() {
    return (
        <section className="min-sec">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-9">
                        <div className="sec-heading">
                            <h2>Latest Updates &amp; News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>

                <div className="row">


                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="blog-wrap-grid">

                            <div className="blog-thumb">
                                <a href="blog-detail.html"><img src="img/b-1.jpg" className="img-fluid" alt="" /></a>
                            </div>

                            <div className="blog-info">
                                <span className="post-date">By Shilpa Sheri</span>
                            </div>

                            <div className="blog-body">
                                <h4 className="bl-title"><a href="blog-detail.html">Why people choose listio for own properties</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                            </div>

                            <div className="blog-cates">
                                <ul>
                                    <li><a href="#" className="blog-cates-list style-4">Health</a></li>
                                    <li><a href="#" className="blog-cates-list style-3">Business</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="blog-wrap-grid">

                            <div className="blog-thumb">
                                <a href="blog-detail.html"><img src="img/b-2.jpg" className="img-fluid" alt="" /></a>
                            </div>

                            <div className="blog-info">
                                <span className="post-date">By Shaurya</span>
                            </div>

                            <div className="blog-body">
                                <h4 className="bl-title"><a href="blog-detail.html">List of benifits and impressive listeo services</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                            </div>

                            <div className="blog-cates">
                                <ul>
                                    <li><a href="#" className="blog-cates-list style-1">Banking</a></li>
                                    <li><a href="#" className="blog-cates-list style-5">Stylish</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="blog-wrap-grid">

                            <div className="blog-thumb">
                                <a href="blog-detail.html"><img src="img/b-3.jpg" className="img-fluid" alt="" /></a>
                            </div>

                            <div className="blog-info">
                                <span className="post-date">By Admin K.</span>
                            </div>

                            <div className="blog-body">
                                <h4 className="bl-title"><a href="blog-detail.html">What people says about listio properties</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                            </div>

                            <div className="blog-cates">
                                <ul>
                                    <li><a href="#" className="blog-cates-list style-1">Fashion</a></li>
                                    <li><a href="#" className="blog-cates-list style-2">Wedding</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Latestnews