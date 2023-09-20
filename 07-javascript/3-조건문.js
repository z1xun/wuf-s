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
