function comprar(){
    cod = document.getElementById("num").value;
    qnt = document.getElementById("qnt").value;
    res = document.getElementById("res");
    soma = 0;

    if(cod <= 0 || cod > 5){
        alert("Digite um valor valido!");
    }

    switch(cod){
        case "1":
            soma = 12.00 * qnt;
            res.innerHTML = `${soma}`
            break;
        case "2":
            soma = 15.50 * qnt;
            res.innerHTML = `${soma}`
            break;
        case "3":
            soma = 18.00 * qnt;
            res.innerHTML = `${soma}`
            break;
        case "4":
            soma = 8.00 * qnt;
            res.innerHTML = `${soma}`
            break;
        case "5":
            soma = 4.50 * qnt;
            res.innerHTML = `${soma}`
            break;
    }

    
}