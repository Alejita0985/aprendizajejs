let moto = {

    "marca" : "yamaha",
    "color" : "azul",
    "modelo" : 2021,
    "linea" : "fz",
    "propietario" : {
        "nombre" : "juan Pablo León",
        "documento" : 34887546,
        "telefono" : 312546987,
        "soat" : {
            "fechaVencimiento" : "31/05/2022",
            "fechaexpedicion" : "31/05/2021",
            "aseguradora" : {
                "nit" : 800546378,
                "nombreAseguradora" : "codensa",

            }
        }
    }

}

console.log(`nit aseguradora ${moto.propietario.soat.aseguradora.nit} nombre ${moto.propietario.soat.aseguradora.nombreAseguradora}`);
