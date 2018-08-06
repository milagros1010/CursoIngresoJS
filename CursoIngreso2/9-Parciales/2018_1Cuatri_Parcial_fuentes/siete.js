/* Jose  m 25 
   Maria f 16
   Jesus m 33
   Fer   f 81 */

	
/*
	var nombre;
	var sexo;
	var edad;
	var edadMaxima;
	var edadMinima;
	var edadMaximaFem;
	var contador;
	var cantidad;
	contador = 0;

	while(contador<4)
	{	
		contador++;	
		nombre = prompt('ingrese nombre valido');
	
		sexo = prompt("ingrese sexo valido");
		while(sexo!="m"&& sexo!="f")
		{
			sexo=prompt("ingrese sexo valido");
		}
		edad = prompt("ingrese edad");
		edad = parseInt(edad);

		while(isNan(edad)||edad<0||edad>100)
		{
			edad = prompt("ingrese edad");
			edad = parseInt(edad);

		}
		if (edad==81) 
		{	
			nombreMayor=nombre;
			

		}
		if (contador==0) 
		{
			edadMaxima=edad;
			edadMinima=edad;
			nombreMayor=nombre;
		}
		else
		{
			if (edadMaxima<edad) 
			{
				edadMaxima=edad;
				nombreMayor=nombre;
			}
			if (edadMinima>edad) 
			{
				edadMaxima=edad;
			}
			if (sexo =='f') 
			{
				if (edad>edadMaximaFem) 
				{
					edadMaximaFem=edad;
					nombreFemeninoMasViejo=nombre;
				}

			}
		}	
	}
document.write()
document.write()
document.write()


function mostrar()
{

var nota;
var sexo;
var contador;
var sumadenotas;
var promediodenotas;
var notamasbaja;
var sexodelmasbajo;
var notamasalta;




contador=0;
promediodenotas=0;
sumadenotas=0;


while(contador<5)


{

nota = prompt("ingrese nota");
nota = parseInt(nota);
sexo=prompt("ingrese sexo");

sumadenotas=sumadenotas+nota;

contador=contador+1;


while(isNaN(nota)|| nota>10 || nota<0)



{



nota = prompt("reingrese nota");
nota = parseInt(nota);

}


while(sexo!="m" && sexo!="f")		
{
	sexo=prompt("ingrese sexo como m o f");

}

if(contador==1)
{
	notamasbaja=nota;
	notamasalta=nota;
}
else
{
	if(nota<notamasbaja)
	{
		notamasbaja=nota;
		sexodelmasbajo=sexo;
	}
	if(nota>notamasalta)
	{
		notamasalta=nota;

	}


}








}


promediodenotas=sumadenotas/contador;

document.write("la nota mas baja es "+notamasbaja+"<br>");
document.write("la nota mas alta es "+notamasalta+"<br>");




}

*/
function mostrar()
{

var nota;
var sexo;
var contador;
var promedioDeNotas;
var sumaDeNotas;	
var notaMasBaja;
var notaMasAlta;
var cantidadDeVarones6;
var edad;
var nombre;
var sexoDePeorNota;
var sexoDeMejorNota;
var nombrePeorNota;
var nombreMejorNota;
var personaMasVieja;
var personaMasJoven;
var nombrePersonaMasVieja;
var nombrePersonaMasJoven;


contador= 0;
promedioDeNotas=0;
sumaDeNotas=0;
cantidadDeVarones6=0;
notaMasBaja=0;
notaMasAlta=0;



while(contador<2)

{

	contador=contador+1;
	nombre= prompt("ingrese nombre");
	edad = prompt("ingrese edad");
	edad = parseInt(edad);	


	while(isNaN(edad)||edad<=1 ||edad>100)
	{
		edad = prompt("ingrese edad");
		edad = parseInt(edad);
	}	

	

	nota = prompt("ingrese nota");
	nota = parseInt(nota);

	while(isNaN(nota)||nota<0 || nota>10)
	{

		nota = prompt("Error!!!. Reingrese nota");
		nota = parseInt(nota);
	
	}


	sexo = prompt("Ingrese sexo");

	while(sexo!="m" && sexo !="f" )
	{

	sexo = prompt("Error!! Ingrese f o m");

	}

	sumaDeNotas = sumaDeNotas + nota;

	if (contador==1) 
	{
		notaMasBaja = nota;
		notaMasAlta = nota;
		sexoDePeorNota = sexo;
		sexoDeMejorNota = sexo;
		nombrePeorNota = nombre;
		personaMasJoven = edad;
		personaMasVieja = edad;
		nombrePersonaMasVieja = nombre;
		nombrePersonaMasJoven = nombre;
		nombreMejorNota = nombre;
	}	
	else
		{
		
				if (nota<notaMasBaja) 
				{
			
					notaMasBaja = nota;
					sexoDePeorNota = sexo;
					nombrePeorNota = nombre;

				}

				else  (nota>notaMasAlta) 
				{
					notaMasAlta = nota;				
					sexoDeMejorNota = sexo;
					nombreMejorNota = nombre;
				}


				if (edad>personaMasVieja)
				{
					personaMasVieja = edad;
					nombrePersonaMasVieja = nombre;

				}
				else(edad<personaMasJoven)
				{
					personaMasJoven = edad;
					nombrePersonaMasJoven = nombre;
				}	

				if(nota>=6 && sexo=="m" ) 
				{

					cantidadDeVarones6=cantidadDeVarones6+1;
				
				}
		}	



}																																							

promedioDeNotas = sumaDeNotas/nota;
alert("el promedio es: "+promedioDeNotas);
alert("El nombre de la nota mas bajo es: "+nombrePeorNota+ "la nota es: "+notaMasBaja+" y el sexo es: "+sexoDePeorNota);
alert("El nombre de la nota mas alta es: "+nombreMejorNota+"la nota mas alta es: "+notaMasAlta+" el sexo de la nota mas alta es: "+sexoDeMejorNota);
alert("cantidad de varones con notas mayor de 6: "+cantidadDeVarones6);
alert("el nombre de la persona mas vieja es: "+nombrePersonaMasVieja+" y tiene "+personaMasVieja);

}

 

















