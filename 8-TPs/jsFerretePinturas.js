/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var farenheit;
    var centigrados;
    if(centigrados=document.getElementById("temperatura").value)
    {
        farenheit= (centigrados+32)*1.8;
    
}

}

function CentigradosFahrenheit () 
{
	var farenheit;
    var centigrados;
    if(farenheit=document.getElementById("temperatura").value)
    {
        centigrados=(farenheit-32)/1.8;
    }
}
