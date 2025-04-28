import React, { useRef } from "react";
import HeroSlider from "../components/Home/HeroSlider";
import MoreAbout from "../components/Home/MoreAbout";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import OurServices from "../components/Home/OurServices";
import Counter from "../components/Home/Counter";
import GetInTouch from "../global/GetInTouch";
import Blogs from "../components/Blogs/Blogs";
import Horizontal from "../components/Home/Horizontal";
import ClientsTestimonial from "../components/Client/ClientsTestimonial";
import SEO from "../global/SEO/SEO";

function Home() {
  const getInTouchRef = useRef(null);

  return (
    <>
      <SEO title="EDITSH -Custom Software App development Company" />
      <HeroSlider getInTouchRef={getInTouchRef} />
      <MoreAbout />
      <WhyChooseUs />
      <OurServices />
      <Counter />
      <Horizontal />
      <ClientsTestimonial />
      <GetInTouch ref={getInTouchRef} />
      <Blogs />
    </>
  );
}

export default Home;
