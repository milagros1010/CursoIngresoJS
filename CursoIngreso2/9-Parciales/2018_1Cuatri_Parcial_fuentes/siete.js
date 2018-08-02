/* Jose  m 25 
   Maria f 16
   Jesus m 33
   Fer   f 81 */
function mostrar()
{
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

}

