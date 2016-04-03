function printList(list){
	var listHTML = '<ol>';
	for(var i=0; i<list.length; i++){
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	console.log(listHTML);
	document.write(listHTML);
//	print(listHTML)

}

var abarrotes = ['arroz','azucar','aceite','harina','huevos','pollo'];
//printList(abarrotes);

while(true){
	var producto = prompt("ingrese el producto");
	if(producto =='q'){
		alert("programa terminado");
		break;
	}
	else if(producto =='l'){
		printList(abarrotes);
	}else{
		if(abarrotes.indexOf(producto)<0){
			alert("ya se acabó, al que madruga Dios le ayuda y encuentra de todo en la tienda");
		}else{
			alert("listo pana, lleve de una antes que se acabe");
		}

		}
	}


/*function printList(list){
	var listHTML = '<ol>';
	for(var i=0; i<list.length; i++){
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	console.log(listHTML);
	document.write(listHTML);
//	print(listHTML)

}
/*
var playList = [];
playList.push("Strangers in the night");
playList.push("Mi conejito era tan bandidon");
playList.push("Burro Cassette","Ginza");
playList.unshift("The girl from Ipane,a");
playList.unshift("Soneros de bailadores");

printList(playList);*/