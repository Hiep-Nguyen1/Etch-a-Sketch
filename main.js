function createGrid (rows, columns){
    const container = document.querySelector('.container');
    container.setAttribute('style','display: flex; flex-direction: column; flex: 1 1 100%; justify-content: space-evenly;'); 

    for(let i = 0; i < rows; i++){ //creates the rows of the grid
        const row = document.createElement('div'); 
        row.classList.add('grid','row');
        row.style.cssText = 'display: flex; flex-direction: row; flex: 1 1 auto; justify-content: space-evenly;'

        for(let j=0; j<columns;j++){ //creates columns of grid
            const col = document.createElement('div');
            col.classList.add('grid','column');
            row.appendChild(col);
        }
        
        container.appendChild(row);
    }



    const grid = document.querySelectorAll('.grid');
    grid.forEach((square) => {
        square.style.cssText = 'background-color: blue; border-style: solid; border-color: red;'
    })
}


createGrid(4,4);