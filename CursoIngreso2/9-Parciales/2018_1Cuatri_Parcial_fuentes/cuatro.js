function mostrar()
{


var numero1;
var numero2;
var resultado;


numero1=prompt("Ingrese un numero");
numero2=prompt("Ingrese un numero");

numero1=parseInt(numero1);
numero2=parseInt(numero2);

if (numero1==numero2)

 {

	alert(numero1+""+numero2);
 }

else if (numero1>numero2)
{
	resultado=(numero1-numero2);
	alert(resultado);
}
else
{
	resultado=(numero1+numero2);
	alert(resultado);
	if (resultado>10) 
	{
		alert("la suma es: "+resultado+" y supero el 10");
	}
}




















}