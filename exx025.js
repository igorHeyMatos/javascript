function avaliar(){
    nota = document.getElementById("nota").value;
    res = document.getElementById("res");

    if(nota == 0){
        res.innerHTML = `Conceito E`;
        res.style.background = 'red';
        res.style.color = '#fff';
    } else if (nota >= 1 && nota <= 35){
        res.innerHTML = `Conceito D`;
        res.style.background = 'purple';
        res.style.color = '#fff';
    } else if (nota >= 36 && nota <= 60){
        res.innerHTML = `Conceito C`;
        res.style.background = 'orange';
        res.style.color = '#fff';
    } else if (nota >= 61 && nota <= 85){
        res.innerHTML = `Conceito B`;
        res.style.background = 'blue';
        res.style.color = '#fff;'
    } else if (nota >= 86 && nota <= 100){
        res.innerHTML = `Conceito A`;
        res.style.background = 'green';
        res.style.color = '#fff';
    }
}