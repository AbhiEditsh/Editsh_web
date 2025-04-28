import React, { useState, useEffect, lazy, Suspense } from "react";
import Confetti from "react-confetti";
import "./App.css";
import "aos/dist/aos.css";
import Footer from "./global/Footer";
import Header from "./global/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./global/Loader";
import DefaultSEO from "./global/SEO/DefaultSEO ";

// Lazy-loaded Components
const About = lazy(() => import("./pages/About"));
const Clients = lazy(() => import("./pages/Clients"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Faq = lazy(() => import("./components/OherPages/Faq"));
const Career = lazy(() => import("./components/OherPages/Career"));
const Technology = lazy(() => import("./pages/Technology"));
const Frontend = lazy(() => import("./components/Technology/Frontend"));
const Backend = lazy(() => import("./components/Technology/Backend"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogsDetails = lazy(() => import("./global/BlogsDetails"));
const Mobile = lazy(() => import("./components/Technology/Mobile/Mobile"));
const IosAppDevelopmet = lazy(() => import("./components/Technology/Mobile/IosAppDevelopmet/IosAppDevelopmet"));
const AndroidAppDevelopment = lazy(() => import("./components/Technology/Mobile/AndroidAppDevelopment/AndroidAppDevelopment"));
const ReactNativeAppDevelopment = lazy(() => import("./components/Technology/Mobile/ReactNativeAppDevelopment/ReactNativeAppDevelopment"));
const Term = lazy(() => import("./components/OherPages/Term"));
const Policy = lazy(() => import("./components/OherPages/Policy"));
const FlutterAppdeveopment = lazy(() => import("./components/Technology/Mobile/FlutterAppdevelopment/FlutterAppdeveopment"));
const AngularJsDeveloment = lazy(() => import("./components/Technology/Frontend/AngularJsDevelopment/AngularJsDeveloment"));
const ReactjsDevelopment = lazy(() => import("./components/Technology/Frontend/ReactJsDevelopment/ReactjsDevelopment"));
const VueJsdevelopment = lazy(() => import("./components/Technology/Frontend/VueJsDevelopment/VueJsdevelopment"));
const NodejsDevelopment = lazy(() => import("./components/Technology/Database/NodejsDevelopment/NodejsDevelopment"));
const NetDevelopment = lazy(() => import("./components/Technology/Database/NetDevelopment/NetDevelopment"));
const PhythonDevelopment = lazy(() => import("./components/Technology/Database/PhythonDevelopment/PhythonDevelopment"));
const NoPageFound = lazy(() => import("./global/NoPageFound"));
const Portifolio = lazy(() => import("./pages/PortFolio"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const hasShownConfetti = localStorage.getItem("hasShownConfetti");
    if (!hasShownConfetti) {
      setShowConfetti(true); 
      localStorage.setItem("hasShownConfetti", "true");
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <Header />
      <ScrollToTop />
      <DefaultSEO />
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
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

            {/* Portfolio */}
            <Route path="/portfolio" element={<Portifolio />} />

            {/* Technology */}
            <Route path="/technology" element={<Technology />} />

            {/* Mobile */}
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/mobile/iosAppDevelopment" element={<IosAppDevelopmet />} />
            <Route path="/mobile/androidAppDevelopment" element={<AndroidAppDevelopment />} />
            <Route path="/mobile/reactNativeAppDevelopment" element={<ReactNativeAppDevelopment />} />
            <Route path="/mobile/FlutterAppDevelopment" element={<FlutterAppdeveopment />} />

            {/* Frontend */}
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/frontend/angularJsDevelopment" element={<AngularJsDeveloment />} />
            <Route path="/frontend/reactJsDevelopment" element={<ReactjsDevelopment />} />
            <Route path="/frontend/vueJsDevelopment" element={<VueJsdevelopment />} />

            {/* Backend */}
            <Route path="/backend" element={<Backend />} />
            <Route path="/backend/nodejsDevelopment" element={<NodejsDevelopment />} />
            <Route path="/backend/netDevelopment" element={<NetDevelopment />} />
            <Route path="/backend/pythonDevelopment" element={<PhythonDevelopment />} />

            <Route path="/term" element={<Term />} />
            <Route path="/policy" element={<Policy />} />

            {/* Fallback Route */}
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </Suspense>
      )}
      <Footer />
    </>
  );
}

export default App;
