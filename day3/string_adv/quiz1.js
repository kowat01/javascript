// const food = prompt("좋아하는 음식을 입력해주세요");

// food.repeat(5);
// console.log(food.repeat(5));

// const food1 = prompt("좋아하는 음식과 횟수를 입력해주세요");

// const arr = foodCount.split(" ");
// const myfood = arr[0];
// const count = Number(arr[1]);
// alert(myFood.repeat(count));

// const abc = prompt("영어 단어를 입력해주세요");

// abc.toUpperCase(abc.length >= 6);

// console.log(abc);

// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.
// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

// alert(news.split(" "));

//유저에게 단어를 입력받고, 소문자이면 대문자로, 대문자이면 소문자로
const apa = prompt("영어단어를 입력");
const result = apa == apa.toUpperCase ? apa.toLowerCase() : apa.toUpperCase();
//유저에게 비밀번호 설정을 물어보고 길이가 8~20가 아니면 비밀번호 길이오류/
//시작이 it,IT로 시작 안하면 비밀번호 시작은 it,IT로 시작해야함/
//특수문자 &#@!중 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
const pw = prompt(
  "비밀번호를 설정해주세요(길이 8~20/it(IT)로 시작/특수문자포함"
);

const pwd = 20 >= pw.length && 8 <= pw.length;
const PWD = pw.startsWith("it") || pw.startsWith("IT");
const PWD2 =
  pw.includes("@") || pw.includes("!") || pw.includes("#") || pw.includes("&");

if (!pwd) {
  alert("비밀번호 설정오류");
} else if (!PWD) {
  alert("IT나 it으로 시작해야함");
} else if (!PWD2) {
  alert("반드시 특수문자를 포함해야함");
} else {
  alert("비밀번호 설정완료");
}
