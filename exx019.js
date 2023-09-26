function verificar(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    res = document.getElementById("res");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    resultado = num1 * num2;
    if(resultado < 0){
        res.innerHTML = `Número negativo! ${resultado}`;
    } else if(resultado == 0){
        res.innerHTML = `Nulo! ${resultado}`;
    } else if(resultado > 0){
        res.innerHTML = `Número positivo! ${resultado}`;
    }
}