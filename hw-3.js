for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}
console.log(`Результат деления: ${n}, количество итераций: ${num}`);

let firstFriday = 5;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

let k = 100;
let iterations = 0;

while (k >= 0) {
    k = k - 7;
    iterations++;
}
console.log(`Результат: ${k}, количество итераций: ${iterations}`);

const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1} - ${months[i]}`);
}

const book = {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    year: 1967,
    genre: 'Роман'
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}

let min = randomNumbers[0];

for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < min) {
        min = randomNumbers[i];
    }
}

console.log('Массив:', randomNumbers);
console.log('Минимальное число:', min);