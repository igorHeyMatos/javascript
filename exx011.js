function aumento(){
    var salario_atual = document.getElementById("salario_atual").value;
    var perc_aumento = document.getElementById("perc_aumento");
    var salario = document.getElementById("salario");
    var total = document.getElementById("total");

    if(salario_atual >=1 && salario_atual <= 1400.0){
        salario = salario_atual * (1.0 + (15 / 100.0));
        perc_aumento.innerHTML = "15%";
        total.innerHTML = `Salário corrigido: R$${salario}`;
    } else if(salario_atual >= 1401.0 && salario_atual <= 2000.0){
        salario = salario_atual * (1.0 + (12 / 100.0));
        perc_aumento.innerHTML = "12%";
        total.innerHTML = `Salário corrigido: R$${salario}`;
    } else if(salario_atual >= 2001.0 && salario_atual <= 3000.0){
        salario = salario_atual * (1.0 + (12 / 100.0));
        perc_aumento.innerHTML = "10%";
        total.innerHTML = `Salário corrigido: R$${salario}`;
    } else if(salario_atual >= 3001.0 && salario_atual < 3800.0){
        salario = salario_atual * (1.0 + (7 / 100.0));
        perc_aumento.innerHTML = "7%";
        total.innerHTML = `Salário corrigido: R$${salario}`;
    } else if(salario_atual >= 3801.0 && salario_atual <= 5000.0){
        salario = salario_atual * (1.0 + (4 / 100.0));
        perc_aumento.innerHTML = "4%";
        total.innerHTML = `Salário corrigido: R$${salario}`;
    } else if(salario_atual >= 5001.0){
        total.innerHTML = "Sem aumento!";
    } else if(salario_atual < 0){
        total.innerHTML = "Valor inválido!"
    }
}