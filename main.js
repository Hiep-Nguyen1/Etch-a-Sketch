const drawpad = document.querySelector('.container');

function createGrid (rows, columns){
    drawpad.setAttribute('style','display: flex; flex-direction: column; flex: 1 1 auto; justify-content: space-evenly; border-style: solid; border-color: gray;'); 

    for(let i = 0; i < rows; i++){ //creates the rows of the grid
        const row = document.createElement('div'); 
        row.classList.add('grid','row');
        
        for(let j=0; j<columns;j++){ //creates columns of grid
            const col = document.createElement('div');
            col.classList.add('grid','column','square');
            row.appendChild(col);
        }
        
        drawpad.appendChild(row);        
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.style.cssText = 'border: none; height: 100%; width: 100%')

    const row = document.querySelectorAll('.row');
    row.forEach((r) => r.style.cssText = 'display: flex; flex: 1 1 auto; justify-content: space-evenly; height: 100%;')
}



function draw () {                                          //Activates drawing only when mouse is held down
    drawpad.addEventListener("mousedown", (e) => hold());
    drawpad.addEventListener("mouseup", (e) => release());
    drawpad.addEventListener("mouseleave", (e) => release());
}

function hold () {
    squares.forEach((square) => square.addEventListener("mouseenter", enter)); 
}

function enter () {
    this.style.backgroundColor = 'black';
}

function release () {
    squares.forEach((square) => square.removeEventListener("mouseenter", enter)); 
}



createGrid(10,10);
const squares = document.querySelectorAll('.square');
draw();
