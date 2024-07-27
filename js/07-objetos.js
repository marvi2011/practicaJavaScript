// notacion literal--- para un solo objeto
const cancion = {
  //  ahora van las propiedades
  artista: "ricky martin",
  titulo: "vuelve",
  genero: ["balada", "pop"],
  autor: "franco de vita",
  anio: 1998,
  // ahora los metodos
  //funcion decalrativa
  /* play: function () {
    document.write("<p>Se esta reproduciendo la cancion</p>");
  },*/

  //para declarar a la funcion con una propiedad del objeto... esta funcion esta dentro del objeto
  play: function () {
    document.write(`<p>Se esta reproduciendo la cancion ${this.titulo}</p>`);
  },

  //arrow
  stop: () => {
    document.write("<p>La cancion esta pausada</p>");
  },
};

//mostrar el objeto
console.log(cancion);
//java script no sabe mostarlos en pantalla
//no se puede usar document.write
//para mosa mostrarlo tenemos que hacerlo a traves de sus propiedades
document.write(`<p>Cancion: ${cancion.titulo}</p>`),
  document.write(`Artista: ${cancion["artista"]}</p>`);

//utilizar los metodos (llamra  la funcion)
cancion.play();
cancion.stop();

//agregar una propiedad nueva al objeto
cancion.reproducciones = 15000;
document.write(`<p>Cantidad de reproducciones: ${cancion.reproducciones}</p>`);
console.log(cancion);

//modificar la propiedad de un objeto
cancion.reproducciones = 18000;
document.write(`<p>Cantidad de reproducciones: ${cancion.reproducciones}</p>`);
console.log(cancion);

//eliminar una propiedad
delete cancion.anio;
console.log(cancion);

console.log(cancion.hasOwnProperty("titulo"));
console.log(cancion.hasOwnProperty("anio"));
