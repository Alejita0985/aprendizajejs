let huevosEnTienda = 0;
let huevosComprar = 150;

if(huevosEnTienda>0)
{

    if (huevosEnTienda > 0 && huevosComprar > 0 && huevosComprar <= huevosEnTienda)
    {
         huevosEnTienda = huevosEnTienda-huevosComprar;

    }
    else if(huevosEnTienda >0 && huevosComprar > huevosEnTienda)
    {
        let huevosXComprar = (huevosComprar - huevosEnTienda);
        console.log("Me faltaron " + huevosXComprar +" huevos");
        huevosEnTienda = 0;
    }
 
    console.log("Quedan "+ huevosEnTienda +" en la tienda");
}
else
{
    console.log("No hay huevos");
}
