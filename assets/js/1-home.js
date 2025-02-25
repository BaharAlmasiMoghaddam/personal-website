const toggleSwitch = document.querySelector("#dark-mode-toggle");
const splash = document.querySelector(".splash");

//
//
//splash:
function initiateSplashScreen() {
  setTimeout(() => {
    splash.style.display = "none";
    showPageContent();
  }, 3000);
}

//
//
// smooth scroll:
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

//
//
//dark mode:
function initializeDarkMode() {
  toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

//
//
//
document.addEventListener("DOMContentLoaded", () => {
  initiateSplashScreen();
  initializeDarkMode();
});
