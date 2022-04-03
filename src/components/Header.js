import React from 'react';

function Header() {
    return (
        <div className="header header-transparent dark-text">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <nav id="navigation" className="navigation navigation-landscape">
                            <div className="nav-header">
                                <a className="nav-brand" href="index.php">
                                    <img src="img/techninza-logo.png" className="logo" alt="" />
                                </a>
                                <div className="nav-toggle"></div>
                            </div>
                            <div className="nav-menus-wrapper">
                                <ul className="nav-menu">

                                    <li className="active"><a href="index.php">Home</a>

                                    </li>

                                    <li><a href="#">Explore<span className="submenu-indicator"></span></a>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><a href="#">Search Job<span className="submenu-indicator"></span></a>
                                                <ul className="nav-dropdown nav-submenu">
                                                    <li><a href="search-job-grid-1.html">Search Job 01</a></li>
                                                    <li><a href="search-job-grid-2.html">Search Job 02</a></li>
                                                    <li><a href="search-job-grid-3.html">Search Job 03</a></li>
                                                    <li><a href="search-job-list-1.html">Search Job List 01</a></li>
                                                    <li><a href="search-job-list-2.html">Search Job List 02</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Services<span className="submenu-indicator"></span></a>
                                                <ul className="nav-dropdown nav-submenu">
                                                    <li><a href="search-services.html">Search Services 01</a></li>
                                                    <li><a href="search-services-grid-2.html">Search Services 02</a></li>
                                                    <li><a href="search-services-list.html">Search Services List</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Freelancers<span className="submenu-indicator"></span></a>
                                                <ul className="nav-dropdown nav-submenu">
                                                    <li><a href="search-freelancers.html">Search Freelancers</a></li>
                                                    <li><a href="search-freelancers-grid-2.html">Search Freelancers 02</a></li>
                                                    <li><a href="search-freelancers-list.html">Search Freelancers List</a></li>
                                                    <li><a href="freelancer-detail.html">Freelancer Detail</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Candidates<span className="submenu-indicator"></span></a>
                                                <ul className="nav-dropdown nav-submenu">
                                                    <li><a href="search-candidates.html">Search Canddates</a></li>
                                                    <li><a href="search-candidates-list.html">Search Candidates List</a></li>
                                                    <li><a href="candidate-detail.html">Candidate Detail</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Employers<span className="submenu-indicator"></span></a>
                                                <ul className="nav-dropdown nav-submenu">
                                                    <li><a href="search-employers.html">Search Employers</a></li>
                                                    <li><a href="search-employers-list.html">Search Employers List</a></li>
                                                    <li><a href="employer-detail.html">Employer Detail</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Detail Page<span className="submenu-indicator"></span></a>
                                                <ul className="nav-dropdown nav-submenu">
                                                    <li><a href="job-detail-1.html">Job Detail 01</a></li>
                                                    <li><a href="job-detail-2.html">Job Detail 02</a></li>
                                                    <li><a href="job-detail-3.html">Job Detail 03</a></li>
                                                    <li><a href="service-detail.html">Service Detail</a></li>
                                                    <li><a href="project-detail.html">Project Detail</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="advance-search-1.html">Advance Search 01</a></li>
                                            <li><a href="advance-search-2.html">Advance Search 02</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="dashboard.html">Dashboard</a></li>

                                    <li><a href="#">Pages<span className="submenu-indicator"></span></a>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><a href="about.php">About Us</a></li>
                                            <li><a href="blog.html">Blogs Page</a></li>
                                            <li><a href="blog-detail.html">Blog Detail</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="components.html">Components</a></li>
                                            <li><a href="faq.html">FAQ's</a></li>
                                            <li><a href="checkout.html">CheckOut</a></li>
                                        </ul>
                                    </li>

                                </ul>

                                <ul className="nav-menu nav-menu-social align-to-right">

                                    <li>
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#upload-resume">
                                            <i className="fa fa-upload mr-1"></i>Upload Resume
                                        </a>
                                    </li>
                                    <li className="add-listing dark-bg">
                                        <a href="#" data-toggle="modal" data-target="#login">
                                            <i className="ti-user mr-1"></i> Sign in
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;