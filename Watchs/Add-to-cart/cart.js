document.addEventListener("DOMContentLoaded", () => {
  // 1. Retrieve the cart from localStorage using the specific key
  const cart = JSON.parse(localStorage.getItem("watchCart")) || [];
  const container = document.getElementById("cart-items-list");
  const emptyState = document.querySelector(".cart-empty-state");
  const summaryBox = document.querySelector(".cart-summary-box");
  const wrapper = document.querySelector(".cart-content-wrapper");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total-price");

  // 2. Handle empty cart state
  if (cart.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "flex";
    if (summaryBox) summaryBox.style.display = "none";
    if (wrapper) wrapper.classList.add("is-empty");
    subtotalEl.innerText = "₹0";
    totalEl.innerText = "₹0";
    return;
  }

  // 3. Render items dynamically
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

  // 4. Calculate total securely (ignoring currency symbols and commas)
  const total = cart.reduce((sum, item) => {
    // This regex removes everything that isn't a digit (like ₹ or ,)
    const priceValue = parseFloat(item.price.replace(/[₹,]/g, ""));
    return sum + (isNaN(priceValue) ? 0 : priceValue);
  }, 0);

  // 5. Update summary with Indian numbering format
  subtotalEl.innerText = `₹${total.toLocaleString("en-IN")}`;
  totalEl.innerText = `₹${total.toLocaleString("en-IN")}`;
});

// 6. Logic to remove specific item
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("watchCart")) || [];

  // Remove the item at the specific index
  cart.splice(index, 1);

  // Save the updated list back to storage
  localStorage.setItem("watchCart", JSON.stringify(cart));

  // Refresh page to update UI
  location.reload();
}
