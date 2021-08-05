let ejemplos = [ // primer for 

    [ // segundo for
        {
            personas: [ // tercer for
                {
                    nombres : "José Daniel",
                    apellidos: "Garces Ospina"
                },
                {
                    nombres : "Alejandra",
                    apellidos: "Leon"
                },
                {
                    nombres : "Juanpablo",
                    apellidos: "Leon"
                },
                {
                    nombres : "July",
                    apellidos: "Garcia"
                }

            ]
        }

    ], // posicion 0 estructura de datos array [0][0].personas[1].nombres

]


let persona = {
    nombre: "Natalia"
};

for(let i = 0; i < ejemplos.length; i++){
    let dataEjemplos = ejemplos[i];

    for(let indice2 = 0; indice2 < dataEjemplos.length; indice2++){
        let dataIndice2 = dataEjemplos[indice2];
        
        for(let indice3 = 0; indice3 < dataIndice2.personas.length; indice3++){
            console.log(persona);
            if(dataIndice2.personas[indice3].nombres == 'Alejandra'){
                persona.nombre = dataIndice2.personas[indice3].nombres;
            }            
        }

    }
}
console.log(`Mostrando persona ${JSON.stringify(persona)}`);