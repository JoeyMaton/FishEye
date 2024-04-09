//Mettre le code JavaScript lié à la page photographer.html
async function init() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    console.log(id);

    const response = await fetch("http://127.0.0.1:5500/FishEye/data/photographers.json");
            if(!response.ok) {
                throw new Error ('Echec de la récupération des données.');
            }
            const data = await response.json();
            const photographer = data.photographers.find((element) => element = id);
            console.log(photographer);

}
init();

