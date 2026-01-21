/* =========================
   ADD TO CART LOGIC
========================= */

// Select buttons
const addCartButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count on load
cartCount.innerText = cart.length;

// Add to cart
addCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productBox = e.target.closest(".product-box");

    const product = {
      title: productBox.querySelector(".title").innerText,
      price: productBox.querySelector(".price").innerText,
      desc: productBox.querySelector(".desc").innerText,
      img: productBox.querySelector("img").src,
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    cartCount.innerText = cart.length;

    alert(`${product.title} added to cart`);
  });
});

/* =========================
   SEARCH FUNCTIONALITY
========================= */

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-box");

searchInput.addEventListener("keyup", () => {
  const searchText = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const title = product.querySelector(".title").innerText.toLowerCase();

    if (title.includes(searchText)) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
});
