
let perro = {

    "nombre": "lucas",
    "raza": "labrador",
    "color": "cafe",
    "tamaño": "pequeño",
    "pelaje": "corto",
    "especie": "mamifero",
    "propietario": {
        "nombre": "alejandra",
        "apellido": "león",
        "cedula": 243393736,
        "direccion": {
            "tipoVia": "calle",
            "numeroVia": 40,
            "identificador": "20-62",
        }
    }
}
console.log(`direccion ${perro.propietario.direccion.tipoVia} ${perro.propietario.direccion.numeroVia} # ${perro.propietario.direccion.identificador}`);

