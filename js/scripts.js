

/****************************
numero al azar entre dos numeros
******************************/
/*function numeroAlAzarHastaLimite(limiteInferior, limiteSuperior){
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

var numAzar = numeroAlAzarHastaLimite(prompt("ingrese limite inferior"), prompt("ingrese limite superior"));

alert("el numero al azar de respuesta es "+numAzar);

/******************************
throw new error
******************************/
/*var num="numero";
if(isNaN(num)){
	throw new Error ("no es un numero valido");
}else{
	num = num * 0.5;
}

console.log(num);*/
/*******************************
Ambito de las variables
**********************************/
/*function saludo(){
	var mensaje ="Hola a todos";
	alert(mensaje);
}
var mensaje = "Chao";
saludo();
alert(mensaje);
saludo();
*/
/******************************
funcion mayor de dos numero
******************************/
/*function mayorEntreDosNumeros(nUno, nDos){
	if(nUno > nDos){
		return nUno;
	}else{
		return nDos;
	}
}

var numUno = parseInt(prompt("ingrese un numero"));
var numDos = parseInt(prompt("ingrese otro numero"));

alert("el numero mayor es el "+mayorEntreDosNumeros(numUno, numDos));
*/
/**************************
funcion que recibe parametros
**************************/
/*function numeroAlAzarHastaLimite(limite){
	var num= Math.floor(Math.random() * parseInt(limite)) + 1;
	return num;
}

var numAzar = numeroAlAzarHastaLimite(prompt("ingrese un numero"));

alert("el numero al azar de respuesta es "+numAzar);

/*function tirarDado(){//funcion de tirar dados
var dado = Math.floor(Math.random() * 6) + 1;
return dado;
};

console.log("Inicio del programa");
//alert("tirar dador 3 veces");

alert("el dado dice: "+tirarDado());

var multiplo = tirarDado() * 2

alert("multiplico por 2 el dado: "+multiplo);

/*console.log("pon el punto y coma")
alert("le falta el parentesis";
document.write("<h1>cierra el tag");
aler("es alert");
consol.log("se escribe console");

console.("pon el log ");
lert("alert comienza con a");
Document.write("<h1>Documente es con d minuscula</h1>");
Document.("<h1>Falta Write</h1>");
console.log(va entre comillas);*/
/*console.log ("Inicio de programa");
alert("Hola Javascript");
document.write("<h1>saludo iunicial</h1>");
alert ("gracias por visitar")
console.log ("fin de programa");*/
/*var equipo = prompt("Cual es tu equipo de futbol favorito? ");
document.write("<h1>Su nombre es "+equipo+"</h1>");
console.log("Su nombre es "+equipo);*/
/*var clave = prompt("Hola Usuario, Ingrese su clave:");
console.log("La longitud de la clave es: " + clave.length);
console.log("TA-DA!! Su clave es: " + clave.toUpperCase());
console.log("El valor original de la clave es: " + clave);*/
/*console.log("Inicio del programa");
=======
onsole.log("Inicio del programa");
>>>>>>> fc7783f
var preguntas = 3;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
alert("Este es el juego del cuenta cuentos. Sigue las instrucciones.");
var nombre = prompt("ingrese un nombre. "+ preguntasFaltantes);
preguntas -=1;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
var verbo = prompt("ingrese un verbo "+ preguntasFaltantes);
preguntas -=1;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
var adjetivo = prompt("ingrese un adjetivo " + preguntasFaltantes);
/*document.write("<h1>Mi papá tiene un " +nombre+ " muy "+adjetivo+" y a veces nos lleva a "+verbo+" a mis amigos y a mí</h1>");*/

/*document.write("<h1>Un día lunes por la mañana llego " + nombre.toUpperCase() + " a la escuela y le dice a su maestra: <br>Maestra, ¿Me va a " + verbo.toUpperCase() 
	+ " usted por algo que yo no hice? <br>No " + nombre.toUpperCase() + ", ¡Por supuesto que no!  <br>Que " + adjetivo.toUpperCase() + " porque no hice la tarea</h1>");
<<<<<<< HEAD
*/
/*var segundosPorMinuto= 60;
var minutosPorHora = 60;
var horasPorDia= 24;


var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;

document.write("<h1>Calculadora del Tiempo</h1><p>hay " + segundosPorDia + " en un dia</p>");


var diasPorAño = 365;
var aniosDeVida = prompt("ingrese el numero de años que ha vivido:");
var diasVividos = aniosDeVida * diasPorAño;
document.write("<h1>Calculadora del Tiempo</h1><p>Ha vivido " + diasVividos + " días aproximadamente</p>");*/

/*var peliculasVistas = prompt("Cuantas peliculas has visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
alert('Wow! has visto ' + tiempoPantalla +" veces minimo la pantalla");

*/

/*console.log("Inicio del programa");
//var numeroingresado = prompt("ingrese un numero: ");
var dado = Math.floor(Math.random() * 6) + 1;
alert("Dado dice: "+dado);
console.log("Programa completado");
*/

/*console.log("Inicio del programa");
var numeroIngresado = prompt("ingrese un numero: ");
var numeroAleatoreo = Math.floor(Math.random() * numeroIngresado) + 1;
alert("El numero aleatorio entre 1 y " + numeroIngresado + " es: " + numeroAleatoreo);
console.log("Programa completado");
*/
/********************************************
juego de adivinar el numero alario
********************************************/

/*var numeroIngresado = parseInt(prompt("ingrese un numero: "));
var adivino=false;
var aleatorio = Math.floor(Math.random() * 5) + 1;

if (numeroIngresado === aleatorio) {//comprobando el primer intento
	adivino = true;
}else if(aleatorio > numeroIngresado){//comprobando si el numero aleatorio es mayor que el ingresado

	var nuevoIntento = parseInt(prompt("El numero a adivinar es mayor, vuelve a intentar" ));
		if(nuevoIntento == aleatorio){	// comprobando el segundo intento
			adivino=true; };	
		numeroIngresado = nuevoIntento;
	}else{// sie el primer intento es menor que el aleatorio
	var nuevoIntento = parseInt(prompt("El numero a adivinar es menor, vuelve a intentar" ));
		if(nuevoIntento == aleatorio){	// comprobando el segundo intento
			adivino=true; };	
		numeroIngresado = nuevoIntento;
	};


if(adivino){// evaluando si gano o perdió
	alert("felicidades, adivinaste, ingresaste " + numeroIngresado + ", que fue el aleatorio entre 1 y 5");
}else{
	alert("Ingresaste " + numeroIngresado + ", pero el numero a adivinar era " + aleatorio);
}
*/
