 //ejecucion de una accion para esperar un resultado
 // 2 tipos de funciones declarativas y expresivas
 
 // Funcion declarativa: Se hacen con la palabra reservada function 
 // hoisting= estudia las formas como estan declaradas las variables
 // Interpolación es la combinacion de cadenas de texto con variables, se obtiene con las comillas invertidas a la izquierda ``
 /*// 1) Haga una función que permita recibir 2 parámetros numéricos y haga una operación arimética de suma.
// 2) Haga una función que permita recibir 2 parámetros numéricos y haga una operación arimética de resta.
// 3) Haga una función que permita recibir evaluar variables de tipo booleano y permita saludar al docente de la clase*/
////4) Haga una función que permita evaluar la edad de una persona , 
///////si es mayor que le permita ejercer al derecho al voto y haga una funcion que permita votar por un candidato que previamente se encontraba postulado, 
///////si no cumple con su mayoria de edad muestre en pantalla por que no puede votar, 

let candidato1 = "Oscar Alberto Garcia";
let candidato2 = "Katherine Garcia León"




function ValidarMayorEdad(edad)
{
    return edad>17;
}

function votar(edad,candidato)
{
     ValidarMayorEdad(edad) ? console.log(`Usted ha votado por ${candidato}`) 
                            : console.log(`Usted tiene ${edad} años y no puede votar`);   
}

//votar(15,candidato2);

let presente = true;

function saludar(nombre)
{

    presente && nombre!='' ? console.log(`Hola querido profesor ${nombre}`) 
                           +: console.log(`Profesor ausente`);
    
}
saludar("");

/*
let nombre = "Alejandra";
 
function saltar()
{
    console.log("Mi primera funcion hecha por " + nombre);
    console.log(`MI primera funcion hecha por ${nombre}`);
}
saltar();

// Funcion expresiva o anonima se declara dentro de una variable

let saltando = function()
{
    console.log("Estoy saltando");
}
saltando();

function sumar(num1,num2)
{
      let resultado = num1 + num2;
      return console.log(resultado);
}
sumar(8,4);

function restar(num1,num2)
{
    let resultado = num1 - num2;
    return console.log(resultado);
}

function restar2(num1,num2)
{
    if(num1 - num2 >=0)
    {
        restar(num1,num2)
    }
else
{
    console.log("No se pudo hacer la resta");
}
    
}
restar2(25,25);
//problema restar solo si el resultado es positivo
//objetivo hacer que la resta sea positiva y no negativa

function restar3(num1,num2)
{
    num1-num2  >= 0 ? console.log(num1 - num2) : console.log("No se puede hacer la resta");    
}
restar3(45,54);
*/