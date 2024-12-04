// components/DefaultSEO.js
import React from "react";
import { Helmet } from "react-helmet";

const DefaultSEO = () => {
  return (
    <Helmet>
      <title>EDITSH</title>
      <meta
        name="description"
        content="EDITSH Technology provides cutting-edge software development, IT consulting, and digital transformation services. Drive growth with AI, cloud, and cybersecurity solutions tailored for your business."
      />
      <meta
        name="keywords"
        content="technology, software development, IT consulting, cloud computing, AI, machine learning, cybersecurity, data analytics, digital transformation, EDITSH Technology, innovative solutions"
      />
      <meta name="author" content="EDITSH" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default DefaultSEO;
