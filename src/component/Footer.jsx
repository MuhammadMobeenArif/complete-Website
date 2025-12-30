function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">

            <div className="footer-brand">
              <h2>MUHAMMAD MOBEEN ARIF RESTAURANT</h2>
              <p>
                AT MUHAMMAD MOBEEN ARIF RESTAURANT, FOOD ISN’T JUST A MEAL — IT’S AN EXPERIENCE.
                JOIN US AND TASTE THE PASSION IN EVERY BITE.
              </p>
            </div>

            <div className="footer-links">
              <h3>QUICKS LINKS</h3>
              <ul>
                <li><a href="#">ABOUT US</a></li>
                <li>
                  <a href="https://github.com/MuhammadMobeenArif" target="_blank">
            
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h3>STAY CONNOTED</h3>
              <p>SUBSCRIBE TO GET UPDATES ON NEW ARRIVALS AND SPECIAL OFFERS.</p>

              <div className="subscribe-form">
                <input type="email" placeholder="Your email" />  
                <button>SUBSCRIBE </button>
              </div>

              <div className="social-icons">
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://instagram.com/@mobeenrif13"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/MuhammadMobeenArif"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>

          </div>

          <hr />

          <p className="footer-copy">
            © {new Date().getFullYear()} <span>MUHAMMAD MOBEEN ARIF RESTAURANT </span>. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* CSS */}
      <style>{`
        .footer {
          background: #0f172a;
          color: #e5e7eb;
          padding: 60px 20px 30px;
          font-family: Poppins, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .footer-brand h2 {
          color: #fbbf24;
          margin-bottom: 15px;
        }

        .footer-brand p {
          line-height: 1.7;
          color: #cbd5f5;
        }

        .footer-links h3,
        .footer-newsletter h3 {
          color: #fbbf24;
          margin-bottom: 15px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #e5e7eb;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #fbbf24;
        }

        .footer-newsletter p {
          font-size: 14px;
          margin-bottom: 15px;
          color: #cbd5f5;
        }

        .subscribe-form {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .subscribe-form input {
          flex: 1;
          padding: 10px;
          border-radius: 6px;
          border: none;
          outline: none;
        }

        .subscribe-form button {
          background: #fbbf24;
          color: #0f172a;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .subscribe-form button:hover {
          background: #f59e0b;
          transform: translateY(-2px);
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icons a {
          color: #e5e7eb;
          font-size: 18px;
          transition: 0.3s;
        }

        .social-icons a:hover {
          color: #fbbf24;
          transform: scale(1.2);
        }

        hr {
          margin: 40px 0 20px;
          border: none;
          border-top: 1px solid #334155;
        }

        .footer-copy {
          text-align: center;
          font-size: 14px;
          color: #cbd5f5;
        }

        .footer-copy span {
          color: #fbbf24;
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .subscribe-form {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
