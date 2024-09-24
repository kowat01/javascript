//arr 함수들
//map : 바꿔줘
// filter : 걸러줘, 어떠한 조건에 부합하는 요소만 남겨줘

[10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
});

[10, 20, 30, 40, 50].filter((x) => {
  return x == 20 || x == 40;
});

//every : 어떠한 조건에 모든 요소가 부합한가?(return Boolean)
[10, 20, 30, 40, 50].every((x) => {
  return x > 5;
});

//some : 어떠한 조건에 하나 요소가 부함한가?(return Boolean)
[10, 20, 30, 40, 50].some((x) => {
  return x > 60;
});

//배열 만들기
Array(10);
//열칸 만들기[]
//[1,2,3,4,5,6,7,8,9...100]
//[1,1,1,1,1,1,1....1]
Array(100)
  .fill(1)
  .map((x, i) => {
    return x + 1;
  });

["melon", "apple", "ornage", "kiwi"].map((x, i) => {
  return i + "번째" + x;
});
