const fs = require("fs");

const data = await fs.promises.readFile("example.json", "utf-8");

const pets = JSON.parse(data);

pets.cats.push({
  name: "Uma",
  age: 13
});

console.log(pets);


fs.write("example.json", JSON.stringify.pets);


//encontrar la edad de una mascota en especifico
//find si solo nos importa encontrar el primer unico elemento
const pet = cats.filter((cat) => cat.name === name);

console.log(`La edad de ${name} es: ${pet.age}`);