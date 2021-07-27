let armario = {
    "color" : "cafe",
    "material" :"madera",
    "divisiones" : 5,
    "factura" : {
        "numeroFactura" : 456,
        "empresa" : "Home Center",
        "valor" : 250000,
        "nombreCliente" : "Carlos Celedon",
        "garantia" : {
            "fechaInicio" : "23/07/2021",
            "fechaFin" : "23/07/2023",
        }

    }

}
console.log(`Numero factura: ${armario.factura.numeroFactura} Empresa: ${armario.factura.empresa} Valor: ${armario.factura.valor}`);
