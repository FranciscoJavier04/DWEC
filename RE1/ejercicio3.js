function mostrarTriangulo(lado1,lado2,lado3){
    //suponemos que es un triangulo si lado1+lado2>lado3//
    if(lado1+lado2<lado3){
        alert("No es un triangulo")

    }
        else{
            if(lado1 === lado2 && lado1===lado3){
                alert("triángulo equilátero");
            }
            else{
                if((lado1==lado2 || lado1==lado3 || lado2==lado3) && (lado1!=lado3||lado2!=lado3)){
                    alert("triángulo isosceles")
                }
                else
                    alert("triángulo escaleno")
            }
        }
    }
