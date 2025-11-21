import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeMain from "./component/Homepage/HomeMain";
import ProjectMain from "./component/projectpage/ProjectMain";

// Temporary simple pages – replace with your real components later
const ServicesPage = () => <div className="min-h-[60vh] p-8">Services Page</div>;
const SolutionsPage = () => <div className="min-h-[60vh] p-8">Solutions Page</div>;
const BlogPage = () => <div className="min-h-[60vh] p-8">Blog Page</div>;
const ContactPage = () => <div className="min-h-[60vh] p-8">Contact Page</div>;

function App() {
  return (
    <>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/projects" element={<ProjectMain />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
