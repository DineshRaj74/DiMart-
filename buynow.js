document.getElementById("productName").innerText =
  localStorage.getItem("buy_name");

document.getElementById("productPrice").innerText =
  localStorage.getItem("buy_price");

document.getElementById("productImage").src = localStorage.getItem("buy_image");
