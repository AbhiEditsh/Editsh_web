import React from "react";
import Aboutsection from "../components/About/Aboutsection";
import Pagetitle from "../global/Pagetitle";
import BestOfOurFeatures from "../components/About/BestOfOurFeatures";
import Getintouch from "../global/Getintouch";
import SEO from "../global/SEO/SEO";
function About() {
  return (
    <>
     <SEO
        title="EDITSH -Custom Software App development Company"/>
      <Pagetitle
        title={`About Us`}
        description={`
        We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      {/* About Section */}
      <Aboutsection />
      {/* Best of Our Features */}
      <BestOfOurFeatures />
      {/* Get in tTOuch */}
      <Getintouch />
    </>
  );
}

export default About;
