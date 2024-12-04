import React, { useState, useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import Footer from "./global/Footer";
import Header from "./global/Header";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Faq from "./components/OherPages/Faq";
import Career from "./components/OherPages/Career";
import Technology from "./pages/Technology";
import Frontend from "./components/Technology/Frontend";
import Backend from "./components/Technology/Backend";
import Blog from "./pages/Blog";
import BlogsDetails from "./global/BlogsDetails";
import Mobile from "./components/Technology/Mobile/Mobile";
import IosAppDevelopmet from "./components/Technology/Mobile/IosAppDevelopmet/IosAppDevelopmet";
import AndroidAppDevelopment from "./components/Technology/Mobile/AndroidAppDevelopment/AndroidAppDevelopment";
import ReactNativeAppDevelopment from "./components/Technology/Mobile/ReactNativeAppDevelopment/ReactNativeAppDevelopment";
import Term from "./components/OherPages/Term";
import Policy from "./components/OherPages/Policy";
import Loader from "./global/Loader";
import FlutterAppdeveopment from "./components/Technology/Mobile/FlutterAppdevelopment/FlutterAppdeveopment";
import AngularJsDeveloment from "./components/Technology/Frontend/AngularJsDevelopment/AngularJsDeveloment";
import ReactjsDevelopment from "./components/Technology/Frontend/ReactJsDevelopment/ReactjsDevelopment";
import VueJsdevelopment from "./components/Technology/Frontend/VueJsDevelopment/VueJsdevelopment";
import NodejsDevelopment from "./components/Technology/Database/NodejsDevelopment/NodejsDevelopment";
import NetDevelopment from "./components/Technology/Database/NetDevelopment/NetDevelopment";
import PhythonDevelopment from "./components/Technology/Database/PhythonDevelopment/PhythonDevelopment";
import NoPageFound from "./global/NoPageFound";
import GetATouch from "./pages/GetATouch";
import Portifolio from "./pages/Portfolio";
import DefaultSEO from "./global/SEO/DefaultSEO ";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <ScrollToTop />
      <DefaultSEO />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/client" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/career" element={<Career />} />

          {/* Blogs */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogsDetails />} />

          {/* Portfolio*/}
          <Route path="/portfolio" element={<Portifolio />} />

          {/* Technology */}
          <Route path="/technology" element={<Technology />} />

          {/* ==========Mobile======== */}
          <Route path="/mobile" element={<Mobile />} />
          <Route
            path="/mobile/iosAppDevelopment"
            element={<IosAppDevelopmet />}
          />
          <Route
            path="/mobile/androidAppDevelopment"
            element={<AndroidAppDevelopment />}
          />
          <Route
            path="/mobile/reactNativeAppDevelopment"
            element={<ReactNativeAppDevelopment />}
          />
          <Route
            path="/mobile/FlutterAppDevelopment"
            element={<FlutterAppdeveopment />}
          />

          {/*=================== Frontend ============*/}
          <Route path="/frontend" element={<Frontend />} />
          <Route
            path="/frontend/angularJsDevelopment"
            element={<AngularJsDeveloment />}
          />
          <Route
            path="/frontend/reactJsDevelopment"
            element={<ReactjsDevelopment />}
          />
          <Route
            path="/frontend/vueJsDevelopment"
            element={<VueJsdevelopment />}
          />

          {/*=================== Backend =================*/}
          <Route path="/backend" element={<Backend />} />
          <Route
            path="backend/nodejsDevelopment"
            element={<NodejsDevelopment />}
          />
          <Route path="backend/netDevelopment" element={<NetDevelopment />} />
          <Route
            path="backend/pythonDevelopment"
            element={<PhythonDevelopment />}
          />

          <Route path="/term" element={<Term />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/qoute" element={<GetATouch />} />

          {/* Fallback Route */}
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
