let mesa = {

    "material" : "metal",
    "color" : "rosado",
    "tipoMesa" : "infantil",
    "ancho" : {
        "medida" : 40,
        "tipoMedida" : "centimetros",
        "largo" : {
            "medida" : 30,
            "tipoMedida" : "centimetros",
        }
    }
}
console.log(`Medida de ancho ${mesa.ancho.medida} ${mesa.ancho.tipoMedida} Medida de largo ${mesa.ancho.largo.medida} ${mesa.ancho.largo.tipoMedida}`);