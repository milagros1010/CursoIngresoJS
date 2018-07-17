function mostrar()
{
	var precio;
	var descuento;
	var descuentoPrecio;
	var PrecioDescuento;
	var iva;
	var pdi;

	precio = prompt("ingrese precio");
	precio = parseInt(precio);
	descuento = prompt("ingrese porcentaje de descuento");
	descuento = parseInt(descuento);

	descuentoPrecio = descuento;
	descuento = precio*(descuento/100);
	PrecioDescuento= precio-descuento;
	iva = precio* (21/100);
	pdi = PrecioDescuento + iva;
	alert("-descuento en dinero:"+" "+descuentoPrecio+" "+"-precio con el descuento:"+" "+PrecioDescuento+" "+"-iva:"+" "+iva);
	pdi = document.getElementById('elPrecioFinal').value=pdi;

}
