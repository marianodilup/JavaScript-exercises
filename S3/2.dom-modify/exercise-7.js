const body = document.querySelector("body");
const parrafos = document.querySelectorAll(".fn-remove-me");

parrafos.forEach((parrafo) => {
  body.removeChild(parrafo);
});
