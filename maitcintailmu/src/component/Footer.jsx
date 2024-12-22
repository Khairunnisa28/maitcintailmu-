import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../style/footer.css"


function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="left">
            <h5>MA IT Cinta Ilmu</h5>
            <p>Alamat: Jl. Raya Laswi no.316 Baleendah, Kab. Bandung 40375</p>
            <p>Call Center: 0851-5822-3162</p>
          </div>
  
          <div className="right">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/people/TMII/61554790173330/"
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.tiktok.com/@tmiiofficial"
                target="_blank"
                title="TikTok"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://www.instagram.com/TMIIOfficial/"
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/user/tamanminiindonesia"
                target="_blank"
                title="YouTube"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6281188820220&text=Hai+Anjel+%28Admin+Jelajah%29+TMII&type=phone_number&app_absent=0"
                target="_blank"
                title="WhatsApp"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="tel:+628041789789"
                target="_blank"
                title="Call"
                rel="noopener noreferrer"
              >
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Sekolah Cinta Ilmu. Semua hak dilindungi.</p>
        </div>
      </footer>
    );
  }
  
export default Footer;
