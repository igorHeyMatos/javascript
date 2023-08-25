function calcular(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    let res = document.getElementById("res");

    let resultado = 0;

    let calculo = document.getElementById("calculo").value;

    switch(calculo){
        case '0':
            res.innerHTML = "Selecione uma opção válida!";
            break;
        case '1':
            resultado = num1 + num2;
            res.innerHTML = `${resultado}`;
            break;
        case '2':
            resultado = num1 - num2;
            res.innerHTML = `${resultado}`;
            break;
        case '3':
            resultado = num1 * num2;
            res.innerHTML = `${resultado}`;
            break;
        case '4':
            resultado = num1 / num2;
            res.innerHTML = `${resultado}`;
            break;
    }
}