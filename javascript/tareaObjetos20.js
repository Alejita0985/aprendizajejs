let hospital = {

    "razonSocial" : "Hospital Universitario",
    "nit" : 800675432,
    "capacidad" : "1000 pacientes",
    "tipoAtencion" : "Basica",
    "gerente" : {
        "nombre" : "Diego Maradona",
        "documento" : 75987654,
        "titulo" : "Medico"
    },
    "direccion" : {
        "tipoVia" : "carrera",
        "numero" : 49,
        "placa" : "78-65",
        "barrio" : "Arboleda",
    }  
}
console.log(`Direccion hospital ${hospital.direccion.tipoVia} ${hospital.direccion.numero} # ${hospital.direccion.placa} ${hospital.direccion.barrio}`);
