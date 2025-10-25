import './Footer.css';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="footer">
      
      <div className="footer-newsletter">
        <div className="footer-content">
          <div className="newsletter-section">
            <div className="footer-logo">
              <div className="logo-icon">☕</div>
              <span>Majesty Coffee</span>
            </div>
            <p className="newsletter-text">
              Stay in the loop with our newsletter subscription for the latest updates, 
              exclusive access to deals, and special promotions.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="email-input"
              />
              <button type="submit" className="subscribe-btn">SUBSCRIBE →</button>
            </form>
          </div>
          
          <div className="footer-links">
            <div className="links-column">
              <h3>DELIVERY & RETURNS</h3>
              <ul>
                <li><a href="#shipping">Shipping Information</a></li>
                <li><a href="#returns">Returns & Refunds</a></li>
                <li><a href="#track">Track Your Order</a></li>
                <li><a href="#help">Help & FAQs</a></li>
              </ul>
            </div>
            
            <div className="links-column">
              <h3>THE COMPANY</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/how-it-works">How it Work</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/shop">Shop</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-brand">
            <h1>ADIL'S COFFEE</h1>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© 2023 MajestyCoffee. All right reserved.</p>
            </div>
            
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span>📺</span>
              </a>
              <a href="#" className="social-link" aria-label="X">
                <span>❌</span>
              </a>
            </div>
            
            <div className="footer-legal">
              <a href="#terms">Terms & Agreements</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;