let vehiculo = {

    "marca" : "chevrolet",
    "color" : "rojo",
    "tipo" : "sedan",
    "modelo" : 2011,
    "propietario" : {
        "nombre" : "oscar garcia",
        "documento" : 19335674,
        "telefono" : 342788654,
        "soat" : {
            "fechaVencimiento" : "20/07/2022",
            "fechaexpedicion" : "20/07/2021",
            "aseguradora" : {
                "nit" : 900765764,
                "nombreAseguradora" : "sura",

            }
        }
    }

}

console.log(`nit aseguradora ${vehiculo.propietario.soat.aseguradora.nit} nombre ${vehiculo.propietario.soat.aseguradora.nombreAseguradora}`);

