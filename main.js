const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset-button");
const createButton = document.querySelector("#create-button");

let gridSize = 16 * 16;

// TODO tomorrow: Create algorithm that generates random color for mouseover

function createDivs(gridSize, container) {
    let i = gridSize;
    for (i; i > 0; i--) {
        let div = document.createElement("div");
        div.classList.add("square")
        div.style.width = `${String(100 / Math.sqrt(gridSize))}%`;
        div.style.paddingTop = `${String(100 /Math.sqrt(gridSize))}%`;
        div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
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

// Button: Prompt user for their disired div
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