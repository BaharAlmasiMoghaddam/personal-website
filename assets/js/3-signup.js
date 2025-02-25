// **** still need to work on this js *****

const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const signupTab = document.getElementById("signup-tab");
const loginTab = document.getElementById("login-tab");
const toggleSwitch = document.querySelector("#dark-mode-toggle");

//
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

//
//
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

//
//
// using api section:

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = loginForm.querySelector("input[type='email']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  // ====== need to find a good one api ========
  //this below one is bad request + doesn't work
  // https://apitester.ir/api/Users/authenticate
  try {
    const response = await fetch("?", {
      method: "POST", //check this one too
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
    } else {
      alert(`Login failed: ${data.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred during login.");
  }
});
