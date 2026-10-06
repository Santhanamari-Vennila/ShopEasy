function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>ShopEasy</h3>
          <p>Your one-stop shop for quality products.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping Info</a>
        </div>

        <div className="footer-links">
          <h4>Follow Us</h4>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;