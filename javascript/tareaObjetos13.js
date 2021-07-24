let universidad = {

    "nombre" : "Catolica del norte",
    "nit" : 800543768,
    "profesores" : {
        "nombre" : "Daniel Lopez",
        "materia" : "programacion",
        "carrera" : "ingenieria sistemas",
        "estudiantes" : {
            "nombre" : "Paula Velez",
            "documento" : 54879654,
            "materia" : "programacion",

        } 
    }
}
console.log(`Nombre estudiante ${universidad.profesores.estudiantes.nombre} documento ${universidad.profesores.estudiantes.documento} materia ${universidad.profesores.estudiantes.materia}`);
