import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeMain from "./component/Homepage/HomeMain";
import ProjectMain from "./component/projectpage/ProjectMain";
import ServicesMain from "./component/Services/ServicesMain";
import CaseStudiesMain from "./component/CaseStudies/CaseStudiesMain";
import ContactUsMain from "./component/Contact/ContactUsMain";
import BlogMain from "./component/Blog/BlogMain";
import ProductDetailsPage from "./component/projectpage/ProductDetailsPagesma";
import BlogDetails from "./component/Blog/BlogDetails";
import AdminLogin from "./component/admin/AdminLogin";
import AdminDashboard from "./component/admin/AdminDashboard";



export default function App() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className="scroll-smooth relative">
      {!isAdminPath && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/product" element={<ProjectMain />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/case-Study" element={<CaseStudiesMain />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/contact-us" element={<ContactUsMain />} />
        </Routes>
      </main>
      {!isAdminPath && <Footer />}
    </div>
  );
}
