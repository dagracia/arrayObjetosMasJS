var persona = {
	nombre:"Daniel",
	pais:"Ecuador",
	edad:29,
	laborando:true,
	habilidad:["java","android","analisis financiero", "riesgos financieros"]
};

function printHTML(mensaje){
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}


var saludo = "<p>Hola "+ persona.nombre +" bienvenido</p>";
saludo += "<p> como estan las cosas en " + persona.pais + "?</p>";
saludo += "<p> tu nombre de usuario es " + persona.nombre + "</p>";
saludo += "<p>tu edad pronto será " + (persona.edad + 1) +  "</p>";
//saludo += "<p>tus habilidades son " + persona.habilidades.join(", ") + "</p>";
printHTML(saludo);