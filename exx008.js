function testar(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var res = document.getElementById("res");

    if(num1 > num2){
        res.innerHTML = `${num1} é maior que ${num2}.`;
    } else if(num1 < num2){
        res.innerHTML = `${num2} é maior que ${num1}.`;
    } else if(num1 == num2){
        res.innerHTML = `${num1} é igual a ${num2}.`;
    }
}
