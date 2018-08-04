function Mostrar()
{
	var peso;
	var i = 0;
	var maximo;
	var minimo;
	var flag = 0;

	while (i<5)
	{
		peso = prompt("ingrese el peso en kg.");
		peso = parseFloat(peso);
		
		while(peso<=0)
		{
			peso = prompt("Error!! Reingrese el peso en kg.");
			peso = parseFloat(peso);
			
		}
		if (flag==0 || peso>maximo) 
		{
			maximo = peso;
		}	
		if (flag==0 ||peso<minimo) 
		{
			minimo = peso;

		}
		flag = 1;
		i++;
	}
	document.write("El maximo es:"+maximo+"El minimo es:"+minimo);









}
//for cuando sabemos la cantidad de interacciones	
