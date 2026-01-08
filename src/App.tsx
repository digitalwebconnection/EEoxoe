import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeMain from "./component/Homepage/HomeMain";
import ProjectMain from "./component/projectpage/ProjectMain";
import ServicesMain from "./component/Services/ServicesMain";
import CaseStudiesMain from "./component/CaseStudies/CaseStudiesMain";
import ContactUsMain from "./component/Contact/ContactUsMain";
import BlogMain from "./component/Blog/BlogMain";
import ProductDetailsPage from "./component/projectpage/ProductDetailsPagesma";



export default function App() {
  return (
    <div className="scroll-smooth">
      <Header />  
      <main>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/product" element={<ProjectMain />} />
           <Route path="/products/:productId" element={<ProductDetailsPage/>} />
          <Route path="/case-Study" element={<CaseStudiesMain />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/contact-us" element={<ContactUsMain />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
