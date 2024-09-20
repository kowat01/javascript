//출생년도를 물어보고 2005년 이하면 성인입니다. 아니면 미성년자 입니다.

//2. 놀이기구를 타려고 키를 물었을때 150cm이하면 탈수 없습니다. 아니면 탈수있음



//4. 양의 정수를 입력받고, 분초를 바꾸는 프로그램

const year = Number(prompt("출생년도는?"));

console.log(`${year >= 2005 ? "성인" : "미성년"}입니다`)



const height = Number(prompt("당신의 키는(cm제외)?"));

console.log(`${height > 150 ? "탑승가능" : "탑승불가"}입니다`)


const time = Number(prompt("양의 정수 입력"));
const sec = time % 60
const min = parseInt(time/60);
console.log(`${min}분${sec}초입니다`)



