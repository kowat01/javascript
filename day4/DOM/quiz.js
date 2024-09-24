const container = document.createElement("div");
//className
// container.className = "container";
//classList
container.classList.add("container"); //<div class="container"></div>

document.body.appendChild(container);

[
  { bg: "red" },
  { bg: "orange" },
  { bg: "yellow" },
  { bg: "green" },
  { bg: "blue" },
  { bg: "indigo" },
  { bg: "purple" },
].forEach((v) => {
  const box = document.createElement("box");
  box.classList.add("box");
  box.style.backgroundColor = v.bg;
  container.appendChild(box);
});
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

Array(2000)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % 7];
    container.appendChild(box);
  });

document.body.appendChild(container);
