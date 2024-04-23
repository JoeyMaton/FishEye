function mediaTemplate(media) {
  const { id, photographerId, title, image, video, likes, date, price } = media;

  let mediaPath = null;
  if (image) {
    mediaPath = `assets/media/${image}`;
  } else {
    mediaPath = `assets/media/${video}`;
  }

  
  function getMediaCardDOM() {
    const article = document.createElement("article");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const video = document.createElement("video");
    const h2 = document.createElement("h2");
    const span = document.createElement("h2");

    img.setAttribute("src", mediaPath);
    img.id = id;
    h2.textContent = title;
    span.innerHTML = '<i class="fa-solid fa-heart"></i>';
    span.textContent = likes;



    article.appendChild(img);
    article.appendChild(div);
    div.appendChild(h2);
    div.appendChild(span);
    

    return article;
  }
  return { title, mediaPath, getMediaCardDOM };
}
