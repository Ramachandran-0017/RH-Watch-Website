document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("watchCart")) || [];

  const container = document.getElementById("cart-items-list");
  const emptyState = document.querySelector(".cart-empty-state");
  const summaryBox = document.querySelector(".cart-summary-box");
  const wrapper = document.querySelector(".cart-content-wrapper");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total-price");

  if (cart.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "flex";
    if (summaryBox) summaryBox.style.display = "none";
    if (wrapper) wrapper.classList.add("is-empty");
    subtotalEl.innerText = "₹0";
    totalEl.innerText = "₹0";
    return;
  }

  container.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-item">
            <div class="cart-item-media">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="item-info">
                <h4>${item.title}</h4>
                <p class="item-price">${item.price}</p>
                <button onclick="removeFromCart(${index})" class="remove-btn">
                    <i class="fa-regular fa-trash-can"></i> Remove
                </button>
            </div>
        </div>
    `,
    )
    .join("");

  // add up all the prices to get the total
  const total = cart.reduce((sum, item) => {
    const priceValue = parseFloat(item.price.replace(/[₹,]/g, ""));
    return sum + (isNaN(priceValue) ? 0 : priceValue);
  }, 0);

  subtotalEl.innerText = `₹${total.toLocaleString("en-IN")}`;
  totalEl.innerText = `₹${total.toLocaleString("en-IN")}`;

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", showOrderPlaced);
  }
});

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("watchCart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("watchCart", JSON.stringify(cart));

  location.reload();
}

function showOrderPlaced() {
  const overlay = document.getElementById("orderSuccessOverlay");
  const orderIdText = document.getElementById("orderIdText");

  const orderNumber = "RH" + Math.floor(100000 + Math.random() * 900000);
  orderIdText.innerText = "Order ID: " + orderNumber;

  overlay.classList.add("show");

  localStorage.removeItem("watchCart");
}
