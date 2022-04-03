import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import Category from "./components/Category";
import Website from "./components/Website";
import Mobileapp from "./components/Mobileapp";
import Listing from "./components/Listing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Latestnews from "./components/Latestnews";
import Subscribe from "./components/Subscribe";
import Featuredemp from "./components/Featuredemp";


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Featuredemp />
      <Category />
      <Website />
      <Mobileapp />
      <Listing />
      <Services />
      <Testimonials />
      <Latestnews />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
