var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
 eleccionMaquina = Math.floor(Math.random()*4)-1;
 

}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra = 1;
	if (eleccionMaquina == piedra) 
	{
		ContadorDeEmpates + 1;
		alert('empato');

	else if (eleccionMaquina==3) 
	{
		contador = ContadorDeGanadas + 1
		alert('gano');
	}	
	else
	{
		contador =ContadorDePerdidas+1
		alert('perdio');
	}
		comenzar()	
		mostrarResultado()
	}	

}//FIN DE LA FUNCIÓN
function papel()
{

}//FIN DE LA FUNCIÓN
function tijera()
{
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('').value = ContadorDeGanadas;
	document.getElementById('').value = ContadorDeEmpates;
	document.getElementById('').value = ContadorDePerdidas;
}
//var globales: para contadores, si estuviera dentro de la funcion no se podria
//funciones uno sola funcionalidad