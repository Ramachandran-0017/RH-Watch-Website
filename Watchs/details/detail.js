document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("selectedWatch");
  if (savedData) {
    const watch = JSON.parse(savedData);
    document.getElementById("detail-title").textContent = watch.name;
    document.getElementById("detail-specs").textContent = watch.specs;
    document.getElementById("detail-price").textContent = watch.formattedPrice;

    const fixPath = (path) => path.replace("../", "../../");

    const mainImg = document.getElementById("detail-main-img");
    if (watch.images && watch.images.length > 0) {
      mainImg.src = fixPath(watch.images[0]);
    }

    const secondaryContainer = document.getElementById(
      "detail-secondary-images",
    );
    secondaryContainer.innerHTML = "";

    if (watch.images && watch.images.length > 1) {
      watch.images.slice(1).forEach((imgSrc, index) => {
        const imgEl = document.createElement("img");
        imgEl.src = fixPath(imgSrc);
        imgEl.alt = `${watch.name} — view ${index + 2}`;

        // Tapping/clicking a thumbnail swaps it into the main image.
        // This is a plain click listener, so it works identically on
        // touch (mobile) and mouse (desktop) — no separate logic needed.
        imgEl.addEventListener("click", () => {
          mainImg.src = imgEl.src;

          secondaryContainer
            .querySelectorAll("img")
            .forEach((thumb) => thumb.classList.remove("active"));
          imgEl.classList.add("active");
        });

        secondaryContainer.appendChild(imgEl);
      });
    }
  }

  const materialData = {
    "STAINLESS STEEL": {
      title: "STAINLESS STEEL",
      image: "./stainless-steel.jpg",
      text: "Stainless steel is certainly the most conventional of watchmaking materials for outer craftsmanship, and offers beauty, strength and affordability. OMEGA uses 316L stainless steel. Known for its corrosion-resistance and high lustre after polishing, this material is often the ideal choice for watches in both daily-use and high-stress situations such as diving and adventure.",
    },
    CERAMIC: {
      title: "HIGH-TECH CERAMIC",
      image: "./materials-ceramic.avif",
      text: "Valued for its light weight, scratch-resistance, and smooth hypoallergenic feel, high-tech ceramic is an exceptional choice for luxury sports watches. It undergoes intense thermal engineering to achieve a radiant, permanent color brilliance that never fades over time.",
    },
    "SAPPHIRE CRYSTAL": {
      title: "SAPPHIRE CRYSTAL",
      image: "./gemstone-deep-blue-sapphire.jpg",
      text: "To protect the watch dial and view the exquisite movement, we utilize scratch-resistant and highly anti-reflective sapphire crystal. Diamond-polished to crystal-clear perfection, it ensures pristine visibility under any harsh glare or depth conditions.",
    },
  };

  const tabs = document.querySelectorAll(".materialNavigationTabs .tabItem");
  const materialTitle = document.querySelector(".materialsTextPanel h3");
  const materialParagraph = document.querySelector(".materialsTextPanel p");
  const materialImage = document.querySelector(".materialsVisual img");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const selectedMaterial = tab.textContent.trim();
      const data = materialData[selectedMaterial];

      if (data) {
        const panel = document.querySelector(".materialsContentLayout");
        panel.style.opacity = 0.4;

        setTimeout(() => {
          materialTitle.textContent = data.title;
          materialParagraph.textContent = data.text;
          materialImage.src = data.image;
          materialImage.alt = `${data.title} Showcase`;
          panel.style.opacity = 1;
        }, 200);
      }
    });
  });

  const scrollElements = document.querySelectorAll(".scroll-reveal");

  const elementInView = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          elementInView.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  scrollElements.forEach((el) => {
    elementInView.observe(el);
  });
});

function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector("i");

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0px";
    icon.className = "fa-solid fa-plus";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.className = "fa-solid fa-minus";
  }
}

function addToCart() {
  const watch = {
    title: document.getElementById("detail-title").innerText,
    price: document.getElementById("detail-price").innerText,
    image: document.getElementById("detail-main-img").src,
  };

  let watchCart = JSON.parse(localStorage.getItem("watchCart")) || [];
  watchCart.push(watch);
  localStorage.setItem("watchCart", JSON.stringify(watchCart));
  window.location.href = "../Add-to-cart/cart.html";
}
