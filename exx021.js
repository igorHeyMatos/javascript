function calcular(){
    folhas = document.getElementById("folhas").value;
    res = document.getElementById("res");
    resultado = 0;
    if(folhas <= 0){
        alert("Digite um valor válido!");
    } else if(folhas <= 100){
        resultado = 0.25 * folhas;
        res.innerHTML = `Total a pagar: R$${resultado}`;
    } else if (folhas > 100){
        resultado = (folhas - 100) * 0.20 + (100 * 0.25);
        res.innerHTML = `Total a pagar: R$${resultado}`;
    }
}