function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("numeroUno");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("numeroDos");
	numeroDos = parseInt(numeroDos);

	if (resultado=numeroUno==numeroDos) 
	{
		resultado = alert(numeroUno+""+numeroDos)
	}
	else if (numeroUno>numeroDos) 
	{
		resultado = alert(numeroUno - numeroDos)
	}
	else
	{
		resultado= alert(numeroUno+numeroDos)
	}

	if (resultado>10) 
	{
		alert(resultado+"la suma es"+resultado+"y supero el 10" )
	}
	else
	{
		alert(resultado)
	}

}
