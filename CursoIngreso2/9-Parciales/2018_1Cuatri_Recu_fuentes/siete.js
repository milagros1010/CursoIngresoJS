function mostrar()
{
 var nota;
 var edad;
 var sexo;
 var sumaDeNotas;
 var notaMasBaja;
 var sexoDeNotaMasBaja;
 var cantidadVaronesMayores;
 var notaDelMasJoven;
 var sexoDelMasJoven;
 var edadDelMasJoven;
 var cantidadDeEntradas;
 var notaDeLaPrimeraMujerIngresada;
 var bandera;
 var contadorDeMujeres;
 var mensaje;

 contadorDeMujeres=0;
 bandera=0;
 sumaDeNotas=0;
 contador=0;
 cantidadVaronesMayores=0;
 cantidadDeEntradas=0;


while(contador<2)
	{

	contador=contador+1;

 	nota= prompt("ingrese nota");
 	nota= parseInt(nota);

 	while(isNaN(nota)||0<nota && nota>10)
 	{
	nota= prompt("Error!!Reingrese nota");
	nota= parseInt(nota); 	
 	}

 	edad= prompt("ingrese edad");
 	edad= parseInt(edad);

 	while(isNaN(edad)||0<edad && edad>100 )
	{
	edad= prompt("Reingrese edad");
	edad= parseInt(edad);
	}

	sexo=prompt("ingrese sexo")
	while(sexo!="f" && sexo!="m")
	{
	sexo=prompt("Reingrese sexo");	
	}

	

	if (contador==1) 
	{
		notaMasBaja = nota;
		sexoDeNotaMasBaja = sexo;
		edadDelMasJoven = edad;
		sexoDelMasJoven = sexo;
		notaDelMasJoven = nota;
	}
	else
		{
			if (nota<notaMasBaja) 
			{
				notaMasBaja = nota;
				sexoDeNotaMasBaja = sexo;
			}
			
	 		if (edad<edadDelMasJoven)
			{
				edadDelMasJoven = edad;
				notaDelMasJoven = nota;
				sexoDelMasJoven = sexo;
			}


		}
	if (edad>=18 || sexo=="m" || nota>=6) 
	{
		cantidadVaronesMayores= cantidadVaronesMayores+1;
	}

	else if (sexo=="f" && bandera==0) 
	{
		notaDeLaPrimeraMujerIngresada=nota;
		bandera=1;	
	}
	if (sexo=="f") 
	{
		contadorDeMujeres=contadorDeMujeres+1;
	}


sumaDeNotas=sumaDeNotas+nota;


}

if (contadorDeMujeres==0) 
{
	mensaje = "no hubo ninguna mujer";
}

promedio = sumaDeNotas/contador;
alert("el promedio es: "+promedio);
alert("la nota mas baja es: "+notaMasBaja+" y el sexo es: "+sexoDeNotaMasBaja);
alert("La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6: "+cantidadVaronesMayores);
alert("El sexo de la persona mas joven es: " + sexoDelMasJoven+" y la nota del más joven: "+notaDelMasJoven);
alert(" la nota de la primera mujer ingresada es: "+notaDeLaPrimeraMujerIngresada);
alert(mensaje);
}
