function mediaTemplate(media) {
  let { id, photographerId, title, image, video, likes, date, price } = media;

  let mediaPath = null;
  let isVideo = null;
  if (image) {
    mediaPath = `assets/media/${image}`;
    isVideo = false;
  } else {
    mediaPath = `assets/media/${video}`;
    isVideo = true;
  }

  function getMediaCardDOM() {
    const article = document.createElement("article");
    const divMain = document.createElement("div");
    const divTitle = document.createElement("div");
    const divLikes = document.createElement("div");
    const img = document.createElement("img");
    const video = document.createElement("video");
    const source = document.createElement("source");
    const h2 = document.createElement("h2");
    const span = document.createElement("span");
    const like = document.createElement("i");
    const unLikes = document.createElement("i");

    if (isVideo) {
      video.setAttribute("width", "500");
      video.setAttribute("height", "500");
      // video.setAttribute("controls", "");
      source.setAttribute("src", mediaPath);
      source.setAttribute("type", "video/mp4");
      video.id = id;
      video.appendChild(source);
      article.appendChild(video);
    } else {
      img.setAttribute("src", mediaPath);
      img.id = id;
      article.appendChild(img);
    }

    h2.textContent = title;
    unLikes.className = "fa-regular fa-heart";
    like.className = "fa-solid fa-heart";

    like.addEventListener("click", () => {
      const totalLikes = document.querySelector(".totalLikes");
      unLikes.style.display = "flex";
      like.style.display = "none";
      likes -= 1;
      span.textContent = likes;
      totalLikes.innerText = parseInt(totalLikes.innerText) - 1;
    });
    unLikes.addEventListener("click", () => {
      const totalLikes = document.querySelector(".totalLikes");
      like.style.display = "flex";
      unLikes.style.display = "none";
      likes += 1;
      span.textContent = likes;
      console.log(totalLikes);
      totalLikes.innerText = parseInt(totalLikes.innerText) + 1;
    });

    span.textContent = likes;

    article.appendChild(divMain);
    divMain.appendChild(divTitle);
    divTitle.appendChild(h2);
    divMain.appendChild(divLikes);
    divLikes.appendChild(span);
    divLikes.appendChild(unLikes);
    divLikes.appendChild(like);
    
    
    return article;
  }
  return { title, mediaPath, getMediaCardDOM };
}

function globalLikes(medias, price) {
  const infoPhotographer = document.querySelector(".otherInfo");
  const info = document.createElement("div");
  const totalLikes = document.createElement("span");
  const priceInfo = document.createElement("p");
  const heart = document.createElement("i");
  const divHeart = document.createElement("div");
  

  let globalLikes = 0;
  medias.forEach((media) => {
    globalLikes = globalLikes + media.likes;
  });

  info.className = "info";
  heart.className = "fa-solid fa-heart";
  totalLikes.textContent = globalLikes;
  totalLikes.className = "totalLikes";
  priceInfo.textContent = price + "€ / jour";

  info.appendChild(totalLikes)
  info.appendChild(divHeart);
  divHeart.appendChild(heart);
  infoPhotographer.appendChild(info);
  infoPhotographer.appendChild(priceInfo);
}
