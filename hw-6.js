function startGuessGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess;

    while (userGuess !== randomNumber) {
        userGuess = Number(prompt("Угадай число от 1 до 100"));

        if (userGuess === randomNumber) {
            alert("Вы угадали!");
        } else if (userGuess > randomNumber) {
            alert("Вы не угадали, загаданное число меньше");
        } else {
            alert("Вы не угадали, загаданное число больше");
        }
    }
}

function startMathGame() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const operationType = Math.floor(Math.random() * 4);
    
    let result;
    let question;

    if (operationType === 0) {
        question = `${a} + ${b}`;
        result = a + b;
    } else if (operationType === 1) {
        question = `${a} - ${b}`;
        result = a - b;
    } else if (operationType === 2) {
        question = `${a} * ${b}`;
        result = a * b;
    } else {
        question = `${a * b} / ${b}`; 
        result = a;
    }

    const userAnswer = Number(prompt(`Решите задачу: ${question}`));

    if (userAnswer === result) {
        alert("Правильно! Молодец!");
    } else {
        alert("Ошибка! Правильный ответ: " + result);
    }
}

function startReverseGame() {
    const text = prompt("Введите текст, который нужно перевернуть");
    const reversedText = text.split('').reverse().join('');
    alert(reversedText);
}

console.log('js'.toUpperCase());

function filterStrings(arr, startStr) {
    return arr.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
}
console.log(filterStrings(['Москва', 'Магадан', 'Питер', 'малина'], 'ма')); 

const num = 32.58884;
console.log(Math.floor(num)); 
console.log(Math.ceil(num));  
console.log(Math.round(num)); 

console.log(Math.min(52, 53, 49, 77, 21, 32)); 
console.log(Math.max(52, 53, 49, 77, 21, 32)); 

function printRandomNum() {
    console.log(Math.floor(Math.random() * 10) + 1);
}
printRandomNum();

function getRandomArray(n) {
    const arr = [];
    const length = Math.floor(n / 2);
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));
    }
    return arr;
}
console.log(getRandomArray(10));

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(5, 15));

console.log(new Date());

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    const d = date.getDate();
    const m = months[date.getMonth()];
    const y = date.getFullYear();
    const w = days[date.getDay()];
    
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${d} ${m} ${y} — это ${w}.\nВремя: ${hh}:${mm}:${ss}`;
}
console.log(formatDate(new Date()));