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

father("¿Te gusta el helado?", confirmExample);
father("¿Cómo te llamas?", promptExample);
father("¿Te gusta bailar?", confirmExample);
father("¿Cuántos años tienes", promptExample);

console.log(userAnwsers);
