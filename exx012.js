function calcular(){
    let valor_compra = document.getElementById("valor_compra").value;
    let res = document.getElementById("res");
    let valor_final = 0;

    if(valor_compra >= 500.0 ){
        valor_final = valor_compra * (1.0 - (15 / 100.0))
        res.innerHTML = `Valor final da compra com desconto de 15% = R$${valor_final}`;
    } else if(valor_compra >= 200.0 && valor_compra <= 499.9){
        valor_final = valor_compra * (1.0 - (10 / 100.0));
        res.innerHTML = `Valor final da compra com desconto de 10% = R$${valor_final}`;
    } else if(valor_compra <= 199.9 && valor_compra >= 1){
        valor_final = valor_compra * (1.0 - (5 / 100.0));
        res.innerHTML = `Valor final da compra com desconto de 5% = R$${valor_final}`;
    } else if(valor_compra <= 0){
        res.innerHTML = "Valor inválido!";
    }
}