// Reset function emptys all cells with empty quotes
var x = 0; // score
var o = 0;
var winner;
let xWins = document.getElementById("xWins"), oWins = document.getElementById("oWins") // set score to variables
function reset(){ // reset all cells with empty quotes
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
    if(!winner){ //if their is a winner, dont run code
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
// var wins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
//  put indexes into the temporary list options
function checkwinner(){
    var options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let item of wins){
        let [a,b,c] = item;
        const cellA = document.getElementById(options[a]).innerHTML; // set a variable to the first, second, and third of each win condition
        const cellB = document.getElementById(options[b]).innerHTML; // set a variable to the
        const cellC = document.getElementById(options[c]).innerHTML;
        // alert(cellA + " " + cellB + " " + cellC)
        if (cellA || cellB || cellC){
            if(cellA == cellB && cellB == cellC){ // if not empty, must be full, if all equal, there is winner.
                winner = true; // set a winner
                // alert("Winner: " + cellA)
                break;
            }
        }
    }
    if(winner){ // if there is a winner
        if(turn.innerHTML == "Turn: O"){ // if the turn is O, give x a point because the turn switches.
            xWins.innerHTML = "&#x2715; | Wins : " + x++ ; // alert who won and add one point
            winner = false;
            alert(`X has won!`);
        }else{
            oWins.innerHTML = "&#9711; | Wins : " + o++ ;
            winner = false;
            alert(`O has won!`);
        }
    }else(!options.includes("")); {alert("Draw!")} // if all cells are full but no 3 in a row, alert a draw
    }
}
