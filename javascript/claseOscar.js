//switch (){
    //  case 2 : 
    // console.log
    //break
    //

   /* let numeroDia = 1;
    switch (numeroDia)
    {
        case 1: 
        console.log("es lunes");
        break;
        case 2:
        console.log("es martes");
        break;
        case 3:
        console.log("es miercoles");
        break;
        case 4:
        console.log("es jueves");
        break;
        case 5:
        console.log("es viernes");
        break;
        case 6:
        case 7:
        console.log("es fin de semana");
        break;
        default:
        console.log("el dia no existe");
        break;
         
    }
    */



    
/* La tienda mega promos esta lanzando su nuevo sistema de compras por internet y ha deicidido otorgar descuentos
sobre el valor total de la compra a traves de los siguientes cupones:
PLUSORO 25%
PLATINO 20%
BRONCE 5%
imprima valor antes del descuento, porcentaje y valor del descuento aplicado además el precio final del producto*/
/* La tienda mega promos esta lanzando su nuevo sistema de compras por internet y ha deicidido otorgar descuentos
sobre el valor total de la compra a traves de los siguientes cupones:
PLUSORO 25%
PLATINO 20%
BRONCE 5%
imprima valor antes del descuento, porcentaje y valor del descuento aplicado además el precio final del producto*/let precioProducto = 50000;
let porcentajeDescuento = 0;
let valorDescuento = 0;
let codigoPromocional = 'PLUSORO';
function obtenerPrecioFinal()
{
switch(codigoPromocional)
{
case 'PLUSORO':
porcentajeDescuento = 25;
break;
case 'PLATINO':
porcentajeDescuento = 20;
break;
case 'BRONCE':
porcentajeDescuento = 5;
break;
default:
porcentajeDescuento = 0;
break;
}
valorDescuento = porcentajeDescuento>0?(precioProducto * porcentajeDescuento)/100:0;
console.log('-----------------------------------------');
console.log(`Precio antes del descuento -> ${precioProducto}`);
console.log(`Porcentaje aplicado -> ${porcentajeDescuento}`);
console.log(`valor del descuento -> ${valorDescuento}`);
console.log(`total a pagar -> ${precioProducto - valorDescuento}`);
}

obtenerPrecioFinal();




//La EPS largas filas ha decido desarrollar un módulo de reportes con la siguiente
//informacion inicial:
//nombreEPS = Largas Filas
//nit = 890.001.001
//afiliados={totalHombres=5600000,totalMujeres=7000000},afiliadosVacunados=21500



let EPS = {
    'nombreEPS': 'Largas Filas',
    'nit' : '890.001.001',
    'afiliados':{
    'totalHombres' : 5600000,
    'totalMujeres':7000000
    },
    'afiliadosVacunados':215000
    }
    let totalAfiliados = EPS.afiliados.totalHombres+EPS.afiliados.totalMujeres;

    //Elaborar una funcion que imprima el numero total de afiliados y
    //que porcentaje corresponde a hombres y mujeres
    function obtenerTotalAfiliados()
    {
    let porcentajeMujeres = Math.round((EPS.afiliados.totalMujeres*100)/totalAfiliados);
    let porcentajeHombres = Math.round((EPS.afiliados.totalHombres*100)/totalAfiliados);
    console.log(`Total de afiliados a la EPS -> ${totalAfiliados}`);
    console.log(`Porcentaje Mujeres -> ${porcentajeMujeres}%`);
    console.log(`Porcentaje Hombres -> ${porcentajeHombres}%`);
    }
    obtenerTotalAfiliados();

    function afiliadosVacunados()
    {
    let porcentajeVacunados = Math.round((EPS.afiliadosVacunados*100)/totalAfiliados);
    console.log(`El porcentaje de afiliados es ${porcentajeVacunados}%`);
    }
    
    afiliadosVacunados();



    //La eps ha decidido adicionar a su fuente de datos (Objeto) una seccion (Atributo)
//que permita llevar un control de las tutelas y demandas cumplidas e incumplidas
//contando con los siguientes valores iniciales
//Total Tutelas = 35800
//Tutelas Cumplidas = 1200
//Tutelas Incumplidas = 28000
//Total Demandas = 15000
//Demandas Cumplidas = 150
//Demandas Incumplidas = 3000
//console.log(EPS);
let sanciones ={
'tutelas' :{
'total': 35800,
'cumplidas':1200,
'incumplidas':28000,
},
'demandas':{
'total': 15000,
'cumplidas':150,
'incumplidas':3000,
}
}
EPS.sanciones = sanciones;  
//para agregar atributos a un objeto.
console.log(EPS)

    
    