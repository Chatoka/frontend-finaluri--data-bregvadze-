let formEl = document.getElementById("contactForm");
const fullNamePattern = /^[a-zA-Zა-ჰ\s]{2,50}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
if (formEl) {
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    let errors = {};

    // full name validation
    let fullName = document.getElementById("fullName").value;

    if (fullName === "") {
      errors.fullName = "Full name field can not be empty";
    } else if (fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters";
    } else if (!fullNamePattern.test(fullName.trim())) {
      errors.fullName = "Full name can only contain letters";
    }

    // email validation
    let email = document.getElementById("email").value;

    if (email === "") {
      errors.email = "Email field can not be empty";
    } else if (!emailPattern.test(email.trim())) {
      errors.email = "Your Email is Invalid";
    }

    // password validation
    let password = document.getElementById("password").value;

    if (password === "") {
      errors.password = "Password field can not be empty";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must contain at least one letter and one number";
    }

    // message validation
    let message = document.getElementById("message").value;

    if (message === "") {
      errors.message = "Message field can not be empty";
    } else if (message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    console.log(errors);

    // error messagee-ების წაშლა
    this.querySelectorAll(".error-message").forEach((element) => {
      element.textContent = "";
      element.style.color = "";
    });

    // display errors
    for (let key in errors) {
      console.log(key);

      let pError = document.getElementById("error-" + key);

      if (!pError) {
        if (key === "fullName") {
          pError = document.getElementById("nameError");
        } else {
          pError = document.getElementById(key + "Error");
        }
      }

      console.log(pError);

      if (pError) {
        pError.textContent = errors[key];
        pError.style.color = "#e53e3e";
        pError.style.display = "block";
      }
    }

    // submit
    if (Object.keys(errors).length === 0) {
      const successMessage = document.getElementById("successMessage");
      formEl.style.display = "none";
      if (successMessage) {
        successMessage.classList.add("show");
      }

      setTimeout(function () {
        formEl.reset();
        formEl.style.display = "block";
        if (successMessage) {
          successMessage.classList.remove("show");
        }
      }, 3000);
    }
  });
}

// email validation (keyup)
let emailInput = document.getElementById("email");

if (emailInput) {
  function emailValidation() {
    let emailValue = emailInput.value;
    let pError = document.getElementById("emailError");

    if (emailValue === "") {
      pError.textContent = "";
      pError.style.color = "";
    } else if (emailPattern.test(emailValue)) {
      pError.textContent = "Your Email is Valid";
      pError.style.color = "green";
      pError.style.display = "block";
    } else {
      pError.textContent = "Your Email is Invalid";
      pError.style.color = "red";
      pError.style.display = "block";
    }
  }

  emailInput.addEventListener("keyup", emailValidation);
}

// show/hide icon password
let passw = document.getElementById("password");
let icon = document.getElementById("togglePassword");

if (passw && icon) {
  icon.addEventListener("click", function () {
    if (passw.type === "password") {
      passw.setAttribute("type", "text");
      icon.querySelector("i").classList.remove("fa-eye");
      icon.querySelector("i").classList.add("fa-eye-slash");
    } else {
      passw.setAttribute("type", "password");
      icon.querySelector("i").classList.remove("fa-eye-slash");
      icon.querySelector("i").classList.add("fa-eye");
    }
  });
}

// newsletter form validation
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail");

    if (email && emailPattern.test(email.value)) {
      alert("Thank you for subscribing!");
      newsletterForm.reset();
    } else {
      alert("Please enter a valid email address");
    }
  });
}
