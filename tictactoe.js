function reset(){
    document.getElementById("1").innerHTML=""
    document.getElementById("2").innerHTML=""
    document.getElementById("3").innerHTML=""
    document.getElementById("4").innerHTML=""
    document.getElementById("5").innerHTML=""
    document.getElementById("6").innerHTML=""
    document.getElementById("7").innerHTML=""
    document.getElementById("8").innerHTML=""
    document.getElementById("9").innerHTML=""
}

function box(box){
    let boxer = document.getElementById(box);
    let turn = document.getElementById("turn");
    if(boxer.innerHTML==""){
        if(turn.innerHTML == "Turn: O"){
            boxer.innerHTML = "O"
            turn.innerHTML = "Turn: X";
        }
        else{
            boxer.innerHTML = "X";
            turn.innerHTML = "Turn: O";
        }
    }
}