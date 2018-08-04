function mostrar()
{


/*
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
*/

var precio;
var descuento;
var precioFinal;

precio=prompt("Ingrese el precio");
descuento=prompt("Ingrese el descuento");
precio=parseInt(precio);
descuento=parseInt(descuento);
descuento=precio*(descuento/100);


precioFinal=precio-descuento;

document.getElementById('elPrecioFinal').value=precioFinal;






















}
