const GRID_WIDTH = 4;
const BOX_COUNT = GRID_WIDTH ** 2; // pre-compute

const container = document.getElementById("box-container");

for (i = 0; i < GRID_WIDTH; i++) {
  let row = document.createElement("div");
  row.classList.add("box-row");
  for (j = 0; j < GRID_WIDTH; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
  }
  container.appendChild(row);
}
