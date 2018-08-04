function mostrar()
{
	var planetas;

	planetas = prompt("ingrese un planeta del sistema solar");

	switch(planetas)
	{
		case "mercurio":
		case "venus":
		alert("Aca hace mas calor");	
		break;
		case "tierra":
		alert("Aca vivimos");
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
		alert("Aca hace mas frio");
		default:
		alert("Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).");

	}



}
