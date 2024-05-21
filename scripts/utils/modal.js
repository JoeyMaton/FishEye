let INDEX = 0;
//DOM element
const modalbg = document.querySelector(".bground");

function displayMediaModal(media) {
  const mediaSection = document.querySelector(".modal-body");
  mediaSection.innerHTML = "";
  const imgElement = document.createElement("img");
  const videoElement = document.createElement("video");
  const previous = document.createElement("div");
  const next = document.createElement("div");

  previous.className = "prev";
  previous.innerHTML = "<";
  mediaSection.appendChild(previous); 

  if (media.image) {
    imgElement.src = `assets/media/${media.image}`;
    mediaSection.appendChild(imgElement);
  } else {
    videoElement.src = `assets/media/${media.video}`;
    videoElement.setAttribute("controls", "");
    mediaSection.appendChild(videoElement);
  }

  next.className = "next";
  next.innerHTML = ">";
  mediaSection.appendChild(next); 
}

function displayModalInMedia(medias) {
  const nextButton = document.querySelector(".next");
  nextButton.addEventListener("click", () => {
    INDEX = INDEX + 1;
    displayMediaModal(medias[INDEX]);
  });

  medias.forEach((media, mediaIndex) => {
    var mediaClick = document.getElementById(media.id);
    
    mediaClick.addEventListener("click", () => {
      INDEX = mediaIndex;
      console.log(INDEX);
      displayMediaModal(media);

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

