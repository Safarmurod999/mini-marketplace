import { Products, Cart } from "../pages/index";
export const routes = [
  {
    id: 0,
    path: "/",
    name: "Products",
    element: Products,
  },
  {
    id: 1,
    path: "/cart",
    name: "Cart",
    element: Cart,
  },
];
