let index = 0;
const images = document.querySelectorAll(".slides img");

function changeSlide() {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");
  index = (index + 1) % images.length;
}

setInterval(changeSlide, 3000);
