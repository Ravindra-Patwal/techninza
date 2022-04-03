import React from 'react'

function Subscribe() {
    return (
        <section classname="call-to-act" style={{ background: '#2944c1 url(assets/img/landing-bg.png) no-repeat' }}>
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-7 col-md-8">
                        <div className="clt-caption text-center mb-4">
                            <h3 className="text-light">Subscribe Now!</h3>
                            <p className="text-light">Simple pricing plans. Unlimited web maintenance service</p>
                        </div>
                        <div className="inner-flexible-box subscribe-box">
                            <div className="input-group">
                                <input type="text" className="form-control large" placeholder="Enter your mail here" />
                                <button className="btn btn-subscribe bg-dark" type="button"><i className="fa fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe