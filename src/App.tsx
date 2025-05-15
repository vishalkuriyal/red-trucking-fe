import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/aboutpage/AboutPage";
import Footer from "./components/Footer";
import TransportService from "./components/servicepage/transportservice/TransportService";
import WarehouseService from "./components/servicepage/warehouseservice/WarehouseService";
import LogisticService from "./components/servicepage/logisticservice/LogisticService";
import TransloadingService from "./components/servicepage/transloadingservice/TransloadingService";
import RedDrivers from "./components/reddrivers/RedDrivers";
import OwnerOperater from "./components/owneroperater/OwnerOperater";
import CompanyDriver from "./components/companydriver/CompanyDriver";
import BlogPage from "./components/blogpage/BlogPage";
import BlogPost from "./components/blogpage/BlogPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/transport" element={<TransportService />} />
          <Route path="/warehousing" element={<WarehouseService />} />
          <Route path="/logistic" element={<LogisticService />} />
          <Route path="/transloading" element={<TransloadingService />} />
          <Route path="/red-drivers" element={<RedDrivers />} />
          <Route path="/owner-operator" element={<OwnerOperater />} />
          <Route path="/company-driver" element={<CompanyDriver />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
