document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".navbar__menu");

  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".contact__form");
  const successMessage = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        successMessage.style.display = "block";
        form.reset();
      }, 1000);
    });
  }

});
