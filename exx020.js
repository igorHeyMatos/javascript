function verificar(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    res = document.getElementById("res");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(num1 % num2 == 0){
        res.innerHTML = `São número múltiplos! ${num1} e ${num2}.`;
    } else {
        res.innerHTML = `Não são múltiplos! ${num1} e ${num2}.`;
    }
}