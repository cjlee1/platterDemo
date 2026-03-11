export function initImageHover() {
  document.querySelectorAll(".product-card").forEach((card) => {
    const primary = card.querySelector(".product-image.primary");
    const secondary = card.querySelector(".product-image.secondary");

    if (!primary || !secondary) {
      return;
    }

    card.addEventListener("mouseenter", () => {
      primary.classList.add("opacity-0");
      secondary.classList.remove("opacity-0");
    });

    card.addEventListener("mouseleave", () => {
      primary.classList.remove("opacity-0");
      secondary.classList.add("opacity-0");
    });
  });
}

export function initShowMore() {
  const button = document.getElementById("show-more-btn");
  const hiddenCards = document.querySelectorAll(".hidden-mobile");
  let isExpanded = false;

  if (!button || hiddenCards.length === 0) {
    return;
  }

  button.addEventListener("click", () => {
    isExpanded = !isExpanded;

    hiddenCards.forEach((card, index) => {
      if (isExpanded) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("show"), index * 50);
        return;
      }

      card.classList.remove("show");
      setTimeout(() => {
        card.style.display = "none";
      }, 300);
    });

    button.textContent = isExpanded ? "Show Less" : "Show More";
  });
}
