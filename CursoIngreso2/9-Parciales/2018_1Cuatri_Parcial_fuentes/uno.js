
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo = prompt("ingrese largo del rectangulo");
	largo = parseInt(largo);
	ancho = prompt("ingrese ancho del rectangulo");
	ancho = parseInt(ancho);

	perimetro = 2*largo + 2*ancho;

	alert("perimetro:"+perimetro);
}
