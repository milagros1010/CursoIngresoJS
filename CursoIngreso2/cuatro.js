function Mostrar()
{

var numeroUno;
var numeroDos;
var suma;

numeroUno= prompt("Ingrese un numero");
numeroUno = parseInt(numeroUno);
numeroDos = prompt("Ingrese otro un numero");
numeroDos = parseInt(numeroDos);

suma = numeroUno + numeroDos;

if (suma>0)
{
	document.write("ES POSITIVO");
}
else 
{
	if (suma<0) 
	{
		document.write("ES NEGATIVO");

	}	
	else
	{
		document.write("ES CERO");

	}
}



}
