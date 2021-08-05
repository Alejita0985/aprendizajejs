// encontrar la suma de todo el array;
let numeros = [ // primer ciclo

    [1,2,3], // posicion 0
    [4,5,6], // posicion 1
    [10,8,9] // posicion 2

]; // fin del primer ciclo
let primerx = 0; // 15
let segundax = 0; // 18

for(let i = 0; i < numeros.length; i++){

    const element = numeros[i][i];
    const element2 = numeros[i][numeros.length-i-1]
    primerx += element;
    segundax += element2;  
}
console.log(primerx, segundax);
