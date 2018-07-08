/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var sueldoConAumento


	sueldo = document.getElementById('sueldo').value;
 	sueldo = parseInt(sueldo);
 	aumento = sueldo * (10/100) ;
 	sueldoConAumento = sueldo + aumento
 	document.getElementById("resultado").value = sueldoConAumento;
 		
 	

}
// entrada:sueldo // id:sueldo 
//proceso:aumentar un 10%  //
//salida:sueldo con el aumento //id: resultado
//(comprobar parte por parte)
