// ================== CART STORAGE ==================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================== CART COUNT ==================
const cartCount = document.getElementById("cart-count");
updateCartCount();

function updateCartCount() {
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

// ================== ADD TO CART ==================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-cart")) {
    const productBox = e.target.closest(".product-box");

    const product = {
      name: productBox.querySelector(".title").innerText,
      price: productBox.querySelector(".price").innerText,
      image: productBox.querySelector(".product-img").src,
      qty: 1,
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert("Product added to cart ✅");
  }
});

// ================== BUY NOW ==================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("buy")) {
    const productBox = e.target.closest(".product-box");

    const product = {
      name: productBox.querySelector(".title").innerText,
      price: productBox.querySelector(".price").innerText,
      image: productBox.querySelector(".product-img").src,
      qty: 1,
    };

    localStorage.setItem("buyNowItem", JSON.stringify(product));
    window.location.href = "checkout.html";
  }
});
