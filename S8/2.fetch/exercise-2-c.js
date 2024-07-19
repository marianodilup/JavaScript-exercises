document.querySelector("button").addEventListener("click", async () => {
  const input = document.querySelector("input").value;
  const resultsDiv = document.createElement("div");
  document.body.appendChild(resultsDiv);

  try {
    const response = await fetch(`https://api.nationalize.io?name=${input}`);
    const data = await response.json();

    resultsDiv.innerHTML = "";

    data.country.forEach((country) => {
      const p = document.createElement("p");
      p.textContent = `El nombre ${input} tiene un ${
        country.probability * 100
      }% de ser de ${country.country_id}.`;

      const button = document.createElement("button");
      button.textContent = "X";
      button.addEventListener("click", () => {
        resultsDiv.removeChild(p);
      });

      p.appendChild(button);

      resultsDiv.appendChild(p);
    });
  } catch (error) {
    console.error("Error:", error);
  }
});
