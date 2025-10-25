import './Contact.css';

const Contact = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <div className="contact">
      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <div className="logo-section">
              <div className="logo-icon">☕</div>
              <h2>Majesty Coffee</h2>
            </div>
            <p>Stay in the loop with our newsletter subscription for the latest updates, exclusive access to deals, and special promotions.</p>
            
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
          
          <div className="newsletter-links">
            <div className="links-section">
              <h3>DELIVERY & RETURNS</h3>
              <ul>
                <li><a href="#shipping">Shipping Information</a></li>
                <li><a href="#returns">Returns & Refunds</a></li>
                <li><a href="#track">Track Your Order</a></li>
                <li><a href="#help">Help & FAQs</a></li>
              </ul>
            </div>
            
            <div className="links-section">
              <h3>THE COMPANY</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#how-it-work">How it Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#shop">Shop</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h1>MAJESTY COFFEE</h1>
          </div>
          
          <div className="footer-info">
            <div className="footer-left">
              <p>© 2023 MajestyCoffee. All right reserved.</p>
            </div>
            
            <div className="footer-center">
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📺</a>
                <a href="#" className="social-link">❌</a>
              </div>
            </div>
            
            <div className="footer-right">
              <a href="#terms">Terms & Agreements</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="contact-content">
          <h2>GET IN TOUCH</h2>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h3>Our Location</h3>
                <p>123 Coffee Street, Bean City, BC 12345</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">
                <h3>Email Address</h3>
                <p>info@majestycoffee.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-text">
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h3>Send us a Message</h3>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;