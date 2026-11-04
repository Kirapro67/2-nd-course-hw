function startQuiz() {
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let correctCount = 0;

for (let i = 0; i < quiz.length; i++) {
    let questionText = quiz[i].question + '\n' + quiz[i].options.join('\n');
    let userAnswer = Number(prompt(questionText));
    
    if (userAnswer === quiz[i].correctAnswer) {
        correctCount++;
    }
}
alert(`Количество правильных ответов: ${correctCount}`);
}

const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) break;
}

const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

let multiArr = [];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for (let j = 0; j < 3; j++) {
        innerArr.push(1);
    }
    multiArr.push(innerArr);
}
console.log(multiArr);

const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.splice(arr6.indexOf('a'), 1);
console.log(arr6);

const arr7 = [9, 8, 7, 6, 5];
let guess = Number(prompt("Угадайте число"));
if (arr7.includes(guess)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

const str8 = 'abcdef';
console.log(str8.split('').reverse().join(''));

const arr9 = [[1, 2, 3], [4, 5, 6]];
console.log(arr9.flat());

const arr10 = [2, 4, 6, 8, 10];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

function getSquares(arr) {
    return arr.map(num => num ** 2);
}
console.log(getSquares([1, 2, 3]));

function getLengths(arr) {
    return arr.map(str => str.length);
}
console.log(getLengths(["яблоко", "груша", "слива"]));

function getNegatives(arr) {
    return arr.filter(num => num < 0);
}
console.log(getNegatives([1, -2, 3, -4, 5]));

let randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 11));
}
let evenArr = randomArr.filter(num => num % 2 === 0);
console.log(randomArr);
console.log(evenArr);

let arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}
let sum15 = arr15.reduce((total, num) => total + num, 0);
console.log(sum15 / arr15.length);