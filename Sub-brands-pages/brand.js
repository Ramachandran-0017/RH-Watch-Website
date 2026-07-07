const DETAILS_PAGE_PATH = "../../Watchs/details/details.html";

function goToWatchDetails(watch) {
  localStorage.setItem("selectedWatch", JSON.stringify(watch));
  window.location.href = DETAILS_PAGE_PATH;
}

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.getElementById("brandHeroTitle");
  if (heroTitle && typeof BRAND_NAME !== "undefined") {
    heroTitle.textContent = BRAND_NAME;
  }

  const grid = document.getElementById("brandProductsGrid");
  const emptyState = document.getElementById("brandEmptyState");

  const watches = typeof BRAND_WATCHES !== "undefined" ? BRAND_WATCHES : [];

  if (!watches.length) {
    grid.style.display = "none";
    emptyState.style.display = "flex";
    return;
  }

  watches.forEach((watch) => {
    const card = document.createElement("div");
    card.className = "watch-card";

    const mainImage =
      watch.images && watch.images.length > 0
        ? `../${watch.images[0]}`
        : "placeholder.jpg";

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${mainImage}" alt="${watch.name}" class="watch-img">
        <div class="card-overlay">
          <button type="button" class="overlay-btn">View Details</button>
        </div>
      </div>
      <div class="card-details">
        <span class="watch-collection">${watch.collection || ""}</span>
        <h3 class="watch-title">${watch.name}</h3>
        <p class="watch-specs">${watch.specs || ""}</p>
        <div class="card-footer">
          <span class="watch-price">${watch.formattedPrice}</span>
          <button type="button" class="view-btn">Discover</button>
        </div>
      </div>
    `;

    card.addEventListener("click", () => goToWatchDetails(watch));

    grid.appendChild(card);
  });
});
