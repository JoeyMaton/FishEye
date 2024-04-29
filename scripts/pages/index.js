async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
    console.log(photographer);
    var photograph1 = document.getElementById(photographer.id);
    console.log(photograph1);
    photograph1.addEventListener("click", function () {
      // Redirection vers une URL spécifique, par exemple :
      window.location.href = `http://127.0.0.1:5500/FishEye/photographer.html?id=${photographer.id}`;
    });
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
