//좋아하는 색깔 5개 배열로 넣은 뒤에 grid로 3열로 박스(100개) 형태 넣기
const main = document.createElement("main");
const container = document.createElement("section");

container.classList.add("container");

const colors = ["red", "orange", "yellow", "green", "blue"];

Array(100)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % 5];
    container.appendChild(box);
  });

main.appendChild(container);
document.body.appendChild(main);
