let ejemplos = [ // primer for 

    [ // segundo for
        {
            personas: [ // tercer for
                {
                    nombres: "José Daniel",
                    apellidos: "Garces Ospina"
                },
                {
                    nombres: "Alejandra",
                    apellidos: "Leon"
                },
                {
                    nombres: "Juanpablo",
                    apellidos: "Leon"
                },
                {
                    nombres: "July",
                    apellidos: "Garcia"
                }

            ]
        }

    ], // posicion 0 estructura de datos array [0][0].personas[1].nombres

] // areglo padre de longitud 3, tiene 3 estructuras de datos internas.


for (dimension0 = 0; dimension0 < ejemplos.length; dimension0++) {
    let dataejemplos = ejemplos[dimension0];

    for (dimension1 = 0; dimension1 < dataejemplos.length; dimension1++) {
        let datapersonas = dataejemplos[dimension1].personas;

        for (dimension2 = 0; dimension2 < datapersonas.length; dimension2++) {
             
            let dataApellido = datapersonas[dimension2];
            console.log(dataApellido.apellidos);

        }

    }


}

