function testar(){
    var num = document.getElementById("num").value;
    var res = document.getElementById("res");

    if(num < 0){
        num = num * -1;
        res.innerHTML = `${num}`;
    } else {
        res.innerHTML = `${num}`;
    }
}