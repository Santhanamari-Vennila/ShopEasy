import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import heroImg from "./hero-right.jpg";

function Home() {
  const featured = products;

  return (
    <div className="container">
      {/* BEFORE welcome */}

      <p className="eyebrow">New season edit</p>

      {/* Welcome + image */}
      <div className="hero">
        <div className="hero-text">
          <h1 className="page-title">Welcome to ShopEasy</h1>
          <p className="subtitle">
            Find the best products at great prices.
          </p>
          <p className="hero-extra">
            A small shop of electronics, fashion, and home — headphones,
            watches, shoes, bags, coffee makers, and lamps.
          </p>
          <Link to="/shop" className="hero-btn">
            Shop now
          </Link>
        </div>

        <img
          className="hero-image"
          src={heroImg}
          alt="Featured products"
        />
      </div>

      <h2>Featured Products</h2>
      <div className="products-grid">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h2>How it works</h2>
      <div className="steps">
        <div>
          <h3>1. Browse</h3>
          <p>Pick from electronics, fashion, and home.</p>
        </div>
        <div>
          <h3>2. Add to cart</h3>
          <p>Save items and change quantity anytime.</p>
        </div>
        <div>
          <h3>3. Checkout</h3>
          <p>Enter your details and place the order.</p>
        </div>
      </div>

      <div className="promo">
        Free shipping on orders above ₹1999 · Easy 14-day returns
      </div>

    </div>
  );
}

export default Home;