// Select all add to cart buttons
const addCartButtons = document.querySelectorAll(".add-cart");

// Load existing cart from localStorage or initialize empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count on page load
document.getElementById("cart-count").innerText = cart.length;

// Add click event for all add-cart buttons
addCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productBox = e.target.closest(".product-box");
    const product = {
      title: productBox.querySelector(".title").innerText,
      price: productBox.querySelector(".price").innerText,
      desc: productBox.querySelector(".desc").innerText,
      img: productBox.querySelector("img").src,
    };

    // Add product to cart array
    cart.push(product);

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count
    document.getElementById("cart-count").innerText = cart.length;

    alert(`${product.title} added to cart`);
  });
});

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const products = document.querySelectorAll(".product-box");

function filterProducts() {
  const searchValue = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const title = product.querySelector(".title").textContent.toLowerCase();
    const desc = product.querySelector(".desc").textContent.toLowerCase();

    if (title.includes(searchValue) || desc.includes(searchValue)) {
      product.style.display = "grid";
    } else {
      product.style.display = "none";
    }
  });
}

// Search while typing
searchInput.addEventListener("keyup", filterProducts);

// Search on button click
searchButton.addEventListener("click", filterProducts);
