/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precioBruto;
 	var cantidadDeLamparas;
 	var marca;
 	var descuento;
 	var iibb;
 	var precioUnitario;
	var precioFinal;

	cantidadDeLamparas = document.getElementById('Cantidad').value;
	cantidadDeLamparas = parseInt(cantidadDeLamparas); 	
	marca = document.getElementById('Marca').value;
	precioUnitario = 35;
	precioUnitario = parseInt(precioUnitario); 
 	precioBruto = cantidadDeLamparas * precioUnitario;s

 	if (cantidadDeLamparas >= 6 ) 
 	{
 		descuento = precioBruto*(50/100);
 	}
 	else if (cantidadDeLamparas==5) 
 	{
 		switch(Marca)
 		{
 			case'ArgentinaLuz':		
 			descuento = precioBruto * (40/100);
 			break;

			default:
			descuento = precioBruto * (30/100);
 				 
 		}
 	}	
 	else if (cantidadDeLamparas==4) 
 	{
 		switch(Marca)
 			{
 				case 'ArgentinaLuz':
 				case 'FelipeLamparas':
 				descuento = precioBruto * (25/100);
 				break;

 				default
 				descuento = precioBruto * (20/100);
 			}
 	}
 	else if (cantidadDeLamparas==3) 
 	{
 		switch(Marca)
 			{
 				case'ArgentinaLuz':		
 				descuento = precioBruto * (15/100);
 				break;

 				case'FelipeLamparas':
 				descuento = precioBruto * (10/100); 
 				break;

 				default:
 				descuento = precioBruto * (5/100);
 			}	
 	}		
 			
 	else
 	{
 		descuento = 1;
 	}		
if (descuento>120) 
{
	iibb = precioBruto *(10/100);
	precioFinal = descuento + iibb;
	alert("Usted pago"+" "+ precioFinal+" "+"siendo"+" "+iibb+" "+"el impuesto que se pagó");
	document.getElementById('precioDescuento').value=descuento;

}
 	





 	}


 	



 	/*
	var precioBruto;
 	var cantidadDeLamparas;
 	var marca;
 	var descuento;
 	var iibb;
 	var precioUnitario;
	var precioFinal;

	cantidadDeLamparas = document.getElementById('Cantidad').value;
	cantidadDeLamparas = parseInt(cantidadDeLamparas); 	
	marca = document.getElementById('Marca').value;
	precioUnitario = 35;
	precioUnitario = parseInt(precioUnitario); 
 	precioBruto = cantidadDeLamparas * precioUnitario;

 	switch(Cantidad)
 	{
 		case 1:
 		case 2:
 		descuento = precioBruto;
 		break;
 		case 3:	
 			switch(Marca)
 			{
 				case'ArgentinaLuz':		
 				descuento = precioBruto * (15/100);
 				break;

 				case'FelipeLamparas':
 				descuento = precioBruto * (10/100); 
 				break;

 				default:
 				descuento = precioBruto * (5/100);
 				

 			}
 			break
 		case 4:	
 			switch(Marca)
 			{
 				case'ArgentinaLuz':	
 				case'FelipeLamparas':
 				descuento = precioBruto * (25/100);
 				break;

 				default:
 				descuento = precioBruto * (20/100);
 				  		
 			}	
 			break;
 		case 5:
 			switch(Marca)
 			{
 				case'ArgentinaLuz':	
 				descuento = precioBruto * (40/100);
 				break;

 				default:
 				descuento = precioBruto * (30/100);
 				
 			}
 			break;

 		default:
 			descuento = precioBruto * (50/100);		
 	}


if (descuento>120) 
  {
	iibb = precioBruto *(10/100);
	precioFinal = descuento + iibb;
	alert("Usted pago"+" "+ precioFinal+" "+"siendo"+" "+iibb+" "+"el impuesto que se pagó");
	document.getElementById('precioDescuento').value=descuento;
  }

}










	
	
	/*
    var precioBruto;
 	var cantidadDeLamparas;
 	var marca;
 	var descuento;
 	var precioUnitario;
 	var precioFinal;
 	var iibb;

 	cantidadDeLamparas = document.getElementById('Cantidad').value;
 	cantidadDeLamparas = parseInt(cantidadDeLamparas);
 	marca = document.getElementById('Marca').value;

 	precioUnitario = 35;
 	precioBruto = cantidadDeLamparas * precioUnitario;
 		
 	if (cantidadDeLamparas>=6)
 	{  
 		descuento = precioBruto*(50/100);
 		document.getElementById('precioDescuento').value= descuento;
 	}
 	else
 	{
 		
 		if (cantidadDeLamparas==5 ) 
 		{
 			if (marca=='ArgentinaLuz') 
 			{
 				descuento = precioBruto*(40/100);
 				document.getElementById('precioDescuento').value=descuento;
 			}
 			else
 			{
 				descuento = precioBruto*(30/100);
 				document.getElementById('precioDescuento').value=descuento;
 			}	
 		}
 		else if(cantidadDeLamparas==4)
 			{
 				if (marca=='ArgentinaLuz' || marca=='FelipeLamparas')  
 				{
 					descuento = precioBruto*(25/100);
 					document.getElementById('precioDescuento').value=descuento;
 				}
 				else
 				{
 					descuento = precioBruto*(20/100);
 					document.getElementById('precioDescuento').value=descuento;
 				}	
 			}
 			
 		else if (cantidadDeLamparas==3) 
 		{
 			if (marca=='ArgentinaLuz') 
 			{
 				descuento = precioBruto*(15/100);
 				document.getElementById('precioDescuento').value=descuento;
 			}
 			else if (marca=='FelipeLamparas')
 			{
 				descuento = precioBruto*(10/100);
 				document.getElementById('precioDescuento').value=descuento;
 			}
 			else
 			{
 				descuento = precioBruto*(5/100);
 				document.getElementById('precioDescuento').value=descuento;
 			}
 		}		
 				
 	}
if (descuento>120) 
{
	document.getElementById('precioDescuento').value=descuento;
	iibb = precioBruto*(10/100);
	precioFinal = descuento + iibb;
	alert("Usted pago"+" "+ precioFinal+" "+"siendo"+" "+iibb+" "+"el impuesto que se pagó");
} 

}
*/