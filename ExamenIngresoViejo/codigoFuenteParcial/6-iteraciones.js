//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() 
{
    var importe;
    var contImportes = 0;
    var Max;
    var Min;
    var flag = 0;
    do {
        importe = parseInt(prompt("ingrese su importe"));
        contImportes++;
        if (importe > Max || flag == 0)
        {
        Max = importe;
        }
        if (importe < Min || flag == 0)
        {   
        Min = importe;
        flag = 1;
        }
    } while (contImportes < 8)


    alert("el minimo importe fue de $" + Min + " y el maximo importe fue de $" + Max);

}