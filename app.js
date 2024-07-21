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
      let x = 0.05;

      divGrid.addEventListener("mouseover", () => {
        divGrid.style.background = randomColors();
        x += 0.1;
        divGrid.style.opacity = x;
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

function randomColors() {
  const color = "";
  const min = 0;
  const max = 255;

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
}
