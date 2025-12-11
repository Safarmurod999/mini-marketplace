import { createSlice } from "@reduxjs/toolkit";

export interface ICartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

const initialState = {
  count: 0,
  loading: false,
  cart: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  total: 0,
  cartLength: JSON.parse(localStorage.getItem("cartItems") || "[]")?.length,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (initialState) => {
      initialState.cart = [];
      initialState.total = 0;
      initialState.cartLength = 0;
      localStorage.removeItem("cartItems");
    },
    removeItem: (initialState, action) => {
      const itemId = action.payload;
      const tempCart = initialState.cart.filter(
        (cartItem: any) => cartItem.id !== itemId
      );
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
        cartLength: tempCart.length,
      };
    },
    incrementQuantity: (initialState, { payload }) => {
      let tempCart = initialState.cart.map((cartItem: any) => {
        if (
          cartItem.id === payload &&
          cartItem.rating.count > cartItem.quantity
        ) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
      };
    },
    decrementQuantity: (initialState, { payload }) => {
      let tempCart = initialState.cart
        .map((cartItem: any) => {
          if (cartItem.id === payload) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        })
        .filter((el: any) => el.quantity !== 0);
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
      };
    },
    calculateTotals: (initialState) => {
      return {
        ...initialState,
        total: initialState.cart
          .reduce((acc: number, item: any) => {
            return acc + item.price * item.quantity;
          }, 0)
          .toFixed(2),
      };
    },
    setQuanTity: (initialState, { payload }) => {
      const { quantity, itemId } = payload;
      let tempCart = initialState.cart
        .map((cartItem: any) => {
          if (cartItem.id === itemId) {
            return {
              ...cartItem,
              quantity: quantity,
            };
          }
          return cartItem;
        })
        .filter((el: any) => el.quantity !== 0);
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
      };
    },
    getLength: (initialState, { payload }) => {
      return {
        ...initialState,
        cartLength: payload.length,
      };
    },
    addToCart: (initialState, { payload }) => {
      let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

      if (
        cartItems.filter((el: any) => el.product == payload.product).length &&
        cartItems.filter((el: any) => el.color == payload.color).length &&
        cartItems.filter((el: any) => el.weight == payload.weight).length
      ) {
        cartItems = initialState.cart.map((el: any) => {
          if (
            el.product == payload.product &&
            el.color == payload.color &&
            el.weight == payload.weight
          ) {
            return {
              ...el,
              quantity: el.quantity + payload.quantity,
            };
          }
          return el;
        });
      } else {
        cartItems.push(payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {
        ...initialState,
        cart: cartItems,
        cartLength: cartItems.length,
      };
    },
  },
});

export const {
  clearCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  calculateTotals,
  addToCart,
  setQuanTity,
  getLength,
} = cartSlice.actions;

export default cartSlice.reducer;
