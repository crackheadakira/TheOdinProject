const grid = document.querySelector('.grid');
let currentColor = "black";
let currentSize = 16

function createGrid(size = 16) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList = "gridElement"
        gridElement.addEventListener('mousedown', () => {
            gridElement.style.backgroundColor = currentColor
        })
        grid.appendChild(gridElement)
    }
}

function resetGrid() {
    currentSize = prompt("What should the new pixel grid size be? Answer in pixels, maximum of 100.")
    if (currentSize > 100) {
        currentSize = 100;
    } else if (currentSize < 1) {
        currentSize = 16
    }
    grid.innerHTML = '';
    createGrid(currentSize)
}

let button = document.querySelector('.resetButton')
button.addEventListener('click', resetGrid)

createGrid(currentSize)