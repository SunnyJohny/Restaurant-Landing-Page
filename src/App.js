import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Menu from "./Components/Menu";
import POSPage from "./Components/Menu";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
         
          path="/menu"
          element={ <Menu open={true} />}
        /> */}
        <Route path="/menu" element={<Menu />} />

        <Route path="/about" element={<About />} />

        <Route path="/work" element={<Work />} />

        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>

    
  );
}

export default App;
