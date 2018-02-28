function Mostrar()
{
var numero=parseInt(prompt("ingrese un numero"));
var contarPares=0;
var i;
 for(i= 1; i<=numero; i++)
{
    if(i%2==0)
    {
        console.log(i);
        contarPares++;
    }
}
console.log("se encontraron "+contarPares+" numeros pares");
}//FIN DE LA FUNCIÓN