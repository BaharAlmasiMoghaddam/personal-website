const productDetails = {
  1: {
    name: "Espresso",
    price: "$2.99",
    description: "Strong and bold espresso shot.",
    ingredients: "Coffee beans, water",
  },
  2: {
    name: "Latte",
    price: "$3.99",
    description: "Smooth and creamy milk with espresso.",
    ingredients: "Coffee beans, milk, water",
  },
  3: {
    name: "Cappuccino",
    price: "$3.49",
    description: "Espresso with steamed milk and foam.",
    ingredients: "Coffee beans, milk, water",
  },
  4: {
    name: "Mocha",
    price: "$4.49",
    description: "Espresso with chocolate and steamed milk.",
    ingredients: "Coffee beans, chocolate, milk, water",
  },
  5: {
    name: "Americano",
    price: "$2.49",
    description: "Espresso with hot water.",
    ingredients: "Coffee beans, water",
  },
  6: {
    name: "Macchiato",
    price: "$3.89",
    description: "Espresso with a small amount of steamed milk.",
    ingredients: "Coffee beans, milk, water",
  },
  7: {
    name: "Dark Forest",
    price: "$3.79",
    description: "Rich coffee with a hint of forest berries.",
    ingredients: "Coffee beans, forest berries, water",
  },
  8: {
    name: "Black Hills",
    price: "$5.49",
    description: "Strong coffee with a touch of whiskey.",
    ingredients: "Coffee beans, whiskey, water",
  },
  9: {
    name: "Classic",
    price: "$3.29",
    description: "Traditional brewed coffee.",
    ingredients: "Coffee beans, water",
  },
  10: {
    name: "Cold Brew",
    price: "$3.29",
    description: "Smooth and refreshing cold brew coffee.",
    ingredients: "Coffee beans, water",
  },
};

//
const modal = document.getElementById("productModal");
const detailsDiv = document.getElementById("product-details");
const toggleSwitch = document.querySelector("#dark-mode-toggle");

//
//
//show details:
function openModal(productId) {
  while (detailsDiv.firstChild) {
    detailsDiv.removeChild(detailsDiv.firstChild);
  }

  const product = productDetails[productId];
  const productName = document.createElement("h3");
  productName.textContent = product.name;
  const productPrice = document.createElement("p");
  productPrice.textContent = product.price;
  const productTable = document.createElement("table");
  const tableHeader = document.createElement("tr");
  const propertyHeader = document.createElement("th");
  propertyHeader.textContent = "Property";
  const valueHeader = document.createElement("th");

  valueHeader.textContent = "Value";
  tableHeader.appendChild(propertyHeader);
  tableHeader.appendChild(valueHeader);

  const nameRow = createRow("Name", product.name);
  const priceRow = createRow("Price", product.price);
  const descriptionRow = createRow("Description", product.description);
  const ingredientsRow = createRow("Ingredients", product.ingredients);

  productTable.appendChild(tableHeader);
  productTable.appendChild(nameRow);
  productTable.appendChild(priceRow);
  productTable.appendChild(descriptionRow);
  productTable.appendChild(ingredientsRow);

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart-btn");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.onclick = function () {
    addToCart(productId);
  };

  detailsDiv.appendChild(productName);
  detailsDiv.appendChild(productPrice);
  detailsDiv.appendChild(productTable);
  detailsDiv.appendChild(addToCartButton);

  modal.style.display = "flex";
}

function createRow(property, value) {
  const row = document.createElement("tr");
  const propertyCell = document.createElement("td");
  propertyCell.textContent = property;
  const valueCell = document.createElement("td");
  valueCell.textContent = value;
  row.appendChild(propertyCell);
  row.appendChild(valueCell);
  return row;
}

function closeModal() {
  modal.style.display = "none";
}

//
//

// dark mode:
document.addEventListener("DOMContentLoaded", () => {
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
// add to shop:
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = productDetails[productId];

  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}
