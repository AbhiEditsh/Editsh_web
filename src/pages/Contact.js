import React from "react";
import PageTitle from "../global/PageTitle";
import OurLocation from "../components/Contact/Ourlocation";
import ContactForm from "../components/Contact/ContactForm";
import SEO from "../global/SEO/SEO";

function Contact() {
  return (
    <>
      <SEO title="Contact - Custom Software App development Company" />
      <PageTitle
        title={`Contact Us`}
        description={`We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <OurLocation />
      <ContactForm />
    </>
  );
}

export default Contact;
