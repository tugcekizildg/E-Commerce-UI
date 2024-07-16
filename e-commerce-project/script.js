const menuIcon = document.getElementById("menu-icon");
const menuEl = document.getElementById("menu");

menuIcon.addEventListener('click', () => {
    if (menuEl.className === "hidden") {
        menuEl.classList.remove("hidden");
    } else {
        menuEl.classList.add("hidden");
    }
});