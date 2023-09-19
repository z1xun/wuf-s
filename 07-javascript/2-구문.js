const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c] = arr;

console.log(a, b, c);

let d = 0;
let e = 0;
let f = 0;
const avv = [1, 2, 3];
// [d, e, f] = avv;
// console.log(d, e, f);
[, e, f] = avv;

console.log(e, f);

const arr3 = [6, 7, 8];
const [g, ...rest] = arr3;
console.log(g, rest);

//객체 구조 분해 할당
const obj = {
    h: 1,
    i: 2,
    j: 3,
};

// const ee = obj.e;
// const ff = obj.f;
// const gg = obj.g;
//구조분해할당
const { h = 4, i: free, kk = 10 } = obj;

console.log(h, free, kk);

//선택적 체이닝
let user = null; //정보가 없는 사용자

// console.log(user.name); //type error 발생
console.log(user?.name); //undefind

//ex

let user2 = {
    name: "winter",
    age: 2,
    address: {
        city: "Seoul",
        zipcode: "123456",
    },
};

let user3 = {
    name: "autumm",
    age: 3,
};

function printCity(user) {
    return user.address?.city || "주소 정보가 없습니다.";
}
console.log(printCity(user2)); //seoul
console.log(printCity(user3)); //undefind!!
