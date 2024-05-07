//DOM element
const modalbg = document.querySelector(".bground");

// launch modal form
function launchModal() {
    const modalImage = document.querySelector(".content");
    const test = displayMedia(medias[INDEX]);

    modalbg.style.display = "block";
    test.appendChild(modalImage);
    
    
}

// Retrieve data from the “X” button
let closeBtn = document.querySelector(".close")
closeBtn.addEventListener("click", closeModal);

// close modal event
function closeModal() {
    modalbg.style.display = "none";
  }