//조건문

//if문

// if (조건) {
//     실행문;
// } else {
//     실행문;
// }

//ex
function isPositive(num) {
    if (num > 0) {
        return "양수입니다.";
    } else if (num < 0) {
        return "음수입니다.";
    } else {
        return "0입니다.";
    }
}

console.log(isPositive(1));
console.log(isPositive(-1));
console.log(isPositive(0));

//switch 조건문
//ex
// function getSound(animal) {
//     let sound;
//     switch (animal) {
//         case "개":
//             sound = "멍멍";
//             break;
//         case "고양이":
//             sound = "야옹오오오오옹";
//             break;
//         default:
//             sound = "..?";
//     }
//     return sound;
// }

function getSound(animal) {
    switch (animal) {
        case "개":
            return "멍멍";

        case "고양이":
            return "야옹오오오오옹";

        default:
            return "..?";
    }
}

console.log(getSound("개"));
console.log(getSound("지선"));

//if문으로 변환
function getSound2(animal) {
    if (animal === "개") return "멍멍";
    if (animal === "고양이") return "야옹";
    return "...?";
}

console.log(getSound2("개"));
console.log(getSound2("고양이"));
console.log(getSound2("헤헤"));

//반복문(for 반복문)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

function getGrade(score) {
    if (score === 100) {
        //A+
        return "A+";
    } else if (score >= 90) {
        //A
        return "A";
    } else if (score >= 80) {
        //B
        return "B";
    } else if (score >= 70) {
        //C
        return "C";
    } else if (score >= 60) {
        //D
        return "D";
    } else {
        //F
        return "F";
    }
}
console.log(getGrade(100));
console.log(getGrade(70));

//객체 구조 분해 할당
const user = {
    name: "winter",
    age: 2,
};

function getName({ name }) {
    return name;
}
console.log(getName(user));

function getAge({ age }) {
    return age;
}
console.log(getAge(user));

function getEmail({ email = "이메일이 없습니다." }) {
    return email;
}
console.log(getEmail(user));

//화살표 함수

function helloWorld() {
    console.log("hello");
}
const helloWorld1 = function () {
    console.log("hello1");
};
const helloWorld2 = () => {
    console.log("hello2");
};
helloWorld();
helloWorld1();
helloWorld2();
