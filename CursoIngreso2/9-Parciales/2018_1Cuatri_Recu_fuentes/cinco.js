function mostrar()
{

var dia;
dia =prompt("ingrese dia de semana");

switch(dia)
{
	case 'sabado':
	case 'domingo':
	alert(" buen finde");
	break;
	case 'lunes':
	case 'martes':
	case 'miercoles':
	case 'jueves':
	case 'viernes':
	alert("a trabajar");
	break;

}

}
