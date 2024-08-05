//nombre, tipo, habilidades[], evoluciones[], nivelVida 1-100, numPokedex

class Pokemon {
  //ahora declaramos los propiedades privadas
  #evoluciones;
  #tipo;

  constructor(nombre, tipo, habilidades, evoluciones, numPokedex, nivelVida) {
    //crear la propiedad
    this.nombre = nombre;
    this.#tipo = tipo;
    this._habilidades = habilidades; //el guion indica en versiones anteriores que esa propiedad es privada
    this.#evoluciones = evoluciones;
    this.numPokedex = numPokedex;
    this.nivelVida = 100; //por que si es un juego comienzo en el 100% de vida (propiedad por defecto)
  }
  // get y set (propiedades computadas)
  //get devuleve el  valor de la propiedad citada
  get tipo() {
    return this.#tipo;
  }

  get evoluciones() {
    return this.#evoluciones;
  }
  // set modifica el valor de la propiedad citada
  set tipo(nuevoTipo) {
    if (nuevoTipo.lenght > 0) {
      this.#tipo = nuevoTipo;
    }
  }
  set evoluciones(nuevaEvolucion) {
    if (nuevaEvolucion.lenght > 0) {
      this.#evoluciones = nuevaEvolucion;
    }
  }
  //metodos
  nombreMetodo() {
    //aqui agrego todos las lineas del codigo del metodo
  }
}

//crear, declarar, instanciar un objeto de la clase Pokemon
const pikachu = new Pokemon(
  "Pikachu",
  "Electrico",
  ["Ataque rapido", "Impactrueno", "Rayo"],
  ["Pichu", "Pikachu", "Raichu"],
  25
);

const charizar = new Pokemon(
  "Charizar",
  "Fuego",
  ["Ataque rapido", "Impactrueno", "Rayo"],
  ["Charmander", "Charmeleon", "Charizar"],
  6
);

console.log(pikachu);
console.log(charizar);

document.write(`<p>Nombre de pokemon: ${pikachu.nombre}</p>`);
document.write(`<p>Tipo de pokemon: ${pikachu.tipo}</p>`);
document.write(`<p>Las evoluciones son: ${pikachu.evoluciones}</p>`);

//usar el setter
pikachu.tipo = "agua";
document.write(`<p>Tipo de pokemon: ${pikachu.tipo}</p>`);

pikachu.evoluciones = ["nueva"];
document.write(`<p>Las evoluciones son: ${pikachu.evoluciones}</p>`);
