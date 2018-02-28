function Mostrar()
{
var numero=parseInt(prompt("ingrese un numero"));
var i;
var esprimo=true;
for(i=2; i<numero;i++)
{
    if(numero%i==0)
    {
        esprimo=false;
        break;
    }
}
if(esprimo)
{
    alert(numero +" es primo");
}
else
{
    alert(numero +" no es primo");
}
}//FIN DE LA FUNCIÓN