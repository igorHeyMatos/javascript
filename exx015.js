function verificar(){
    var dia = document.getElementById("dia").value;
    var res = document.getElementById("res");

    switch(dia){
        case "1":
            res.innerHTML = `${dia} é Domingo!`;
            break;
        case "2":
            res.innerHTML = `${dia} é Segunda!`;
            break;
        case "3":
            res.innerHTML = `${dia} é Terça!`;
            break;
        case "4":
            res.innerHTML = `${dia} é Quarta!`;
            break;
        case "5":
            res.innerHTML = `${dia} é Quinta!`;
            break;
        case "6":
            res.innerHTML = `${dia} é Sexta!`;
            break;
        case "7":
            res.innerHTML = `${dia} é Sábado!`;
            break;
        default:
            res.innerHTML = `Valor inválido: ${dia}!`;
            break;
    }
}