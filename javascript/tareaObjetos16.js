let empresa = {

    "nit" : 800765234,
    "razonSocial" : "Comdata",
    "gerente" : {
        "nombre" : "Juan Pablo León",
        "cedula" : 1045378654,
        "cargo" : "Gerente",
    },
    "empleados" : {
        "nombre" : "Jorge Roberto Leon",
        "documento" : 1053427643,
        "cargo" : "Coordinador",
        
    }    

}
console.log(`Nombre de empleado ${empresa.empleados.nombre} documento ${empresa.empleados.documento} cargo ${empresa.empleados.cargo}`);
