let gato = {

    "nombre": "Bruno",
    "raza": "angora",
    "color": "blanco",
    "tamaño": "grande",
    "pelaje": "largo",
    "especie": "mamifero",
    "propietario": {
        "nombre": "oscar",
        "apellido": "garcia",
        "cedula": 16457654,
        "direccion": {
            "tipoVia": "carrera",
            "numeroVia": 25,
            "identificador": "20-62",
        }
    }
}
console.log(`direccion ${gato.propietario.direccion.tipoVia} ${gato.propietario.direccion.numeroVia} # ${gato.propietario.direccion.identificador}`);
