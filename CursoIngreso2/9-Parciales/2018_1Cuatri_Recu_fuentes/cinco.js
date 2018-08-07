function mostrar()
{

var dia;
var mensaje=0;

dia =prompt("ingrese dia de semana");

switch(dia)
{
	case "lunes":
	case "martes": 
	case "miercoles":
	case "jueves":
	case "viernes":
	mensaje = "a trabajar";
	break;
	case "sabado":
	case "domingo":
	mensaje = "buen finde";
	break;
	default:
	mensaje = "no es un dia valido";


}
alert(mensaje);
}
