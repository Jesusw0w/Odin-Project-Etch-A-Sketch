// Define rows and columns divs to be added to create the grid
const container = document.getElementById('container');

function createGrid() {
    let gridSize = prompt('Enter the number of squares per side (max 100):')
    if (gridSize === null || gridSize === '' || isNaN(gridSize)) return;
    gridSize = Math.min(Math.max(parseInt(gridSize),1),100);

    container.innerHTML = ''; // Clear existing grid

    container.style.width = `${gridSize * 60}px`; // Adjust width

    for (let i = 0; i < gridSize * gridSize; i++) {
        // Create square
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);

    }
}

function changeColor(){
    e.target.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


// Initial grid creation on page load
createGrid();