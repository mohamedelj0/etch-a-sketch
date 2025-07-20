const gridDiv = document.getElementById("grid-container");

function numberGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const squareSize = 960 / size;
        const square = document.createElement("div");
        square.classList.add("grid-square");
        gridDiv.appendChild(square);
    }
    
    const hoverSquares = document.querySelectorAll(".grid-square");
    
    hoverSquares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

    
        
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "green";
        });
    });
}

const buttonPopup = document.querySelector("#popup");

buttonPopup.addEventListener("click", () => {
    const size = prompt("Enter Grid Size (max 100): ");
    gridDiv.innerHTML = "";
    if (size > 100) {
        gridDiv.textContent = "Error";
        return;
    }
    numberGrid(size);
})