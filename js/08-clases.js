//nombre, tipo, habilidades[], evoluciones[], nivelVida 1-100, numPokedex

class Pokemon {
  //ahora declaramos los propiedades privadas
  #numPokedex;
  #tipo;

  constructor(nombre, tipo, habilidades, evoluciones, numPokedex, nivelVida) {
    //crear la propiedad
    this.nombre = nombre;
    this.#tipo = tipo;
    this._habilidades = habilidades; //el guion indica en versiones anteriores que esa propiedad es privada
    this.evoluciones = evoluciones;
    this.#numPokedex = numPokedex;
    this.nivelVida = 100; //por que si es un juego comienzo en el 100% de vida (propiedad por defecto)
  }
  // get y set (propiedades computadas)
  //get devuleve el  valor de la propiedad citada
  get tipo() {
    return this.#tipo;
  }

  get numPokedex() {
    return this.#numPokedex;
  }
  // set modifica el valor de la propiedad citada
  set tipo(nuevoTipo) {
    if (nuevoTipo.lenght > 0) {
      this.#tipo = nuevoTipo;
    }
  }
  set numPokedex(nuevoNumPokedex) {
    if (nuevoNumPokedex > 0 && nuevoNumPokedex <= 151) {
      this.#numPokedex = nuevoNumPokedex;
    }
  }
  //metodos
  nombreMetodo() {
    //aqui agrego todos las lineas del codigo del metodo
  }
  mostrarDatos() {
    document.write(
      `<ul><li>Nombre: ${this.nombre}</li><li>Numero de Pokedex: ${this.numPokedex} </li><li>Tipo: ${this.tipo} </li><li>Habilidades: ${this._habilidades}  </li><li>Evoluciones: ${this.evoluciones} </li><li>Nivel de vida: ${this.nivelVida} </li></ul>`
    );
  }
}

//herencia
class PokemonLegendario extends Pokemon {
  #habilidadOculta;
  constructor(
    nombre,
    tipo,
    habilidades,
    evoluciones,
    numPokedex,
    nivelVida,
    habilidadOculta
  ) {
    //invocar al constructor de la clase pokemon
    super(nombre, tipo, habilidades, evoluciones, numPokedex);
    this.#habilidadOculta;
  }
  get habilidadOculta() {
    return this.#habilidadOculta;
  }
  set habilidadOculta(nuevaHabilidadOculta) {
    if (nuevaHabilidadOculta.length > 0) {
      this.#habilidadOculta = nuevaHabilidadOculta;
    }
  }

  //agregar nuevos metodos
  mostrarDatosPokemonLegendario() {}
  mostrarDatos() {
    document.write(
      `<ul><li>Nombre: <strong>${this.nombre}</strong></li><li>Numero de Pokedex: ${this.numPokedex} </li><li>Tipo: ${this.tipo} </li><li>Habilidades: ${this._habilidades}  </li><li>Evoluciones: ${this.evoluciones} </li><li>Nivel de vida: ${this.nivelVida} </li><li>Habilidad Oculta: ${this.habilidadOculta} </li></ul>`
    );
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
document.write(`<p>El numero de Pokedex es: ${pikachu.numPokedex}</p>`);

//usar el setter
pikachu.tipo = "Agua";
document.write(`<p>Tipo de pokemon: ${pikachu.tipo}</p>`);

pikachu.numPokedex = 29;
document.write(`<p>El numero de Pokedex es: ${pikachu.numPokedex}</p>`);

pikachu.mostrarDatos();
charizar.mostrarDatos();

//crear, declarar, instanciar un objeto de la clase Pokemon legendario
const articuno = new PokemonLegendario(
  "Aricuno",
  "Hielo",
  ["Canto helado", "Presion"],
  "Sin evolucion",
  144,
  100,
  "Manto ninveo"
);

console.log(articuno);
articuno.mostrarDatos();
