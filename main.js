const drawpad = document.querySelector('.drawPad');
let squares = '';
let color = 'white';

function createGrid (rows, columns){
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

function draw () { //Activates drawing only when mouse is held down
    drawpad.addEventListener("mousedown", hold);
    drawpad.addEventListener("mouseup", release);
    drawpad.addEventListener("mouseleave", release);
}

function hold () {
    squares.forEach((square) => square.addEventListener("mouseenter", enter)); 
}

function enter (e) {
    e.target.style.backgroundColor = color;
}

function release () {
    squares.forEach((square) => square.removeEventListener("mouseenter", enter)); 
}

function black () {
    color = 'black';
}

function clear () {
    squares.forEach((square) => square.style.backgroundColor = 'white')
}

function gridResize(){
    while (drawpad.firstChild) { //clears drawpad of all child elements
        drawpad.removeChild(drawpad.firstChild);
    }
    let size = (function () { //Will read input from number and assign that value to size
        const size = document.querySelector('.gridSize');
        if (size.value <= 0) {
            alert("Please enter a valid size for your canvas.");
        }
        else if (size.value > 100) {
            alert("Woah any size bigger than 100 is too large. Please enter a lower value.")
        }
        else {
            return size.value;
        }
    })();

    createGrid(size,size);
    updateSquare();
}

function updateSquare () { //will set squares variable to elements with current square class
    squares = document.querySelectorAll('.square');
}

createGrid(30,30);
updateSquare();
 
(function () { //IIFE to set event listeners without populating global space
    drawpad.setAttribute('style','display: flex; flex-direction: column; flex: 0 1 auto; justify-content: space-evenly; border-style: solid; border-color: gray;');
    const btns = document.querySelectorAll('.colorChange');
    btns.forEach((btn) => btn.addEventListener('click', (e) => black()));

    const btnClear = document.querySelector('.clear');
    btnClear.addEventListener('click', clear);

    const btnChangeGrid = document.querySelector('.changeGrid');
    btnChangeGrid.addEventListener('click',gridResize);
})();

draw();

