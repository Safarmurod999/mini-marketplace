import { Link } from "react-router";
import useConnect from "./connect";
import CartList from "./components/CartList";

const page = () => {
  const {
    cart,
    dispatch,
    total,
    clearCart,
  } = useConnect();
  return (
    <section id="cart" className="cart">
      <div className="container">
        <div className="cart__top">
          <h1 className="cart__title">Cart Page</h1>
          <Link to="/" className="cart__toggle">
            Go to Home
          </Link>
        </div>

        <CartList items={cart} />

        <div className="cart__bottom">
          <strong>Total: ${total}</strong>

          <button
            className="cart__toggle"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
