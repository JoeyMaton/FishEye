let INDEX = 0;
//DOM element
const modalbg = document.querySelector(".bground");


function displayMediaInModal(media) {
  const mediaSection = document.querySelector(".modal-body");
  mediaSection.innerHTML = "";
  const imgElement = document.createElement("img");
  const videoElement = document.createElement("video");


  if (media.image) {
    imgElement.src = `assets/media/${media.image}`;
    mediaSection.appendChild(imgElement);
  } else {
    videoElement.src = `assets/media/${media.video}`;
    videoElement.setAttribute("controls", "");
    mediaSection.appendChild(videoElement);
  }
}



function registerModalEvents(medias) {
  const actionsArrow = document.querySelector(".actions");
  actionsArrow.innerHTML = `
  <button class="prev"><i class="fa-solid fa-chevron-left"></i></button>
  <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
  `;

  const prevButton = document.querySelector(".prev");

  prevButton.addEventListener("click", () => {
  if(INDEX === 0) {
    INDEX = medias.length - 1;
    return displayMediaInModal(medias[INDEX]);
  }
    INDEX = INDEX - 1;
    displayMediaInModal(medias[INDEX]);
  });

  const nextButton = document.querySelector(".next");
  nextButton.addEventListener("click", () => {
    if(INDEX === medias.length - 1) {
      INDEX = 0;
      return displayMediaInModal(medias[INDEX]);
    }
      INDEX = INDEX + 1;
      displayMediaInModal(medias[INDEX]);
    });
  triggerEventClickOnMedias(medias);
}
 

function triggerEventClickOnMedias(medias) {
    medias.forEach((media, mediaIndex) => {
    var mediaClick = document.getElementById(media.id);
    
    mediaClick.addEventListener("click", () => {
      INDEX = mediaIndex;
      console.log(INDEX);
      displayMediaInModal(media);

      launchModal(media, mediaIndex);
    });
  });
}

// launch modal form
function launchModal(medias, mediaIndex) {
  const modalImage = document.querySelector(".content");

  modalbg.style.display = "block";
  modalbg.ariaModal = "true";
  modalbg.removeAttribute("aria-hidden");

  const prevButton = document.querySelector(".prev").focus();

  
}

// Retrieve data from the “X” button
let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// close modal event
function closeModal() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";
  modalbg.ariaHidden = "true";
  modalbg.removeAttribute("aria-modal");
}

window.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal();
    closeContactModal();
  }
  if (e.key === "ArrowLeft") {
    
  }
  if (e.key === "ArrowRight") {

  }
})

