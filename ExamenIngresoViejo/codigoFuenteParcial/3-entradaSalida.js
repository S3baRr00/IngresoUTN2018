//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo=parseInt(document.getElementById("largo").value);
    var ancho=parseInt(document.getElementById("ancho").value);
    var metrosAlambre= (largo+ancho)*2*6 ;
alert("se necesitaran "+metrosAlambre+" metros de alambre");
}

