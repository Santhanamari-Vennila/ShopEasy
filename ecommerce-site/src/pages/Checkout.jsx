import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="container">
        <div className="empty-state">
          <h1>Order Placed Successfully! 🎉</h1>
          <p>Thank you for shopping with us.</p>
          <br />
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Checkout</h1>
      <p className="subtitle">Total Amount: ₹{totalPrice}</p>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;