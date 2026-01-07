import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import AboutUs from "../pages/About-Us";
import Contact from "../pages/Contact";
import Partners from "../pages/Partners";
import Services from "../pages/Services";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

     
     
    
    </BrowserRouter>
  );
};

export default AppRoutes;
