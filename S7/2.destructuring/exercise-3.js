const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name: name, race: race } = animalFunction();

console.log(name, ",", race);
