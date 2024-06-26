const numbersList = [];

function sum(a, b) {
  return a + b;
}
sum(7, 3);

function substract(a, b) {
  return a - b;
}

substract(10, 5);

function father(a, b, cb) {
  const result = cb(a, b);
  numbersList.push(result);
}
father(5, 5, sum);
father(3, 7, substract);
father(5, 3, sum);

console.log(numbersList);
