let telefonoCelular = {

    "marca" : "aple",
    "sistemaOperativo" : "ios",
    "memoria" : "5g",
    "camara" : "dual",
    "Color" : "azulMetalico",
    "propietario" : {
        "nombre" : "Alejandra León",
        "documento" : 24777654,
        "garantia" : {
            "tiempo" : "1",
            "medidaTiempo" : "anio",
        }
    }
}
console.log(`Propietario ${telefonoCelular.propietario.nombre} documento ${telefonoCelular.propietario.documento}`);
