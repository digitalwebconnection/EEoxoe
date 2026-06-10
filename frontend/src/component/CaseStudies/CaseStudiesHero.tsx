
import "../CaseStudies/hero-webteck.css";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="container mx-auto pt-20 px-6 lg:px-0">
        <div className="hero-grid">
          
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot-icon" />
              Welcome To Exochos
            </div>

            <h1 className="hero-title">
              Empowering Businesses
              <br />
              Through <span>Technology</span>
            </h1>

            <p className="hero-text">
              Exochos is a leading IT agency dedicated to empowering businesses
              through the strategic implementation of technology. We are
              passionate about helping our clients achieve their goals.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">View All Services</button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image-wrapper">
            <img
              src="https://divayshakati.com/wp-content/uploads/2024/09/gto-a4-img-1.webp"
              alt="IT Agency"
              className="hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
