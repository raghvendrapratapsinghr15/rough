// Menu.jsx — Coffee menu section with product cards
import React, { useState } from "react";
import "./Menu.css";

// Coffee items data — easy to extend
const coffeeItems = [
  {
    id: 1,
    name: "Espresso",
    price: "₹120",
    desc: "Bold, rich, and intense — a classic single-origin espresso shot.",
    img: "/espresso.png",
    tag: "Classic",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "₹180",
    desc: "Velvety steamed milk and thick foam over a double espresso shot.",
    img: "/cappuccino.png",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Latte",
    price: "₹160",
    desc: "Silky smooth latte with beautiful milk art — comfort in a cup.",
    img: "/latte.png",
    tag: "Smooth",
  },
];

// Individual card component
const CoffeeCard = ({ item }) => {
  const [added, setAdded] = useState(false);

  // Simulate "Add to Cart" feedback
  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className="coffee-card">
      {/* Tag badge */}
      <span className="coffee-card__tag">{item.tag}</span>

      {/* Image */}
      <div className="coffee-card__img-wrap">
        <img src={item.img} alt={item.name} className="coffee-card__img" />
        <div className="coffee-card__img-overlay" />
      </div>

      {/* Info */}
      <div className="coffee-card__body">
        <h3 className="coffee-card__name">{item.name}</h3>
        <p className="coffee-card__desc">{item.desc}</p>

        <div className="coffee-card__footer">
          <span className="coffee-card__price">{item.price}</span>
          <button
            className={`coffee-card__btn ${added ? "coffee-card__btn--added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
};

const Menu = () => (
  <section id="menu" className="menu">
    {/* Section header */}
    <div className="menu__header">
      <span className="menu__label">Our Menu</span>
      <h2 className="menu__title">Handcrafted with Passion</h2>
      <p className="menu__subtitle">
        Every cup is freshly prepared using premium single-origin beans
        and time-honoured brewing techniques.
      </p>
    </div>

    {/* Cards grid */}
    <div className="menu__grid">
      {coffeeItems.map((item) => (
        <CoffeeCard key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default Menu;
