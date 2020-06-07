const searchButton = document.querySelector("#page-home main a")
const modal = document.getElementById("modal")
function showModal() {
    modal.classList.toggle("hide")
}
function hideModal() {
    modal.classList.toggle("hide")
}

searchButton.addEventListener("click", showModal)
