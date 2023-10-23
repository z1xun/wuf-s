//객체 구조 분해 할당
const user1 = {
    name: "가을",
    age: 2,
};

function print({ name, age }) {
    // const { name, age } = user;
    return `${name}은 ${age}살 입니다.`;
}

console.log(print(user1));

//배열의 구조 분해 할당
const animals1 = ["개", "고양이", "참새"];

function print2([, b]) {
    // const [, b] = arr;
    return b; //고양이
}
console.log(print2(animals1));

//나머지 매개 변수
function sum9(a, b, ...rest) {
    console.log(a, b, rest);
}

console.log(sum9(1, 2));
console.log(sum9(1, 2, 3, 4, 5, 6, 7, 8));

//화살표 함수
//기본 문법
const name = () => {};
(x) => {}; //매개변수가 하나일때 소괄호 생략 가능
(x, y) => {}; //매개변수가 여러개일 때는 소괄호 생략 불가능

(x) => {
    return x + x;
};
(x) => x + x; //중괄호 생략 시 return문 생략 가능

(x) => {
    console.log(x);
    return x * x;
}; //리턴 키워드로 시작하지 않는 경우 중괄호를 생략할 수 없다

const ggg = () => {
    return { a: 1 };
};

const gggg = () => ({ a: 1 }); //소괄호로 감싸서 객채 반환할 수 있다

const hh = () => {
    return [1, 2];
};

const hhh = () => [1, 2];
