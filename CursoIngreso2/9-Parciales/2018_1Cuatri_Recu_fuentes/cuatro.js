function mostrar()
{

var numeroUno;
var numeroDos;
var resultado;

numeroUno = prompt("ingrese un numero");
numeroDos = prompt("ingrese otro numero");
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

if (numeroUno==numeroDos) 
{
	alert(numeroUno+""+numeroDos);

}
if (numeroUno>numeroDos) 
{
	resultado = numeroUno/numeroDos;
	alert(resultado)

}
else
{
	resultado= numeroUno + numeroDos;
	alert(resultado);

	if (resultado<50) 
	{
		alert("la suma es: "+resultado+ " y es menor a 50");
	}
}


}
