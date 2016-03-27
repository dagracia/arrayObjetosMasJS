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
/*var nombre = prompt("ingrese un nombre:");
var verbo = prompt("ingrese un verbo:");
var adjetivo = prompt("ingrese un adjetivo:");
document.write("<h1>Mi papá tiene un " +nombre+ " muy "+adjetivo+" y a veces nos lleva a "+verbo+" a mis amigos y a mí</h1>");

document.write("<h1>Un día lunes por la mañana llego " + nombre.toUpperCase() + " a la escuela y le dice a su maestra: <br>Maestra, ¿Me va a " + verbo.toUpperCase() 
	+ " usted por algo que yo no hice? <br>No " + nombre.toUpperCase() + ", ¡Por supuesto que no!  <br>Que " + adjetivo.toUpperCase() + " porque no hice la tarea</h1>");*/

/*var segundosPorMinuto= 60;
var minutosPorHora = 60;
var horasPorDia= 24;


var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;

document.write("<h1>Calculadora del Tiempo</h1><p>hay " + segundosPorDia + " en un dia</p>");


var diasPorAño = 365;
var aniosDeVida = prompt("ingrese el numero de años que ha vivido:");
var diasVividos = aniosDeVida * diasPorAño;
document.write("<h1>Calculadora del Tiempo</h1><p>Ha vivido " + diasVividos + " días aproximadamente</p>");*/

var peliculasVistas = prompt("Cuantas peliculas has visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
alert('Wow! has visto ' + tiempoPantalla +" veces minimo la pantalla");
