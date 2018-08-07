function mostrar()
{

var precio;
var porcentajeDescuento;
var descuento;
var	precioConDescuento;
var iva;
var precioFinal;

precio = prompt("ingrese precio");
precio = parseInt(precio);
porcentajeDescuento = prompt("ingrese porcentaje de descuento");
porcentajeDescuento = parseInt(porcentajeDescuento);

descuento = precio * (porcentajeDescuento/100);
precioConDescuento = precio - descuento;
iva = precio * (21/100);
precioFinal = precioConDescuento + iva;

alert("el descuento en dinero es: "+descuento+ "el precion con el descuento es: "+ precioConDescuento+"el iva es: "+ iva);




}
