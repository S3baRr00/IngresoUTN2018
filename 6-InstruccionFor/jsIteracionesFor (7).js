function Mostrar()
{
var numero=parseInt(prompt("ingrese un numero"));
var contDivs=0;
var i;
 for(i= 1; i<=numero; i++)
{
    if(numero%i ==0)
    {
        console.log(i);
        contDivs++;
    }
}
console.log("se encontraron "+contDivs+" numeros divisores");



}//FIN DE LA FUNCIÓN