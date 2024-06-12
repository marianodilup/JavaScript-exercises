const numbers = [32, 21, 63, 95, 100, 67, 43];

const newNumber = numbers.find((number) => {
  return number === 100;
});
console.log(newNumber);
