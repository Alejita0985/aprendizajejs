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

let parametrosAgregar = {
    "nombre" : "casa July",

                    "barrio" : "Aranjuez",

                    "via" : "calle",

                    "calle" : "87",

                    "placa" : "88-09",

}

data.people[1].direcciones.push(parametrosAgregar);
console.log(data.people[1].direcciones);
console.log(data.people[1].direcciones[0].nombre);


