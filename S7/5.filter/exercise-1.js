const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newArray = ages.filter((age) => {
  return age > 18;
});

console.log(newArray);
