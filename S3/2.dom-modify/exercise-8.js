const p = document.createElement("p");
p.innerHTML = "Voy en medio!";

const primerdiv = document.getElementById("#firstdiv");

const secondDiv = document.getElementById("#secondDiv");

document.body.insertBefore(p, secondDiv);
