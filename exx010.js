function turma(){
    var idade_crianca = document.getElementById("idade_crianca").value;
    var res = document.getElementById("res");
    var turmaA = document.getElementById("turmaA");
    var turmaB = document.getElementById("turmaB");
    var turmaC = document.getElementById("turmaC");
    var semTurma = document.getElementById("semTurma");

    if(idade_crianca >= 4 && idade_crianca <= 5){
        res.innerHTML = "Turma A.";
        turmaA.style.background = "green";
    } else if(idade_crianca >= 6 && idade_crianca <= 8){
        res.innerHTML = "Turma B.";
        turmaB.style.background = "green";
    } else if(idade_crianca >= 9 && idade_crianca <= 10){
        res.innerHTML = "Turma C";
        turmaC.style.background = "green";
    } else if(idade_crianca < 4 || idade_crianca > 10){
        res.innerHTML = "Sem turma!";
        semTurma.style.background = "red";
    }
}