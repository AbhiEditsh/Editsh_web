import React, { useRef } from "react";
import Heroslider from "../components/Home/Heroslider";
import Moreabout from "../components/Home/Moreabout";
import Whychooseus from "../components/Home/Whychooseus";
import Ourservices from "../components/Home/Ourservices";
import Counter from "../components/Home/Counter";
import Getintouch from "../global/Getintouch";
// import OurClients from "../components/Client/OurClients";
import Blogs from "../components/Blogs/Blogs";
import Horizontal from "../components/Home/Horizontal";
import ClientsTestimonil from "../components/Client/ClientsTestimonil";
import SEO from "../global/SEO/SEO";

function Home() {
  const getInTouchRef = useRef(null);

  return (
    <>
      <SEO
        title="EDITSH -Custom Software App development Company"/>
      <Heroslider getInTouchRef={getInTouchRef} />
      <Moreabout />
      <Whychooseus />
      <Ourservices />
      <Counter />
      <Horizontal />
      <ClientsTestimonil />

      {/* <OurClients /> */}
      <Getintouch ref={getInTouchRef} />
      <Blogs />
    </>
  );
}

export default Home;
