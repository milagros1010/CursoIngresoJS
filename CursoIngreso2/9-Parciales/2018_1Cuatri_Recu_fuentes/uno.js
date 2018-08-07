
function mostrar()
{

var base;
var altura;
var superficie;
var perimetro;

base = prompt("ingrese base");
base = parseInt(base);
altura = prompt("ingrese altura");
altura = parseInt(altura);

perimetro = base * altura/2;
superficie = 3 * base;

alert("el perimetro es: "+perimetro+"la superficie es: "+ superficie);

	
}
