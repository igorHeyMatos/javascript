function analisar(){
    num = document.getElementById("num").value;
    res = document.getElementById("res");

    if(num < 0 || num > 100){
        res.innerHTML = `Número fora do intervalo! ${num}.`;
    } else if (num >= 0 && num <= 25){
        res.innerHTML = `Número entre [0 e 25]! ${num}.`;
    } else if (num > 25 && num <= 50){
        res.innerHTML = `Número entre [25 e 50]! ${num}.`;
    } else if (num > 50 && num <= 75){
        res.innerHTML = `Número entre [50 e 75]! ${num}.`;
    } else if (num > 75 && num <= 100){
        res.innerHTML = `Número entre [75 e 100]! ${num}.`;
    }
}