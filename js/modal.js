const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

console.log(overlay);
console.log(modal);
console.log(openModal);
console.log(closeModal);

openModal.addEventListener("click", function () {
    modal.style.display = "block";
    overlay.style.display = "flex";
})

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
})

