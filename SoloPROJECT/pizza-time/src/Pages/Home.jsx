import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/order");
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Pizza Time</h1>
            <p>Authentic Italian pizzas crafted with love using family recipes since 1995</p>
            <button className="hero-button" onClick={handleOrderNow}>
              Order Now
            </button>
          </div>
        </div>
        <img
          src="https://placehold.co/1600x900"
          alt="Wood-fired pizza fresh from the oven"
          className="hero-image"
        />
      </section>

      <section className="signature-section">
        <h2>Our Signature Pizzas</h2>
        <div className="pizza-grid">
          {[
            {
              title: "Classic Margherita",
              desc: "San Marzano tomatoes, fresh mozzarella, basil, and olive oil",
              price: "$12.99",
            },
            {
              title: "Spicy Pepperoni",
              desc: "Homemade spicy pepperoni, mozzarella, and our signature tomato sauce",
              price: "$14.99",
            },
            {
              title: "Truffle Mushroom",
              desc: "Wild mushrooms, fontina cheese, truffle oil, and rosemary",
              price: "$16.99",
            },
          ].map((pizza, i) => (
            <div key={i} className="pizza-card">
              <img src="https://placehold.co/600x400" alt={pizza.title} />
              <div className="pizza-content">
                <h3>{pizza.title}</h3>
                <p>{pizza.desc}</p>
                <div className="pizza-footer">
                  <span>{pizza.price}</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-content">
          <div className="story-image">
            <img src="https://placehold.co/600x400" alt="Chef preparing pizza" />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 1995 by Italian immigrants, Pizza Time brings authentic Neapolitan pizza-making traditions to your table.
            </p>
            <p>
              We source the finest ingredients from local farmers and Italian producers to ensure every pizza delivers an unforgettable taste experience.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {["Sarah J.", "Michael T.", "Emma K."].map((name, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar" />
                <div>
                  <h4>{name}</h4>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p>
                {i === 0
                  ? "The best pizza I've had outside of Naples!"
                  : i === 1
                  ? "The Truffle Mushroom pizza is absolutely divine."
                  : "I love how they accommodate dietary restrictions."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Ready to Experience Authentic Pizza?</h2>
        <p>
          Join our pizza family today and get 15% off your first order when you sign up
          for our newsletter!
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
