const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset-button");
const createButton = document.querySelector("#create-button");

// Initial grid size upon first load
let gridSize = 16 * 16;

// Odin Project Random Color Assignment:
function randomColor() {
    const arr = [0, 0, 0];
    const color = arr.map(() => Math.floor(Math.random() * 255));

    // Ensuring that random color !backgroundColor
    if (color[0] == 0 && color[1] == 0 && color[2] == 255) {
        randomColor();
        return;
    }

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

// Create divs for the grid with mouseover event to change color
function createDivs(gridSize, container) {
    let i = gridSize;
    for (i; i > 0; i--) {
        let div = document.createElement("div");
        div.classList.add("square")
        div.style.width = `${String(100 / Math.sqrt(gridSize))}%`;
        div.style.paddingTop = `${String(100 /Math.sqrt(gridSize))}%`;
        div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = randomColor();
        })
        container.appendChild(div);
    }
}

// Allows to reset the grid
resetButton.addEventListener("click", () => {
    const allDivs = document.querySelectorAll(".square");
    allDivs.forEach((div) => {
        div.style.backgroundColor = "blue";
    })
})

// Button: Prompt user for their disired grid size
createButton.addEventListener("click", () => {
    const desiredGrid = parseInt(prompt("Enter grid size: (max 100)")) ** 2;
    if (desiredGrid > 100 ** 2) {
        alert("Error -- maximum grid size: 100!");
        return;
    }
    const allDivs = document.querySelectorAll(".square");
    allDivs.forEach((div) => {
        div.remove();
    })
    createDivs(desiredGrid, container);
})

createDivs(gridSize, container);