import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}
