const div = document.querySelector("div");

const divs = [];
function createDivs(line) {
  for (let i = 0; i < line; i++) {
    const divLine = document.createElement("div");
    for (let i = 0; i < line; i++) {
      const divGrid = document.createElement("div");
      divLine.appendChild(divGrid);
      div.appendChild(divLine);
    }
  }
}
createDivs(16);
