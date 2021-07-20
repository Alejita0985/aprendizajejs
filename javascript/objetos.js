//Hay objetos declarados a través de variables 
// Hay objetos a través de funciones declarativas.
//Variable es un espacio en la memoria, como se guarda en la memoria puedo guardar cosas
// let es un tipo de variable, que solo puede ser cambiada en un fragmento de codigo, permite que su información sea dinamica y pueda ser cambiada en el futuro
//var es un tipo de variable, puede ser cambiada en el futuro debido a que se declara de forma global
//const  es un tipo de constante se puede inicializar una sola vez y no puede ser cambiada en el futuro, pero no se puede llamar de forma global
// una variable puede ser de cualquier tipo: string, entero, objeto, función
// Los objetos se inicializan con las llaves {}, puede tener un grupo de atributos de cualquier tipo: string, entero, objeto, funcion


/*let persona = {

"nombre" : "Daniel",
"Apellido" : "Garces",
"cedula" : "108822837",
"altura" : 1.72,
"edad" : 24,
"soltero" : false,
"pareja":{

"nombre" : "Gabriela",
"Apellido" : "Gallo",
"cedula" : "24339383",
"altura" : 1.70,
"edad" : 19,

}
}
*/
//Esta estructura se conoce como JSON {"clave" : "valor"}


let mueble = {

    "color" : "cafe", //string
    "tamaño" : "grande", // string
    "Precio" : 2000000, // number
    "ancho" : {
        "medida" : 2,
        "tipodemedida" : "metros",
    }, //number
    "largo" : {
        "medida" : 5,
        "tipodemedida" : "metros",
    } 
}
console.log(mueble);
//Para navegar o acceder a los atributos de un objeto se hace mediante el simbolo (.)
console.log(mueble.color);
console.log(mueble.ancho.medida);

// tarea 50 objetos todos en consola y como minimo 3 niveles
//minimo 30
