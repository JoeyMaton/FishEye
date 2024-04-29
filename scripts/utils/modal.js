//DOM element
const modalbg = document.querySelector(".bground");

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Retrieve data from the “X” button
let closeBtn = document.querySelector(".close")
closeBtn.addEventListener("click", closeModal);

// close modal event
function closeModal() {
    modalbg.style.display = "none";
  }