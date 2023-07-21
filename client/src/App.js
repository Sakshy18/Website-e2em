import Navbar from "./Components/Navbar";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Video from "./Components/Video";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import PreBook from "./Pages/PreBook";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes >
        <Route path="/" element={<><Video /><Home/></>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/book" element={<PreBook/>} />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
