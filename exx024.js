function verificar(){
    ddd = document.getElementById("ddd").value;
    res = document.getElementById("res");

    switch(ddd){
        case '61':
            res.innerHTML = `DDD : ${ddd} Brasilia!`;
            break;
        case '71':
            res.innerHTML = `DDD : ${ddd} Salvador!`;
            break;
        case '11':
            res.innerHTML = `DDD : ${ddd} São Paulo!`;
            break;
        case '21':
            res.innerHTML = `DDD : ${ddd} Rio de Janeiro!`;
            break;
        case '32':
            res.innerHTML = `DDD : ${ddd} Juiz de Fora!`;
            break;
        case '19':
            res.innerHTML = `DDD : ${ddd} Campinas!`;
            break;
        case '27':
            res.innerHTML = `DDD : ${ddd} Vitória!`;
            break;
        case '31':
            res.innerHTML = `DDD : ${ddd} Belo Horizonte!`;
            break;
        default:
            alert("DDD não cadastrado tente novamente!");
            break;
    }
}