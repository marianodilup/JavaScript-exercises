const userAnwsers = [];

function confirmExample(description) {
  return confirm(description);
}

function promptExample(description) {
  return prompt(description);
}

function father(description, callback) {
  const result = callback(description);
  userAnwsers.push(result);
}

// Ejecutar la función father varias veces con diferentes callbacks y descripciones
father("¿Te gusta el helado?", confirmExample);
father("¿Cómo te llamas?", promptExample);
father("¿Te gusta bailar?", confirmExample);
father("¿Cuántos años tienes", promptExample);

console.log(userAnwsers);
