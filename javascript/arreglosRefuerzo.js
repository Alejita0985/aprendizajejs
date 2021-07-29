const data = {

    "people": [

        {
            "nombre": "Daniel Garcés",

            "edad": 24,

            "casado": false,

            "direcciones": []

        },

        {
            "nombre": "Alejandra Leon",

            "edad": 24,

            "casado": false,

            "direcciones": []

        },

        {
            "nombre": "Juan Pablo Leon",

            "edad": 24,

            "casado": false,

            "direcciones": [

                {

                    "nombre": "casa propia",

                    "barrio": "eucaliptos",

                    "via": "Cra",

                    "calle": "51",

                    "placa": "51-06"

                },

                {

                    "nombre": "casa papas",

                    "barrio": "arrayanes",

                    "via": "Calle",

                    "calle": "37A",

                    "placa": "51-06"

                }

            ]

        },

        {
            "nombre": "July García",

            "edad": 24,

            "casado": false,

            "direcciones": []

        }

    ]

}

data.people[3].direcciones.push(


)

console.log(data.people[2].direcciones.length);

data.people[2].direcciones.unshift(
    {
        "nombre": "casa mia",

                    "barrio": "Centro",

                    "via": "cra",

                    "calle": "25",

                    "placa": "22-46"


    }
)



console.log(data.people[2].direcciones.length);
data.people[3].direcciones.push()

console.log(data.pleople[3].direcciones);



// Agregar mas estructuras de datos de tipo objeto al arreglo direcciones en la posición de juan pablo
// mostrar en consola todas las direcciones en la posición de juan pablo

// es una estructura de datos, puede contener objetos o strings, su estructura se conoce como corchetes []
// .length() -> se usa para medir el tamaño de un arreglo.
// .push() -> se usa para añadir uno o mas elementos al arreglo inicial, colocandolos en la última posición, esto devolverá el arreglo con el nuevo tamaño
// .pop() -> elimina el último elemento del arreglo.
// .unshift() -> se usa para añadir un elemento al arreglo inicial, colocandolo al principio del arreglo.
// .shift() -> se usa para eliminar el primer elento del arreglo.
// .indexOf() -> se usa para comprobar la posición del índice de un elemento en el arreglo.