let cama = {

    "material" : "madera",
    "color" : "negro",
    "largo" : {
    "medida" : 2,
    "tipoMedida" : "metros",
    "ancho" : {
        "medida" : 1.60,
        "tipoMedida" : "metros", 
    }    
}

}
console.log(`Ancho ${cama.largo.ancho.medida} ${cama.largo.ancho.tipoMedida} largo ${cama.largo.medida} ${cama.largo.tipoMedida} `);
