async function getPhotographers() {
    const response = await fetch(
      "../../data/photographers.json"
    );
    if (!response.ok) {
      throw new Error("Echec de la récupération des données.");
    }
    const data = await response.json();
    return data;
  }
  