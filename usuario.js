var contador = 0;

function rotar(e, elemento, deg){
  
  this.contador += deg;
  document.querySelector("#"+elemento.id).style.transform = "rotate("+contador+"deg)";

}
