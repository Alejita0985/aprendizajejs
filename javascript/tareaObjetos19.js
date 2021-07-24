let avion = {

    "tipoAvion" : "Comercial",
    "color" : "blanco",
    "cantidadPasajeros" : 200,
    "marca" : "boeing737",
    "tripulacion" : {
        "piloto" : 1,
        "copiloto" : 1,
        "azafata" : 2,
        "datosTripulacion" : {
            "nombrePiloto" : "Carlos Fernando Daza",
            "nombreCopiloto" : "Luis Murillo",
            "nombreAzafata1" : "Carla Martinez",
            "nombreAzafata2" : "Camila Lucas",
        }

    }
}
console.log(`Nombre Piloto ${avion.tripulacion.datosTripulacion.nombrePiloto} Nombre Copiloto ${avion.tripulacion.datosTripulacion.nombreCopiloto} Nombre Azafata ${avion.tripulacion.datosTripulacion.nombreAzafata1}`);
