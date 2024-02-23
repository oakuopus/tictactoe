// Reset function emptys all cells with empty quotes
var x = 1; // score
var o = 1;
num = 0
var winner; //set winner as false
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
    num = 0 // reset num back to 0
    winner = false //when reset, make winner false.
}
// function called onclick
function box(box){
    num++
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
}
function checkwinner(){ //func to check winner
    var options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; //calls index of every cell
    var wins = [ //the cells that have to be the same for a win
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(var item of wins){ //loop through all possible win cons
        let [a,b,c] = item; //make a var to equal the 3 cells in current index of wins
        const cellA = document.getElementById(options[a]).innerHTML; // set a variable to the first, second, and third of each win condition
        const cellB = document.getElementById(options[b]).innerHTML;
        const cellC = document.getElementById(options[c]).innerHTML;
        if(cellA || cellB || cellC){ // if their are no empty cells.
            if(cellA == cellB && cellB == cellC){ //if all cells in winning order are the same
                winner = true; // set a winner
                // alert("Winner: " + cellA)
                break;
            }
        }
    }
    if(winner){ // if there is a winner
        if(turn.innerHTML == "Turn: O"){ // if the turn is O, give x a point because the turn has switched.
            xWins.innerHTML = "&#x2715; | Wins : " + x++ ; // alert who won and add one point
            winner = true;
            alert(`X has won!`);
        }else{
            oWins.innerHTML = "&#9711; | Wins : " + o++ ; // same process for o
            winner = true;
            alert(`O has won!`);
        }
    }else if(num == 9){ // if num == 9, all cells must have been used up with no winner.
        alert("Draw!") // if all cells are full but no 3 in a row, alert a draw
    }
}
if(winner){
    const cellAC = cellA.innerHTML, cellBC = cellB.innerHTML, cellCC = cellC.innerHTML; // get content of every cell
    cellAC.style.backgroundColor = 'red'; // Highlight the cells by changing their background color
    cellBC.style.backgroundColor = 'red';
    cellCC.style.backgroundColor = 'red';
}
