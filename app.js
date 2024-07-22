const div = document.querySelector("div");

const btn = Array.from(document.querySelectorAll("button"));

let divGridColor = "";
let divGridOpacity = "";
let divGridRandomColor = false;

const change = btn[0];
const clear = btn[1];
const choose = btn[2];
const opacity = btn[3];
const random = btn[4];

const divs = [];
function createDivs(line) {
  for (let i = 0; i < line; i++) {
    const divLine = document.createElement("div");

    for (let j = 0; j < line; j++) {
      const divGrid = document.createElement("div");
      divLine.appendChild(divGrid);
      const x = 700 / line - 2; //-2 -> removing border 2px
      divGrid.style.width = `` + x + "px";
      divGrid.style.height = `` + x + "px";
      divGrid.addEventListener("mouseover", function onMouse() {
        divGrid.style.background = "black";
        if (divGridColor != "") {
          divGrid.style.background = divGridColor;
        }
        if (divGridOpacity != "") {
          divGrid.style.opacity = divGridOpacity;
        }
        if (divGridRandomColor) {
          divGrid.style.background = randomColors();
          divGrid.style.opacity = divGridOpacity;
        }
      });
    }
    div.appendChild(divLine);
  }
}
createDivs(16);

function removeGrids() {
  while (div.firstElementChild) {
    div.removeChild(div.firstElementChild);
  }
}

function askSize() {
  let size = +prompt("Enter Size: ");
  if (size <= 100 && size > 0) {
    removeGrids();
    createDivs(size);
  } else {
    alert("Enter between 1 and 100");
  }
}
change.addEventListener("click", askSize);

function randomColors() {
  const color = "";
  const min = 0;
  const max = 255;

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
}

clear.addEventListener("click", clearFunc);

choose.addEventListener("click", chooseFunc);

opacity.addEventListener("click", opacityFunc);

random.addEventListener("click", randomFunc);

function clearFunc() {
  const divGridArray = Array.from(document.querySelectorAll("div div div"));
  let i = 0;
  while (divGridArray[i]) {
    divGridArray[i].style.background = " rgb(221, 221, 221)";
    divGridArray[i].style.opacity = "1";
    i++;
  }
}

function randomFunc() {
  divGridRandomColor = true;
}
function chooseFunc() {
  let val = prompt(
    "Enter a Color : name or #hex (#included) . eg- red or #ff0000"
  );
  divGridColor = val;
  divGridRandomColor = false;
}
function opacityFunc() {
  let val = +prompt("Enter a Opacity : 1 to 100");
  if (val > 0 && val < 101) {
    divGridOpacity = "" + val / 100;
  } else {
    alert("Only between 1 to 100.");
  }
}
