let dimensity;
let firstColumn = [];
let secondColumn = [];
let thirdColumn = [];
let hanoi_tower = [firstColumn, secondColumn, thirdColumn];
function start(){
    dimensity = document.getElementById("dimensity").value;
    document.getElementById("home").style.display = "grid";
    document.getElementById("start").style.display = "none";
    for(let i = 0; i < dimensity; i++){
        firstColumn.push(i + 1);
    }
    toDisplay();
}

function toDisplay(){
    const torre = document.getElementById("torre");
    const TBody = document.createElement("tbody");
    for(let i = 0; i < dimensity; i++){
        const row = document.createElement("tr")
        for(let j = 0; j < 3; j++){
            const cell = document.createElement("td");
            cell.innerHTML = (hanoi_tower[j][i] != undefined)? hanoi_tower[j][i] : " ";
            row.appendChild(cell);
        }
        TBody.appendChild(row);
    }
    if(!torre.hasChildNodes()){
        torre.appendChild(TBody);
    }else{
        torre.removeChild(torre.lastChild);
        torre.appendChild(TBody);
    }
        
}

function play(){
    document.getElementById("play").style.display = "none";
    let start = Date.now();
    hanoi(dimensity, firstColumn, thirdColumn, secondColumn);
    let end = Date.now();
    console.log(`${end - start} ms`);
}

function hanoi(n, p, t, s){
    if(n == 1){
        move(p, t)
        toDisplay();
    }else{
        hanoi(n - 1, p, s, t);
        move(p, t)
        toDisplay();
        hanoi(n - 1, s, t, p);
    }
}

function move(from, to){
    let e = from.pop();
    to.push(e);
}