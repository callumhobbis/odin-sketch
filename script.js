const GRID_WIDTH = 4;
const BOX_COUNT = GRID_WIDTH ** 2; // pre-compute

const container = document.getElementById("box-container");
const gap = 8;

for (i = 0; i < GRID_WIDTH; i++) {
  let row = document.createElement("div");
  row.classList.add("box-row");
  for (j = 0; j < GRID_WIDTH; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
  }

  row.style.gap = `${gap}px`;
  row.style.padding = `0 ${gap}px`;

  container.appendChild(row);
}

container.style.gap = `${gap}px`;
container.style.padding = `${gap}px 0`;
