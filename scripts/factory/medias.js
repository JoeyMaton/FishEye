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
    const aLink = document.createElement("a");
    const source = document.createElement("source");
    const h2 = document.createElement("h2");
    const span = document.createElement("span");
    const like = document.createElement("i");
    const unLikes = document.createElement("i");
    const button = document.createElement("button");

    if (isVideo) {
      video.setAttribute("width", "500");
      video.setAttribute("height", "500");
      // video.setAttribute("controls", "");
      source.setAttribute("src", mediaPath);
      source.setAttribute("type", "video/mp4");
      video.id = id;
      video.appendChild(source);
      aLink.appendChild(video);
      article.appendChild(aLink);
    } else {
      img.setAttribute("src", mediaPath);
      img.id = id;
      aLink.appendChild(img);
      article.appendChild(aLink);
    }

    h2.textContent = title;
    unLikes.className = "fa-regular fa-heart";
    like.className = "fa-solid fa-heart";
    aLink.setAttribute("tabIndex", 0);
    aLink.setAttribute("href", "#");

    aLink.addEventListener("click", (event) => {
      event.preventDefault();
      launchModal(media);
      displayMediaInModal(media);
      console.log("clicked");
    });

    button.addEventListener("click", () => {
      const totalLikes = document.querySelector(".totalLikes");
      if (button.classList.contains("liked")) {
        unLikes.style.display = "flex";
        like.style.display = "none";
        likes -= 1;
        totalLikes.innerText = parseInt(totalLikes.innerText) - 1;
      } else {
        like.style.display = "flex";
        unLikes.style.display = "none";
        likes += 1;
        totalLikes.innerText = parseInt(totalLikes.innerText) + 1;
      }

      span.textContent = likes;

      button.classList.toggle("liked");
    });
   

    span.textContent = likes;

    article.appendChild(divMain);
    divMain.appendChild(divTitle);
    divTitle.appendChild(h2);
    divMain.appendChild(button);
    button.appendChild(span);
    button.appendChild(unLikes);
    button.appendChild(like);
    
    
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
