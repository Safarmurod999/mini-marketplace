import { useEffect } from "react";
import { displayProducts } from "../../../catalog";
const page = () => {
  useEffect(() => {
    displayProducts();
  }, []);
  return (
    <main className="app">
      <section id="products" className="products">
        <div className="container">
          <ul id="product-list" className="products--list"></ul>
        </div>
      </section>
    </main>
  );
};

export default page;
