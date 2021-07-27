// es una estructura de datos, puede contener objetos o strings, su estructura se conoce como corchetes []
// .length() -> se usa para medir el tamaño de un arreglo.
// .push() -> se usa para añadir uno o mas elementos al arreglo inicial, colocandolos en la última posición, esto devolverá el arreglo con el nuevo tamaño
// .pop() -> elimina el último elemento del arreglo.
// .unshift() -> se usa para añadir un elemento al arreglo inicial, colocandolo al principio del arreglo.
// .shift() -> se usa para eliminar el primer elento del arreglo.
// .indexOf() -> se usa para comprobar la posición del índice de un elemento en el arreglo.



// formas de ciclos
// for(indice, variable operador logico longitud del arreglo, incremental){}
// for (variable, arreglo){}
// while(validacion){}

// para leer un arreglo es necesario acceder a la posición exacta, si cuyo arreglo tiene objecto se navegan a través de puntos (.)

let avion = {

    "tipoAvion": "Comercial",

    "color": "blanco",

    "cantidadPasajeros": 200,

    "marca": "boeing737",

    "tripulacion": [

        {

            "cabina": [

                {

                    "piloto": {

                        "nombre": "Carlos"

                    }

                },

                {

                    "copiloto": {

                        "nombre": "Luis"

                    }

                },

            ],

        },

        {

            "azafatas": [

                {

                    "nombre": "Carla Martinez"

                },

                {

                    "nombre": "Camila Lucas"

                }

            ]

        }

    ]

}

// acceder a cabina

console.log(avion.tripulacion[0].cabina[1].copiloto.nombre);

// nombre de una azafata y nombre de piloto


console.log(avion.tripulacion[0].cabina[0].piloto.nombre);

console.log(avion.tripulacion[1].azafatas[1].nombre);

