import CartItem from "./CartItem";
import { ICartItem } from "../../../store/cartSlice";

const CartList = ({ items }: { items: ICartItem[] }) => {
  return (
    <ul className="cart__list">
      {items.length
        ? items.map((item: ICartItem) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              category={item.category}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))
        : ""}
    </ul>
  );
};

export default CartList;
