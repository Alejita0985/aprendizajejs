let personas = [
    {
        nombre: "Daniel",
        apellido: "Garces",
        telefonos: [
            {
                nombre: "trabajo",
                telefono : 3122898647,
                operadores : [
                    {
                        nombre : "tigo"
                    },
                    {
                        nombre : "molestar"
                    },
                    {
                        nombre : "claro"
                    }
                ]
            },
            {
                nombre: "casa",
                telefono : 0363333335
            }
        ]
    },
    {
        apellido: "Leon",
        telefonos: [
            {
                nombre: "trabajo",
                telefono : 123456789,
                operadores : [
                    {
                        nombre : "tigo"
                    },
                    {
                        nombre : "molestar"
                    },
                    {
                        nombre : "claro"
                    }
                ]
            },
            {
                nombre: "casa",
                telefono : 987654321
            },
            {
                nombre: "papas",
                telefono : 000333444,
                operadores : [
                    {
                        nombre : "tigo"
                    },
                    {
                        nombre : "molestar"
                    },
                    {
                        nombre : "claro"
                    },
                    {
                        nombre : "exito"
                    },
                    {
                        nombre : "wom"
                    }
                ]
            },
            {
                nombre: "tienda",
                telefono : 456712344
            }
        ]
    }

]


// recorrido a traves del ciclo for
for(let i = 0; i < personas.length; i++){
    // Equivale a la posición del arreglo personas
    let dataPersonas =  personas[i];
    if(dataPersonas.telefonos){
        for(k = 0; k < dataPersonas.telefonos.length; k++){
            let dataTelefonos = dataPersonas.telefonos[k];
            if(dataTelefonos.operadores){
                if(dataTelefonos.operadores.length > 0 ){
                    let tamanio = dataTelefonos.operadores.length;
                    console.log(tamanio);
                }            
            }else{
                console.log("No tiene operadores");
            }
        }
    }else{
        console.log("No tiene telefonos");
    }
    
}
