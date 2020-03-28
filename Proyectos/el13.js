arr=[6,5,4,3,4,1]

let print=(valor)=>{
    for (let i=0; i<valor; ++i){
document.write("*");
    }
    document.write("</br>");
}
let main=(arr)=>{ for(let element of arr){
print(element);
}
}
console.log(main(arr));


