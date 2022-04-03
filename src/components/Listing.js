import React from 'react'

function Listing() {
    return (
        <section className="image-bg text-center" style={{ background: "#353535 url(assets/img/banner-tag.jpg)" }} data-overlay={7}>
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2 className="text-light">Buy Ready Made Software</h2>
                            <h3 className="text-light">Visit The Best Job Portal in New York</h3>
                            <p className="text-light">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="counter-link">
                            <a href="#" className="btn btn-counter-light">Check Listings</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Listing