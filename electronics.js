document.addEventListener("DOMContentLoaded", () => {
  /* =========================
       CART FUNCTIONALITY
    ========================= */

  const cartCount = document.getElementById("cart-count");
  const addCartButtons = document.querySelectorAll(".add-cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount.textContent = cart.length;

  addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productBox = button.closest(".product-box");

      const product = {
        title: productBox.querySelector(".title").textContent,
        price: productBox.querySelector(".price").textContent,
        desc: productBox.querySelector(".desc").textContent,
        img: productBox.querySelector(".product-img").src,
        quantity: 1,
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      cartCount.textContent = cart.length;

      alert(`✅ ${product.title} added to cart`);
    });
  });

  /* =========================
       SEARCH FUNCTIONALITY
    ========================= */

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
});
