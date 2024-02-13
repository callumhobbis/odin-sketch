function drawTiles(gridWidth) {
  const container = document.getElementById("box-container");

  // make gap size proportional to tile size
  totalWidth = container.offsetWidth;
  const gap = Math.floor((totalWidth / gridWidth) * 0.05);

  for (i = 0; i < gridWidth; i++) {
    let row = document.createElement("div");
    row.classList.add("box-row");
    for (j = 0; j < gridWidth; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.borderRadius = `${gap}px`;
      row.appendChild(box);
    }

    row.style.gap = `${gap}px`;
    row.style.padding = `0 ${gap}px`;

    container.appendChild(row);
  }

  container.style.gap = `${gap}px`;
  container.style.padding = `${gap}px 0`;

  // add hover functionality, using bubbling to reduce number of checks needed
  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box")) {
      e.target.style.backgroundColor = "var(--blue)";
    }
  });
}

let gridWidth = 16;
drawTiles(gridWidth);
