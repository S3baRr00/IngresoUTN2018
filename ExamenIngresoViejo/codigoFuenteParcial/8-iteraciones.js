//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

var numero;
var contPares=0
var suma=0;
var promedio;
var max;
var min;
var flag=0;
var respuesta;
var contNumeros=0;


    do 
    {
         numero = parseInt(prompt("ingrese un numero positivo"));
        while (numero < 0) {
            numero = parseInt(prompt("Error: ingrese un numero positivo"));
        }
    
        if(numero%2==0)
        {
            contPares++;
        }
        
        if(numero < min || flag==0)
        {
            min= numero; 
        }
        
        if(numero > max || flag==0)
        {
            max= numero;
            flag=1;
        }
        
        suma += numero;
        contNumeros++;


    respuesta=prompt("desea continuar?");
    }while(respuesta == 's')

    promedio= suma/contNumeros;

    document.write("<br>", "la cantidad de numeros pares es de "+contPares, "</br>" );
    document.write("<br>","la suma de todos los numeros ingresados es de "+suma, "</br>");
    document.write("<br>","el promedio de todos los numeros ingresados es de "+promedio, "</br>");
    document.write("<br>","el numero maximo es "+max, "</br>");
    document.write("<br>","el numero minimo es "+min, "</br>");

}

