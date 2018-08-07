function mostrar()
{

var nota;
var contador;
var sexo;
var edad;
var promedio;
var acumuladorNotas;
var notaMasBaja;
var notaMasAlta;
var sexoDeLaNotaMasBaja;
var sexoDeLaNotaMasAlta;
var varonesMayores;
var contadorVarones;

contador=0;
acumuladorNotas=0;
contadorVarones=0;

while(contador<2)
{
	contador= contador+1;


	nota = prompt("ingrese nota");
	nota = parseInt(nota);


	while(isNaN(nota)||nota<0 || nota>10 )
	{
		nota = prompt("Reingrese nota");
		nota = parseInt(nota);

	}

	sexo = prompt("ingrese sexo");

	while(sexo!="f" && sexo!="m")
	{
		sexo = prompt("Reingrese sexo");

	}

		edad = prompt("ingrese edad");
		edad = parseInt(edad);

	while(edad<0 || edad>100)
	{
		edad = prompt("	Reingrese edad");
		edad = parseInt(edad);
	}

	if (contador==1) 	
	{
		notaMasBaja = nota;
		sexoDeLaNotaMasBaja = sexo;
	 	notaMasAlta = nota;
	 	sexoDeLaNotaMasAlta = sexo;
	 
	}
	else
	{
		if (nota<notaMasBaja) 
		{
			notaMasBaja = nota
			sexoDeLaNotaMasBaja = sexo
		}

		if (edad>=18 && sexo=="m" &&nota >=6) 
		{
			contadorVarones = contadorVarones+1;
		}

		else if (nota>notaMasAlta) 
		{
			notaMasAlta = nota;
			sexoDeLaNotaMasAlta = sexo;
		}

	}



acumuladorNotas = acumuladorNotas + nota;










}

promedio = acumuladorNotas/contador;
alert("el promedio es: "+promedio);
alert("la nota mas baja es :"+notaMasBaja +" y el sexo es: " + sexoDeLaNotaMasBaja);
alert("la nota mas alta es: "+notaMasAlta+" y el sexo es: "+sexoDeLaNotaMasAlta);
alert("La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6: "+contadorVarones);



}
