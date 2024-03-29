const INITIAL_WIDTH = 16;
const INITIAL_MODE = "mono";

function drawTiles(gridWidth, mode) {
  const container = document.getElementById("box-container");
  container.innerHTML = "";
  container.removeEventListener("mouseover", listenerMono);
  container.removeEventListener("mouseover", listenerRainbow);
  container.removeEventListener("mouseover", listenerFading);

  // make gap size proportional to tile size
  const totalWidth = container.offsetWidth;
  const gap = Math.floor((totalWidth / gridWidth) * 0.05);

  for (i = 0; i < gridWidth; i++) {
    let row = document.createElement("div");
    row.classList.add("box-row");
    for (j = 0; j < gridWidth; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.borderRadius = `${gap}px`;
      if (mode === "fading") {
        box.style.backgroundColor =
          "color-mix(in lch, var(--mantle) 100%, var(--blue) 0%)";
      }
      row.appendChild(box);
    }

    row.style.gap = `${gap}px`;
    row.style.padding = `0 ${gap}px`;

    container.appendChild(row);
  }

  container.style.gap = `${gap}px`;
  container.style.padding = `${gap}px 0`;

  // add hover functionality, using bubbling to reduce number of checks needed
  if (mode === "mono") {
    container.addEventListener("mouseover", listenerMono);
  } else if (mode === "rainbow") {
    container.addEventListener("mouseover", listenerRainbow);
  } else if (mode === "fading") {
    container.addEventListener("mouseover", listenerFading);
  }
}

function listenerMono(e) {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "var(--blue)";
  }
}

function listenerRainbow(e) {
  if (e.target.classList.contains("box")) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

function listenerFading(e) {
  if (e.target.classList.contains("box")) {
    const rawColor = e.target.style.backgroundColor;
    let parsed = rawColor.replace(/[^0-9%]/g, "");
    [dark, light] = parsed.split("%", 2).map((x) => parseInt(x, 10));
    dark = Math.max(0, dark - 10);
    light = Math.min(100, light + 10);
    e.target.style.backgroundColor = `color-mix(in lch, var(--mantle) ${dark}%, var(--blue) ${light}%)`;
  }
}

let gridWidth = INITIAL_WIDTH;
let mode = INITIAL_MODE;
drawTiles(gridWidth, mode);

const widthButton = document.getElementById("set-width");
widthButton.addEventListener("click", (event) => {
  const rawInput = prompt("New grid width (1 - 100):", "16");
  const userInput = parseInt(rawInput);
  if (!isNaN(userInput) && userInput > 0 && userInput <= 100) {
    gridWidth = userInput;
    drawTiles(gridWidth, mode);
  } else {
    alert(`Invalid input: ${rawInput}`);
  }
});

document.getElementById("set-mono").addEventListener("click", (event) => {
  mode = "mono";
  drawTiles(gridWidth, mode);
});

document.getElementById("set-rainbow").addEventListener("click", (event) => {
  mode = "rainbow";
  drawTiles(gridWidth, mode);
});

document.getElementById("set-fading").addEventListener("click", (event) => {
  mode = "fading";
  drawTiles(gridWidth, mode);
});

for (btn of document.querySelectorAll("button")) {
  btn.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "var(--overlay1)";
  });
  btn.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "var(--overlay0)";
  });
}
