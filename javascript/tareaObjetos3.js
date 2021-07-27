let lampara = {

    "color" : "azul",
    "tipo" : {
        "tipo1" : "halogena",
        "tipo2" : "led",
        "tipo3" : "fluorescente",
    },
    "modelo" :{
        "modelo1" : "pared",
        "modelo2" : "colgante",
        "modelo3" : "techo",
    } 
}
console.log(`lampara tipo ${lampara.tipo.tipo1} modelo ${lampara.modelo.modelo1}`);
