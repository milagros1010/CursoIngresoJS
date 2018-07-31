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
		alert(numeroUno+""+numeroDos);
	}
	else if (numeroUno>numeroDos) 
	{
		resultado = numeroUno- numeroDos;
		alert (resultado);
	}
	else(resultado>10)
	{
		resultado= numeroUno+numeroDos;
		alert(resultado);
		alert("la suma es:"+" "+resultado+" "+"y supero el 10");
	}
}