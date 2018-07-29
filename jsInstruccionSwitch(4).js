function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)	
{
	case 'enero':
	case 'marzo':
	case 'mayo':
	case 'julio':
	case 'agosto':
	case 'octubre':
	case 'diciembre':
	alert("este mes tiene 31 días.");
	break;
	case 'febreo':
	alert("Este mes tiene 28 días.");
	break;

	default:
	alert("Este mes tiene 30 días.");

}



}//FIN DE LA FUNCIÓN