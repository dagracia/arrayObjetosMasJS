/*****************************
desafio de pregunta pregunton
******************************/
var preguntas = [];
preguntas.push(["cuantos goles metio barcelona a liga","5"]);
preguntas.push(["por que perdio ecuador en barranquilla","achilier"]);
preguntas.push(["cuantas areas protegidas tiene ecuador","50"]);
preguntas.push(["cuantos años lleva correa en el poder ejecutivo","9"]);
preguntas.push(["quien escribio la carta a jamaica","bolibar"]);


//Impime la respuesta, distinguiendo del tipo, correcta o incorrecta

function imprimirRespuesta(tipoRespuesta){
	var arregloRespuestas;
	var stringRespuestas = '';
	if(tipoRespuesta.toLowerCase() == "correctas" || tipoRespuesta.toLowerCase() == "incorrectas"){
		
		if(tipoRespuesta.toLowerCase() == 'correctas'){
			arregloRespuestas = correctas;
		}else{
			arregloRespuestas = incorrectas;
		}

		if(arregloRespuestas.length<1){
			stringRespuestas = "mo hubo respuestas "+tipoRespuesta;
		}

			for (var i=0; i<arregloRespuestas.length; i++){
				stringRespuestas += "<p><b>" +arregloRespuestas[i][0] + "</b></br>" + 
				arregloRespuestas[i][1]+"</p>";

				// si la respuesta es incorrecta se agrega la correcta
				if(tipoRespuesta.toLowerCase() == "incorrectas"){
					stringRespuestas += "<i> La respuesta correcta era: " + 
					arregloRespuestas[i][2] + "</i>";
				}
			}
		
	}else{
		alert("error, vea la consola --> "+tipoRespuesta);
		throw new Error("Tipo de respuesta no aceptado "+ tipoRespuesta);
	}
	return stringRespuestas;
}

//imprime todas las respuesta, incluyendo las correctas y las incorrectas
function imprimirCuestionario(){
	html += "<h3>Respuestas Correctas</h3>";
	html += imprimirRespuesta("correctas");
	html += '<h3 style = "color:red;">Respuesta incorrecta</h3>';
	html += imprimirRespuesta("incorrectas");
	return html;
}

function printHTML(mensaje){
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

//realizar las preguntas
var respuestas = [];
var correctas = [];
var incorrectas = [];
//presentamos y procesamos las respuestas

for (var i=0; i < preguntas.length; i++) {
	var respuestaSimple;
	do{
		respuestaSimple = prompt("Responda "+ preguntas[i][0]);
		
	}while(respuestaSimple == '');

	if (isNaN(respuestaSimple)){
		respuestas.push(respuestaSimple.toLowerCase());
	}else{
		respuestas.push(respuestaSimple);
	}

	if(respuestas[i] == preguntas[i][1]){
		correctas.push(preguntas[i]);
	
	}else{
		incorrectas.push(preguntas[i][0],respuestas[i],preguntas[i][1]);
	
	}
	
}

var html = "<h1>pregunta pregunton</h1>";
html += "<h2>qui el resltado de las preguntas</h2>";
html += imprimirCuestionario();
printHTML(html);