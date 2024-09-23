const a = false || true; //트루
const b = undefined || "자바스크립트"; //트루

const username = prompt("유저 이름 입력");
const name = username || "guest";
alert(`${name}님 환영합니다`);

//&&

const pw = window.prompt("비밀번호 입력") == "1234";
pw && window.alert("환영합니다");
