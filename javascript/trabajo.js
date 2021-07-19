let edad = 24;
let numeroDeCedula = 24339383;
let nombreCompleto = "Jeny Alejandra León Ortiz";

if(edad >=18)
{
     console.log("solicite " + numeroDeCedula +" "+ nombreCompleto + " se puede contratar");
}
else
{
    console.log("Es menor de edad no se puede contratar");
}



edad >= 18 ? console.log("solicite " + numeroDeCedula +" "+ nombreCompleto + " se puede contratar") : console.log("Es menos de edad no se puede contratar");
