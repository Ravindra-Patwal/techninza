import React from 'react'

function Featuredemp() {
    return (
        <section className="featured-employers-wrap dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-5">
                        <h5 className="mb-0">Featured Employers:</h5>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-7">
                        <div className="owl-carousel employer-brans owl-loaded owl-drag" id="brands">
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transform: 'translate3d(-414px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1104px' }}>
                                    <div className="owl-item" style={{ width: '138px' }}>
                                        <div className="single-employers">
                                            <img src="img/airbnb.png" className="img-fluid" alt="" />
                                        </div></div><div className="owl-item" style={{ width: '138px' }}><div className="single-employers">
                                            <img src="img/amazon.png" className="img-fluid" alt="" />
                                        </div></div><div className="owl-item" style={{ width: '138px' }}><div className="single-employers">
                                            <img src="img/googl.png" className="img-fluid" alt="" />
                                        </div></div><div className="owl-item active" style={{ width: '138px' }}><div className="single-employers">
                                            <img src="img/lenovo.png" className="img-fluid" alt="" />
                                        </div></div><div className="owl-item active" style={{ width: '138px' }}><div className="single-employers">
                                            <img src="img/pp.png" className="img-fluid" alt="" />
                                        </div></div><div className="owl-item active" style={{ width: '138px' }}><div className="single-employers">
                                            <img src="img/samsung.png" className="img-fluid" alt="" />
                                        </div></div><div className="owl-item active" style={{ width: '138px' }}><div className="single-employers">
                                            <img src="img/slack.png" className="img-fluid" alt="" />
                                        </div></div><div className="owl-item active" style={{ width: '138px' }}><div className="single-employers">
                                            <img src="img/spotify.png" className="img-fluid" alt="" />
                                        </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled" /></div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Featuredemp