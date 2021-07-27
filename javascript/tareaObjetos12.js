
let colegio = {

    "nombre" : "gemelli",
    "nit" : 900876543,
    "estudiantes" : {
        "nombre" : "Katherine Garcia",
        "grado" : "jardin",
        "documento" : 1056432897,
        "acudiente" : {
            "nombre" : "Alejandra León",
            "documento" : 24339383,
                    }
    } 
}
console.log(`Acudiente estudiante ${colegio.estudiantes.acudiente.nombre} Documento ${colegio.estudiantes.acudiente.documento}`);
