//Leer la documentacion de moment
const moment = require("moment");

const actualDate = moment();
const birthDate = moment("1998-11-26");

console.log(actualDate);
console.log(birthDate);

const deltaDays = actualDate.diff(birthDate, "days");
const deltaYears = actualDate.diff(birthDate, "years");

console.log(`La fecha actual es ${actualDate.format("DD/MM/YYYY")}`);
console.log(`La fecha de nacimiento es ${birthDate.format("DD/MM/YYYY")}`);
console.log(`Han pasado ${deltaDays} dias desde mi fecha de nacimiento`);
console.log(`Han pasado ${deltaYears} años desde mi fecha de nacimiento`);