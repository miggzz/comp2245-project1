document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email-input");
    const messageDiv = document.querySelector(".message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const email = emailInput.value.trim();
  
      if (email === "") {
        messageDiv.textContent = "Please enter a valid email address.";
      } else {
        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      }
    });
  });
  