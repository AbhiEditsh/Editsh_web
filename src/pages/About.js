import React from "react";
import AboutSection from "../components/About/AboutSection";
import PageTitle from "../global/PageTitle";
import BestOfOurFeatures from "../components/About/BestOfOurFeatures";
import GetInTouch from "../global/GetInTouch";
import SEO from "../global/SEO/SEO";
function About() {
  return (
    <>
      <SEO title="EDITSH -Custom Software App development Company" />
      <PageTitle
        title={`About Us`}
        description={`
        We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <AboutSection />
      <BestOfOurFeatures />
      <GetInTouch />
    </>
  );
}

export default About;
