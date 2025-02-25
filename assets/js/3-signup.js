const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const signupTab = document.getElementById("signup-tab");
const loginTab = document.getElementById("login-tab");
const toggleSwitch = document.querySelector("#dark-mode-toggle");

//
// sign/log switch:
function showForm(formType) {
  if (formType === "signup") {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    signupTab.classList.remove("active");
    loginTab.classList.add("active");
  }
}

// dark mode:
document.addEventListener("DOMContentLoaded", () => {
  toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
