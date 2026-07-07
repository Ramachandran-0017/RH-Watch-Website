const brandCollectionMap = [
  {
    brand: "Rolex",
    watches: typeof rolexBestsellers !== "undefined" ? rolexBestsellers : [],
  },
  {
    brand: "Omega",
    watches: typeof omegaBestsellers !== "undefined" ? omegaBestsellers : [],
  },
  {
    brand: "Casio",
    watches: typeof casioBestsellers !== "undefined" ? casioBestsellers : [],
  },
  {
    brand: "Audemars Piguet",
    watches:
      typeof audemarsPiguetBestsellers !== "undefined"
        ? audemarsPiguetBestsellers
        : [],
  },
  {
    brand: "Patek Philippe",
    watches:
      typeof patekPhilippeBestsellers !== "undefined"
        ? patekPhilippeBestsellers
        : [],
  },
  {
    brand: "Breitling",
    watches:
      typeof breitlingBestsellers !== "undefined" ? breitlingBestsellers : [],
  },
  {
    brand: "Tissot",
    watches: typeof tissotBestsellers !== "undefined" ? tissotBestsellers : [],
  },
  {
    brand: "Jaeger-LeCoultre",
    watches:
      typeof jaegerLeCoultreBestsellers !== "undefined"
        ? jaegerLeCoultreBestsellers
        : [],
  },
  {
    brand: "Hublot",
    watches: typeof hublotBestsellers !== "undefined" ? hublotBestsellers : [],
  },
  {
    brand: "Vacheron Constantin",
    watches:
      typeof vacheronConstantinBestsellers !== "undefined"
        ? vacheronConstantinBestsellers
        : [],
  },
];

function resolveImagePath(rawPath) {
  return rawPath.replace(/^\.\.\//, "");
}

const DETAILS_PAGE_PATH = "./Watchs/details/details.html";

function populateCollectionCards() {
  brandCollectionMap.forEach((entry, i) => {
    const cardNumber = i + 1;
    const watch = entry.watches && entry.watches[0];
    if (!watch) return;

    const imagePath =
      watch.images && watch.images.length > 0
        ? resolveImagePath(watch.images[0])
        : null;

    document
      .querySelectorAll(`.collectionCard${cardNumber}`)
      .forEach((card) => {
        card.classList.add("has-content");

        card.innerHTML = `
          ${
            imagePath
              ? `<img
                  class="collection-card-img"
                  src="${imagePath}"
                  alt="${watch.name}"
                  loading="lazy"
                  decoding="async"
                />`
              : ""
          }
          <div class="collection-card-label">
            <span class="ccl-brand">${entry.brand}</span>
            <span class="ccl-name">${watch.collection || watch.name}</span>
            <span class="ccl-arrow"><i class="fa-solid fa-arrow-right"></i></span>
          </div>
        `;

        const img = card.querySelector(".collection-card-img");
        if (img) {
          if (img.complete) {
            card.classList.add("is-loaded");
          } else {
            img.addEventListener("load", () => card.classList.add("is-loaded"));
            img.addEventListener("error", () =>
              card.classList.add("is-loaded"),
            );
          }
        } else {
          card.classList.add("is-loaded");
        }

        card.addEventListener("click", () => {
          localStorage.setItem("selectedWatch", JSON.stringify(watch));
          window.location.href = DETAILS_PAGE_PATH;
        });
      });
  });
}

populateCollectionCards();

function goToCollectionsPage() {
  window.location.href = "./Collections/collection.html";
}

document.querySelectorAll(".collectionBtn").forEach((btn) => {
  btn.addEventListener("click", goToCollectionsPage);
});

const collectionsHeaderBtn = document.querySelector(
  ".watchCollectionTitle p button",
);
if (collectionsHeaderBtn) {
  collectionsHeaderBtn.addEventListener("click", goToCollectionsPage);
}

const revealTargets = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-item",
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealTargets.forEach((el) => revealObserver.observe(el));

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".hero-in").forEach((el) => {
    el.classList.add("is-visible");
  });
});
