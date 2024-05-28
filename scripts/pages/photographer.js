const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get("id");
let photographerPrice = 0;


//Mettre le code JavaScript lié à la page photographer.html
async function getPhotograph() {
  const response = await fetch("../../data/photographers.json");
  if (!response.ok) {
    throw new Error("Echec de la récupération des données.");
  }
  const data = await response.json();
  const photographer = data.photographers.find(
    (element) => element.id == photographerId
  );
  const p = photographTemplate(photographer);
  const result = p.getUserCardDOM();
  return result;
}

function photographTemplate(data) {
  const { name, portrait, city, country, tagline, price, altname, id } = data;

  photographerPrice = price;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const para1 = document.createElement("p");
    const button = document.querySelector(".contact_button");
    const title = document.getElementById("title");
    const nameContact = document.createElement("h2");

    img.setAttribute("src", picture, altname);
    img.id = id;
    h2.textContent = name;
    h3.textContent = city + ", " + country;
    para1.textContent = tagline;
    nameContact.textContent = name;
    
    title.appendChild(nameContact);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(para1);
    article.appendChild(div);
    article.appendChild(button);
    article.appendChild(img);
    

    return article;
  }
  return { name, picture, getUserCardDOM };
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

function changeOrder() {
  const popularity = document.getElementById("popularity");
  const date = document.getElementById("date");
  const title = document.getElementById("titles");

  popularity.addEventListener("click", async () => {
    const medias = await getMedia();
    const newMediasOrder = medias.sort((a,b) => {
      return b.likes - a.likes;
    });
    displayMedia(newMediasOrder);
    displayModalInMedia(newMediasOrder);
  });

  date.addEventListener("click", async () => {
    const medias = await getMedia();
    const newMediasOrder = medias.sort((a,b) => {
      return a.date.localeCompare(b.date);
    });
    displayMedia(newMediasOrder);
  });

  title.addEventListener("click", async () => {
    const medias = await getMedia();
    const newMediasOrder = medias.sort((a,b) => {
      return a.title.localeCompare(b.title);
    });
    displayMedia(newMediasOrder);
  });

}

async function displayMedia(medias) {
  const mediaSection = document.querySelector(".media_section");
  mediaSection.innerHTML = "";
  medias.forEach((media) => {
    const mediaModel = mediaTemplate(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
    console.log(medias);
  });
}


async function init() {
  // Récupère les données su photographe et ces médias
  const section = document.querySelector(".photograph-header");
  const article = await getPhotograph();
  section.appendChild(article);

  const medias = await getMedia();
  displayMedia(medias);
  displayModalInMedia(medias);
  globalLikes(medias, photographerPrice);
  changeOrder();
}

init();
