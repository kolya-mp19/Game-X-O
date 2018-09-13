//После полной зугрузки объекта window 

window.onload = function () {
    
//    рисуем сетку
    
    for (var i=0; i<9; i++) {
        document.getElementById ("game").innerHTML +="<div class='cell'></div>"
    }
    

    
//Считаем ходы и если ход четный - Х, если нечетный - О    
    
var hod = 0;
    
    
document.getElementById("game").onclick = function(event) {
    
//    console.log(event);
    
        if (event.target.className == "cell") {
            if (hod < 9) {
                if (hod % 2 == 0) {
                event.target.innerHTML = "X";
                    
            }
            else {
                event.target.innerHTML = "O";
            }
            }
            
            hod++;
            checkWiner();
        }
    }
    
function checkWiner() {
    var allcell = document.getElementsByClassName("cell");
//    console.log(allcell);
    if (allcell[0].innerHTML == "X" && allcell[1].innerHTML == "X" && allcell[2].innerHTML == "X") {alert ("Win - X");}
    if (allcell[3].innerHTML == "X" && allcell[4].innerHTML == "X" && allcell[5].innerHTML == "X") {alert ("Win - X");}
    if (allcell[6].innerHTML == "X" && allcell[7].innerHTML == "X" && allcell[8].innerHTML == "X") {alert ("Win - X");}
    if (allcell[0].innerHTML == "X" && allcell[3].innerHTML == "X" && allcell[6].innerHTML == "X") {alert ("Win - X");}
    if (allcell[1].innerHTML == "X" && allcell[4].innerHTML == "X" && allcell[7].innerHTML == "X") {alert ("Win - X");}
    if (allcell[2].innerHTML == "X" && allcell[5].innerHTML == "X" && allcell[8].innerHTML == "X") {alert ("Win - X");}
    if (allcell[0].innerHTML == "X" && allcell[4].innerHTML == "X" && allcell[8].innerHTML == "X") {alert ("Win - X");}
    if (allcell[2].innerHTML == "X" && allcell[4].innerHTML == "X" && allcell[6].innerHTML == "X") {alert ("Win - X");}
    
    if (allcell[0].innerHTML == "O" && allcell[1].innerHTML == "O" && allcell[2].innerHTML == "O") {alert ("Win - O");}
    if (allcell[3].innerHTML == "O" && allcell[4].innerHTML == "O" && allcell[5].innerHTML == "O") {alert ("Win - O");}
    if (allcell[6].innerHTML == "O" && allcell[7].innerHTML == "O" && allcell[8].innerHTML == "O") {alert ("Win - O");}
    if (allcell[0].innerHTML == "O" && allcell[3].innerHTML == "O" && allcell[6].innerHTML == "O") {alert ("Win - O");}
    if (allcell[1].innerHTML == "O" && allcell[4].innerHTML == "O" && allcell[7].innerHTML == "O") {alert ("Win - O");}
    if (allcell[2].innerHTML == "O" && allcell[5].innerHTML == "O" && allcell[8].innerHTML == "O") {alert ("Win - O");}
    if (allcell[0].innerHTML == "O" && allcell[4].innerHTML == "O" && allcell[8].innerHTML == "O") {alert ("Win - O");}
    if (allcell[2].innerHTML == "O" && allcell[4].innerHTML == "O" && allcell[6].innerHTML == "O") {alert ("Win - O");}
}


};

