function createSquare(height, width) {
    let box = document.createElement("div");
    box.width = width;
    box.height = height;
    return box;
}

let squareGrid = document.querySelector("#squareGrid")
squareGrid.appendChild(createSquare(16, 16))