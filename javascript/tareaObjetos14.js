let ventana ={

    "material" : "metal",
    "color" : "verde",
    "alto" :{
    "medida" : 2,
    "tipoMedida" : "metros",
    "ancho" :{
        "medida" : 1,
        "tipoMedida" : "metro", 
    }    
}

}
console.log(`Ancho ${ventana.alto.ancho.medida} ${ventana.alto.ancho.tipoMedida}`);
