function mostrar()
{

var nombre;
var cantidadDePaginas;
var cantidadDeVentas;
var tema;	
var contador; 
var cantidadDeLibrosConPaginasPares;
var cantidadDeLibrosConPaginasImpares;
var cantidadDeVentasCero;
var promedioDeVentas;
var acumuladorDeVentas;
var cantidadDeProgramacion;
var acumuladorDePaginasDeProgramacion;

acumuladorDeVentas=0;
contador=0;
respuesta= "si";
cantidadDeLibrosConPaginasPares=0;
cantidadDeLibrosConPaginasImpares=0;
cantidadDeVentasCero=0;
cantidadDeProgramacion=0;
acumuladorDePaginasDeProgramacion=0;

while(respuesta !="no")
{


while(contador<2)
{

	contador=contador+1;

	nombre = prompt("ingrese nombre del libro");
	cantidadDeVentas = prompt("ingrese cantidad de ventas");
	cantidadDeVentas = parseInt(cantidadDeVentas);
	acumuladorDeVentas = acumuladorDeVentas+1;

	cantidadDePaginas = prompt("ingrese cantidad de paginas");
	cantidadDePaginas = parseInt(cantidadDePaginas);

	while (isNaN(cantidadDeVentas)||0>cantidadDeVentas)
	{
	cantidadDeVentas = prompt("Reingrese cantidad de ventas");
	cantidadDeVentas = parseInt(cantidadDeVentas);
	}	
	
	
	tema = prompt("Reingrese tema");	
	while(tema!="programacion" && tema!="robotica" && tema!="patrones " && tema!="bases de datos")
	{
		tema = prompt("Reingrese tema");
	}

	if (cantidadDePaginas%2==0) 
	{
		cantidadDeLibrosConPaginasPares = cantidadDeLibrosConPaginasPares+1;
	}
	else
	{
		cantidadDeLibrosConPaginasImpares = cantidadDeLibrosConPaginasImpares+1;
	}	
	if (cantidadDeVentas==0) 
	{
		cantidadDeVentasCero = cantidadDeVentasCero+1;
	}
	if (tema=="programacion") 
	{
		cantidadDeProgramacion = cantidadDeProgramacion+1;
		acumuladorDePaginasDeProgramacion = acumuladorDePaginasDeProgramacion+1;
	}

respuesta = prompt("¿desea continuar?");

}

promedioDeVentas = acumuladorDeVentas/contador;

document.write("la cantidad de libros pares es: "+cantidadDeLibrosConPaginasPares+"<br>");
document.write("la cantidad de libros impares es: "+cantidadDeLibrosConPaginasImpares+"<br>");
document.write("la cantidad de cero ventas: "+cantidadDeVentasCero+"<br>");
document.write("el promedio de la ventas ingresadas es: "+promedioDeVentas+"<br>");
document.write("la cantidad de paginas de programacion: "+acumuladorDePaginasDeProgramacion+"<br>");

}




}
