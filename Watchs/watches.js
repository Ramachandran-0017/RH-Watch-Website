// omega watch lists

const omegaBestsellers = [
  {
    id: 1,
    name: "Seamaster Aqua Terra 150M",
    collection: "Seamaster",
    model: "Aqua Terra 150M",
    specs: "41 mm, steel on rubber strap",
    priceINR: 703600,
    formattedPrice: "₹7,03,600",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Seamaster-aqua/omega-seamaster-aqua-terra-150m.avif",
      "../Watch-images/Omega-Watchs/Seamaster-aqua/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer.avif",
      "../Watch-images/Omega-Watchs/Seamaster-aqua/omega-seamaster-aqua-terra-150m-dial.webp",
      "../Watch-images/Omega-Watchs/Seamaster-aqua/omega-seamaster-aqua-terra-150m-onhand.webp",
    ],
  },
  {
    id: 2,
    name: "Speedmaster Moonwatch Professional",
    collection: "Speedmaster",
    model: "Moonwatch Professional",
    specs: "42 mm, steel on steel strap",
    priceINR: 809800,
    formattedPrice: "₹8,09,800",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-full view.png",
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-back view.png",
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-calibre view.png",
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-radium view.png",
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-right view.png",
    ],
  },
  {
    id: 3,
    name: "Seamaster Diver 300M Co-Axial",
    collection: "Seamaster",
    model: "Diver 300M",
    specs: "42 mm, steel on rubber strap",
    priceINR: 528000,
    formattedPrice: "₹5,28,000",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Seamaster driver 300M/omega-seamaster-diver-300m-front.avif",
      "../Watch-images/Omega-Watchs/Seamaster driver 300M/omega-seamaster-diver-300m-back.avif",
      "../Watch-images/Omega-Watchs/Seamaster driver 300M/omega-seamaster-diver-300m-side.avif",
      "../Watch-images/Omega-Watchs/Seamaster driver 300M/omega-seamaster-diver-300m-strap.avif",
    ],
  },
  {
    id: 4,
    name: "Seamaster Planet Ocean 600M",
    collection: "Seamaster",
    model: "Planet Ocean 600M",
    specs: "43.5 mm, steel on steel strap",
    priceINR: 675000,
    formattedPrice: "₹6,75,000",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Seamaster/Watch 3-Full view.png",
      "../Watch-images/Omega-Watchs/Seamaster/Watch 1-front view.png",
      "../Watch-images/Omega-Watchs/Seamaster/Watch 2-back view.png",
      "../Watch-images/Omega-Watchs/Seamaster/Watch 4-Left view.png",
    ],
  },
  {
    id: 5,
    name: "Speedmaster '57 Chronograph",
    collection: "Speedmaster",
    model: "'57 Co-Axial",
    specs: "40.5 mm, steel on leather strap",
    priceINR: 891200,
    formattedPrice: "₹8,91,200",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-full view.png",
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-back view.png",
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-calibre view.png",
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-radium view.png",
      "../Watch-images/Omega-Watchs/Speedmaster/Watch 1-right view.png",
    ],
  },
  {
    id: 6,
    name: "Constellation Co-Axial Master",
    collection: "Constellation",
    model: "Constellation 41",
    specs: "41 mm, steel on steel strap",
    priceINR: 750100,
    formattedPrice: "₹7,50,100",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Constellation Co-Axial Master/omega-constellation-co-axial-master-front.avif",
      "../Watch-images/Omega-Watchs/Constellation Co-Axial Master/omega-constellation-co-axial-master-back.avif",
    ],
  },
  {
    id: 7,
    name: "Speedmaster Racing Chronometer",
    collection: "Speedmaster",
    model: "Racing",
    specs: "44.25 mm, steel on rubber strap",
    priceINR: 1115100,
    formattedPrice: "₹11,15,100",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Speedmaster Racing Chronometer/omega-speedmaster-racing-front.avif",
      "../Watch-images/Omega-Watchs/Speedmaster Racing Chronometer/omega-speedmaster-super-racing-back.avif",
      "../Watch-images/Omega-Watchs/Speedmaster Racing Chronometer/omega-speedmaster-super-racing-box.avif",
      "../Watch-images/Omega-Watchs/Speedmaster Racing Chronometer/omega-speedmaster-super-racing-side.avif",
    ],
  },
  {
    id: 8,
    name: "De Ville Prestige Co-Axial",
    collection: "De Ville",
    model: "Prestige",
    specs: "40 mm, steel on leather strap",
    priceINR: 435100,
    formattedPrice: "₹4,35,100",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/De Ville Prestige Co-Axial/omega-de-ville-prestige-front.avif",
      "../Watch-images/Omega-Watchs/De Ville Prestige Co-Axial/omega-de-ville-prestige-back.avif",
    ],
  },
  {
    id: 9,
    name: "Seamaster Heritage Seamaster 300",
    collection: "Seamaster",
    model: "Seamaster 300",
    specs: "41 mm, titanium on titanium",
    priceINR: 945000,
    formattedPrice: "₹9,45,000",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Seamaster Heritage Seamaster 300/omega-seamaster-diver-300m-front.avif",
      "../Watch-images/Omega-Watchs/Seamaster Heritage Seamaster 300/omega-seamaster-diver-300m-back.avif",
      "../Watch-images/Omega-Watchs/Seamaster Heritage Seamaster 300/omega-seamaster-diver-300m-onhand.avif",
      "../Watch-images/Omega-Watchs/Seamaster Heritage Seamaster 300/omega-seamaster-diver-300m-side.avif",
    ],
  },
  {
    id: 10,
    name: "Speedmaster Dark Side of the Moon",
    collection: "Speedmaster",
    model: "Ceramic Edition",
    specs: "44.25 mm, black ceramic on nylon strap",
    priceINR: 1247600,
    formattedPrice: "₹12,47,600",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Omega-Watchs/Speedmaster Dark Side of the Moon/omega-speedmaster-dark-side-of-the-moon-front.avif",
      "../Watch-images/Omega-Watchs/Speedmaster Dark Side of the Moon/omega-speedmaster-dark-side-of-the-moon-back.webp",
      "../Watch-images/Omega-Watchs/Speedmaster Dark Side of the Moon/omega-speedmaster-dark-side-of-the-moon-side.avif",
      "../Watch-images/Omega-Watchs/Speedmaster Dark Side of the Moon/omega-speedmaster-dark-side-of-the-moon-strap.avif",
    ],
  },
];

// rolex watch list

const rolexBestsellers = [
  {
    id: 1,
    name: "Rolex Submariner Date",
    collection: "Submariner",
    model: "Submariner Date (Oystersteel)",
    specs: "41 mm, Oystersteel with black dial and bezel",
    priceINR: 1051000,
    formattedPrice: "₹10,51,000",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/rolex/Rolex Submariner Date/rolex submariner date.png",
    ],
  },
  {
    id: 2,
    name: "Rolex Cosmograph Daytona",
    collection: "Cosmograph Daytona",
    model: "Daytona (Oystersteel)",
    specs: "40 mm, Oystersteel with white dial (Pandaface)",
    priceINR: 1561500,
    formattedPrice: "₹15,61,500",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: ["../Watch-images/rolex/rolex daytona/rolex Daytona.png"],
  },
  {
    id: 3,
    name: "Rolex GMT-Master II 'Pepsi'",
    collection: "GMT-Master II",
    model: "GMT-Master II",
    specs: "40 mm, Oystersteel with blue and red Cerachrom bezel",
    priceINR: 1091500,
    formattedPrice: "₹10,91,500",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/rolex/Rolex GMT-Master II pepsi/ROLEX-GMT-MASTER-II-PEPSI-.png",
    ],
  },
  {
    id: 4,
    name: "Rolex Datejust 41",
    collection: "Datejust",
    model: "Datejust 41",
    specs: "41 mm, Oystersteel and white gold, fluted bezel, blue dial",
    priceINR: 1102500,
    formattedPrice: "₹11,02,500",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: ["../Watch-images/rolex/Rolex Datejust 41/Rolex Datejust 41.png"],
  },
  {
    id: 5,
    name: "Rolex Oyster Perpetual 41",
    collection: "Oyster Perpetual",
    model: "Oyster Perpetual 41",
    specs: "41 mm, Oystersteel with green dial",
    priceINR: 652800,
    formattedPrice: "₹6,52,800",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/rolex/Rolex Oyster Perpetual 41/Rolex Oyster Perpetual 41.avif",
    ],
  },
  {
    id: 6,
    name: "Rolex Day-Date 40 'President'",
    collection: "Day-Date",
    model: "Day-Date 40",
    specs: "40 mm, 18 ct yellow gold, champagne dial",
    priceINR: 4675000,
    formattedPrice: "₹46,75,000",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/rolex/Rolex Day-Date 40 President/Rolex Day-Date 40 President.avif",
    ],
  },
  {
    id: 7,
    name: "Rolex Explorer 40",
    collection: "Explorer",
    model: "Explorer 40",
    specs: "40 mm, Oystersteel with black dial",
    priceINR: 775500,
    formattedPrice: "₹7,75,500",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: ["../Watch-images/rolex/Rolex Explorer 40/Rolex Explorer 40.avif"],
  },
  {
    id: 8,
    name: "Rolex Explorer II",
    collection: "Explorer",
    model: "Explorer II",
    specs: "42 mm, Oystersteel with white dial (Polar)",
    priceINR: 985500,
    formattedPrice: "₹9,85,500",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: ["../Watch-images/rolex/Rolex Explorer II/Rolex Explorer II.avif"],
  },
  {
    id: 9,
    name: "Rolex Sea-Dweller",
    collection: "Sea-Dweller",
    model: "Sea-Dweller 43",
    specs: "43 mm, Oystersteel and yellow gold (Rolesor)",
    priceINR: 2082000,
    formattedPrice: "₹20,82,000",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: ["../Watch-images/rolex/Rolex Sea-Dweller/Rolex Sea-Dweller.avif"],
  },
];

//casio watch list
const casioBestsellers = [
  {
    id: 1,
    name: "Casio G-Shock 'CasiOak' GA-2100",
    collection: "G-Shock",
    model: "GA-2100-1A1DR",
    specs: "45.4 mm, carbon core guard, black resin strap",
    priceINR: 9195,
    formattedPrice: "₹9,195",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio G-Shock/Casio G-Shock-front.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock/Casio G-Shock-back.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock/Casio G-Shock-onhand.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock/Casio G-Shock-strap.avif",
    ],
  },
  {
    id: 2,
    name: "Casio Vintage Digital A158WA",
    collection: "Vintage",
    model: "A-158WA-1Q",
    specs: "36.8 mm, chrome plated case, stainless steel band",
    priceINR: 1895,
    formattedPrice: "₹1,895",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio Vintage Digital/Casio Vintage Digital-front.avif",
      "../Watch-images/Casio-Watchs/Casio Vintage Digital/Casio Vintage Digital-back.avif",
      "../Watch-images/Casio-Watchs/Casio Vintage Digital/Casio Vintage Digital-onhand.avif",
      "../Watch-images/Casio-Watchs/Casio Vintage Digital/Casio Vintage Digital-side.avif",
    ],
  },
  {
    id: 3,
    name: "Casio Edifice Chronograph EFR-526D",
    collection: "Edifice",
    model: "EFR-526D-5CV",
    specs: "43.8 mm, stainless steel case and solid band",
    priceINR: 8495,
    formattedPrice: "₹8,495",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio Edifice Chronograph/Casio Edifice Chronograph-front.avif",
      "../Watch-images/Casio-Watchs/Casio Edifice Chronograph/Casio Edifice Chronograph-back.avif",
      "../Watch-images/Casio-Watchs/Casio Edifice Chronograph/Casio Edifice Chronograph-side.avif",
      "../Watch-images/Casio-Watchs/Casio Edifice Chronograph/Casio Edifice Chronograph.avif",
    ],
  },
  {
    id: 4,
    name: "Casio G-Shock Tough Solar G-5600",
    collection: "G-Shock",
    model: "G-5600UE-1DR",
    specs: "43.2 mm, resin case, tough solar power, resin strap",
    priceINR: 6495,
    formattedPrice: "₹6,495",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio G-Shock Tough/Casio G-Shock Tough-front.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Tough/Casio G-Shock Tough-back.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Tough/Casio G-Shock Tough-onhand.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Tough/Casio G-Shock Tough.webp",
    ],
  },

  {
    id: 6,
    name: "Casio Edifice Automatic Forged Carbon",
    collection: "Edifice",
    model: "EFK-100CD-1A",
    specs: "39 mm, mechanical movement, see-through back, sapphire crystal",
    priceINR: 26995,
    formattedPrice: "₹26,995",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio Edifice Automatic/Casio Edifice Automatic-front.avif",
      "../Watch-images/Casio-Watchs/Casio Edifice Automatic/Casio Edifice Automatic-back.avif",
      "../Watch-images/Casio-Watchs/Casio Edifice Automatic/Casio Edifice Automatic-onhand.avif",
      "../Watch-images/Casio-Watchs/Casio Edifice Automatic/Casio Edifice Automatic.avif",
    ],
  },
  {
    id: 7,
    name: "Casio G-Shock Full Metal GMW-B5000",
    collection: "G-Shock",
    model: "GMW-B5000D-1DR",
    specs: "43.2 mm, full stainless steel case and link band, Bluetooth link",
    priceINR: 49995,
    formattedPrice: "₹49,995",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio G-Shock Full Metal/Casio G-Shock Full Metal-front.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Full Metal/Casio G-Shock Full Metal-back.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Full Metal/Casio G-Shock Full Metal-side.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Full Metal/Casio G-Shock Full Metal.avif",
    ],
  },
  {
    id: 8,
    name: "Casio F-91W Iconic Digital",
    collection: "Youth",
    model: "F-91W-1Q",
    specs: "35.2 mm, classic water-resistant design, black resin strap",
    priceINR: 1295,
    formattedPrice: "₹1,295",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio F-91W/Casio F-91W-front.avif",
      "../Watch-images/Casio-Watchs/Casio F-91W/Casio F-91W-back.avif",
      "../Watch-images/Casio-Watchs/Casio F-91W/Casio F-91W-side.avif",
      "../Watch-images/Casio-Watchs/Casio F-91W/Casio F-91W.avif",
    ],
  },
  {
    id: 9,
    name: "Casio Enticer 'Tiffany Blue' MTP",
    collection: "Casio Collection",
    model: "MTP-1302PD-2AV",
    specs: "38.5 mm, fluted bezel, turquoise blue dial, steel band",
    priceINR: 3995,
    formattedPrice: "₹3,995",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio Enticer/Casio Enticer-front.avif",
      "../Watch-images/Casio-Watchs/Casio Enticer/Casio Enticer-back.avif",
      "../Watch-images/Casio-Watchs/Casio Enticer/Casio Enticer-side.avif",
      "../Watch-images/Casio-Watchs/Casio Enticer/Casio Enticer.avif",
    ],
  },
  {
    id: 10,
    name: "Casio G-Shock Master of G Mudmaster",
    collection: "G-Shock",
    model: "GG-B100-1A3DR",
    specs: "53.1 mm, mud-resistant carbon core structure, green resin strap",
    priceINR: 19995,
    formattedPrice: "₹19,995",
    mrpNote:
      "Maximum retail price (GST Incl.). The maximum retail price is applicable for imports in India. Retailers may have stock at different MRP based on their date of purchase.",
    images: [
      "../Watch-images/Casio-Watchs/Casio G-Shock Master/Casio G-Shock Master-front.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Master/Casio G-Shock Master-back.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Master/Casio G-Shock Master-dial.avif",
      "../Watch-images/Casio-Watchs/Casio G-Shock Master/Casio G-Shock Master-side.avif",
    ],
  },
];

// ==========================================
// 1. AUDEMARS PIGUET
// ==========================================
// ==========================================
// 1. AUDEMARS PIGUET
// ==========================================
const audemarsPiguetBestsellers = [
  {
    id: 101,
    name: "Audemars Piguet Royal Oak Selfwinding",
    collection: "Royal Oak",
    model: "15500ST.OO.1220ST.01",
    specs: "41 mm, Blue Dial, Steel Bracelet",
    priceINR: 2350000,
    formattedPrice: "₹23,50,000",
    mrpNote:
      "Estimated retail price (GST Incl.). Final pricing varies by dynamic boutique allocations.",
    images: [
      "../Watch-images/Audemars Piguet/royal-oak/Royal Oak-front.avif",
      "../Watch-images/Audemars Piguet/royal-oak/Royal Oak-back.avif",
      "../Watch-images/Audemars Piguet/royal-oak/Royal Oak-dial.avif",
      "../Watch-images/Audemars Piguet/royal-oak/Royal Oak-side.avif",
    ],
  },
  {
    id: 102,
    name: "Audemars Piguet Royal Oak 'Jumbo' Extra-Thin",
    collection: "Royal Oak",
    model: "16202ST.OO.1240ST.01",
    specs: "39 mm, Bleu Nuit dial, Stainless Steel",
    priceINR: 2850000,
    formattedPrice: "₹28,50,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Audemars Piguet/Royal Oak Jumbo/Royal Oak Jumbo-front.avif",
      "../Watch-images/Audemars Piguet/Royal Oak Jumbo/Royal Oak Jumbo-back.avif",
      "../Watch-images/Audemars Piguet/Royal Oak Jumbo/Royal Oak Jumbo-side.avif",
    ],
  },
  {
    id: 103,
    name: "Audemars Piguet Royal Oak Offshore Chronograph",
    collection: "Royal Oak Offshore",
    model: "26420SO.OO.A002CA.01",
    specs: "43 mm, Black Dial, Black Rubber Strap",
    priceINR: 3420000,
    formattedPrice: "₹34,20,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Audemars Piguet/Offshore Chronograph/Offshore Chronograph-front.avif",
      "../Watch-images/Audemars Piguet/Offshore Chronograph/Offshore Chronograph-back.avif",
      "../Watch-images/Audemars Piguet/Offshore Chronograph/Offshore Chronograph-dial.avif",
      "../Watch-images/Audemars Piguet/Offshore Chronograph/Offshore Chronograph-side.avif",
    ],
  },
  {
    id: 104,
    name: "Audemars Piguet Royal Oak Chronograph",
    collection: "Royal Oak",
    model: "26240ST.OO.1320ST.05",
    specs: "41 mm, Green Dial, Steel Bracelet",
    priceINR: 3100000,
    formattedPrice: "₹31,00,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Audemars Piguet/Offshore Chronograph-2/Offshore Chronograph-front.avif",
      "../Watch-images/Audemars Piguet/Offshore Chronograph-2/Offshore Chronograph-back.avif",
      "../Watch-images/Audemars Piguet/Offshore Chronograph-2/Offshore Chronograph-side.avif",
    ],
  },
  {
    id: 105,
    name: "Audemars Piguet Code 11.59 Selfwinding",
    collection: "Code 11.59",
    model: "15210QT.OO.A064KB.01",
    specs: "41 mm, Beige Dial, Ceramic & Steel Case, Rubber-Coated Strap",
    priceINR: 2100000,
    formattedPrice: "₹21,00,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Audemars Piguet/Code 11.59/Code 11.59-front.avif",
      "../Watch-images/Audemars Piguet/Code 11.59/Code 11.59-back.avif",
      "../Watch-images/Audemars Piguet/Code 11.59/Code 11.59-onhand.avif",
      "../Watch-images/Audemars Piguet/Code 11.59/Code 11.59-side.avif",
    ],
  },
  {
    id: 106,
    name: "Audemars Piguet Royal Oak Offshore Quartz",
    collection: "Royal Oak Offshore",
    model: "15720ST.OO.A052CA.01",
    specs: "42 mm, Khaki Green Dial, Khaki Rubber Strap",
    priceINR: 2550000,
    formattedPrice: "₹25,50,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Audemars Piguet/Royal Oak quartz/Royal Oak quartz-front.avif",
      "../Watch-images/Audemars Piguet/Royal Oak quartz/Royal Oak quartz-back.avif",
      "../Watch-images/Audemars Piguet/Royal Oak quartz/Royal Oak quartz-side.avif",
    ],
  },
  {
    id: 107,
    name: "Audemars Piguet Royal Oak Frosted Gold",
    collection: "Royal Oak",
    model: "15550OR.OO.1356OR.02",
    specs: "37 mm, 18-Carat Pink Gold, Silver Dial",
    priceINR: 4800000,
    formattedPrice: "₹48,00,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Audemars Piguet/Frosted Gold/Frosted Gold-front.avif",
      "../Watch-images/Audemars Piguet/Frosted Gold/Frosted Gold-back.avif",
      "../Watch-images/Audemars Piguet/Frosted Gold/Frosted Gold-side.avif",
    ],
  },
  {
    id: 108,
    name: "Audemars Piguet Perpetual Calendar",
    collection: "Code 11.59",
    model: "26393NR.OO.A002KB.01",
    specs: "41 mm, Grey Dial, 18ct Pink Gold & Ceramic",
    priceINR: 3850000,
    formattedPrice: "₹38,50,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Audemars Piguet/Perpetual Calendar/Perpetual Calendar-front.avif",
      "../Watch-images/Audemars Piguet/Perpetual Calendar/Perpetual Calendar-back.avif",
      "../Watch-images/Audemars Piguet/Perpetual Calendar/Perpetual Calendar-side.avif",
    ],
  },

  {
    id: 110,
    name: "Audemars Piguet Royal Oak Double Balance Wheel Openworked",
    collection: "Royal Oak",
    model: "15407ST.OO.1220ST.01",
    specs: "41 mm, Skeleton Dial, Stainless Steel",
    priceINR: 6200000,
    formattedPrice: "₹62,00,000",
    mrpNote:
      "Estimated retail price (GST Incl.). Highly restricted production.",
    images: [
      "../Watch-images/Audemars Piguet/Double Balance/Double balance-front.avif",
      "../Watch-images/Audemars Piguet/Double Balance/Double balance-back.avif",
      "../Watch-images/Audemars Piguet/Double Balance/Double balance-side.avif",
    ],
  },
];
// ==========================================
// 2. PATEK PHILIPPE
// ==========================================
const patekPhilippeBestsellers = [
  {
    id: 201,
    name: "Patek Philippe Nautilus Selfwinding",
    collection: "Nautilus",
    model: "5811/1G-001",
    specs: "40 mm, White Gold, Blue Sunburst Dial",
    priceINR: 5950000,
    formattedPrice: "₹59,50,000",
    mrpNote: "Estimated standard boutique allocation retail price.",
    images: [
      "../Watch-images/Patek Philippe/Nautilus Selfwinding/Nautilus Selfwinding-front.avif",
      "../Watch-images/Patek Philippe/Nautilus Selfwinding/Nautilus Selfwinding-back.avif",
      "../Watch-images/Patek Philippe/Nautilus Selfwinding/Nautilus Selfwinding-side.avif",
      "../Watch-images/Patek Philippe/Nautilus Selfwinding/Nautilus Selfwinding-dial.avif",
    ],
  },
  {
    id: 202,
    name: "Patek Philippe Aquanaut",
    collection: "Aquanaut",
    model: "5167A-001",
    specs: "40.8 mm, Black Dial, Black 'Tropical' Composite Strap",
    priceINR: 2140000,
    formattedPrice: "₹21,40,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Patek Philippe/Aquanaut/Aquanaut-front.avif",
      "../Watch-images/Patek Philippe/Aquanaut/Aquanaut-back.avif",
      "../Watch-images/Patek Philippe/Aquanaut/Aquanaut-side.avif",
      "../Watch-images/Patek Philippe/Aquanaut/Aquanaut-dial.avif",
    ],
  },
  {
    id: 203,
    name: "Patek Philippe Calatrava",
    collection: "Calatrava",
    model: "6119G-001",
    specs: "39 mm, White Gold, Charcoal Grey Dial, Clous de Paris Bezel",
    priceINR: 2610000,
    formattedPrice: "₹26,10,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Patek Philippe/Calatrava/Calatrava-front.avif",
      "../Watch-images/Patek Philippe/Calatrava/Calatrava-back.avif",
      "../Watch-images/Patek Philippe/Calatrava/Calatrava-side.avif",
      "../Watch-images/Patek Philippe/Calatrava/Calatrava-dial.avif",
    ],
  },
  {
    id: 204,
    name: "Patek Philippe Aquanaut Travel Time",
    collection: "Aquanaut",
    model: "5164G-001",
    specs: "40.8 mm, Blue-Grey Dial, 18ct White Gold",
    priceINR: 5210000,
    formattedPrice: "₹52,10,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Patek Philippe/Aquanaut Travel Time/Patek Philippe Aquanaut Travel Time-front.avif",
      "../Watch-images/Patek Philippe/Aquanaut Travel Time/Patek Philippe Aquanaut Travel Time-back.avif",
      "../Watch-images/Patek Philippe/Aquanaut Travel Time/Patek Philippe Aquanaut Travel Time-side.avif",
      "../Watch-images/Patek Philippe/Aquanaut Travel Time/Patek Philippe Aquanaut Travel Time-dial.avif",
    ],
  },
  {
    id: 205,
    name: "Patek Philippe Golden Ellipse",
    collection: "Golden Ellipse",
    model: "5738R-001",
    specs: "34.5 x 39.5 mm, Rose Gold, Ebony Black Sunburst Dial",
    priceINR: 3120000,
    formattedPrice: "₹31,20,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Patek Philippe/Patek Philippe Golden Ellipse/Patek Philippe Golden Ellipse-front.avif",
      "../Watch-images/Patek Philippe/Patek Philippe Golden Ellipse/Patek Philippe Golden Ellipse-back.avif",
      "../Watch-images/Patek Philippe/Patek Philippe Golden Ellipse/Patek Philippe Golden Ellipse-side.avif",
      "../Watch-images/Patek Philippe/Patek Philippe Golden Ellipse/Patek Philippe Golden Ellipse-4-dial.avif",
    ],
  },

  {
    id: 208,
    name: "Patek Philippe Grand Complications Perpetual Calendar",
    collection: "Grand Complications",
    model: "5327G-001",
    specs: "39 mm, White Gold, Royal Blue Dial",
    priceINR: 7850000,
    formattedPrice: "₹78,50,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Patek Philippe/Patek Philippe Grand Complications Perpetual Calendar/Patek Philippe Grand Complications Perpetual Calendar-front.avif",
      "../Watch-images/Patek Philippe/Patek Philippe Grand Complications Perpetual Calendar/Patek Philippe Grand Complications Perpetual Calendar-back.avif",
      "../Watch-images/Patek Philippe/Patek Philippe Grand Complications Perpetual Calendar/Patek Philippe Grand Complications Perpetual Calendar-side.avif",
      "../Watch-images/Patek Philippe/Patek Philippe Grand Complications Perpetual Calendar/Patek Philippe Grand Complications Perpetual Calendar-dial.avif",
    ],
  },

  {
    id: 210,
    name: "Patek Philippe World Time",
    collection: "Complications",
    model: "5230P-001",
    specs: "38.5 mm, Platinum, Blue Hand-Guilloché Dial",
    priceINR: 5890000,
    formattedPrice: "₹58,90,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Patek Philippe/Patek Philippe World Time/Patek Philippe World Time-front.avif",
      "../Watch-images/Patek Philippe/Patek Philippe World Time/Patek Philippe World Time-back.avif",
      "../Watch-images/Patek Philippe/Patek Philippe World Time/Patek Philippe World Time-side.avif",
      "../Watch-images/Patek Philippe/Patek Philippe World Time/Patek Philippe World Time-dial.avif",
    ],
  },
];

// ==========================================
// 3. BREITLING
// ==========================================
const breitlingBestsellers = [
  {
    id: 301,
    name: "Breitling Navitimer B01 Chronograph 43",
    collection: "Navitimer",
    model: "AB0138211B1A1",
    specs: "43 mm, Black Dial, Stainless Steel Navitimer Bracelet",
    priceINR: 814000,
    formattedPrice: "₹8,14,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/Breitling/Navitimer B01/Navitimer B01 Chronograph 43.front.webp",
      "../Watch-images/Breitling/Navitimer B01/Navitimer B01 Chronograph 43-full.webp",
      "../Watch-images/Breitling/Navitimer B01/Navitimer B01 Chronograph 43.back.webp",

      "../Watch-images/Breitling/Navitimer B01/Navitimer B01 Chronograph 43.side.webp",
    ],
  },
  {
    id: 302,
    name: "Breitling Superocean Automatic 42",
    collection: "Superocean",
    model: "A17375211B1S1",
    specs: "42 mm, Black Dial, Inlaid White Bezel, Black Rubber Strap",
    priceINR: 421000,
    formattedPrice: "₹4,21,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/Breitling/Superocean Automatic/Superocean Automatic.front.webp",
      "../Watch-images/Breitling/Superocean Automatic/Superocean Automatic-full.webp",
      "../Watch-images/Breitling/Superocean Automatic/Superocean Automatic-back.webp",

      "../Watch-images/Breitling/Superocean Automatic/Superocean Automatic-side.webp",
    ],
  },
  {
    id: 303,
    name: "Breitling Chronomat B01 42",
    collection: "Chronomat",
    model: "AB0134101G1A1",
    specs: "42 mm, Silver Dial with Black Subdials, Rouleaux Steel Bracelet",
    priceINR: 765000,
    formattedPrice: "₹7,65,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/Breitling/Chronomat B01 42/Chronomat B01 42-front.webp",
      "../Watch-images/Breitling/Chronomat B01 42/Chronomat B01 42-full.webp",
      "../Watch-images/Breitling/Chronomat B01 42/Chronomat B01 42-back.webp",

      "../Watch-images/Breitling/Chronomat B01 42/Chronomat B01 42-side.webp",
    ],
  },
  {
    id: 304,
    name: "Breitling Avenger Automatic GMT 44",
    collection: "Avenger",
    model: "A32320101B1A1",
    specs: "44 mm, Black Dial, Stainless Steel Bracelet",
    priceINR: 495000,
    formattedPrice: "₹4,95,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/Breitling/Avenger Automatic GMT 44/Avenger Automatic GMT 44-front.webp",
      "../Watch-images/Breitling/Avenger Automatic GMT 44/Avenger Automatic GMT 44-full.webp",
      "../Watch-images/Breitling/Avenger Automatic GMT 44/Avenger Automatic GMT 44-back.webp",

      "../Watch-images/Breitling/Avenger Automatic GMT 44/Avenger Automatic GMT 44-side.webp",
    ],
  },
  {
    id: 305,
    name: "Breitling Premier B01 Chronograph 42",
    collection: "Premier",
    model: "AB0138241G1P1",
    specs: "42 mm, Silver Dial, Black Alligator Leather Strap",
    priceINR: 735000,
    formattedPrice: "₹7,35,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/Breitling/Premier B01 Chronograph 42/Premier B01 Chronograph 42-front.webp",
      "../Watch-images/Breitling/Premier B01 Chronograph 42/Premier B01 Chronograph 42-full.webp",
      "../Watch-images/Breitling/Premier B01 Chronograph 42/Premier B01 Chronograph 42-back.webp",

      "../Watch-images/Breitling/Premier B01 Chronograph 42/Premier B01 Chronograph 42-side.webp",
    ],
  },
  {
    id: 306,
    name: "Breitling Superocean Heritage B20 Automatic",
    collection: "Superocean Heritage",
    model: "AB2010121B1S1",
    specs: "42 mm, Mesh-pattern Black Rubber Strap, Ceramic Bezel",
    priceINR: 472000,
    formattedPrice: "₹4,72,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/Breitling/Superocean Heritage B20 Automatic/Superocean Heritage B20 Automatic-front.webp",
      "../Watch-images/Breitling/Superocean Heritage B20 Automatic/Superocean Heritage B20 Automatic-full.webp",
      "../Watch-images/Breitling/Superocean Heritage B20 Automatic/Superocean Heritage B20 Automatic-back.webp",

      "../Watch-images/Breitling/Superocean Heritage B20 Automatic/Superocean Heritage B20 Automatic-side.webp",
    ],
  },
  {
    id: 307,
    name: "Breitling Top Time B01 'Deus'",
    collection: "Top Time",
    model: "AB0141101L1X1",
    specs: "41 mm, Soft Blue/Cream Dial, Brown Racing Leather Strap",
    priceINR: 695000,
    formattedPrice: "₹6,95,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/Breitling/Top Time B01/Top Time B01-front.webp",
      "../Watch-images/Breitling/Top Time B01/Top Time B01 -full.webp",
      "../Watch-images/Breitling/Top Time B01/Top Time B01-back.webp",

      "../Watch-images/Breitling/Top Time B01/Top Time B01-side.webp",
    ],
  },
];

// ==========================================
// 5. TISSOT
// ==========================================
const tissotBestsellers = [
  {
    id: 501,
    name: "Tissot PRX Powermatic 80 Blue",
    collection: "T-Classic",
    model: "T137.407.11.041.00",
    specs: "40 mm, Waffle Dark Blue Dial, Integrated Stainless Steel Bracelet",
    priceINR: 66000,
    formattedPrice: "₹66,000",
    mrpNote:
      "Maximum retail price (GST Incl.). Standard across premium Tissot stores.",
    images: [
      "../Watch-images/tissot/Tissot PRX Powermatic 80 Blue/Tissot PRX Powermatic 80 Blue-front.webp",
      "../Watch-images/tissot/Tissot PRX Powermatic 80 Blue/Tissot PRX Powermatic 80 Blue-back.webp",
      "../Watch-images/tissot/Tissot PRX Powermatic 80 Blue/Tissot PRX Powermatic 80 Blue-onhand.webp",
      "../Watch-images/tissot/Tissot PRX Powermatic 80 Blue/Tissot PRX Powermatic 80 Blue-strap.webp",
    ],
  },
  {
    id: 502,
    name: "Tissot Seastar 1000 Chronograph",
    collection: "T-Sport",
    model: "T120.417.11.041.01",
    specs: "45.5 mm, Blue Gradient Dial, Quartz Chronograph, Steel Strap",
    priceINR: 52000,
    formattedPrice: "₹52,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/tissot/Tissot Seastar 1000 Chronograph/Tissot Seastar 1000 Chronograph-front.webp",
      "../Watch-images/tissot/Tissot Seastar 1000 Chronograph/Tissot Seastar 1000 Chronograph-back.webp",
      "../Watch-images/tissot/Tissot Seastar 1000 Chronograph/Tissot Seastar 1000 Chronograph-side.webp",
      "../Watch-images/tissot/Tissot Seastar 1000 Chronograph/Tissot Seastar 1000 Chronograph-strap.webp",
    ],
  },
  {
    id: 503,
    name: "Tissot Gentleman Powermatic 80 Silicium",
    collection: "T-Classic",
    model: "T127.407.11.041.00",
    specs: "40 mm, Clean Blue Dial, Crosshair Cross pattern, Steel Bracelet",
    priceINR: 74000,
    formattedPrice: "₹74,000",
    mrpNote:
      "Maximum retail price (GST Incl.). Anti-magnetic Silicon Hairspring.",
    images: [
      "../Watch-images/tissot/Tissot Gentleman Powermatic 80 Silicium/Tissot Gentleman Powermatic 80 Silicium-front.webp",
      "../Watch-images/tissot/Tissot Gentleman Powermatic 80 Silicium/Tissot Gentleman Powermatic 80 Silicium-back.webp",
      "../Watch-images/tissot/Tissot Gentleman Powermatic 80 Silicium/Tissot Gentleman Powermatic 80 Silicium-onhand.webp",
      "../Watch-images/tissot/Tissot Gentleman Powermatic 80 Silicium/Tissot Gentleman Powermatic 80 Silicium-side.webp",
    ],
  },
  {
    id: 504,
    name: "Tissot Le Locle Powermatic 80",
    collection: "T-Classic",
    model: "T006.407.16.058.00",
    specs: "39.3 mm, Guilloché Black Dial, Roman Numerals, Black Leather Strap",
    priceINR: 54000,
    formattedPrice: "₹54,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/tissot/Tissot Le Locle Powermatic 80/Tissot Le Locle Powermatic 80-front.webp",
      "../Watch-images/tissot/Tissot Le Locle Powermatic 80/Tissot Le Locle Powermatic 80-back.webp",
      "../Watch-images/tissot/Tissot Le Locle Powermatic 80/Tissot Le Locle Powermatic 80-onhand.webp",
      "../Watch-images/tissot/Tissot Le Locle Powermatic 80/Tissot Le Locle Powermatic 80-side.webp",
    ],
  },
  {
    id: 505,
    name: "Tissot Chrono XL Classic",
    collection: "T-Sport",
    model: "T116.617.16.057.00",
    specs: "45 mm, Oversized Black Dial, White Arabic Indices, Leather Strap",
    priceINR: 32000,
    formattedPrice: "₹32,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/tissot/Tissot Chrono XL Classic/Tissot Chrono XL Classic-front.webp",
      "../Watch-images/tissot/Tissot Chrono XL Classic/Tissot Chrono XL Classic-onhand.webp",
      "../Watch-images/tissot/Tissot Chrono XL Classic/Tissot Chrono XL Classic-strap.webp",
    ],
  },
  {
    id: 506,
    name: "Tissot PRX Digital 40mm Gold",
    collection: "T-Classic",
    model: "T137.463.33.020.00",
    specs: "40 mm, Full Yellow Gold PVD Coating, Digital Screen Display",
    priceINR: 42500,
    formattedPrice: "₹42,500",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/tissot/Tissot PRX Digital 40mm Gold/Tissot PRX Digital 40mm Gold-front.webp",
      "../Watch-images/tissot/Tissot PRX Digital 40mm Gold/Tissot PRX Digital 40mm Gold-back.webp",
      "../Watch-images/tissot/Tissot PRX Digital 40mm Gold/Tissot PRX Digital 40mm Gold-onhand.webp",
      "../Watch-images/tissot/Tissot PRX Digital 40mm Gold/Tissot PRX Digital 40mm Gold-side.webp",
    ],
  },
  {
    id: 507,
    name: "Tissot Heritage Visodate Automatic",
    collection: "Heritage",
    model: "T118.430.16.051.00",
    specs: "42 mm, Curved Dial, Classic Vintage Brand Script, Leather Strap",
    priceINR: 58000,
    formattedPrice: "₹58,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/tissot/Tissot Heritage Visodate Automatic/Tissot Heritage Visodate Automatic-front.png",
      "../Watch-images/tissot/Tissot Heritage Visodate Automatic/Tissot Heritage Visodate Automatic-back.png",
      "../Watch-images/tissot/Tissot Heritage Visodate Automatic/Tissot Heritage Visodate Automatic-strap.png",
    ],
  },
  {
    id: 508,
    name: "Tissot Telemeter 1938 Vintage Chronograph",
    collection: "Heritage",
    model: "T142.462.16.032.00",
    specs: "42 mm, Valjoux A05 Automatic Chrono, Telemeter scale layout",
    priceINR: 194000,
    formattedPrice: "₹1,94,000",
    mrpNote:
      "Maximum retail price (GST Incl.). Exclusive mechanical vintage collection.",
    images: [
      "../Watch-images/tissot/Tissot Heritage Visodate Automatic/Tissot Telemeter 1938 Vintage Chronograph-front.webp",
      "../Watch-images/tissot/Tissot Heritage Visodate Automatic/Tissot Telemeter 1938 Vintage Chronograph-back.webp",
      "../Watch-images/tissot/Tissot Heritage Visodate Automatic/Tissot Telemeter 1938 Vintage Chronograph-onhand.webp",
      "../Watch-images/tissot/Tissot Heritage Visodate Automatic/Tissot Telemeter 1938 Vintage Chronograph-side.webp",
    ],
  },
];

// ==========================================
// 6. JAEGER-LECOULTRE
// ==========================================
const jaegerLeCoultreBestsellers = [
  {
    id: 601,
    name: "Jaeger-LeCoultre Reverso Classic Monoface Large",
    collection: "Reverso",
    model: "Q3858522",
    specs: "45.6 x 27.4 mm, Silver Dial, Manual Winding, Black Leather Strap",
    priceINR: 845000,
    formattedPrice: "₹8,45,000",
    mrpNote: "Estimated retail price based on premium luxury allocations.",
    images: [
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Reverso Classic Monoface Large/Jaeger-LeCoultre Reverso Classic Monoface Large-front.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Reverso Classic Monoface Large/Jaeger-LeCoultre Reverso Classic Monoface Large-back.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Reverso Classic Monoface Large/Jaeger-LeCoultre Reverso Classic Monoface Large-side.webp",
    ],
  },
  {
    id: 602,
    name: "Jaeger-LeCoultre Reverso Tribute Duoface",
    collection: "Reverso",
    model: "Q3988482",
    specs:
      "47 x 28.3 mm, Blue Front Dial / Silver Reverse Dial, Casa Fagliano Strap",
    priceINR: 1120000,
    formattedPrice: "₹11,20,000",
    mrpNote: "Estimated retail price (GST Incl.). Monorational dual timezones.",
    images: [
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Reverso Tribute Duoface/Jaeger-LeCoultre Reverso Tribute Duoface-front.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Reverso Tribute Duoface/Jaeger-LeCoultre Reverso Tribute Duoface-dial.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Reverso Tribute Duoface/Jaeger-LeCoultre Reverso Tribute Duoface-side.webp",
    ],
  },
  {
    id: 603,
    name: "Jaeger-LeCoultre Master Ultra Thin Moon",
    collection: "Master Ultra Thin",
    model: "Q1368430",
    specs:
      "39 mm, Silver Dial, High-precision Moonphase counter, Black Leather Strap",
    priceINR: 980000,
    formattedPrice: "₹9,80,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Ultra Thin Moon/Jaeger-LeCoultre Master Ultra Thin Moon-front.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Ultra Thin Moon/Jaeger-LeCoultre Master Ultra Thin Moon-back.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Ultra Thin Moon/Jaeger-LeCoultre Master Ultra Thin Moon-side.webp",
    ],
  },
  {
    id: 604,
    name: "Jaeger-LeCoultre Master Control Date",
    collection: "Master Control",
    model: "Q4018420",
    specs: "40 mm, Silver Sunray Dial, Calibre 899 Automatic, Leather Strap",
    priceINR: 780000,
    formattedPrice: "₹7,80,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Control Date/Jaeger-LeCoultre Master Control Date-front.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Control Date/Jaeger-LeCoultre Master Control Date-back.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Control Date/Jaeger-LeCoultre Master Control Date-side.webp",
    ],
  },
  {
    id: 605,
    name: "Jaeger-LeCoultre Polaris Automatic",
    collection: "Polaris",
    model: "Q9008471",
    specs:
      "41 mm, Black Textured Dial, Dual Crown inner-bezel mechanism, Steel Band",
    priceINR: 890000,
    formattedPrice: "₹8,90,000",
    mrpNote: "Estimated retail price (GST Incl.). Sport-elegant lines.",
    images: [
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Control Chronograph Calendar/Jaeger-LeCoultre Master Control Chronograph Calendar-front.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Control Chronograph Calendar/Jaeger-LeCoultre Master Control Chronograph Calendar-back.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Control Chronograph Calendar/Jaeger-LeCoultre Master Control Chronograph Calendar-strap.webp",
    ],
  },

  {
    id: 607,
    name: "Jaeger-LeCoultre Master Ultra Thin Reserve de Marche",
    collection: "Master Ultra Thin",
    model: "Q1378420",
    specs: "39 mm, Power Reserve Indicator, Pointer Date scale layout",
    priceINR: 960000,
    formattedPrice: "₹9,60,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Ultra Thin Reserve de Marche/Jaeger-LeCoultre Master Ultra Thin Reserve de Marche-front.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Ultra Thin Reserve de Marche/Jaeger-LeCoultre Master Ultra Thin Reserve de Marche-back.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Master Ultra Thin Reserve de Marche/Jaeger-LeCoultre Master Ultra Thin Reserve de Marche-side.webp",
    ],
  },
  {
    id: 608,
    name: "Jaeger-LeCoultre Master Control Chronograph Calendar",
    collection: "Master Control",
    model: "Q4138420",
    specs:
      "40 mm, Complete Calendar display, Column-wheel integrated chronograph",
    priceINR: 1450000,
    formattedPrice: "₹14,50,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Polaris Automatic/Jaeger-LeCoultre Polaris Automatic-front.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Polaris Automatic/Jaeger-LeCoultre Polaris Automatic-back.webp",
      "../Watch-images/jaegerLeCoultre/Jaeger-LeCoultre Polaris Automatic/Jaeger-LeCoultre Polaris Automatic-side.webp",
    ],
  },
];

// ==========================================
// 7. HUBLOT
// ==========================================
const hublotBestsellers = [
  {
    id: 701,
    name: "Hublot Classic Fusion Titanium Black",
    collection: "Classic Fusion",
    model: "511.NX.1171.RX",
    specs: "45 mm, Satin-Finished and Polished Titanium, Black Rubber Strap",
    priceINR: 698000,
    formattedPrice: "₹6,98,000",
    mrpNote:
      "Maximum retail price applicable at authorized Indian retail networks.",

    images: [
      "../Watch-images/hublot/Hublot Classic Fusion Titanium Black/Hublot Classic Fusion Titanium Black-front.png",
    ],
  },
  {
    id: 702,
    name: "Hublot Big Bang Unico Titanium Ceramic",
    collection: "Big Bang",
    model: "441.NM.1170.RX",
    specs:
      "42 mm, In-house Flyback Chronograph Skeleton movement, Ceramic Bezel",
    priceINR: 1720000,
    formattedPrice: "₹17,20,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/hublot/Hublot Big Bang Unico Titanium Ceramic/Big-Bang-Summer-Multi-Colored-Ceramic-42-mm-Soldier-front.png",
    ],
  },
  {
    id: 703,
    name: "Hublot Classic Fusion Chronograph Titanium",
    collection: "Classic Fusion",
    model: "521.NX.1171.RX",
    specs: "45 mm, Twin sub-dial chronograph, Black Rubber Strap",
    priceINR: 980000,
    formattedPrice: "₹9,80,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/hublot/Hublot Classic Fusion Chronograph Titanium/Classic-Fusion-Chronograph-Titanium-on-Rubber-45-mm_0-front.png",
    ],
  },
  {
    id: 704,
    name: "Hublot Big Bang Original Steel",
    collection: "Big Bang",
    model: "301.SB.131.RX",
    specs:
      "44 mm, Carbon Texture Dial, Stainless Steel case with Kevlar inserts",
    priceINR: 1210000,
    formattedPrice: "₹12,10,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/hublot/Hublot Big Bang Original Steel/Hublot Big Bang Original Steel-front.png",
    ],
  },
  {
    id: 705,
    name: "Hublot Spirit of Big Bang Titanium",
    collection: "Spirit of Big Bang",
    model: "642.NX.0170.RX",
    specs: "42 mm, Tonneau Shaped curved case, Skeleton Chrono design",
    priceINR: 1940000,
    formattedPrice: "₹19,40,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/hublot/Hublot Spirit of Big Bang Titanium/Hublot Spirit of Big Bang Titanium-front.png",
    ],
  },
  {
    id: 706,
    name: "Hublot Big Bang Sang Bleu II Titanium",
    collection: "Big Bang",
    model: "418.NX.1107.RX.MXM19",
    specs: "45 mm, Geometric complex case & hands art by Maxime Plescia-Buchi",
    priceINR: 2210000,
    formattedPrice: "₹22,10,000",
    mrpNote: "Maximum retail price (GST Incl.). Limited special series.",
    images: [
      "../Watch-images/hublot/Hublot Big Bang Sang Bleu II Titanium/Hublot Big Bang Sang Bleu II Titanium-front.png",
    ],
  },

  {
    id: 708,
    name: "Hublot Big Bang Integral Ceramic",
    collection: "Big Bang",
    model: "451.FX.6910.FX",
    specs: "42 mm, Integrated solid structural Blue Ceramic Bracelet and Case",
    priceINR: 2050000,
    formattedPrice: "₹20,50,000",
    mrpNote: "Maximum retail price (GST Incl.).",
    images: [
      "../Watch-images/hublot/Hublot Big Bang Integral Ceramic/Hublot Big Bang Integral Ceramic-front.png",
    ],
  },
];

// ==========================================
// 8. VACHERON CONSTANTIN
// ==========================================
const vacheronConstantinBestsellers = [
  {
    id: 801,
    name: "Vacheron Constantin Overseas Automatic",
    collection: "Overseas",
    model: "4500V/110A-B128",
    specs: "41 mm, Translucent Blue Lacquered Dial, Steel Link Bracelet",
    priceINR: 2150000,
    formattedPrice: "₹21,50,000",
    mrpNote:
      "Estimated boutique retail price. Includes interchangeable rubber/leather straps.",
    images: [
      "../Watch-images/Vacheron Constantin/Vacheron Constantin Overseas Automatic/Vacheron Constantin Overseas Automatic-front.avif",
    ],
  },
  {
    id: 802,
    name: "Vacheron Constantin Fiftysix Selfwinding",
    collection: "Fiftysix",
    model: "4600E/000A-B442",
    specs:
      "40 mm, Silver-toned sector dial, Stainless steel case, Alligator strap",
    priceINR: 1150000,
    formattedPrice: "₹11,50,000",
    mrpNote:
      "Estimated retail price (GST Incl.). Retro modern aesthetic lines.",
    images: [
      "../Watch-images/Vacheron Constantin/Vacheron Constantin Fiftysix Selfwinding/Vacheron Constantin Fiftysix Selfwinding-front.avif",
    ],
  },
  {
    id: 803,
    name: "Vacheron Constantin Patrimony Manual-Winding",
    collection: "Patrimony",
    model: "81180/000R-9159",
    specs:
      "40 mm, Minimalist Curved Slate Dial, 18K 5N Pink Gold ultra-thin profile",
    priceINR: 1840000,
    formattedPrice: "₹18,40,000",
    mrpNote:
      "Estimated retail price (GST Incl.). Hallmark of Geneva certified.",
    images: [
      "../Watch-images/Vacheron Constantin/Vacheron Constantin Patrimony Manual-Winding/Vacheron Constantin Patrimony Manual-Winding-front.avif",
    ],
  },
  {
    id: 804,
    name: "Vacheron Constantin Overseas Chronograph",
    collection: "Overseas",
    model: "5500V/110A-B148",
    specs:
      "42.5 mm, Blue dial, Column-wheel Calibre 5200 Chrono, Steel Bracelet",
    priceINR: 2980000,
    formattedPrice: "₹29,80,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Vacheron Constantin/Vacheron Constantin Overseas Chronograph/Vacheron Constantin Overseas Chronograph-front.avif",
    ],
  },
  {
    id: 806,
    name: "Vacheron Constantin Traditionnelle Manual-Winding",
    collection: "Traditionnelle",
    model: "82172/000R-9382",
    specs:
      "38 mm, Opalline Silver Dial, Railway minute track layout, Pink Gold profile",
    priceINR: 2020000,
    formattedPrice: "₹20,20,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Vacheron Constantin/Vacheron Constantin Traditionnelle Manual-Winding/Vacheron Constantin Traditionnelle Manual-Winding-front.avif",
    ],
  },
  {
    id: 808,
    name: "Vacheron Constantin Fiftysix Complete Calendar",
    collection: "Fiftysix",
    model: "4000E/000A-B548",
    specs:
      "40 mm, Day, Date, Month and Moonphase indicator array layout, Steel",
    priceINR: 2180000,
    formattedPrice: "₹21,80,000",
    mrpNote: "Estimated retail price (GST Incl.).",
    images: [
      "../Watch-images/Vacheron Constantin/Vacheron Constantin Fiftysix Complete Calendar/Vacheron Constantin Fiftysix Complete Calendar-front.avif",
    ],
  },
  {
    id: 809,
    name: "Vacheron Constantin Historiques Cornes de Vache 1955",
    collection: "Historiques",
    model: "5000H/000A-B582",
    specs:
      "38.5 mm, Cow-horn shape lugs architecture, Matte silver chronograph dial",
    priceINR: 3800000,
    formattedPrice: "₹38,00,000",
    mrpNote: "Estimated specialized boutique retail pricing structure.",
    images: [
      "../Watch-images/Vacheron Constantin/Vacheron Constantin Historiques Cornes de Vache 1955/Vacheron Constantin Historiques Cornes de Vache 1955-front.avif",
    ],
  },
];

const allWatches = [
  ...omegaBestsellers,
  ...rolexBestsellers,
  ...casioBestsellers,
  ...audemarsPiguetBestsellers,
  ...patekPhilippeBestsellers,
  ...breitlingBestsellers,
  ...tissotBestsellers,
  ...jaegerLeCoultreBestsellers,
  ...hublotBestsellers,
  ...vacheronConstantinBestsellers,
];

console.log(allWatches);

const container = document.querySelector(".watchGrid");
container.innerHTML = "";

allWatches.forEach((watch) => {
  const card = document.createElement("div");
  card.className = "watch-card";

  const mainImage =
    watch.images && watch.images.length > 0
      ? watch.images[0]
      : "placeholder.jpg";

  // 2. Add the inner HTML
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

    window.location.href = "./details/details.html";
  });

  container.appendChild(card);
});
