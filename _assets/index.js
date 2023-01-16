// BOARDS ///////////////////////////////////////////
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

window.onload = function() {
    id("create-game-btn").addEventListener("click", StartGame);
}

function StartGame() {
console.log("start!!!!!!!!!");

    let board;
    if (id("dif-easy").checked) board = easy[0];
    else if (id("dif-medium").checked) board = medium[0];
    else board = hard[0];

    generateBoard(board);
}

function generateBoard(board) {
    let idCount = 0;

    for (let i = 0; i < 81; i++) {
        let tile = document.createElement("p");

        if (board.charAt(i) != "-") {
            tile.textContent = board.charAt(i);
        } else {
            //tutaj dodać click event listener
        }
        tile.id = idCount;
        idCount++;

        tile.classList.add("tile");
        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54)) {
            tile.classList.add("bottomBorder");
        }
        if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6) {
            tile.classList.add("rightBorder");
        }
        id("board").appendChild(tile);
    }
}

function id(id) {
    return document.getElementById(id);
}