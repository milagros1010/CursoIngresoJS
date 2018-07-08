/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var descuento;
	var sueldoConDescuento

	sueldo = document.getElementById('importe').value;
 	sueldo = parseInt(sueldo);

 	sueldoConDescuento = sueldo - (1-0.1)
 	document.getElementById('resultado').value = sueldoConDescuento;
	
}
//sueldo - descuento
//resultado = 75*sueldo/100;
