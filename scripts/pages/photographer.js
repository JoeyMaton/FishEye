const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get("id");

//Mettre le code JavaScript lié à la page photographer.html
async function getPhotograph() {
  const response = await fetch("/FishEye/data/photographers.json");
  if (!response.ok) {
    throw new Error("Echec de la récupération des données.");
  }
  const data = await response.json();
  const photographer = data.photographers.find(
    (element) => element.id == photographerId
  );
  const p = photographerTemplate(photographer);
  const result = p.getUserCardDOM();
  return result;
}


function photographerTemplate(data) {
  const { name, portrait, city, country, tagline, price, altname, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const para1 = document.createElement("p");
    const para2 = document.createElement("span");

    img.setAttribute("src", picture, altname);
    img.id = id;
    h2.textContent = name;
    h3.textContent = city + ", " + country;
    para1.textContent = tagline;
    para2.textContent = price + "€/jour";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(para1);
    article.appendChild(para2);

    return article;
  }
  return { name, picture, getUserCardDOM };
}

async function displayPhotographer(photographers) {
  const photographersSection = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}


async function getMedia() {
  const response = await fetch("/FishEye/data/photographers.json");
  if (!response.ok) {
    throw new Error("Echec de la récupération des données.");
  }
  const data = await response.json();
  const photographerMedia = data.media.filter(
    (element) => element.photographerId == photographerId
  );
  return photographerMedia;
}

async function displayMedia(medias) {
  const mediaSection = document.querySelector(".media_section");

  medias.forEach((media) => {
    const mediaModel = mediaTemplate(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}

async function init() {
  // Récupère les medias des photographes
  const medias = await getMedia();
  displayMedia(medias);
}

init();
