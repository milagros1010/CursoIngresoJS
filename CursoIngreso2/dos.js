function Mostrar()
{
	var importe;
	var descuento;
	var importeFinal;

	importe = prompt("ingrese el importe del producto");
	importe = parseInt(importe);

	descuento = importe *25/100; // importe - (importe*0.25);
	importeFinal = importe - descuento;		

	document.getElementById('importeFinal').value = importeFinal;


}
