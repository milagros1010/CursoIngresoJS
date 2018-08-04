function Mostrar()
{
	var edad;
	var sexo;
	var i;
	var promedio;
	var suma=0;
	var minimo;
	var flag;
	var cantidadVarones = 0;

	for (i=0;i<100;i++)
	{
		edad = prompt("ingrese edad");
		edad = parseInt(edad);
		while(edad<0 || edad>100)
		{
			edad = prompt("ingrese edad");
			edad = parseInt(edad);

		}
		sexo = prompt("ingrese sexo");
		while(sexo!="f" && sexo!= "m" )
		{
			sexo = prompt("ingrese sexo"); 
		}	

		suma = suma + edad;
		if(flag==0 || edad<minima)
		{
			minimo = edad;
		}
		flag=1
		if (sexo=="m" && edad>=20) 
		{
			cantidadVarones++; 
		}
	}
	promedio = suma/100;
	alert("El promedioes:"+promedio);
	alert("La minima es:"+minimo);
	alert(" ")


}
