const baseUrl = "https://api.nationalize.io?name=";

document.querySelector(".button").addEventListener("click", function () {
  const name = document.querySelector(".input").value;
  const resultsDiv = document.getElementById("results");

  if (name) {
    fetch(baseUrl + name)
      .then((response) => response.json())
      .then((data) => {
        let resultText = `El nombre ${name} tiene `;
        data.country.forEach((country, index) => {
          resultText += `${Math.round(country.probability * 100)}% de ser de ${
            country.country_id
          }`;
          if (index < data.country.length - 1) {
            resultText += " y ";
          }
        });
        const p = document.createElement("p");
        p.textContent = resultText;
        resultsDiv.appendChild(p);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Por favor, ingresa un nombre.");
  }
});
