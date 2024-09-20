//버스 종류
//마을 버스, 시내 버스, 고속 버스, 심야 버스
//1500,2000,8000,10000

//경기권, 충청권, 강원권, 제주권
//+2000, +3000, +3000, +10000

//일반석, 프리미엄석, 넷플석
//+1000. +3000, +4000

//나이 13세 이하면 20%, 65세 이상 50%, 나머지 100%

const bus = {
  name: ["마을 버스", "시내 버스", "고속 버스", "심야 버스"],
  seat: [
    { name: "마을 버스", price: 1500 },
    { name: "시내 버스", price: 2000 },
    { name: "고속 버스", price: 8000 },
    { name: "심야 버스", price: 10000 },
  ],
};

const a = {
  name: ["경기권", "충청권", "강원권", "제주권"],
  seat: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
};
const b = {
  name: ["일반석", "프리미엄석", "넷플석"],
  seat: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 3000 },
    { name: "넷플석", price: 4000 },
  ],
};
const choose1 = Number(
  prompt(
    `${bus.seat[0].name} ${bus.seat[1].name} ${bus.seat[2].name} ${bus.seat[3].name}중 탈 버스를 고르세요 0~3`
  )
);
const choose2 = Number(
  prompt(
    `${a.seat[0].name} ${a.seat[1].name} ${a.seat[2].name} ${a.seat[3].name}중 버스운영 지역을 고르세요 0~3`
  )
);
const choose3 = Number(
  prompt(
    `${b.seat[0].name} ${b.seat[1].name} ${b.seat[2].name} 중 좌석 종류를 고르세요 0~2`
  )
);

const age = Number(prompt("당신의 나이는?"));
const total =
  bus.seat[choose1].price + a.seat[choose2].price + b.seat[choose3].price;
const msg = `${bus.seat[choose1].name},${a.seat[choose2].name},${b.seat[choose3].name}`;

if (age >= 65) {
  const total =
    (bus.seat[choose1].price + a.seat[choose2].price + b.seat[choose3].price) *
    0.5;
  console.log(`${msg} 총금액 : ${total}원입니다`);
} else if (age <= 13) {
  const total =
    (bus.seat[choose1].price + a.seat[choose2].price + b.seat[choose3].price) *
    0.8;
  console.log(`${msg} 총금액 : ${total}원입니다`);
} else {
  const total =
    (bus.seat[choose1].price + a.seat[choose2].price + b.seat[choose3].price) *
    1;
  console.log(`${msg} 총금액 : ${total}원입니다`);
}
