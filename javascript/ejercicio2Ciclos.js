
//https://www.hackerrank.com


let numeros = [1,2,3]; // el resultado debe ser 6;
let suma = 0;
for(let i = 0; i < numeros.length; i++){
    let num = numeros[i];
    suma = suma + num;
    suma += num;
}
console.log(suma);


let numeros2 = [
    [
        1,2,3
    ],
    [
        3,4,5
    ]
    [
        6,7,8
    ]
];

let suma = 0;
for(let i = 0; i < numeros2.length; i++){
    let data = numeros2[i];
    for(let k = 0; k < data.length; k++){
        let data2 = data[k];
        console.log(data2);
        suma += data2;
    }
}
console.log(suma);