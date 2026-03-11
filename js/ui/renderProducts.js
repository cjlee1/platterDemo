function generateStars(rating) {
  return Array(5).fill(0).map((_, index) =>
    `<svg class="w-4 h-4 ${index < rating ? "text-black-400" : "text-gray-300"}" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>`
  ).join("");
}

function createProductCard(product, index) {
  const bestSellerBadge = product.isBestSeller
    ? `<span class="absolute top-2 left-2 z-10 px-2 py-1 text-[10px] font-normal leading-none tracking-[0.06em] text-center bg-white text-black border border-black rounded-full font-['Bebas_Neue']">BEST SELLER</span>`
    : "";

  const promoBadge = product.promoBadge
    ? `<span class="absolute top-2 right-2 z-10 px-2 py-1 text-[10px] font-normal leading-none tracking-[0.06em] text-center rounded-full border border-black ${product.promoBadge.color} text-white font-['Bebas_Neue']">${product.promoBadge.text}</span>`
    : "";

  const hiddenClass = index >= 4 ? "hidden-mobile" : "";

  return `
    <article class="product-card flex-shrink-0 w-full md:w-64 ${hiddenClass}" data-index="${index}">
      <div class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
        ${bestSellerBadge}
        ${promoBadge}
        <img class="product-image primary absolute inset-0 w-full h-full object-cover transition-opacity duration-300" src="${product.image1}" alt="${product.name}" loading="lazy" />
        <img class="product-image secondary absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300" src="${product.image2}" alt="${product.name} alternate view" loading="lazy" />
      </div>
      <div class="space-y-1">
        <h3 class="text-[18px] font-normal uppercase leading-none tracking-[0.03em] line-clamp-2 font-['Bebas_Neue']">${product.name}</h3>
        <div class="flex items-center gap-2">
          <div class="flex">${generateStars(product.rating)}</div>
          <span class="text-[12px] font-normal leading-none font-['Poppins'] text-gray-500">${product.reviews.toLocaleString()} Reviews</span>
        </div>
        <p class="text-[16px] font-medium leading-none uppercase font-['Poppins']">$${product.price.toFixed(2)}</p>
      </div>
    </article>
  `;
}

export function renderProducts(products) {
  const grid = document.getElementById("product-grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = products.map((product, index) => createProductCard(product, index)).join("");
}
