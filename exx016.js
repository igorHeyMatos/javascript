function verificar(){
    var valor_compra = document.getElementById("valor_compra").value;
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    let res = document.getElementById("res");
    
    if(valor_compra < 1){
            res.innerHTML = `Valor inválido!`;
        }else if(num1.checked){
        res.innerHTML = `Pagamento a vista: R$${valor_compra}.`;
    } else if(num2.checked){
        valor_total = valor_compra * (1.0 + (10 / 100.0));
        valor_final = valor_total / 2;
        res.innerHTML = `Parcelamento em duas vezes: R$${valor_final} , valor total: R$${valor_total}.`;
    } else if(num3.checked){
        valor_total = valor_compra * (1.0 + (20 / 100.0));
        valor_final = valor_total / 3;
        res.innerHTML = `Parcelamento em três vezes: R$${valor_final} , valor total: R$${valor_total}`;
    }
}