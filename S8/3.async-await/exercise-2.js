async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error");
  }
}
getCharacters();
