let puerta ={

    "material" : "madera",
    "color" : "cafe",
    "alto" :{
    "medida" : 100,
    "tipoMedida" : "centimetros",
    "ancho" :{
        "medida" : 50,
        "tipoMedida" : "centimetros", 
    }    
}

}
console.log(`Ancho ${puerta.alto.ancho.medida} ${puerta.alto.ancho.tipoMedida}`);
