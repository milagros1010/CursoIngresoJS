/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contador;
var ingresoNumero;
contador = 0;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random()*(100))+1;
	numeroSecreto = parseInt(numeroSecreto);

}

function verificar()
{

ingresoNumero = document.getElementById('numero').value;
ingresoNumero = parseInt(ingresoNumero);
contador = contador + 1;


 if (contadorIntentos==1 && numeroSecreto==ingresoNumero) 
 {
 	alert("usted es un Psíquico");
 }	
else if (contadorIntentos==2 && numeroSecreto == ingresoNumero) 
{
	alert("excelente percepción");
}	
else if (contadorIntentos==3 && numeroSecreto == ingresoNumero) 
{
	alert("Esto es suerte");
}
else if (contadorIntentos==4 && numeroSecreto == ingresoNumero) 
{
	alert("Excelente técnica");
}
else if (contadorIntentos==5 && numeroSecreto == ingresoNumero) 
{
	alert("usted está en la media");
}
else if ((contadorIntentos>=6 && 10<= contadorIntentos) && (numeroSecreto==ingresoNumero))
{
	alert("falta técnica");
}
 	if (contadorIntentos>=11) && (numeroSecreto == ingresoNumero)
	{
		alert("afortunado en el amor!!");
	}	
	else (ingresoNumero=numeroSecreto)
	{
		alert("fortunado en el amor!!");
	}

document.getElementById('intentos').value = contador;
}