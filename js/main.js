//Toggle Switch
const switchToggle = document.querySelector(".switch-wrapper");
const body = document.querySelector("body");

switchToggle.addEventListener("click", () => {
    // Add dark theme
    body.classList.toggle("dark");
})