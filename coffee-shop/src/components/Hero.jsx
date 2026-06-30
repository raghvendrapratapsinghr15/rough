// Hero.jsx — Full-screen hero / landing section
import React from "react";
import "./Hero.css";

const Hero = () => {
  // Smooth-scroll down to the menu section
  const goToMenu = () =>
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      {/* Decorative overlay gradient */}
      <div className="hero__overlay" />

      <div className="hero__content">
        {/* Badge */}
        <span className="hero__badge">🌿 Freshly Roasted Daily</span>

        {/* Main heading */}
        <h1 className="hero__heading">
          Fresh Coffee <br /> Every Day ☕
        </h1>

        {/* Description */}
        <p className="hero__desc">
          Crafted with love from the world's finest beans — your perfect cup
          awaits at Coffee House. Rich flavors, warm vibes, always fresh.
        </p>

        {/* CTA buttons */}
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={goToMenu}>
            Order Now
          </button>
          <button
            className="hero__btn hero__btn--outline"
            onClick={() =>
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Menu
          </button>
        </div>

        {/* Stats row */}
        <div className="hero__stats">
          <div className="hero__stat">
            <strong>50+</strong>
            <span>Blends</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>4.9★</strong>
            <span>Rating</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>10K+</strong>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" onClick={goToMenu}>
        <div className="hero__scroll-dot" />
      </div>
    </section>
  );
};

export default Hero;
