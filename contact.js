document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields!";
    return;
  }

  // You can add email regex validation here if needed

  formMessage.style.color = "green";
  formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;

  // Clear the form
  document.getElementById("contactForm").reset();
});
