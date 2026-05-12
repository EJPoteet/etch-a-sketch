const container = document.querySelector('#container');
const changeGridButton = document.querySelector('#gridSize');
let gridCount = 16;
let currentRow = 1;

function eraseRowsAndCells () {
    const rows = document.querySelectorAll('.rowDiv');
    const cells = document.querySelectorAll('.cell')

    cells.forEach(cell => {
        cell.remove();
    })

    rows.forEach(row => {
        row.remove();
    })
}

function generateRows(gridCount) {
    for (i = 1; i <= gridCount; i++) {
    const newRow = document.createElement('div');
    newRow.id = `row${i}`;
    newRow.classList.add('rowDiv')
    container.appendChild(newRow);
    }
}

function generateCells(gridCount) {
    const rows = document.querySelectorAll('.rowDiv');

    rows.forEach((row) => {
        for (i = 1; i <= gridCount; i++) {
            const newCell = document.createElement('div');
            newCell.id = `cell${currentRow}-${i}`
            newCell.classList.add('cell');
            row.appendChild(newCell);
        }

        currentRow++
    })
}

function addCellEventListener() {
    const cells = document.querySelectorAll('.cell')

    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = 'blue';
        })
    })
}

changeGridButton.addEventListener('click', () => {
    gridCount = parseInt(prompt('How many rows and columns would you like?', 16));
    
    if (gridCount !== NaN && gridCount < 100) {
        eraseRowsAndCells();
        generateRows(gridCount);
        generateCells(gridCount);
        addCellEventListener();
    } else {
        gridCount = parseInt(prompt('Please enter a valid number less than, or equal to, 100. How many rows and columns would you like?', 16));
    }
})

generateRows(gridCount);
generateCells(gridCount);
addCellEventListener();