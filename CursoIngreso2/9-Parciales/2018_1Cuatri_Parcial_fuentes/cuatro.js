function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("ingrese primer numero");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("ingrese segundo numero");
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

	resultado = (resultado<50)
	alert(resultado+"la suma es"+resultado+"y es menor a 50")

}
