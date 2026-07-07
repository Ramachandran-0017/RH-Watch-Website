const form = document.getElementById("premiumForm");
const submitBtn = document.getElementById("submitBtn");
const fields = ["name", "email", "message"];

fields.forEach((fieldId) => {
  const input = document.getElementById(fieldId);

  input.addEventListener("input", () => {
    clearFieldError(input);
  });

  input.addEventListener("blur", () => {
    validateField(input);
  });
});

function validateField(input) {
  let isValid = true;

  if (input.value.trim() === "") {
    isValid = false;
  } else if (input.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailRegex.test(input.value.trim());
  }

  if (!isValid) {
    input.parentElement.classList.add("error-state");
  } else {
    clearFieldError(input);
  }

  return isValid;
}

function clearFieldError(input) {
  input.parentElement.classList.remove("error-state");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isFormValid = true;

  fields.forEach((fieldId) => {
    const input = document.getElementById(fieldId);
    if (!validateField(input)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    executePremiumSubmitSequence();
  }
});

function executePremiumSubmitSequence() {
  submitBtn.classList.add("state-loading");
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.classList.remove("state-loading");
    submitBtn.classList.add("state-success");

    setTimeout(() => {
      form.reset();
      submitBtn.classList.remove("state-success");
      submitBtn.disabled = false;

      fields.forEach((fieldId) => {
        const input = document.getElementById(fieldId);
        input.parentElement.classList.remove("error-state");
      });
    }, 3000);
  }, 1400);
}
