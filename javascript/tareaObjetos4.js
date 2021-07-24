let televisor = {
   
    "color" : "negro",
    "marca" : "samsung",
    "pantalla" : {
        "ancho" : 40,
        "alto" : 50,
    },    
    "garantia" : {
        "tiempo" : 2,
        "medidaTiempo" : "anio",
    }

    }
     
console.log(`garantia ${televisor.garantia.tiempo} ${televisor.garantia.medidaTiempo}`);
