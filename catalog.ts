interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category:string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

class LocalStorage {
    static get(key: string): Product[] {
        const items = localStorage.getItem(key);
        return items ? JSON.parse(items) : [];
    }

    static set(key: string, items: Product[]): void {
        localStorage.setItem(key, JSON.stringify(items));
    }
}

async function fetchProducts(): Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
}

function addToCart(item: Product) {
    const cartItems = LocalStorage.get('cartItems');
    cartItems.push(item);
    LocalStorage.set('cartItems', cartItems);
}

function createCard (item: Product): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = item.image;
    img.alt = item.title;

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = item.title;

    const price = document.createElement('p');
    price.className = 'card-price';
    price.textContent = `$${item.price}`;

    const button = document.createElement('button');
    button.classList = 'card-btn add-to-cart';
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => addToCart(item));    

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);

    return card;
}

async function displayProducts() {
    const products = await fetchProducts();
    const container = document.getElementById('root');
    if (products && container) {
        products.forEach(item => {
            const card = createCard(item);
            container.appendChild(card);
        });
    }
}

displayProducts();

export { fetchProducts, addToCart, LocalStorage };