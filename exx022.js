function pontos(){
    D = document.getElementById("D").value;
    res = document.getElementById("res");
    if(D < 0 || D > 2000){
        res.innerHTML = `Sem pontuação!`;
    } else if(D >= 0 && D <= 800){
        res.innerHTML = `Cesta de 1 Ponto!`;
    } else if(D > 800 && D <= 1400){
        res.innerHTML = `Cesta de 2 pontos!`;
    } else if(D > 1400 && D <= 2000){
        res.innerHTML = `Cesta de 3 pontos!`;
    }
}