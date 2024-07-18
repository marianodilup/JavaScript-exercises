const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const includeGato = [];

for (const [index, toy] of toys.entries()) {
  if (toy.name.toLowerCase().includes("gato")) {
    includeGato.push(index);
  }
}

for (let i = includeGato.length - 1; i >= 0; i--) {
  toys.splice(includeGato[i], 1);
}
console.log(toys);
