//cgv 프로그램

//1. 영화고르기 - ["베테랑2","에일리언", "사랑의 하츄핑"]
//2. 좌석 등급 고르기 - standard[10000], couple[20000], premium[15000], economy[8000]
//3. 팝콘 고르기 - 일반[6000], 카라멜[6500], 치즈[6500], 반반[7000]
//4. 음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
//5. 나이 입력 -13이하면 30% 할인, 60세 이상 20% 할인
//콘솔 - 영화, 좌석, 팝콘, 음료 총 금액 ~~입니다.

const movie = {
  name: ["베테랑2", "에일리언", "사랑의하츄핑"],
  seat: [
    { name: "standard", price: 10000 },
    { name: "couple", price: 20000 },
    { name: "premium", price: 15000 },
    { name: "economy", price: 8000 },
  ],
};
const shop = {
  popcorn: [
    { name: "일반팝콘", price: 6000 },
    { name: "카라멜팝콘", price: 6500 },
    { name: "치즈팝콘", price: 6500 },
    { name: "반반팝콘", price: 7000 },
  ],
  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

const choose1 = Number(prompt(`${movie.name}중 영화를 고르세요 0~2`));
const choose2 = Number(
  prompt(
    `${movie.seat[0].name} ${movie.seat[1].name} ${movie.seat[2].name} ${movie.seat[3].name}중 좌석을 고르세요 0~3`
  )
);
const choose3 = Number(
  prompt(
    `${shop.popcorn[0].name} ${shop.popcorn[1].name} ${shop.popcorn[2].name} ${shop.popcorn[3].name}중 원하는 팝콘을 고르세요 0~3`
  )
);
const choose4 = Number(
  prompt(
    `${shop.beverage[0].name} ${shop.beverage[1].name} ${shop.beverage[2].name} 중 원하는 음료를 고르세요 0~2`
  )
);
const age = Number(prompt("당신의 나이는?"));

const total =
  movie.seat[choose2].price +
  shop.popcorn[choose3].price +
  shop.beverage[choose4].price;

const msg = `${movie.name[choose1]},${movie.seat[choose2].name},${shop.popcorn[choose3].name},${shop.beverage[choose4].name}`;
if (age >= 60) {
  const total =
    movie.seat[choose2].price * 0.8 +
    shop.popcorn[choose3].price +
    shop.beverage[choose4].price;
  console.log(`${msg} 총금액 : ${total}원입니다`);
} else if (age <= 13) {
  const total =
    movie.seat[choose2].price * 0.7 +
    shop.popcorn[choose3].price +
    shop.beverage[choose4].price;
  console.log(`${msg} 총금액 : ${total}원입니다`);
} else {
  const total =
    movie.seat[choose2].price * 1 +
    shop.popcorn[choose3].price +
    shop.beverage[choose4].price;
  console.log(`${msg} 총금액 : ${total}원입니다`);
}
