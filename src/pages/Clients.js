import React from "react";
import PageTitle from "../global/PageTitle";
import OurClients from "../components/Client/OurClients";
import { Box } from "@mui/material";
import ClientsTestimonial from "../components/Client/ClientsTestimonial";
import SEO from "../global/SEO/SEO";

function Clients() {
  return (
    <>
      <SEO title="Client - Custom Software App development Company" />
      <PageTitle
        title={`Client`}
        description={`
          We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Box
        sx={{
          py: {
            sm: 5,
            lg: 6,
          },
        }}
      >
        <OurClients />
        <ClientsTestimonial />
      </Box>
    </>
  );
}

export default Clients;
