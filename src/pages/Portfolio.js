import React from "react";
import Pagetitle from "../global/Pagetitle";
import Portifolio from "../components/Portfolio/Portfolio";
import SEO from "../global/SEO/SEO";

function Portfolio() {
  return (
    <>
      <SEO title="Portfolio -Custom Software App development Company" />
      <Pagetitle
        title={`Portfolio`}
        description={`We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Portifolio />
    </>
  );
}

export default Portfolio;
