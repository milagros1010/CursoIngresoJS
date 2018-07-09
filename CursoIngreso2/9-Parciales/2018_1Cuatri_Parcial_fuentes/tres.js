function mostrar()
{
	var precio;
	var descuento;
	var precioConDescuento;
	var precioFinal;

	precio = prompt("precio");
	precio = parseInt(precio);
	descuento = prompt("descuento");
	descuento = parseInt(descuento);

	precioConDescuento = precio *(descuento/100);
	precioFinal= precio - precioConDescuento;

	document.getElementById('elPrecioFinal').value=precioFinal;
	
}
