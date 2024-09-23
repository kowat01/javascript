//String ,Number, Boolean, Array
const arr = [5, 4, 3, 2, 1];
const arr1 = Array(5);

arr.push("Hyundai"); //뒤에 추가
arr.unshift("hybe"); //hybe 앞에 추가
arr.pop(); // 맨뒤에 요소 빼기
arr.shift(); //맨앞에 요소 빼기
arr.reverse(); //배열을 거꾸로
arr.indexOf("4"); // 1
arr.indexOf("6"); // -1
arr.includes("1"); //true false

const news = prompt("뉴스 기사를 입력해주세요");

const word = prompt("찾고 싶은 단어를 입력해주세요");

if (news.includes(word)) {
  alert("찾으시는 단어가 있습니다!");
} else {
  alert("찾으시는 단어가 없습니다!");
}
