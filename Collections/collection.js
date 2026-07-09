const masterCollections = [
  { brandName: "Rolex", watches: rolexBestsellers },
  { brandName: "Omega", watches: omegaBestsellers },
  { brandName: "Casio", watches: casioBestsellers },
  { brandName: "AudemarsPiguet", watches: audemarsPiguetBestsellers },
  { brandName: "PatekPhilippe", watches: patekPhilippeBestsellers },
  { brandName: "Breitling", watches: breitlingBestsellers },
  { brandName: "Tissot", watches: tissotBestsellers },
  { brandName: "Jaeger-LeCoultre", watches: jaegerLeCoultreBestsellers },
  { brandName: "Hublot", watches: hublotBestsellers },
  { brandName: "Vacheron Constantin", watches: vacheronConstantinBestsellers },
];

const watchShowroomContainer = document.getElementById("brands-container");

masterCollections.forEach((collection) => {
  if (collection.watches && collection.watches.length > 0) {
    const brandSection = document.createElement("section");
    brandSection.className = "brand-section";

    const brandHeader = document.createElement("div");
    brandHeader.className = "brand-header";

    const brandTitle = document.createElement("h2");
    brandTitle.className = "brand-heading";
    brandTitle.innerText = `${collection.brandName} Showroom`;
    brandHeader.appendChild(brandTitle);

    const cleanBrandName = collection.brandName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const brandPageUrl = `../Sub-brands-pages/${collection.brandName}/${cleanBrandName}.html`;

    const brandViewMore = document.createElement("a");
    brandViewMore.href = brandPageUrl;
    brandViewMore.className = "brand-view-more-btn";
    brandViewMore.innerHTML = `View All`;
    brandHeader.appendChild(brandViewMore);

    brandSection.appendChild(brandHeader);

    const productGrid = document.createElement("div");
    productGrid.className = "products-grid";

    const featuredWatches = collection.watches.slice(0, 4);

    featuredWatches.forEach((watch) => {
      const card = document.createElement("div");
      card.className = "watch-card";

      const mainImage =
        watch.images && watch.images.length > 0
          ? watch.images[0]
          : "placeholder.jpg";

      card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${mainImage}" alt="${watch.name}" class="watch-img">
                </div>
                <div class="card-details">
                    <span class="watch-collection">${watch.collection}</span>
                    <h3 class="watch-title">${watch.name}</h3>
                    <p class="watch-specs">${watch.specs}</p>
                    <div class="card-footer">
                        <span class="watch-price">${watch.formattedPrice}</span>
                        <button class="view-btn">Discover</button>
                    </div>
                </div>
            `;

      card.addEventListener("click", () => {
        localStorage.setItem("selectedWatch", JSON.stringify(watch));
        window.location.href = "../Watchs/details/details.html";
      });

      productGrid.appendChild(card);
    });

    brandSection.appendChild(productGrid);
    watchShowroomContainer.appendChild(brandSection);
  }
});
