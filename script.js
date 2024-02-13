const GRID_WIDTH = 4;
const BOX_COUNT = GRID_WIDTH ** 2; // pre-compute

function getBoxWidth(container) {
  const style = getComputedStyle(container);
  const containerWidth = container.offsetWidth;
  const containerPadding = parseInt(style.padding, 10);
  const containerGap = parseInt(style.gap, 10);
  const availableSpace =
    containerWidth - containerPadding - containerGap * (GRID_WIDTH - 1);
  return Math.floor(availableSpace / GRID_WIDTH);
}

const container = document.getElementById("box-container");
const boxWidth = getBoxWidth(container);

for (i = 0; i < BOX_COUNT; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.width = `${boxWidth - 2}px`;
  box.style.height = `${boxWidth - 2}px`;
  container.appendChild(box);
}
