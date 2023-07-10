function createGrid (rows, columns){
    const container = document.querySelector('.container');
    container.setAttribute('style','display: flex; flex-direction: column; flex: 1 1 auto; justify-content: space-evenly; height: 100%;'); 

    for(let i = 0; i < rows; i++){ //creates the rows of the grid
        const row = document.createElement('div'); 
        row.classList.add('grid','row');
        
        for(let j=0; j<columns;j++){ //creates columns of grid
            const col = document.createElement('div');
            col.classList.add('grid','column','square');
            row.appendChild(col);
        }
        
        container.appendChild(row);        
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.style.cssText = 'background-color: blue; border-style: solid; border-color: red; height: 100%; width: 100%')

    const row = document.querySelectorAll('.row');
    row.forEach((r) => r.style.cssText = 'display: flex; flex: 1 1 auto; justify-content: space-evenly; height: 100%;')
}


createGrid(4,4);