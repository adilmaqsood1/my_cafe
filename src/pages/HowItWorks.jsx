import './HowItWorks.css';

const HowItWorks = () => {
  const specifications = [
    {
      title: "54MM PORTAFILTER STAINLESS",
      description: "54 mm stainless steel portafilter delivers full flavor with dual and single wall filters."
    },
    {
      title: "OPTIMAL EXTRACTION",
      description: "Low pressure pre-infusion followed by 9 bar extraction."
    },
    {
      title: "PRECISION HEATING",
      description: "Thermocoil heating system delivers 200°F with PID temperature control."
    }
  ];

  const benefits = [
    {
      title: "EUROPEAN STANDARD QUALITY",
      description: "We only supply coffee machines with the highest European quality standards, ensuring reliable and long-lasting performance.",
      icon: "🏆"
    },
    {
      title: "GUARANTEED PRODUCT",
      description: "All purchases are covered by a warranty, giving our customers peace of mind in the face of technical issues.",
      icon: "✅"
    },
    {
      title: "LATEST DESIGNS",
      description: "We always update our collection with the latest coffee machine designs that combine aesthetic beauty with extraordinary functionality.",
      icon: "🎨"
    },
    {
      title: "FREE SHIPPING",
      description: "We offer free shipping on all our products, providing added value to customers by saving on shipping costs.",
      icon: "🚚"
    }
  ];

  return (
    <div className="how-it-works">
    
      <section className="product-specs">
        <div className="specs-content">
          <div className="specs-text">
            <h1>LATEST PRODUCT SPECS FROM OUR SHOP</h1>
            <p>Explore one of the specifications of our newest products designed to take your coffee experience to the next level.</p>
            
            <div className="specs-list">
              {specifications.map((spec, index) => (
                <div key={index} className="spec-item">
                  <h3>{spec.title}</h3>
                  <p>{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="specs-image">
            <div className="coffee-machine-large">
              <div className="machine-display">☕</div>
              <div className="machine-base"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="benefits-content">
          <div className="benefits-image">
            <div className="benefit-machine">
              <div className="machine-icon">☕</div>
              <div className="video-controls">
                <div className="play-button">▶</div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <span>01:30</span>
              </div>
            </div>
          </div>
          
          <div className="benefits-text">
            <h2>BENEFITS OF BUYING FROM OUR SHOP</h2>
            <p>Discover the Advantages: Why Choose Us for Your Next Purchase?</p>
            
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;