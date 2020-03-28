var arr=[3,6,7,2,0,15,3];

var num =arr.map((arr)=> Math.trunc(arr*10/15));
alert(num)

let print=(valor)=>{
    
for(let i=0; i<valor; ++i){
    document.write("+")

}
document.write("<br>");

}


let main=(num)=> {

    for(let element of num){
        print(element)
    }
}
console.log(main(num))