/*************************************
loop for para generar 10 divs html
**************************************/
console.log("Inicio del programa")
var html="";
for(var i=1; i<=10; i++){
	html += "\t<div><h1>"+ i +"</h1></div>";
	}
document.write(html);
console.log("programa completado");


/*****************************************
while true hasta q se adivine el numero
*****************************************/
/*function generadorAleatorios(limite){
	return Math.floor(Math.random() * limite) + 1;
}

var contador=0;
var aAdivinar = generadorAleatorios(100);
while(true)
{
	var aleatorio = generadorAleatorios(100);
	contador++;
	if (aleatorio == aAdivinar) {
		break;
	}
}

alert("el numero a adivinar fue "+aAdivinar +" y se utilizaron "+ contador + " intentos");

/*****************************
randomico entre limites
function numeroAlAzarEntreLimites(limiteInferior, limiteSuperior){
var ejecutar = true;
	if(isNaN(limiteInferior)){
		throw new Error ("el limite inferior no es un numero valido");
		ejecutar = false;
		}

	if(isNaN(limiteSuperior)){
		throw new Error ("el limite superior no es un numero valido");
		ejecutar = false;
		}

	var diferenciaEntreNumero = parseInt(limiteSuperior)-parseInt(limiteInferior)
		
	var num;
	if(ejecutar){
		num= Math.floor(Math.random() * diferenciaEntreNumero)+1 +parseInt(limiteSuperior) -diferenciaEntreNumero  ;
		}
	
	return num;
}

var contador=0;

while(contador <10)
{
	var randomico = numeroAlAzarEntreLimites(contador+1*2, contador+2*3);
	document.write(randomico+"<br>");
	contador++;
}*/