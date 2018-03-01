//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var precioNeto=parseFloat(prompt("ingrese el precio que desee"));
    var precioFinal=precioNeto*1.21;
    document.getElementById("importe").value="$"+precioFinal.toFixed(2);
}

