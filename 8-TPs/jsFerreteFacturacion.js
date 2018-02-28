/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
var precio1=parsefloat(document.getElementById("PrecioUno").value=precio1.toFixed(2));
var precio2=parsefloat(document.getElementById("PrecioDos").value=precio1.toFixed(2)));
var precio3=parsefloat(document.getElementById("PrecioTres").value=precio1.toFixed(2)));
var sumaprecios= precio1+ precio2 + precio3;
alert("la suma es de "+ sumaprecios);
}
function Promedio () 
{
var precio1=parsefloat(document.getElementById("PrecioUno").value=precio1.toFixed(2)));
var precio2=parsefloat(document.getElementById("PrecioDos").value=precio1.toFixed(2)));
var precio3=parsefloat(document.getElementById("PrecioTres").value=precio1.toFixed(2)));
var promprecios= (precio1+ precio2 + precio3)/3;
}
function PrecioFinal () 
{
var precio1=parsefloat(document.getElementById("PrecioUno").value=precio1.toFixed(2)));
var precio2=parsefloat(document.getElementById("PrecioDos").value=precio2.toFixed(2)));
var precio3=parsefloat(document.getElementById("PrecioTres").value=precio1.toFixed(2)));
var preciototal=parsefloat((precio1+ precio2 + precio3))
var preciofina= preciototal*0.21;
}

