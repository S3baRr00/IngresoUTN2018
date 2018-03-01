//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() 
{
    var contAlumno = 0;
    var contAlumnoAprobado=0;
    var sexo;
    var contsexoM = 0;
    var nota;
    var AcumNotas = 0;
    var ContNota = 0
    var notaMin;
    var promedio;
    var flag = 0;

    while (contAlumno < 6) 
    {
        nota = parseInt(prompt("ingrese la nota"));
        while (nota < 0 || nota > 10)
        {
            nota = parseInt(prompt(" Error: ingrese nuevamente la nota"));
        }
        AcumNotas+= nota;
        ContNota++;
        if (nota < notaMin || flag == 0) 
        {
            notaMin=nota;
            flag=1;
        }

        sexo = prompt("ingrese f o m");
        while (sexo != 'f' && sexo != 'm') 
        {
            sexo = prompt("Error: ingrese nuevamente f o m");
        }
        
        if (sexo == 'm') 
        {
            contsexoM++;
        }
       
        if(sexo=='m' && nota>=6)
        {
            contAlumnoAprobado++;
        }
       
        contAlumno++;
        
    }
    promedio = AcumNotas / ContNota;
    
alert("el promedio de notas es de "+promedio+", la nota minima fue "+notaMin+
" y los alumnos varones con notas mayores o iguales a 6 fueron "+contAlumnoAprobado);





}
