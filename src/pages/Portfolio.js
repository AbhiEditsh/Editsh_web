import React from "react";
import PageTitle from "../global/PageTitle";
import Portfolios from "../components/Portfolio/Portfolios";
import SEO from "../global/SEO/SEO";

function Portfolio() {
  return (
    <>
      <SEO title="Portfolio -Custom Software App development Company" />
      <PageTitle
        title={`Portfolio`}
        description={`We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Portfolios />
    </>
  );
}

export default Portfolio;
