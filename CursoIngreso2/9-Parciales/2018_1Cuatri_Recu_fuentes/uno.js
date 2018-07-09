
function mostrar()
{
	var base;
	var	altura;
	var	superficie;
	var perimetro

	base = prompt ("ingrese base de triangulo")
	base = parseInt (base)
	altura = prompt ("ingrese altura de triangulo") 
	altura = parseInt(altura)

	superficie = base * altura/2
	perimetro = 3 * base

	alert("superficie"+superficie+"perimetro:"+perimetro)
}
