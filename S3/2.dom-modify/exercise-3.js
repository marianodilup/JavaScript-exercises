const body = document.querySelector("#body");

const div = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  div.appendChild(p);
}

body.appendChild(div);
