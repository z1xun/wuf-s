//Math 객체
//Math.random()
//0이상 1 미만의 랜덤한 숫자를 반환

console.log(Math.random());

function getRandom() {
    return Math.floor(Math.random() * 20);
}
console.log(getRandom());

//7세이하 어린이 찾기
const users = [
    { name: "홍길동", age: 44 },
    { name: "이정민", age: 26 },
    { name: "둘리", age: 6 },
    { name: "마이콜", age: 50 },
];
const children = users.filter((user) => user.age <= 7);
console.log(children);

//마이콜 찾기
const m = users.find((user) => user.name === "마이콜");
console.log(m);
