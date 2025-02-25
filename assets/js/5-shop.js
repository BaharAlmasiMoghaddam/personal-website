const toggleSwitch = document.querySelector("#dark-mode-toggle");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

//
//
// dark mode:
document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.querySelector("#dark-mode-toggle");
  toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

//
//
// update shop:
function updateCartDetails() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((product) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;

    const priceCell = document.createElement("td");
    priceCell.textContent = product.price;

    const quantityCell = document.createElement("td");
    quantityCell.textContent = product.quantity;

    const totalCell = document.createElement("td");
    totalCell.textContent = `$${(
      parseFloat(product.price.replace("$", "")) * product.quantity
    ).toFixed(2)}`;

    const actionsCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = () => {
      removeFromCart(product.id);
      updateCartDetails();
    };
    actionsCell.appendChild(removeButton);

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    row.appendChild(actionsCell);

    cartItemsContainer.appendChild(row);
    total += parseFloat(product.price.replace("$", "")) * product.quantity;
  });

  cartTotalElement.textContent = total.toFixed(2);
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function checkout() {
  alert("Proceeding to checkout...");
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartDetails();
});
