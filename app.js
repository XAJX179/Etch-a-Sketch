const div = document.querySelector("div");

const btn = document.querySelector("button");

const divs = [];
function createDivs(line) {
  for (let i = 0; i < line; i++) {
    const divLine = document.createElement("div");
    for (let i = 0; i < line; i++) {
      const divGrid = document.createElement("div");
      divLine.appendChild(divGrid);
      div.appendChild(divLine);

      divGrid.addEventListener("mouseover", () => {
        divGrid.style.background = "black";
      });
    }
  }
}
createDivs(16);

function removeGrids() {
  while (div.firstElementChild) {
    div.removeChild(div.firstElementChild);
  }
}

function askUser() {
  let size = +prompt("Enter Size: ");
  if (size <= 100 && size > 0) {
    removeGrids();
    createDivs(size);
  } else {
    alert("Enter between 1 and 100");
  }
}
btn.addEventListener("click", askUser);
