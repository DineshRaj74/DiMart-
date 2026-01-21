// ===== SELECT ALL ADD TO CART BUTTONS =====
const addCartButtons = document.querySelectorAll(".add-cart");

// ===== LOAD EXISTING CART FROM LOCALSTORAGE =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== UPDATE CART COUNT =====
const cartCount = document.getElementById("cart-count");
if (cartCount) cartCount.innerText = cart.length;

// ===== FUNCTION TO ADD PRODUCT TO CART =====
addCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productBox = e.target.closest(".container");
    if (!productBox) return;

    // Get product details
    const product = {
      title: productBox.querySelector(".title").innerText,
      price: productBox.querySelector(".price").innerText,
      desc: productBox.querySelector(".desc").innerText,
      img: productBox.querySelector(".product-img").src,
    };

    // Add product to cart array
    cart.push(product);

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count
    if (cartCount) cartCount.innerText = cart.length;

    alert(`"${product.title}" added to cart!`);
  });
});

// ================= SEARCH FUNCTIONALITY =================
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".products .container");

searchInput.addEventListener("keyup", function () {
  const searchText = searchInput.value.toLowerCase();

  productCards.forEach((card) => {
    const title = card.querySelector(".title").innerText.toLowerCase();
    const desc = card.querySelector(".desc").innerText.toLowerCase();

    if (title.includes(searchText) || desc.includes(searchText)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
