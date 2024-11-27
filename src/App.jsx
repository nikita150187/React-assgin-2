
import { Product1, Product2, Product3, Product4, Product5, } from "../src/componants/product.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from  "./pages/Navbar.jsx";



function App(){
  return (
  <>
  <BrowserRouter>
       <Navbar></Navbar>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
       </Routes>
       </BrowserRouter>
       
    </>
  );
  }
  export default App;
