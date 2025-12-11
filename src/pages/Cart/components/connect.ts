import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotals,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  setQuanTity,
} from "../../../store/cartSlice";
import { useLocation } from "react-router";

const useConnect = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { total, cart } = useSelector(
    (store: any) => store.cart
  );
  useEffect(() => {
    dispatch(calculateTotals(cart));
  }, [cart, pathname]);
  
  return {
    dispatch,
    total,
    cart,
    setQuanTity,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    clearCart
  };
};

export default useConnect;
