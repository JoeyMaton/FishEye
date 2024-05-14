
//DOM element
const modalbg = document.querySelector(".bground");

function displayModalInMedia(media) {
  const mediaSection = document.querySelector(".modal-body");
  const imgElement = document.createElement("img");
  const videoElement = document.createElement("video");

  media.forEach((media, mediaIndex) => {
    var mediaClick = document.getElementById(media.id);

    mediaClick.addEventListener("click", () => {
    
      if (media.image) {
        imgElement.src = `assets/media/${media.image}`;
        mediaSection.appendChild(imgElement);
      } else {
        videoElement.src = `assets/media/${media.video}`; 
        videoElement.setAttribute("controls", "");
        mediaSection.appendChild(videoElement);
         
      }
    
      launchModal(media, mediaIndex);
    });
  });
}

// launch modal form
function launchModal(medias, mediaIndex) {
  const modalImage = document.querySelector(".content");

  modalbg.style.display = "block";
}

// Retrieve data from the “X” button
let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// close modal event
function closeModal() {
  modalbg.style.display = "none";
}

async function getMedia() {
  const response = await fetch("../../data/photographers.json");
  if (!response.ok) {
    throw new Error("Echec de la récupération des données.");
  }
  const data = await response.json();
  const photographerMedia = data.media.filter(
    (element) => element.photographerId == photographerId
  );
  return photographerMedia;
}

async function init() {
  const medias = await getMedia();
  displayModalInMedia(medias);
}
init();
