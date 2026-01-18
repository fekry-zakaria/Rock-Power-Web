
import { LanguageProvider } from './context/LanguageContext';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from './components/Footer';
const Home = lazy(() => import("./pages/Home"));
const AboutUS = lazy(() => import("./pages/About-Us"));
const Contact = lazy(() => import("./pages/Contact"));
const Partners = lazy (()=> import ("./pages/Partners") );
const Services = lazy (()=> import ("./pages/Services") );
function App() {
  return (
     <LanguageProvider>
     
      
    

    <Router>
      <div className="relative min-h-screen overflow-x-hidden bg-[#272727] ">
        
        <Navbar />

        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
              <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutUS />} />
            <Route path="/Contact" element={<Contact />} />
            
            <Route path="/Services" linked element={<Services/>} />
            
            <Route path="/Partners" element={<Partners />} />
           
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
        </LanguageProvider>
  );
}

export default App;