const newsletterForm = document.querySelector(".newsletter-form");
const formMessage = document.getElementById("formMessage");

if (newsletterForm && formMessage) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!newsletterForm.checkValidity()) {
      newsletterForm.reportValidity();
      formMessage.textContent = "";
      return;
    }

    newsletterForm.reset();
    formMessage.textContent = "The information was sent successfully.";
  });
}