function Mostrar()
{
	var numero;
	var  respuesta= "s";
	var maximo;
	var minimo;
	var flag = 0;
	var cantidadDePares=0
	var suma=0;
	var promedio;
	var contadoIngreso = 0;

	while (respuesta=="s")
	{
		numero = prompt("ingrese un numero");
		numero= parseFloat(numero);
		
		while(numero<=0)
		{
			numero = prompt("Error!! Reingrese el numero");
			numero = parseFloat(numero);
			
		}
		if (numero%2==0) 
		{
			cantidadDePares++;
		}
		if (flag==0 || numero>maximo) 
		{
			maximo = numero;
		}	
		if (flag==0 || numero<minimo) 
		{
			minimo = numero;

		}

		flag = 1;
		suma= suma + numero;
		respuesta= prompt("desea continuar?");

	}

	promedio= suma / contadoIngreso;
	document.write("cantidad de pares"+ cantidadDePares+<br>);
	document.write("promedio es:"+ promedio+<br>);
	document.write("la suma es:"+ suma+<br>);
	document.write(""+ +<br>);



	
}
