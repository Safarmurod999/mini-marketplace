import { ICartItem } from "../../../store/cartSlice";
import useConnect from "./connect";

const CartItem = ({
  id,
  title,
  image,
  price,
  category,
  rating,
  quantity,
}: ICartItem) => {
  const {
    dispatch,
    setQuanTity,
    incrementQuantity,
    decrementQuantity,
    removeItem,
  } = useConnect();
  return (
    <li className="cart__item" key={id}>
      <div className="cart__image">
        <img src={image} alt="Product Image" />
      </div>
      <div className="cart__content">
        <div className="cart__item--top">
          <div className="cart__details--item">
            <h2 className="cart__item--name">{title}</h2>
          </div>
          <div className="cart__details--actions"></div>
          <span className="cart__details--price">${price}</span>
        </div>
        <div className="cart__item--bottom">
          <ul className="cart__details">
            <li className="cart__details--item">
              <p>Category</p>
              <div>{category}</div>
            </li>
            <li className="cart__details--item">
              <p>Rating</p>
              <div>{rating.rate}</div>
            </li>
          </ul>
          <div className="cart__quantity">
            <button
              aria-label="count-btn"
              onClick={() => dispatch(decrementQuantity(id))}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              onChange={(e) =>
                dispatch(
                  setQuanTity({
                    quantity: e.target.value,
                    itemId: id,
                  })
                )
              }
            />
            <button
              aria-label="count-btn"
              onClick={() => dispatch(incrementQuantity(id))}
            >
              +
            </button>
          </div>
        </div>
        <button className="cancel-btn" onClick={() => dispatch(removeItem(id))}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" rx="4" fill="#D8D4DB" />
            <rect
              width="9.39109"
              height="1.17389"
              rx="0.586943"
              transform="matrix(0.70541 0.7088 -0.70541 0.7088 6.07806 5.25)"
              fill="white"
            />
            <rect
              width="9.39109"
              height="1.17389"
              rx="0.586943"
              transform="matrix(0.70541 -0.7088 0.70541 0.7088 5.29736 11.918)"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
