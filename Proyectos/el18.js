
alert("Determina el tipo de triangulo introduciendo valores segun las longitudes de sus lados");

let a=prompt("Insertar valor 1");
let b=prompt("Introduzca valor 2");
let c=prompt("Introduzca valor 3");

if(a==b || a==c || b==c){
    alert("Es un isosceles");
}

else if(a==b && a==c){
    alert("Es un equilatero");
}

else if(a!=b && a!=c && b!=c){
    alert("Es un escaleno");
}