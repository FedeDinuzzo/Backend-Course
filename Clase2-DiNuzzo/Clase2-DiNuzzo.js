class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
}

  //Get the full name of the user
  getFullName() {
    return `El nombre y apellido del usuario es: ${this.nombre} ${this.apellido}`;  
  }

  //Add a pet to the user pet's list
  addMascota(a) {
    this.mascotas.push(a);
    console.log(`La mascota ${a} fue agregada a la lista de ${this.nombre} ${this.apellido}`);    
  }

  //Count the amount of pets of the user
  countMascotas() {
    let mascota = (this.mascotas.length > 1) ? 'mascotas' : 'mascota';
    return `El usuario ${this.nombre} ${this.apellido} tiene ${this.mascotas.length} ${mascota}`;    
  } 

  //Add a book to the user list book's  
  addBook(titulo, autor) {
    console.log(`El libro ${titulo} fue agregado a la lista de libros de ${this.nombre} ${this.apellido}`);
    this.libros.push({nombre: titulo, autor: autor});
  }

  //Get favorite book's of the user
  getBookNames() {
    return `Esta es la lista de libros favoritos de ${this.nombre}: ${this.libros.map((libro) => ' ' + libro.nombre)}`;
  }
}

//Creating a new user
const Usuario1 = new Usuario('Federico','Di Nuzzo',[{ nombre: "Piense y Hagase Rico", autor: "Napoleon Hill" } , { nombre: "Los secretos de la mente millonaria" , autor: "T. Harv Eker" }], ['Uma']);

//Printing the methods based on the user created
console.log(Usuario1.getFullName());

console.log(Usuario1.getBookNames());
Usuario1.addBook("Padre rico, Padre pobre", "Robert Kiyosaki");
console.log(Usuario1.getBookNames());

console.log(Usuario1.countMascotas());
Usuario1.addMascota("Fiona");
console.log(Usuario1.countMascotas());