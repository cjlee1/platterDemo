const products = [
  {
    id: 1,
    name: "OUTSIDE VIBES T-SHIRT SUNSHINE",
    price: 104.95,
    isBestSeller: true,
    rating: 4,
    reviews: 1234,
    image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "NIKE BOTTLE OUTSIDE VIBES FOREST GREEN",
    price: 104.95,
    isBestSeller: true,
    promoBadge: { text: "SAVE 15%", color: "bg-green-600" },
    rating: 4,
    reviews: 1234,
    image1: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "REST IN NATURE T-SHIRT CHARCOAL",
    price: 104.95,
    isBestSeller: true,
    rating: 4,
    reviews: 1234,
    image1: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "OUTSIDE VIBES CAP FOREST GREEN",
    price: 104.95,
    isBestSeller: true,
    promoBadge: { text: "SAVE 15%", color: "bg-green-600" },
    rating: 4,
    reviews: 1234,
    image1: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "PURE WHITE BLACK WATCH",
    price: 104.95,
    isBestSeller: true,
    rating: 4,
    reviews: 1234,
    image1: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "VINTAGE RUNNER TWO TONE",
    price: 124.95,
    isBestSeller: true,
    rating: 5,
    reviews: 2341,
    image1: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
  },
  {
    id: 7,
    name: "URBAN TECH BACKPACK MIDNIGHT",
    price: 69.99,
    rating: 4,
    reviews: 892,
    image1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
  },
  {
    id: 8,
    name: "MINIMAL WATCH ROSE GOLD",
    price: 159.99,
    rating: 5,
    reviews: 3456,
    image1: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop"
  },
  {
    id: 9,
    name: "STUDIO HEADPHONES PRO",
    price: 299.97,
    rating: 5,
    reviews: 4521,
    image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    id: 10,
    name: "CERAMIC MUG",
    price: 44.98,
    rating: 4,
    reviews: 567,
    image1: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop"
  }
];

function generateStars(rating) {
  return Array(5).fill(0).map((_, i) =>
    `<svg class="w-4 h-4 ${i < rating ? 'text-black-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>`
  ).join('');
}

function createProductCard(product) {
  const bestSellerBadge = product.isBestSeller
    ? '<span class="bg-black text-white">BEST SELLER</span>'
    : '';

  const promoBadge = product.promoBadge
    ? `<span class="${product.promoBadge.color} text-white">${product.promoBadge.text}</span>`
    : '';

  return `
    <article class="product-card">
      <div>
        ${bestSellerBadge}
        ${promoBadge}
        <img src="${product.image1}" alt="${product.name}" />
      </div>
      <div>
        <h3>${product.name}</h3>
        <div>
          <div>${generateStars(product.rating)}</div>
          <span>${product.reviews.toLocaleString()} Reviews</span>
        </div>
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
