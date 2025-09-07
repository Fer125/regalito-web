const abrirMenu = document.getElementById("abrirMenu");
const cerrarMenu = document.getElementById("cerrarMenu");
const barralateral = document.getElementById("barralateral");
const overlay = document.getElementById("overlay");

abrirMenu.addEventListener("click", () => {
    barralateral.classList.add("active");
    overlay.classList.add("active");
});

cerrarMenu.addEventListener("click", () => {
    barralateral.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    barralateral.classList.remove("active");
    overlay.classList.remove("active");
});

