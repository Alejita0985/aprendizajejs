let cortina = {
    "color" : "beige",
    "tela" : "lino",
    "ancho" : {
        "medida" : 5,
        "tipoMedida" : "metros",
        "alto" : {
            "medida" : 2,
            "tipoMedida" : "metros",
        }
    }
}
console.log(`Cortina color ${cortina.color} tiene de ancho ${cortina.ancho.medida} ${cortina.ancho.tipoMedida} y de alto ${cortina.ancho.alto.medida} ${cortina.ancho.alto.tipoMedida}`);