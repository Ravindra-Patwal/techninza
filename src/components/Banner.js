import React from "react";

function Banner() {
    return (
        <div class="hero-banner full jumbo-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8">
                        <a href="#" className="header-promo w-inline-block">
                            <div className="label">NEW</div><div className="header-promo-text">Techninza is now in Australia</div></a>
                        <h1>Hire Technology Ninjas in Your City!</h1>

                        <form className="search-big-form banner-search shadow mt-3">
                            <div className="row m-0">
                                <div className="col-lg-5 col-md-5 col-sm-12 p-0">
                                    <div className="form-group">
                                        <i className="ti-search"></i>
                                        <input type="text" className="form-control b-0 b-r l-radius" placeholder="Job Title or Keywords" />
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-4 col-sm-12 p-0">
                                    <div className="form-group">
                                        <i className="ti-search"></i>
                                        <select id="jb-category" className="js-states form-control b-0 select2-hidden-accessible" data-select2-id="jb-category" tabindex="-1" aria-hidden="true">
                                            <option value="" data-select2-id="2">&nbsp;</option>
                                            <option value="1">Accounting &amp; Finance</option>
                                            <option value="2">Telecommunications</option>
                                            <option value="3">IT Companies</option>
                                            <option value="4">Art &amp; Design</option>
                                            <option value="5">Automotive Jobs</option>
                                            <option value="6">Banking Jobs</option>
                                            <option value="7">Education Training</option>
                                            <option value="8">Designing &amp; Multimedia</option>
                                        </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{ width: "265px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-jb-category-container"><span className="select2-selection__rendered" id="select2-jb-category-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select Category</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-3 col-sm-12 p-0">
                                    <button type="button" className="btn theme-bg full-width r-radius">Search</button>
                                </div>
                            </div>
                        </form>
                        <div className="featured-category light">
                            <ul>
                                <li>Browse Category:</li>
                                <li><a href="search-job.html" data-toggle="tooltip" data-original-title="Banking" data-tooltip-id="75e95382-3def-de5c-2bdb-d362c2c2db4d">Website</a></li>
                                <li><a href="search-job.html" data-toggle="tooltip" data-original-title="Healthcare" data-tooltip-id="2482e3ed-ebb1-21f8-4b70-2965dc7dd135">Android Apps</a></li>
                                <li><a href="search-job.html" data-toggle="tooltip" data-original-title="Software" data-tooltip-id="72a8c11f-2628-2b01-855a-b9d681a13d15">IOS Apps</a></li>
                                <li><a href="search-job.html" data-toggle="tooltip" data-original-title="Automotive" data-tooltip-id="e2c64484-28c1-ee72-be1c-3df8b201edd7">IOT</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-4">
                        <img src="img/side-img.png" alt="latest property" className="img-fluid" />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Banner;