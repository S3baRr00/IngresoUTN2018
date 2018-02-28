/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo=document.getElementById("Largo").value;
var ancho=document.getElementById("Ancho").value;
var perimetroRect= ((largo*2) + (ancho*2))*3

alert("se deberan comprar "+perimetroRect+" metros de alambre");
}
function Circulo () 
{
var largo=document.getElementById("Largo").value;
var ancho=document.getElementById("Ancho").value;
var radio=document.getElementById("Radio").value;
var perimetroCir= (2*3.1416*radio)*3 

alert("se deberan comprar "+perimetroCir.toFixed(2)+" metros de alambre");
}
function Materiales () 
{
var largo=document.getElementById("Largo").value;
var ancho=document.getElementById("Ancho").value;
var bolsaCal= (largo* ancho)*3;
var bolsaCem= (largo*ancho)*2;





alert("se deberan comprar "+bolsaCal+" bolsas de cal y "+bolsaCem+ " bolsas de cemento");
}