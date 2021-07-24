// es una estructura de datos, puede contener objetos o strings, su estructura se conoce como corchetes []
//los arreglos siempre inician en 0 e  incrementan de uno en uno
// .length() -> se usa para medir el tamaño de un arreglo.
// .push() -> se usa para añadir uno o mas elementos al arreglo inicial, colocandolos en la última posición, esto devolverá el arreglo con el nuevo tamaño
// .pop() -> elimina el último elemento del arreglo.
// .unshift() -> se usa para añadir un elemento al arreglo inicial, colocandolo al principio del arreglo.
// .shift() -> se usa para eliminar el primer elemento del arreglo.
// .indexOf() -> se usa para comprobar la posición del índice de un elemento en el arreglo.

// formas de ciclos
// for(indice, variable operador logico longitud del arreglo, incremental){}
// for (variable, arreglo){}
// while(validacion){}

//declaro variable let nombre
//Inicializar variable nombres = "daniel"
//reasignar una variable y cambiarle su tipo  
//Para navegar con los arrglos es necesario saber la posición exacta.
// para leer un arreglo es necesario accder a la posiciòn exacta, si cuyo arreglo tiene objetos se navega a traves de puntos (.)

nombres = ["daniel", "oscar", "Alejandra", "Juan Pablo"];
console.log(nombres);
nombres.pop();

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



//tarea nombre de una azafata y el nombre del piloto