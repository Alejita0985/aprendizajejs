let casa = {
    "direccion" : "cra 25 # 8-50",
    "nombre edificio" : "balconesVillacarmenza",
    "apto" : 302,
    "color" : "gris",
    "propietario" : {
        "nombre" : "Blanca Ortiz",
        "documento" : 25348645,     
            },
         "predial" : {
         "numeroPredio" : 234576,
         "valor" : 200000000,
         "tipoValor" : "millones",
}

}
console.log(`Numero de predio ${casa.propietario.predial.numeroPredio} valor ${casa.propietario.predial.valor} ${casa.propietario.predial.tipoValor}`);
