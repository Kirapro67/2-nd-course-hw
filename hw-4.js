function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(getMin(8, 4));
console.log(getMin(6, 6));

function checkEven(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(checkEven(4));
console.log(checkEven(5));

function printSquare(n) {
    console.log(n * n);
}
function getSquare(n) {
    return n * n;
}
printSquare(5);
console.log(getSquare(5));

function correctAge(age) {
    let numAge = Number(age);
    if (numAge < 0) {
        return 'Вы ввели неправильное значение';
    } else if (numAge >= 0 && numAge <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}
alert(correctAge(prompt("Сколько вам лет?")));

function multiplyNumbers(a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    }
    return numA * numB;
}
console.log(multiplyNumbers(2, 3));
console.log(multiplyNumbers('2', 'abc'));

function cubeNumber() {
    let input = prompt("Введите число");
    let n = Number(input);
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
    return `${n} в кубе равняется ${n ** 3}`;
}
console.log(cubeNumber());

const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());