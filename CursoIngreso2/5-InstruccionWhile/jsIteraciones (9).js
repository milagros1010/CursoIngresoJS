function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	
	contador++
	numero=prompt();
	numero=parseInt(numero);
	

	while(respuesta!='no')
	{
		numero = prompt("ingrese un numero"+ contador);
		numero = parseInt(numero);
		
		//if (contador++=1) 
		//{}
		if (numero>maximo) 
		{
			maximo = numero;
		}
		if (numero<minimo) 
		{
			minimo=numero;
		}
		respuesta = prompt();

	}

	document.getElementById('maximo').value;
	document.getElementById('minimo').value;


}//FIN DE LA FUNCIÓN