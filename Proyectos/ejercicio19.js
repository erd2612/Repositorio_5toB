var a=prompt("Inserte valor a");
var b=prompt("Inserte valor b");
var c=prompt("Inserte valor c");

for (let a=1; a<50; a++){
    for (let b=a; b<50; b++){
        for (let c=b; c<50; c++){
            if(a**2+b**2==c**2){
                console.log(a, b, c);
            }
            else{
                alert("No valid operation");
            }
        }
    } 
}