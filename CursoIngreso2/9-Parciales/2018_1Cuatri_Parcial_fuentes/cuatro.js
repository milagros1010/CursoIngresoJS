function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("ingrese primer numero");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("ingrese segundo numero");
	numeroDos = parseInt(numeroDos);

	if (numeroUno==numeroDos) 
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
	alert(resultado+"la suma es"+resultado+"y superoel 10")
}

}
