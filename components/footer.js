class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #004aad;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .footer-logo img {
          height: 40px;
          margin-right: 10px;
        }
        .footer-logo span {
          background: linear-gradient(to right, #ffffff, #e0e0e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-about p {
          margin-bottom: 1.5rem;
          opacity: 0.8;
        }
        .footer-links h3, .footer-contact h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        .footer-links h3::after, .footer-contact h3::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 50px;
          height: 2px;
          background: #c53ba4;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.3s;
          display: flex;
          align-items: center;
        }
        .footer-links a:hover {
          opacity: 1;
        }
        .footer-links a i {
          margin-right: 8px;
          width: 16px;
        }
        .footer-contact p {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          opacity: 0.8;
        }
        .footer-contact i {
          margin-right: 10px;
          width: 16px;
        }
        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s;
        }
        .footer-social a:hover {
          background: #c53ba4;
          transform: translateY(-3px);
        }
        .footer-bottom {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-links h3::after, .footer-contact h3::after {
            left: 50%;
            transform: translateX(-50%);
          }
          .footer-links a, .footer-contact p {
            justify-content: center;
          }
          .footer-social {
            justify-content: center;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-about">
            <div class="footer-logo">
              <img src="logo.png" alt="School Logo">
              <span>AI Learning Hub</span>
            </div>
            <p>Where Young Minds Meet Artificial Intelligence. Our mission is to make AI education accessible and engaging for students of all ages.</p>
            <div class="footer-social">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
          </div>
          </footer>
