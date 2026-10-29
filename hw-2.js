let password = 'пароль';
let userPassword = prompt('Введите пароль');

if (userPassword === password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
}

let c = 2;

if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

let d = 50;
let e = 150;

if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;

if (monthNumber > 12) {
  console.log('Некорректный номер месяца');
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log('Зима');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Весна');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Лето');
      break;
    case 9:
    case 10:
    case 11:
      console.log('Осень');
      break;
  }
}

let userNumber = prompt('Пожалуйста, введите любое число');
let convertedNumber = Number(userNumber);

if (isNaN(convertedNumber)) {
  alert('Это не число');
} else if (convertedNumber % 2 === 0) {
  alert('Число четное');
} else {
  alert('Число нечетное');
}

let clientOS = 0;

if (clientOS === 0) {
  console.log('Установите версию приложения для iOS по ссылке');
} else {
  console.log('Установите версию приложения для Android по ссылке');
}

let clientOS2 = 0;
let clientDeviceYear = 2015;

if (clientDeviceYear < 2015) {
  if (clientOS2 === 0) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
  } else {
    console.log('Установите облегченную версию приложения для Android по ссылке');
  }
} else {
  if (clientOS2 === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
  } else {
    console.log('Установите версию приложения для Android по ссылке');
  }
}