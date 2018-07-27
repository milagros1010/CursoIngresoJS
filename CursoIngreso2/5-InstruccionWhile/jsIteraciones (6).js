function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeros;

	

	while(contador<5)
	{
		console.log (contador);
		contador++;
		numeros = prompt();
		numeros = parseInt(numeros);
		suma = suma + numeros;
		promedio = suma/acumulador
		

	}	
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN