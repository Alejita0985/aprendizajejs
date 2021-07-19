let despegar = false;
let aterrizar = false;
let enElAire = false;

if(enElAire)
{
    aterrizar = true;
    despegar =false;
    enElAire = false;
}
else
{
    despegar = true;
    aterrizar = false;
    enElAire = true;

}

if(!enElAire)
{
    console.log("El avión esta en tierra");
}
else
{
    console.log("El avión esta en el aire");
}
