const divs = document.querySelectorAll(".fn-insert-here");

divs.forEach((div) => {
  const p = document.createElement("p");
  p.innerHTML = "Voy dentro!";
  div.appendChild(p);
});
