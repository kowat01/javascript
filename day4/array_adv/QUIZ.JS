//1. [1,2,3,4,5,6,7,,8,9,10] 중에 3의 배수만 살려줘
//2. [1,2,3,4,5,6,7,,8,9,10] 중에 4이상 8 이하만 살려줘
// const fruitarray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "abocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];
//3. 알파벳 O가 들어가있는 애들만 살려줘
//4. 문자길이가 6글자 이상만 살려줘
//5. 문자 길이가 짝수인 애들만 살리고, 대문자화 시켜줘

// [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10].filter((x) => {
//   return x % 3 == 0;
// });
// [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10].filter((x) => {
//   return 4 <= x && x <= 8;
// });

// const fruitarray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "abocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];

// fruitarray.filter((x) => {
//   return x.includes("o");
// });

// fruitarray.filter((x) => {
//   return x.length >= 6;
// });
// //메소드 체이닝
// fruitarray
//   .filter((x) => {
//     return x.length % 2 == 0;
//   })
//   .map((x) => {
//     return x.toUpperCase();
//   });

//유저에게 정수 n, k를 입력 받으면
// n = 10, k=3 -> [3,6,9]
// n = 15, k = 5 -> [5,10,15]
//를 도출하는 함수

// const num1 = prompt("정수를 입력해 주세요");
// const num2 = prompt("정수를 입력해 주세요");

// const test = (n, k) => {
//   return Array(n)
//     .fill(0)
//     .map((x, i) => {
//       return i + 1;
//     })
//     .filter((x) => {
//       return x % k == 0;
//     });
// };

// const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// const finished = [false, false, true, true];

// const newToDoList = (todolist, finished) => {
//   return filter((x, i) => {
//     return !finished[i];
//   });
// };

// //x를 기준으로 나눴을때 나눠진 문자열의 각각 길이를 배열화 시킨거
// // "xabcxdefxghi"[0,3,3,3]

// const test2 = (word) => word.split("x").map((x) => x.length);

// const fruits = ["melon", "kiwi", "apple", "banana", "orange"];
// const mo = ["a", "e", "i", "o", "u"];
// //모음 : a, e, i ,o ,u는 대문자로 바꾸기

// fruits.map((x) =>
//   x.split("").map((y) => (mo.some((v = v == y)) ? y.toUpperCase() : y))
// );

//1-100까지 만들고, 369 만들기
//[1,2,"👏",..."👏",100]

//알고리즘 문제 풀때 [string,array,number]해당 타입에 방법이 없으면 다른 차입으로 바꿔서 해결
Array(100)
  .fill(1)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
  );
