/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numero;
function comenzar()
{
	numeroSecreto = Math.floor(Math.random()*(100))+1;
	alert("toque el boton verificar");
	
	//Genero el número RANDOM entre 1 y 100
	 //alert(numeroSecreto );

}

function verificar()
{
	numero = document.getElementById('numero').value = document.getElementById('numero').value;		
	
	if (numero==numeroSecreto) 
	{
		alert("Usted es un ganador!!!");
		document.getElementById('intentos').value=contadorIntentos;
	}
	else if(numero>numeroSecreto)
	{
		alert("se paso del numero secreto");
	}
	else  (numero<numeroSecreto) 
	{
		alert("falta para llegar al numero secreto");
	}

}