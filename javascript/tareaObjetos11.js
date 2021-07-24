let maletin = {

    "marca" : "totto",
    "color" : "negro",
    "litros" : 20,
    "propietario" : {
        "nombre" : "Katherine Garcia",
        "documento" : 23456987,
        "garantia" : {
            "fechaInicio" : "20/07/2021",        
            "fechaVencimiento" : "20/07/2023",
        }
    } 

}
console.log(`garantia maletin inicia ${maletin.propietario.garantia.fechaInicio} hasta ${maletin.propietario.garantia.fechaVencimiento}`);
