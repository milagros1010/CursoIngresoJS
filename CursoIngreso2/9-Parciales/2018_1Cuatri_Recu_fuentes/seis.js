function mostrar()
{

var nota;
var mensaje = 0;

nota = prompt("ingrese nota");


switch(nota)
{
	case "0":
	case "1":
	case "2":
	case "3":
	mensaje = "la proxima se puede";
	break;

	case "4":
	case "5":
	case "6":	
	mensaje = "raspando";

	if (nota<5) 
	{
		
	mensaje = mensaje + " debes preocuparte más";
	}
	break;

	case "7":
	case "8":
	case "9":
	case "10":
	mensaje = "aprobo";

	if (nota>8) 
	{
		mensaje = mensaje + " muy bien";
	}
	break;

	default:
	mensaje = "la nota no es valida";

	
}

alert(mensaje);

}
