function makeid(lenght) {
    var resultado='';
    var characters= 'CAT';
    var charactersLenght = characters.lenght;
    for (var i=0; i<lenght; i++){
        resultado += characters.charAt(Math.floor(Math.random()* charactersLenght));
    }
    return resultado;
}
document.write(makeid(5));