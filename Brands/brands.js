const BRANDS = [
  {
    name: "Rolex",
    slug: "rolex",
    photo: "./rolex.jpeg",
  },
  {
    name: "Omega",
    slug: "omega",
    photo: "./omega.jpg",
  },
  {
    name: "Casio",
    slug: "casio",
    photo: "./casio.jpeg",
  },
  {
    name: "AudemarsPiguet",
    slug: "audemarspiguet",
    photo: "./audemarspiguet.jpeg",
  },
  {
    name: "PatekPhilippe",
    slug: "patekphilippe",
    photo: "./pat.jpg",
  },
  {
    name: "Breitling",
    slug: "breitling",
    photo: "./breitling.jpeg",
  },
  {
    name: "Tissot",
    slug: "tissot",
    photo: "./tissot.jpg",
  },
  {
    name: "Jaeger-LeCoultre",
    slug: "jaegerlecoultre",
    photo: "./jaegerlecoultre.jpeg",
  },
  {
    name: "Hublot",
    slug: "hublot",
    photo: "./hublot.jpeg",
  },
  {
    name: "Vacheron Constantin",
    slug: "vacheronconstantin",
    photo: "./vacheronconstantin.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("brandsGrid");

  BRANDS.forEach((brand) => {
    const tile = document.createElement("a");
    tile.className = "brand-tile";
    tile.href = `../Sub-brands-pages/${brand.name}/${brand.slug}.html`;

    tile.innerHTML = `
      <div class="brand-tile-photo" style="  background-image: url(${brand.photo});">
       
      </div>
      <div class="brand-tile-label">
        <span>${brand.name}</span>
      </div>
    `;

    grid.appendChild(tile);
  });
});
