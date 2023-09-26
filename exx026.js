function calcular(){
    N = document.getElementById("N").value;
    A = document.getElementById("A").value;
    B = document.getElementById("B").value;
    res = document.getElementById("res");

    N = parseFloat(N);
    A = parseFloat(A);
    B = parseFloat(B);

    resultado = A + B;

    if(resultado > N){
        res.innerHTML = "Deixa para amanhã...";
    } else {
        res.innerHTML = "Farei hoje!";
    }
}