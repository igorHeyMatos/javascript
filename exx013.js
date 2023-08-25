function verificar(){
    var txt = document.getElementById("txt").value;
    var res = document.getElementById("res");

    switch(txt){
        case "a":
            res.innerHTML = `${txt} é uma vogal!`;
            break;
        case "e":
            res.innerHTML = `${txt} é uma vogal!`;
            break;
        case "i":
            res.innerHTML = `${txt} é uma vogal!`;
            break;
        case "o":
            res.innerHTML = `${txt} é uma vogal!`;
            break;
        case "u":
            res.innerHTML = `${txt} é uma vogal!`;
            break;
        default:
            res.innerHTML = `${txt} é uma consoante!`
            break;
    }
}