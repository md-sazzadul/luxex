// form validation
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form form");

  contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      event.preventDefault();
      alert("Please fill in all the fields.");
    } else if (!validateEmail(email)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

// interactive add to cart button
document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector(".btn.add-to-cart");

  addToCartBtn.addEventListener("click", function () {
    alert("Product added to cart!");
    this.innerText = "Added!";
    this.disabled = true;
    this.style.backgroundColor = "#777";
  });
});

// hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
