import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/aboutpage/AboutPage";
import Footer from "./components/Footer";
import TransportService from "./components/servicepage/transportservice/TransportService";
import WarehouseService from "./components/servicepage/warehouseservice/WarehouseService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/transport" element={<TransportService />} />
          <Route path="/warehouse" element={<WarehouseService/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
