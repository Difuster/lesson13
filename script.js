"use strict";

// Тернарное выражение

const num = 150;

(num == 150) ? console.log('Richtig') : console.log('Unrichtig');

// Классическое выражение

if (num == 150) {
    console.log('Right!');
} else {
    console.log('False!');
}

// Конструкция switch - РАБОТАЕТ ТОЛЬКО НА СТРОГОЕ (===) СООТВЕТСТВИЕ!!!

const num2 = 200;

switch (num2) {
    case 109:
        console.log('Неверно!');
        break;
    case 199:
        console.log('Неверно!');
        break;
    case 200:
        console.log('Правильно!');
        break;
    default: // Дефолтное выражение выводится если не одно из значений не было найдено
        console.log('Не в этот раз!');
        break; // Обязательное условие прерывания кода псоле каждого значения
}