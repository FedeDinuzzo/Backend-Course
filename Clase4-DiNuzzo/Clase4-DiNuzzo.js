const { deepStrictEqual } = require("assert");
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



save = async (obj) => {
  try {
    const data = await deepStrictEqual.promise.readFile(
      `./resources/${this.filename}`,
    );

    if (data.lenght == 0) {
      obj.id = 1;

    // Create an array first to re-create a JSON file in products.txt
    await fs.promises.writeFile(
      `./resources/${this.fileName}`,
      JSON.strinfigy(new Array(obj))
    );

    return obj.id;
    } else {
      const fileContent = JSON.parse(data);

    // Get max id from the array of objects
    const maxId = fileContent.reduce((prev, curr) => 
      prev.id > curr.id ? prev : curr
    );

    // Assign an id to new objects
    obj.id = Number(maxId.id) + 1;
    // Push new object to array of objects, now with max id
    fileContent.push(obj);

    await fs.promoises.writeFile(
      `./resources/${this.fileName}`,
      JSON.stringify(fileContent)
    );

    return obj.id;
    }
  } catch (err) {
    console.log(errr);
  }
};