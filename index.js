// Reset function emptys all cells with empty quotes
let xWins = document.getElementById("xWins"), oWins = document.getElementById("oWins")
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
// function called onclick
function box(box){
    let boxer = document.getElementById(box); // set boxer as the cell that is clicked.
    let turn = document.getElementById("turn"); // set turn as whose turn it is.
    if(boxer.innerHTML==""){ // if the clicked cell is empty
        if(turn.innerHTML == "Turn: O"){ // determine whether to place x or o based on turn
            boxer.innerHTML = "O" // set the value of the button 
            turn.innerHTML = "Turn: X"; // change whos turn it is so the next placed is correct
            checkwinner() // check if their is a winner 
        }
        else{
            boxer.innerHTML = "X";
            turn.innerHTML = "Turn: O";
            checkwinner()
        }
    }
}
// determine all indexes that are possible win conditions.
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
function checkwinner(){
    for(let i = 0; i < wins.length; i++){
        const condition = wins[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){ //if empty space skip
            continue;
        }
        if(cellA == cellB && cellB == cellC){ // if not empty, must be full, if all equal, there is winner.
            var winner = true;
            break;
        }
    }
    if(winner == true){
        alert(`${turn} has won`); xWins = eval(xWins++)
    }else if(!options.include("")){
        alert("Draw!"); oWins = eval(oWins++)
    }
}
