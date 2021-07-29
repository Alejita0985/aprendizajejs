// es una estructura de datos, puede contener objetos o strings, su estructura se conoce como corchetes []
// .length() -> se usa para medir el tamaño de un arreglo.
// .push() -> se usa para añadir uno o mas elementos al arreglo inicial, colocandolos en la última posición, esto devolverá el arreglo con el nuevo tamaño
// .pop() -> elimina el último elemento del arreglo.
// .unshift() -> se usa para añadir un elemento al arreglo inicial, colocandolo al principio del arreglo.
// .shift() -> se usa para eliminar el primer elento del arreglo.
// .indexOf() -> se usa para comprobar la posición del índice de un elemento en el arreglo.


const data = {

    "people": [],
    "avion": [],
    "": [],
    "direccion": [],

}

data.people.unshift(
    {

        datos: {
            nombre: "Katherine",
            apellido: "leon",
            cedula: 37654899,
            edad: 19,
            direccion: {
                via: "calle",
                placa: "49-59",
                barrio: "centro",
            },

            nivelAcademico: {

                bachiller: true,
                universidad: true,
                especializacion: false,
                datosUniversidad: {

                    nombre: "Universidad de Caldas",
                    nit: 900765432,
                    modalidad: "presencial",
                },
                telefonoCelular: {

                    marca: "Motorola",
                    sistemaOperativo: "Android",
                    memoria: "5g",
                    Color: "azulMetalico",


                }

            }

        }



    })


console.log(data.people);


// 1) Al objeto data agregarle 3 atributos, cuyo contenido sean arreglos vacíos.
// 2) A cada arreglo vacío le vamos agregar mínimo 3 objetos de 2 niveles.
// 3) Ponga en práctica todas las propiedades con las que se manipula un arreglo, teniendo en cuenta que debe usar todas las propiedaes.

// shift()

// unshit()

// pop()

// push()

// length()


// 4) Mostrar en la consola los diferentes resultados tanto de objetos como de arreglos, precisamente usando la nevagación entre objetos y arreglos.

