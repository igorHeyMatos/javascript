function verificar(){
    let num = document.getElementById("num").value;
    let res = document.getElementById("res");
    let conta = num % 2;

    switch(conta){
        case 0:
            res.innerHTML = `${num} é par!`;
            break;
        case 1:
            res.innerHTML = `${num} é impar!`;
            break;
    }
}