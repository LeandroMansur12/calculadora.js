

function insert(num){
    
    let numero = document.querySelector(".resultado").innerHTML;
    document.querySelector(".resultado").innerHTML = numero + num;   
}


function reset() {
    document.querySelector(".resultado").innerHTML=" ";
    
}

function back() {
 let result = document.querySelector(".resultado").innerHTML;

 document.querySelector(".resultado").innerHTML = result.substring(0, result.length -1);
    
}

function calcular() {

var resultado = document.querySelector(".resultado").innerHTML;


if(resultado){
document.querySelector(".resultado").innerHTML = eval(resultado);
}
else{

    document.querySelector(".resultado").innerHTML = " 0 ";
}
   
}