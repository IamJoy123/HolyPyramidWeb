function rotar(e, elemento, deg){

  this.contador += deg;
  document.querySelector("#"+elemento.id).style.transform = "rotate("+contador+"deg)";

}

function mostrarMenu(e, icono){

    if(document.querySelector("#navegacion").style.visibility == "hidden"){
      document.querySelector("#navegacion").style.visibility = "visible";
      document.querySelector("#navegacion").style.width = "20%";
      document.querySelector("#contenido").style.width = "80%";
    }else{
      document.querySelector("#navegacion").style.visibility = "hidden";
      document.querySelector("#navegacion").style.width = "0%";
      document.querySelector("#contenido").style.width = "100%";
    }

}

function mostrarVentana(e, elemento){

  var recuadros = ['#Puertas', '#Ventanas', '#Persianas', '#Dispositivos', '#Agregar'];

  if(elemento.innerHTML == 'Puertas'){

    alert("V");

  }else{

    alert('mentiras');

  }

}
