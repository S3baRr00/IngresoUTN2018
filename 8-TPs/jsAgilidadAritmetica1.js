/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
function comenzar()
{
var num1= (Math.random()*10).toFixed(0);
document.getElementById("PrimerNumero").value=num1;
var num2= (Math.random()*10).toFixed(0);	
document.getElementById("SegundoNumero").value=num2;
var operador= (Math.random()*3).toFixed(0);
var resultado;


switch (operador)
{
    case '0':
    {
        document.getElementById("Operador").value="+";
        resultado= num1+num2;
        break;
    }
    case '1':
    {
        document.getElementById("Operador").value="-";
        resultado= num1-num2;
        break;
    }
    case '2':
    {
        document.getElementById("Operador").value="X";
        resultado= num1*num2;
        break;
    }
    case '3':
    {
        document.getElementById("Operador").value="/";
        resultado.toFixed(2)= num1 / num2;
        break;
    }




}    
}//FIN DE LA FUNCIÓN
function Responder()
{
    var respuesta= 
    

}//FIN DE LA FUNCIÓN
