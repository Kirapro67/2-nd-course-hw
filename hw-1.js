//Задание 1
{
  let a = 10;
  alert(a);
  a = 20;
  alert(a);
}

//Задание 2
const firstIphoneYear = 2007;
alert(firstIphoneYear);

//Задание 3
const nameEich = "Brendan Eich";
alert(nameEich);

//Задание 4
{
  let a = 10;
  let b = 2;
  alert(a + b);
  alert(a - b);
  alert(a * b);
  alert(a / b);
}

//Задание 5
const result = 2 ** 5;
alert(result);

//Задание 6
{
  const a = 9;
  const b = 2;
  alert(a % b);
}

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
const age = prompt('Сколько вам лет?');
alert(age);

//Задание 9
const user = {
  name: 'Иван',
  age: 25,
  isAdmin: false
};

//Задание 10
const userName = prompt('Введите ваше имя');
alert(`Привет, ${userName}!`);

//Задание 11
const number = +prompt('Загадайте любое число');
alert(number);

const doubled = number * 2;
alert(doubled);

const plusTen = doubled + 10;
alert(plusTen);

const divided = plusTen / 2;
alert(divided);

const minusOriginal = divided - number;
alert(minusOriginal);

alert('Ответ равен 5');