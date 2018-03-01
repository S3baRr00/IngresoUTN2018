//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var num1=parseInt(prompt("ingrese un numero"));
    var num2=parseInt(prompt("ingrese otro numero"));

    if(num1==num2)
    {
        multiplicacion= num1*num2;
        document.write("el producto de "+num1+" y "+num2+" es de "+multiplicacion);
    }
    else if(num1> num2)
    {
        resta=num1-num2;
        document.write("la resta entre "+num1+" y "+num2+" es de "+resta);
    }
    else
    {
        suma=num1+num2;
        document.write("la suma de "+num1+" y "+num2+" es de "+suma);
    }
}

