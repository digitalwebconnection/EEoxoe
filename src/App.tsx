
import { Routes, Route } from "react-router-dom";

import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeMain from "./component/Homepage/HomeMain";
import ProjectMain from "./component/projectpage/ProjectMain";
import ServicesMain from "./component/Services/ServicesMain";
import CaseStudiesMain from "./component/CaseStudies/CaseStudiesMain";
import ContactUsMain from "./component/Contact/ContactUsMain";

const BlogPage = () => <div className="min-h-[60vh] p-8">Blog Page</div>;

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/projects" element={<ProjectMain />} />
          <Route path="/case-Studies" element={<CaseStudiesMain />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact-us" element={<ContactUsMain />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
