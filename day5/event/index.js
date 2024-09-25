//event

const button = document.createElement("button");
button.innerText = "아메리카노";
button.addEventListener("click", () => {
  alert("매진되었습니다");
});

document.body.append(button);
