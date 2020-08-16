/*function dizerOi (nome) {
    console.log("oi "+ nome);
}

dizerOi("Natalia");
*/
//Função anonima
/*
var dizerOla = function (nome) {
    return "Olá " + nome;
}
console.log(dizerOla("natalia"));
*/
// falar sobre hoisting da função da normal
/*
function circunferencia (raio){
    function diametro (){
        return 2*raio;
    }
    return Math.PI * diametro();
}
console.log(circunferencia(2));
*/
/*
function a(callback){
    setTimeout( function()){
        console.log('a vem primeiro');
        callback();
    } 3000;
}

function b(){
    console.log('b vem depois');
}

a(b);
*/
/*
let teste =(number)=> {

    let primo = "O número " + number + " é primo";
    let noPrimo = "O número " + number + " não é primo";
    let result = noPrimo;
    
    for (i = 2; i < number; i++) {
        result = primo
    	if (number % i === 0) {
    		result = noPrimo;
    		break;		
    	}
    }
    if (number === 2) {
    	result = primo;
    }
    
    return console.log(result);
    
};

teste(3);
*/
function a(callback){
    for (var i=10;i>=0;i--){
        console.log(i);
        setTimeout( function(){
            callback();
        }, 10000 );
    }
  }
  
  function b(){
    console.log("feliz ano novo");
  }
  
  a( b );
  
  

