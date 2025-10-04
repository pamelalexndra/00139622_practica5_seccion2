const estanteria = {
  libros: [{
    nombre: 'El caballero oscuro',
    autor: 'Frank Miller',
    leido: false
  },
  {
    nombre: 'El mundo amarillo',
    autor: 'Albert Espinosa',
    leido: false
  },
  {
    nombre: 'Harry Potter y el caliz de fuego',
    autor: 'J.K. Rowling',
    leido: false
  },
  {
    nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    leido: false
  },
  {
      nombre: 'Bersek',
    autor: 'Kentaro Miura',
    leido: true
  },
  {
    nombre: 'Iliada',
    autor: 'Homero',
    leido: false
  }], 
  log() {
    const { libros } = this;
    let resultado = ''
    for (const libro of libros) {
      const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
      resultado = `${resultado}
      ${prefijo} leído ${libro.nombre} de ${libro.autor}`
    }
    console.log(resultado)
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido)
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
    const elementoRandom = librosNoLeidos[indiceRandom]
    console.log(`RTe sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
  }
}

// Comprobando que funciona
estanteria.log();
estanteria.sugerencia();