const baseUrl = "https://api.nationalize.io?name=";

const button = document
  .getElementById("button")
  .addEventListener("click", () => {
    const input = document.getElementById("input").value;
    const URL = `${baseUrl}${input}`;
    console.log("se ha hecho click");
  });

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayResult(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//NO ESTA TERMINADO ESTO
/* NO ESTA TERMINADO */
