//DOM[HTML+CSS]

// //element type
// const div = document.createElement("div");

// div.innerText = "함박스테이크";
// div.style.color = "red";
// document.body.appendChild(div);

// //버튼태그 3개 만들기

// ["아메리카노", "에이드", "라떼"].forEach((v) => {
//   const button = document.createElement("button");
//   if (v == "아메리카노") {
//     button.innerText = v;
//     button.style.backgroundColor = "yellow";
//     button.style.color = "black";
//     document.body.appendChild(button);
//   } else if (v == "에이드") {
//     button.innerText = v;
//     button.style.backgroundColor = "pink";
//     button.style.color = "white";
//     document.body.appendChild(button);
//   } else {
//     button.innerText = v;
//     button.style.backgroundColor = "skyblue";
//     button.style.color = "orange";
//     document.body.appendChild(button);
//   }
// });

// [
//   { name: "아메리카노", bg: "yellow", color: "black" },
//   { name: "에이드", bg: "pink", color: "white" },
//   { name: "라뗴", bg: "skyblue", color: "orange" },
// ].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v.name;
//   button.style.backgroundColor = v.bg;
//   button.style.color = v.color;
//   document.body.appendChild(button);
// });

const container = document.createElement("div");
//className
// container.className = "container";
//classList
container.classList.add("container"); //<div class="container"></div>

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "red";
container.appendChild(box);

const box1 = document.createElement("div");
box1.classList.add("box");
box1.style.backgroundColor = "yellow";
container.appendChild(box1);

document.body.appendChild(container);
