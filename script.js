const products = [
  {
    id: 1,
    name: "OUTSIDE VIBES T-SHIRT SUNSHINE",
    price: 104.95,
    image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "NIKE BOTTLE OUTSIDE VIBES FOREST GREEN",
    price: 104.95,
    image1: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "REST IN NATURE T-SHIRT CHARCOAL",
    price: 104.95,
    image1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "OUTSIDE VIBES CAP FOREST GREEN",
    price: 104.95,
    image1: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "PURE WHITE BLACK WATCH",
    price: 104.95,
    image1: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "VINTAGE RUNNER TWO TONE",
    price: 124.95,
    image1: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
  },
  {
    id: 7,
    name: "URBAN TECH BACKPACK MIDNIGHT",
    price: 69.99,
    image1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
  },
  {
    id: 8,
    name: "MINIMAL WATCH ROSE GOLD",
    price: 159.99,
    image1: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop"
  },
  {
    id: 9,
    name: "STUDIO HEADPHONES PRO",
    price: 299.97,
    image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    id: 10,
    name: "CERAMIC MUG",
    price: 44.98,
    image1: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop"
  }
];

function createProductCard(product) {
  return `
    <article class="product-card">
      <div>
        <img src="${product.image1}" alt="${product.name}" />
      </div>
      <div>
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
      </div>
    </article>
  `;
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.map(product => createProductCard(product)).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});
