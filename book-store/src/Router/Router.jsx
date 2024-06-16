import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'
import Nav from '../Components/Nav'
import Footer from "../Components/Footer/Footer";
export default  function Router(){
    return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}