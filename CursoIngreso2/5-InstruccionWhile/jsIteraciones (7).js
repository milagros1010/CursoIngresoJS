function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero

while(true)
{
	if (numero=="si") 
	{
		break;
	}
	numero=prompt();
	numero=parseInt(numero);
	contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/*numero=prompt();
	numero=parseInt();
	acumulador + numero;
	contador++;		