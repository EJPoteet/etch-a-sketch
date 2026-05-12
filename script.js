const container = document.querySelector('#container');
let currentRow = 1;

for (i = 1; i <= 16; i++) {
    const newRow = document.createElement('div');
    newRow.id = `row${i}`;
    newRow.classList.add('rowDiv')
    container.appendChild(newRow);
}

const rows = document.querySelectorAll('.rowDiv');

rows.forEach((row) => {
    for (i = 1; i <= 16; i++) {
        const newCell = document.createElement('div');
        newCell.id = `cell${currentRow}-${i}`
        newCell.classList.add('cell');
        row.appendChild(newCell);
    }

    currentRow++
})

const cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover', (e) => {
        cell.style.backgroundColor = 'blue';
    })
})