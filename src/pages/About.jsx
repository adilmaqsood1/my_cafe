import { useState } from 'react';
import './About.css';

const About = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const testimonials = [
    {
      name: "JANE BRISH",
      text: "The purchase of a coffee machine from Majesty Coffee has been a game-changer for my morning routine. Their products are of exceptional quality and the customer service is very professional. Highly recommended!",
      rating: 5
    },
    {
      name: "JACOB CRAM",
      text: "Got that with Majesty's special Tonic. The machine and service were excellent and have served me well.",
      rating: 5
    },
    {
      name: "DINA A.",
      text: "I highly recommend going to the Majesty Coffee team for coffee lovers.",
      rating: 5
    },
    {
      name: "ANGELINE S.",
      text: "We are all happy with our coffee lovers and want to enhance their coffee experience at home.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "HOW DO I CHOOSE A COFFEE MACHINE THAT SUITS MY NEEDS?",
      answer: "Consider your brewing preferences, budget, and kitchen space. We offer machines ranging from simple drip coffee makers to advanced espresso machines with multiple features."
    },
    {
      question: "HOW DO I CLEAN AND MAINTAIN A COFFEE MACHINE?",
      answer: "Cleaning and maintenance instructions may vary depending on the coffee grinder model. However, it is generally recommended to clean regularly, remove coffee residue, and descale periodically to preserve the quality of coffee grinding."
    },
    {
      question: "WHAT IS THE DIFFERENCE BETWEEN MANUAL AND AUTOMATIC COFFEE MACHINE?",
      answer: "Manual machines give you complete control over the brewing process, while automatic machines handle most of the work for you. Manual machines are preferred by enthusiasts who want to perfect their technique."
    },
    {
      question: "ARE ALL ESPRESSO MAKER & COFFEE MACHINE SUITABLE FOR ALL TYPES OF COFFEE?",
      answer: "Most modern coffee machines are versatile and can handle various coffee types. However, some machines are specifically designed for certain brewing methods like espresso, drip coffee, or French press."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="about">
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-content">
          <h1>WHAT ARE THEY SAY ABOUT US</h1>
          <p>Listen directly from our customers about their experiences with our outstanding service. These are real stories from people who have chosen us.</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="avatar">👤</div>
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          
          <div className="testimonial-navigation">
            <div className="nav-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </section>
    






  
      <section className="faq">
        <div className="faq-content">
          <div className="faq-text">
            <h2>FAQ ABOUT OUR COFFEE MACHINE</h2>
            <p>Discover what our customers are saying about our coffee machines. Get answers straight from those who have experienced the grind.</p>
            
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className={`faq-question ${activeQuestion === index ? 'active' : ''}`}
                    onClick={() => toggleQuestion(index)}
                  >
                    {faq.question}
                    <span className="faq-icon">{activeQuestion === index ? '−' : '+'}</span>
                  </button>
                  {activeQuestion === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <button className="contact-btn">Contact US →</button>
          </div>
          
          <div className="faq-image">
            <div className="coffee-machine-faq">
              <div className="machine-display">☕</div>
              <div className="machine-controls">
                <div className="control-panel">
                  <div className="control-button"></div>
                  <div className="control-button"></div>
                  <div className="control-button"></div>
                </div>
                <div className="steam-wand"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;