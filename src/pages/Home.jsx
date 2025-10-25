import './Home.css';

const Home = () => {
  const coffeeProducts = [
    {
      name: "MIELLE COUNTERTOP",
      brand: "By Mielle",
      price: "$ 240.099",
      image: "☕"
    },
    {
      name: "DELONGHI MAESTOSA",
      brand: "By Delonghi",
      price: "$ 257.199",
      image: "☕"
    },
    {
      name: "PHILIPS ESPRESSO",
      brand: "By Philips",
      price: "$ 260.299",
      image: "☕"
    },
    {
      name: "NESPRESSO GRAN",
      brand: "By Nespressomaster",
      price: "$ 245.899",
      image: "☕"
    }
  ];

  const brands = [
    "Peet's Coffee", "STUMPTOWN", "Tim Hortons", "STARBUCKS", "DUNKIN' DONUTS", "COSTA"
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>MAJESTY COFFEE</h1>
            <p>
              Discover the secret to making coffee shop worthy drinks at home 
              with a coffee espresso machine.
            </p>
            <button className="explore-btn">Explore Coffee Machine →</button>
          </div>
          <div className="hero-image">
            <div className="coffee-machine">
              <div className="machine-body">☕</div>
              <div className="machine-info">
                <h3>NOVA SIMONELLI</h3>
                <p>Nuova Simonelli New Appia 5 is equipped with a semi-automatic brewing system and a boiler-type heat exchanger.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="trusted-brands">
        <h2>TRUSTED BY INDUSTRY LEADERS</h2>
        <p>With a legacy built on integrity and excellence, we've earned the trust of industry experts worldwide.</p>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">{brand}</div>
          ))}
        </div>
      </section>

      {/* Coffee Machines Section */}
      <section className="coffee-machines">
        <div className="section-header">
          <h2>EXPLORE OUR COFFEE MACHINE</h2>
          <p>Make the perfect cup every time with our precision coffee machines.</p>
          <div className="navigation-arrows">
            <button className="nav-arrow">←</button>
            <button className="nav-arrow">→</button>
          </div>
        </div>
        
        <div className="products-grid">
          {coffeeProducts.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3>{product.name}</h3>
              <p className="brand">{product.brand}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="products-description">
          <p>We offer various types of coffee machines, from simple to sophisticated, which can meet the needs of home coffee enthusiasts to professionals.</p>
          <button className="see-more-btn">See More</button>
        </div>
      </section>
    </div>
  );
};

export default Home;