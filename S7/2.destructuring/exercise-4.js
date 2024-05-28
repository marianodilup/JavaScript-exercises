const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car;
console.log(name, ",", itv);

const [año1, año2, año3] = itv;
console.log(año1, ",", año2, ",", año3);
