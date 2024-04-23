function mediaTemplate(media) {
  const { id, photographerId, title, image, video, likes, date, price } = media;

  const picture = `assets/media/${image}`;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const video = document.createElement("video");
    const h2 = document.createElement("h2");
    const span = document.createElement("span");

    img.setAttribute("src", picture);
    img.id = id;
    h2.textContent = title;
    span.textContent = likes;


    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(span);

    return article;
  }
  return { title, picture, getMediaCardDOM };
}
