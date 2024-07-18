const baseUrl = "https://api.nationalize.io?name=";

document.getElementById("button").addEventListener("click", function () {
  const name = document.getElementById("input").value;
  if (name) {
    fetch(baseUrl + name)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
