function desplegar(e, elemento, activador, mostrar){

	alert("ola");

	if(elemento.id == activador){

			document.getElementById(mostrar).style.visibility="visible";

	}

}

function ocultar(e, elemento, activador, ocultar){

	if(elemento.id == activador){

			document.getElementById(ocultar).style.visibility="hidden";

	}

}

function registro(elemento){
	alert("entra");
	document.getElementById(elemnto.id).style.backgroundColor = "#008BD6";
	document.getElementById(elemnto.id).style.color = "white";
	document.getElementById(elemnto.id).style.border = "1px solid rgb(128, 128, 128)";

}
