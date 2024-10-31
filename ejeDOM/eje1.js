var d=document;
var Enlaces=d.querySelectorAll("a");
console.log("Enlaces: ",Enlaces.length);
console.log(Enlaces[Enlaces.length-2].href);
console.log(Enlaces[Enlaces.length-2].getAttribute("href"));

var contadorMarca=0;
for(let  i=0;i<Enlaces.length;i++){
    if(Enlaces[i].href=="http://www.marca.es/")
        contadorMarca++;    
}

console.log("Nº enlaces al marca: ", contadorMarca);

//accder al tercer párrafo

var parrafos=d.querySelectorAll("p");
var tercerParrafo=parrafos[2];
console.log("Enlaces tercer parrafo",tercerParrafo.querySelectorAll("a").length);

console.log(d.querySelectorAll("p")[2],d.querySelectorAll("a").length);
