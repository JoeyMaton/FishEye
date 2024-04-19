function mediaTemplate(media) {
  const { id, photographerId, title, image, likes, date, price } = media;

  const picture = `assets/media/${image}`;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");

    img.setAttribute("src", picture);
    img.id = id;
    h2.textContent = title + likes;

    article.appendChild(img);
    article.appendChild(h2);


    return article;
  }
  return { title, picture, getMediaCardDOM };
}
