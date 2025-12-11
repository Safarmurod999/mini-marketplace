interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

class LocalStorage {
  static get(key: string) {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : [];
  }

  static set(key: string, items: Product[]): void {
    localStorage.setItem(key, JSON.stringify(items));
  }
}

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

function addToCart(item: Product) {
  const cartItems = LocalStorage.get("cartItems");
  const cartItem = cartItems.findIndex((el: Product) => el.id === item.id);
  if (cartItem !== -1) {
    cartItems[cartItem].quantity += 1;
  } else {
    cartItems.push({
      ...item,
      quantity: 1,
    });
  }
  LocalStorage.set("cartItems", cartItems);
}

function createCard(item: Product): HTMLElement {
  const card = document.createElement("li");
  card.className = "product-list--item card";

  const div = document.createElement("div");
  div.className = "card-image";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.title;

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = item.description;

  const price = document.createElement("p");
  price.className = "card-price";
  price.textContent = `$${item.price}`;

  const button = document.createElement("button");
  button.className = "card-btn add-to-cart";
  button.textContent = "Add to Cart";
  button.addEventListener("click", () => addToCart(item));

  card.append(div, content);
  div.appendChild(img);
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(price);
  content.appendChild(button);

  return card;
}

async function displayProducts() {
  const products = await fetchProducts();
  const container = document.getElementById("product-list");
  if (products && container) {
    products.forEach((item) => {
      const card = createCard(item);
      container.appendChild(card);
    });
  }
}

displayProducts();

export { LocalStorage, fetchProducts, addToCart, displayProducts };
