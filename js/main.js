import { products } from "./data/products.js";
import { initImageHover, initShowMore } from "./ui/interactions.js";
import { renderProducts } from "./ui/renderProducts.js";

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  initImageHover();
  initShowMore();
});
