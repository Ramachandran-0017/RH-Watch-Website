document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------------------------
     1. LIVE ANALOG CLOCK (signature element)
  --------------------------------------------------------- */
  const ticksGroup = document.getElementById("clockTicks");
  const center = 120;
  const radius = 110;

  for (let i = 0; i < 60; i++) {
    const angle = (i * 6 * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const outer = radius - 4;
    const inner = isMajor ? radius - 14 : radius - 9;

    const x1 = center + outer * Math.sin(angle);
    const y1 = center - outer * Math.cos(angle);
    const x2 = center + inner * Math.sin(angle);
    const y2 = center - inner * Math.cos(angle);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1.toFixed(2));
    line.setAttribute("y1", y1.toFixed(2));
    line.setAttribute("x2", x2.toFixed(2));
    line.setAttribute("y2", y2.toFixed(2));
    line.setAttribute("class", isMajor ? "clock-tick major" : "clock-tick");
    ticksGroup.appendChild(line);
  }

  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");
  const secondHand = document.getElementById("secondHand");

  function tickClock() {
    const now = new Date();
    const h = now.getHours() % 12;
    const m = now.getMinutes();
    const s = now.getSeconds();

    const hDeg = h * 30 + m * 0.5;
    const mDeg = m * 6 + s * 0.1;
    const sDeg = s * 6;

    hourHand.setAttribute("transform", `rotate(${hDeg} 120 120)`);
    minuteHand.setAttribute("transform", `rotate(${mDeg} 120 120)`);
    secondHand.setAttribute("transform", `rotate(${sDeg} 120 120)`);
  }

  tickClock();
  setInterval(tickClock, 1000);

  /* ---------------------------------------------------------
     2. TAB SWITCHING (Sign In / Create Account)
  --------------------------------------------------------- */
  const tabs = document.querySelectorAll(".auth-tab");
  const tabsWrap = document.querySelector(".auth-tabs");
  const forms = document.querySelectorAll(".auth-form");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      tabsWrap.classList.toggle("is-signup", target === "signup");

      forms.forEach((form) => {
        form.classList.toggle("is-active", form.id === `${target}Form`);
      });
    });
  });

  /* ---------------------------------------------------------
     3. SHOW / HIDE PASSWORD
  --------------------------------------------------------- */
  document.querySelectorAll(".toggle-password").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.target);
      const icon = btn.querySelector("i");
      const isHidden = input.type === "password";

      input.type = isHidden ? "text" : "password";
      icon.classList.toggle("fa-eye", !isHidden);
      icon.classList.toggle("fa-eye-slash", isHidden);
    });
  });

  /* ---------------------------------------------------------
     4. PASSWORD STRENGTH METER (sign up only)
  --------------------------------------------------------- */
  const signupPassword = document.getElementById("signupPassword");
  const strengthMeter = document.getElementById("passwordStrength");

  signupPassword.addEventListener("input", () => {
    const val = signupPassword.value;
    let score = 0;

    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val) && val.length >= 10) score++;

    strengthMeter.classList.remove("weak", "medium", "strong");
    if (val.length === 0) return;
    if (score <= 1) strengthMeter.classList.add("weak");
    else if (score === 2) strengthMeter.classList.add("medium");
    else strengthMeter.classList.add("strong");
  });

  /* ---------------------------------------------------------
     5. VALIDATION HELPERS
  --------------------------------------------------------- */
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(errorId);
    input.classList.toggle("has-error", Boolean(message));
    errorEl.textContent = message || "";
  }

  /* ---------------------------------------------------------
     6. SIGN IN SUBMIT
  --------------------------------------------------------- */
  const signinForm = document.getElementById("signinForm");
  const signinNote = document.getElementById("signinNote");

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signinNote.textContent = "";
    signinNote.className = "form-note";

    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value;

    let valid = true;

    if (!emailPattern.test(email)) {
      setError(
        "signinEmail",
        "signinEmailError",
        "Enter a valid email address.",
      );
      valid = false;
    } else {
      setError("signinEmail", "signinEmailError", "");
    }

    if (password.length === 0) {
      setError("signinPassword", "signinPasswordError", "Enter your password.");
      valid = false;
    } else {
      setError("signinPassword", "signinPasswordError", "");
    }

    if (!valid) return;

    // Frontend-only simulation: check against any account saved during sign up
    const users = JSON.parse(localStorage.getItem("watchUsers")) || [];
    const match = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );

    if (match) {
      localStorage.setItem(
        "watchSession",
        JSON.stringify({ email, name: match.name }),
      );
      signinNote.textContent = `Welcome back, ${match.name}. Redirecting…`;
      signinNote.classList.add("success");
      setTimeout(() => (window.location.href = "../index.html"), 900);
    } else {
      signinNote.textContent =
        "No account matches those details. Try creating one.";
      signinNote.classList.add("error");
    }
  });

  /* ---------------------------------------------------------
     7. SIGN UP SUBMIT
  --------------------------------------------------------- */
  const signupForm = document.getElementById("signupForm");
  const signupNote = document.getElementById("signupNote");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signupNote.textContent = "";
    signupNote.className = "form-note";

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const agreed = document.getElementById("agreeTerms").checked;

    let valid = true;

    if (name.length < 2) {
      setError("signupName", "signupNameError", "Enter your full name.");
      valid = false;
    } else {
      setError("signupName", "signupNameError", "");
    }

    if (!emailPattern.test(email)) {
      setError(
        "signupEmail",
        "signupEmailError",
        "Enter a valid email address.",
      );
      valid = false;
    } else {
      setError("signupEmail", "signupEmailError", "");
    }

    if (password.length < 8) {
      setError(
        "signupPassword",
        "signupPasswordError",
        "Use at least 8 characters.",
      );
      valid = false;
    } else {
      setError("signupPassword", "signupPasswordError", "");
    }

    const agreeError = document.getElementById("agreeTermsError");
    if (!agreed) {
      agreeError.textContent = "Please accept the Terms of Use to continue.";
      valid = false;
    } else {
      agreeError.textContent = "";
    }

    if (!valid) return;

    const users = JSON.parse(localStorage.getItem("watchUsers")) || [];

    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      signupNote.textContent = "An account with that email already exists.";
      signupNote.classList.add("error");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("watchUsers", JSON.stringify(users));
    localStorage.setItem("watchSession", JSON.stringify({ email, name }));

    signupNote.textContent = `Account created. Welcome, ${name}.`;
    signupNote.classList.add("success");
    setTimeout(() => (window.location.href = "../index.html"), 900);
  });
});
